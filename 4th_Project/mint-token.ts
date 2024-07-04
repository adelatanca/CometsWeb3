import "dotenv/config"
import { Connection, PublicKey } from "@solana/web3.js"
import { getKeypairFromEnvironment, getExplorerLink } from "@solana-developers/helpers"
import { getOrCreateAssociatedTokenAccount, mintTo } from '@solana/spl-token'

const sender = getKeypairFromEnvironment("SECRET_KEY")
const conn = new Connection("https://api.devnet.solana.com", "confirmed")

console.log("Public key is -> ", sender.publicKey.toBase58())

const TOKEN_MINT_ADDRESS = 'FWY61s84g3qjYAoDy1E9ttxQDF8vtqeAeBWDUgzYSwLN' 

const tokenMintAccount = new PublicKey(TOKEN_MINT_ADDRESS)
const MINOR_UNITS_PER_MAJOR_UNITS = Math.pow(10, 9)

const tokenAccount = await getOrCreateAssociatedTokenAccount(
    conn,
    sender,
    tokenMintAccount,
    sender.publicKey
)

console.log("Created Token Account: ", tokenAccount.address.toBase58())

const mintTxSig = await mintTo(
    conn,
    sender,
    tokenMintAccount,
    tokenAccount.address,
    sender,
    100 * MINOR_UNITS_PER_MAJOR_UNITS
)

const link = getExplorerLink("transaction", mintTxSig, "devnet")

console.log("Success! Mint token transaction -> ", link)