#!/usr/bin/env bash
# 可选：在 VPS 上同步一份静态镜像到 1Panel 目录（对外仍以 GitHub Pages 为准）
# 用法（在仓库根目录）:
#   ./deploy/update-vps-mirror.sh
#   SITE_PATH=/opt/1panel/www/sites/foxletters.com/index ./deploy/update-vps-mirror.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SITE_PATH="${SITE_PATH:-/opt/1panel/www/sites/foxletters.com/index}"

cd "$ROOT"

echo "==> 更新代码"
git pull --ff-only

echo "==> 安装依赖"
npm ci

echo "==> 构建"
npm run build

if [[ ! -d dist ]]; then
  echo "构建失败：没有 dist/ 目录" >&2
  exit 1
fi

if [[ ! -d "$SITE_PATH" ]]; then
  echo "站点目录不存在: $SITE_PATH" >&2
  echo "请先在 1Panel 创建静态网站，或设置 SITE_PATH" >&2
  exit 1
fi

echo "==> 同步到 $SITE_PATH"
rsync -a --delete dist/ "${SITE_PATH}/"

echo "完成。注意：对外推荐使用 GitHub Pages；本脚本仅更新 VPS 本地镜像。"
