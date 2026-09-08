# VPS 主站同步

对外主站是 **foxletters.com**。canonical、sitemap、`robots.txt` 都以该域名为准。GitHub Pages（`baishou.foxletters.com`）只作镜像。

在仓库根目录执行下面的脚本，把构建结果同步到 1Panel：

```bash
./deploy/update-vps-mirror.sh
```

默认发布到 `/opt/1panel/www/sites/foxletters.com/index`，可用 `SITE_PATH=...` 覆盖。
