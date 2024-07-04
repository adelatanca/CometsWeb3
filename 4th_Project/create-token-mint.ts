import "dotenv/config"
import { Connection } from "@solana/web3.js"
import { getKeypairFromEnvironment, getExplorerLink } from "@solana-developers/helpers"
import { createMint } from '@solana/spl-token'

const sender = getKeypairFromEnvironment("SECRET_KEY")
const conn = new Connection("https://api.devnet.solana.com", "confirmed")

console.log("Public key is -> ", sender.publicKey.toBase58())

const tokenMint = await createMint(
    conn,
    sender,
    sender.publicKey,
    null
    , 9
)

console.log(`Token Mint: ${tokenMint}`)

const link = getExplorerLink("address", tokenMint.toString(), "devnet")

console.log(`Token Mint link: ${link}`)

//  FWY61s84g3qjYAoDy1E9ttxQDF8vtqeAeBWDUgzYSwLN - token mint address 