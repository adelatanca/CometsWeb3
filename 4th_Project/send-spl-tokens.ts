import "dotenv/config"
import { Connection, PublicKey } from "@solana/web3.js"
import { getKeypairFromEnvironment, getExplorerLink } from "@solana-developers/helpers"
import { getOrCreateAssociatedTokenAccount, transfer } from '@solana/spl-token'

const sender = getKeypairFromEnvironment("SECRET_KEY")
const conn = new Connection("https://api.devnet.solana.com", "confirmed")

console.log("Public key is -> ", sender.publicKey.toBase58())

const RECIPIENT_ADDRESS = 'GaveML91dZYdmMSDVU1F2cYeDVSynnUJm9k4PSxxqfmi'
const TOKEN_MINT_ADDRESS = 'FWY61s84g3qjYAoDy1E9ttxQDF8vtqeAeBWDUgzYSwLN'

const recipient = new PublicKey(RECIPIENT_ADDRESS)
const tokenMintAccount = new PublicKey(TOKEN_MINT_ADDRESS)
const MINOR_UNITS_PER_MAJOR_UNITS = Math.pow(10, 9)

const tokenAccount = await getOrCreateAssociatedTokenAccount(
    conn,
    sender,
    tokenMintAccount,
    sender.publicKey
)

console.log("Created Token Account: ", tokenAccount.address.toBase58())

const recipientTokenAccount = await getOrCreateAssociatedTokenAccount(
    conn,
    sender,
    tokenMintAccount,
    recipient
)

const txSig = await transfer(
    conn,
    sender,
    tokenAccount.address,
    recipientTokenAccount.address,
    sender,
    10 * MINOR_UNITS_PER_MAJOR_UNITS
)

const link = getExplorerLink("transaction", txSig, "devnet")

console.log("Success, tokens sent! Transaction link -> ", link)

console.log('recipientTokenAccount -> ', recipientTokenAccount)