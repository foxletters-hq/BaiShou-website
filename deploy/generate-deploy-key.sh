#!/usr/bin/env bash
# 在本机生成 GitHub Actions → VPS 部署用的专用 SSH 密钥（勿提交私钥）
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
KEY_DIR="${ROOT}/keys"
KEY_PATH="${KEY_DIR}/github_actions_deploy"

mkdir -p "${KEY_DIR}"
chmod 700 "${KEY_DIR}"

if [[ -f "${KEY_PATH}" ]]; then
  echo "已存在密钥: ${KEY_PATH}"
  echo "如需重新生成，先手动删除该文件及其 .pub。"
  exit 1
fi

ssh-keygen -t ed25519 -C "github-actions-baishou-website-deploy" -f "${KEY_PATH}" -N ""

echo
echo "======= 完成 ======="
echo "1) 将私钥全文粘贴到 GitHub Secret: VPS_SSH_KEY"
echo "   文件: ${KEY_PATH}"
echo
echo "2) 将公钥放到 VPS 部署用户的 ~/.ssh/authorized_keys"
echo "   文件: ${KEY_PATH}.pub"
echo
echo "公钥内容："
cat "${KEY_PATH}.pub"
echo
echo "私钥请勿提交到 Git；deploy/keys/ 已在 .gitignore 中忽略。"
