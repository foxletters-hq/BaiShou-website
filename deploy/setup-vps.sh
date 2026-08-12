#!/usr/bin/env bash
# 在 VPS 上执行一次：安装 Nginx、站点目录、部署用户与站点配置。
# 用法:
#   sudo bash setup-vps.sh
#   sudo bash setup-vps.sh /path/to/github_actions_deploy.pub
set -euo pipefail

DOMAIN="${DOMAIN:-baishou.foxletters.com}"
# 若用 1Panel 建站，站点目录通常是 /opt/1panel/www/sites/<域名>/index
SITE_ROOT="${SITE_ROOT:-/opt/1panel/www/sites/foxletters.com}"
DIST_DIR="${DIST_DIR:-${SITE_ROOT}/index}"
DEPLOY_USER="${DEPLOY_USER:-deploy}"
NGINX_SITE="${NGINX_SITE:-baishou-website}"
PUBKEY_FILE="${1:-}"

if [[ "${EUID}" -ne 0 ]]; then
  echo "请使用 root 或 sudo 运行。"
  exit 1
fi

export DEBIAN_FRONTEND=noninteractive
apt-get update -y
apt-get install -y rsync

# 1Panel 已托管 OpenResty 时，不要再装/启系统 nginx，只准备目录与部署用户
if ! id -u "${DEPLOY_USER}" >/dev/null 2>&1; then
  adduser --disabled-password --gecos "" "${DEPLOY_USER}"
fi

mkdir -p "${DIST_DIR}"
chown -R "${DEPLOY_USER}:${DEPLOY_USER}" "${DIST_DIR}" || chown -R "${DEPLOY_USER}:${DEPLOY_USER}" "${SITE_ROOT}"
chmod 755 "${DIST_DIR}"

install -d -m 700 -o "${DEPLOY_USER}" -g "${DEPLOY_USER}" "/home/${DEPLOY_USER}/.ssh"
AUTH_KEYS="/home/${DEPLOY_USER}/.ssh/authorized_keys"
touch "${AUTH_KEYS}"
chmod 600 "${AUTH_KEYS}"
chown "${DEPLOY_USER}:${DEPLOY_USER}" "${AUTH_KEYS}"

if [[ -n "${PUBKEY_FILE}" ]]; then
  if [[ ! -f "${PUBKEY_FILE}" ]]; then
    echo "公钥文件不存在: ${PUBKEY_FILE}"
    exit 1
  fi
  PUBKEY="$(tr -d '\r' < "${PUBKEY_FILE}" | head -n 1)"
else
  echo "请粘贴 GitHub Actions 部署公钥（一行），然后按 Enter："
  read -r PUBKEY
fi

if [[ -z "${PUBKEY}" ]]; then
  echo "未提供公钥，跳过 authorized_keys 写入。"
else
  if ! grep -qxF "${PUBKEY}" "${AUTH_KEYS}"; then
    echo "${PUBKEY}" >> "${AUTH_KEYS}"
    echo "已写入 authorized_keys。"
  else
    echo "公钥已存在，跳过。"
  fi
fi

echo
echo "======= 部署用户与目录已就绪（1Panel 模式）======="
echo "站点目录: ${DIST_DIR}"
echo "部署用户: ${DEPLOY_USER}"
echo "域名:     ${DOMAIN}"
echo
echo "请在 1Panel 中确认该网站根目录就是上面的路径。"
echo "GitHub Secrets: VPS_HOST / VPS_USER=${DEPLOY_USER} / VPS_SSH_KEY"
echo "VPS_PATH 可省略，默认即为: ${DIST_DIR}"
echo "推送 main 或手动运行 Actions: Deploy to VPS"
