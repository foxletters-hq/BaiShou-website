# 可选：VPS 静态镜像

对外发布以 **GitHub Pages** 为准（见仓库根目录 README「部署」）。

若要在 1Panel 上留一份相同静态文件，于仓库根目录执行：

```bash
./deploy/update-vps-mirror.sh
```

默认发布到 `/opt/1panel/www/sites/foxletters.com/index`，可用 `SITE_PATH=...` 覆盖。
