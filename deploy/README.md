# Self-hosted Runner（1Panel / VPS）

本仓库部署使用 **VPS 上的 GitHub Actions Runner** 在本地构建并发布，避免海外 Runner 跨境 SSH。

## 流程

1. `git push` 到 `main`
2. GitHub 把任务派给已在线的 self-hosted runner
3. VPS 上执行：`checkout` → `npm ci` → `npm run build` → 同步到站点目录

默认站点目录：`/opt/1panel/www/sites/foxletters.com/index`  
可用 Variable `SITE_PATH` 覆盖。

## Runner 要求

- 标签包含：`self-hosted`、`linux`、`x64`、`baishou-website`
- 进程用户需能写入站点目录（当前为 `deploy`）
- 建议用 systemd 保活（需 root 一次）：

```bash
cd /home/deploy/actions-runner
sudo ./svc.sh install deploy
sudo ./svc.sh start
```

若暂时无 sudo，可用（登出可能中断，仅作临时）：

```bash
cd ~/actions-runner && nohup ./run.sh > runner.out 2>&1 &
```

## 重新注册

```bash
# 在有 GitHub 网络的机器上下载对应版本 tar，scp 到 VPS 后：
cd ~/actions-runner
./config.sh remove --token <registration-token>   # 若仍注册着
# 再解压新包后：
./config.sh --url https://github.com/foxletters-hq/BaiShou-website \
  --token <registration-token> \
  --name baishou-website-vps \
  --labels baishou-website \
  --work _work --unattended --replace
```

Registration token：仓库 Settings → Actions → Runners → New self-hosted runner，或：

```bash
gh api -X POST repos/foxletters-hq/BaiShou-website/actions/runners/registration-token --jq .token
```
