# DAO Workspace Web3

A decentralized DAO workspace built with **Reown AppKit** and **Wagmi** in **TypeScript**. Users can connect wallets, create proposals, manage tasks, and vote directly on-chain.

---

## 🚀 Features
- Wallet authentication via Reown AppKit (Project ID: `180a7164cfa9e5388daf1160841f65a0`)
- Multi-chain support (Ethereum, Polygon, Base) via Wagmi
- Create, view, and vote on proposals
- Task management for DAO projects
- Role-based access control (admin / member)
- Responsive React + TypeScript UI

---

## 📦 Setup & Usage

```bash
git clone https://github.com/arawrdn/dao-workspace-web3.git
cd dao-workspace-web3

npm install
npm install @reown/appkit@^1.1.2 @reown/appkit-adapter-wagmi@^1.1.2 wagmi viem

echo "NEXT_PUBLIC_REOWN_PROJECT_ID=180a7164cfa9e5388daf1160841f65a0" > .env.local
echo "NEXT_PUBLIC_DEFAULT_CHAIN_ID=1" >> .env.local

npm run dev
