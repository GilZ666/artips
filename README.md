# Artip$$$

A modern web application for exploring and tipping coin creators on the Base network. This application provides a user-friendly interface to view coin information, connect wallets, and send tips to coin creators.

## Features

- 🔍 View detailed information about valuable coins on Base network
- 👛 Wallet integration with Coinbase Wallet
- 💰 Send tips to coin creators
- 🌓 Dark/Light mode support
- 📱 Responsive design
- 🔐 Secure wallet connection and transaction handling
- 🏦 Enhanced security with Coinbase Wallet Sub Accounts for managing tipping transactions

## Technical Stack

- Next.js
- React
- TypeScript
- Wagmi 
- Viem 
- Zora Coins SDK

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A Base network compatible wallet (Coinbase Wallet recommended)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/GilZ666/artips
cd artips
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Connect your wallet using the "Connect Wallet" button
2. Browse through the list of valuable coins
3. View detailed information about each coin including:
   - Market Cap
   - 24h Volume
   - Total Supply
   - Total Volume
   - Creator Address
   - Creation Date
4. Send tips to coin creators using the "Tip Creator" feature

## Features in Detail

### Wallet Integration
- Secure wallet connection using Coinbase Wallet
- Support for Coinbase Wallet Sub Accounts, enabling secure management of tipping transactions
- Enhanced security through smart contract wallet capabilities
- Display of wallet address and chain ID
- Message signing capability
- Transaction handling for tips

### Coin Information Display
- Grid layout of coin cards
- Detailed statistics for each coin
- Expandable descriptions
- Creator information
- Transaction history

### Dark/Light Mode
- Toggle between dark and light themes
- Persistent theme preference
- Optimized UI for both modes

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the Creative Commons Zero (CC0) License. This means you can freely use, modify, distribute, and perform the work, even for commercial purposes, all without asking permission. See the LICENSE file for details.

## Acknowledgments

- Base Network
- Zora Protocol
- Coinbase Wallet
- Wagmi Team
