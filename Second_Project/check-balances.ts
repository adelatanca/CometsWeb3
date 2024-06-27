import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js"
import { airdropIfRequired, getKeypairFromEnvironment } from "@solana-developers/helpers"
import "dotenv/config"
import bs58 from "bs58"

const keypair = getKeypairFromEnvironment("SECRET_KEY")

const conn = new Connection(clusterApiUrl("devnet"))

console.log("Connected to devnet")

const adelaKey = keypair.publicKey.toBase58()

const publicKey = new PublicKey(adelaKey)

const balanceInLamport = await conn.getBalance(publicKey)

const balanceInSol = balanceInLamport / LAMPORTS_PER_SOL

await airdropIfRequired(conn, publicKey, 2 * LAMPORTS_PER_SOL, 0 * 5 * LAMPORTS_PER_SOL)

console.log(`Balance for wallet ${publicKey} is ${balanceInSol} SOL`)

const secretKey = bs58.encode(keypair.secretKey)

console.log('secretKey => ', secretKey)
