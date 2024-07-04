import "dotenv/config"
import { Connection, PublicKey } from "@solana/web3.js"
import { getKeypairFromEnvironment, getExplorerLink } from "@solana-developers/helpers"
import { getOrCreateAssociatedTokenAccount } from '@solana/spl-token'

const sender = getKeypairFromEnvironment("SECRET_KEY")
const conn = new Connection("https://api.devnet.solana.com", "confirmed")

console.log("Public key is -> ", sender.publicKey.toBase58())

// const RECIPIENT_ADDRESS = 'AMhdHJ83EQnFRp3DXKr9NCJxZCUjjoqpHf63XnuYT81G'
const TOKEN_MINT_ADDRESS = 'FWY61s84g3qjYAoDy1E9ttxQDF8vtqeAeBWDUgzYSwLN' 

// const recipient = new PublicKey(RECIPIENT_ADDRESS)
const tokenMintAccount = new PublicKey(TOKEN_MINT_ADDRESS)

const tokenAccount = await getOrCreateAssociatedTokenAccount(
    conn,
    sender,
    tokenMintAccount,
    sender.publicKey
)

const link = getExplorerLink("address", tokenMintAccount.toString(), "devnet")

console.log("Token Account: ", tokenAccount.address.toBase58())

console.log(`Token Account link: ${link}`)
