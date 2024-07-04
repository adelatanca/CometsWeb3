## Projects Descriptions

### 1. Key Management Repository

#### generate-keypair.ts
This script generates a new keypair for a Solana wallet. It utilizes the `Keypair` class from the `@solana/web3.js` library and prints the public and secret keys to the console. Useful for creating new wallets securely within the same repository.

#### load-keypair.ts
This script securely loads a Solana keypair from an environment variable. It uses the `dotenv` library to read environment variables from a `.env` file and retrieves the keypair using a helper function. Prints the public key of the loaded keypair, ensuring sensitive information remains secure.

---

### 2. Balance Checking Project

#### check-balances.ts
This script connects to the Solana Devnet and checks the balance of a specified wallet. It also performs an airdrop to the wallet if the balance is below a certain threshold. Ensures wallets have sufficient funds for transactions. Located in the second folder.

---

### 3. Transaction Handling Project

#### transfer.ts
This script handles transferring SOL (Solana's native cryptocurrency) between wallets on the Solana Devnet. Includes functionality to add a memo to transactions. Connects to the Devnet, specifies sender and receiver wallets, creates and confirms transactions, and prints transaction details. Found in the third folder.

---

## 4. Solana Token Minting and Management Project

#### 1. create-token-account.ts
Creates an associated token account for a specified token mint. Retrieves or creates the account and provides an explorer link for verification.

#### 2. create-token-mint.ts
Creates a new token mint with a designated number of decimal places. Prints the mint's address and provides an explorer link for verification.

#### 3. mint-token.ts
Mints a specified amount of a custom token to an associated token account. Prints transaction details including a link to view the transaction on an explorer.

#### 4. send-spl-tokens.ts
Transfers a specified amount of a custom token between two wallets. Initiates the transfer and provides a link to view the transaction on an explorer.

- - - 

### Note
These solutions are being developed with the assistance of [CometsWeb3](https://cometsweb3.space), who provides support and guidance in the development process.
