# VPS 部署说明（1Panel + OpenResty）

官网为 Astro 静态站。推送到 `main` 后，GitHub Actions 构建 `dist/`，再用 **SSH 密钥 + rsync** 同步到 1Panel 网站目录。不使用密码 / FTP。

**1Panel 站点目录（当前约定）：**  
`/opt/1panel/www/sites/foxletters.com/index`

VPS 上**不需要** git 仓库；Web 服务由 1Panel 的 OpenResty 提供，不要再启用系统 nginx。

## 一次性准备

### 1. 本机密钥（若已生成可跳过）

```bash
./deploy/generate-deploy-key.sh
```

- 私钥 → GitHub Secret `VPS_SSH_KEY`
- 公钥 → VPS 用户 `deploy` 的 `authorized_keys`

### 2. VPS：部署用户与目录写权限

1Panel 里已建好网站后，在服务器执行（公钥路径按实际修改）：

```bash
# 创建 deploy 用户并把公钥写上（也可用仓库里的 setup-vps.sh）
sudo bash setup-vps.sh /path/to/github_actions_deploy.pub

# 确保 CI 能写入 1Panel 目录
sudo chown -R deploy:deploy /opt/1panel/www/sites/foxletters.com/index
```

若 1Panel 对目录所有者有要求，也可把 `deploy` 加进对应组，或改用有写权限的用户作为 `VPS_USER`。

### 3. GitHub Secrets

| 名称 | 必填 | 说明 |
|------|------|------|
| `VPS_SSH_KEY` | 是 | 部署私钥全文 |
| `VPS_HOST` | 是 | VPS IP |
| `VPS_USER` | 是 | 通常 `deploy` |
| `VPS_PORT` | 否 | 默认 `22` |
| `VPS_PATH` | 否 | 默认已是 `/opt/1panel/www/sites/foxletters.com/index` |

然后推 `main`，或手动跑 **Deploy to VPS**。

## HTTPS / 域名

在 **1Panel → 网站** 里绑定域名并申请证书即可，不必手写 OpenResty 配置。
