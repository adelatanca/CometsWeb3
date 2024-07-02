import "dotenv/config"
import { Connection, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction, clusterApiUrl, sendAndConfirmTransaction } from "@solana/web3.js"
import { getKeypairFromEnvironment } from "@solana-developers/helpers"
import { createMemoInstruction } from '@solana/spl-memo'

const sender = getKeypairFromEnvironment("SECRET_KEY")

console.log("Sender is -> ", sender.publicKey.toBase58())

const conn = new Connection(clusterApiUrl("devnet"), "confirmed")

const receiver = new PublicKey("AMhdHJ83EQnFRp3DXKr9NCJxZCUjjoqpHf63XnuYT81G")

console.log("Receiver is -> ", receiver.toBase58())

const balance = await conn.getBalance(receiver)

console.log("Adela's balance ", balance / LAMPORTS_PER_SOL, " SOL")

const transaction = new Transaction()

const transferInstruction = SystemProgram.transfer({
    fromPubkey: sender.publicKey,
    toPubkey: receiver,
    lamports: 0.1 * LAMPORTS_PER_SOL
})

transaction.add(transferInstruction)

const memo = "Multumesc pentru SOL!"

const memoInstruction = createMemoInstruction(memo)

transaction.add(memoInstruction)

const signature = await sendAndConfirmTransaction(conn, transaction, [sender])

console.log("Transaction confirmed. Signature ", signature)

const balanceAfterTransaciton = await conn.getBalance(receiver)

setTimeout(() => {
    console.log("Adela's balance after transaction -> ", balanceAfterTransaciton / LAMPORTS_PER_SOL, " in SOL")
}, 5000)

