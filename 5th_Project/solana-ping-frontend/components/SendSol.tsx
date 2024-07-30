import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { FC, useState } from 'react'
import * as web3 from '@solana/web3.js'
import styles from '../styles/Home.module.css'

export const SendSol: FC = () => {
    const [txSig, setTxSig] = useState('')
    const { connection } = useConnection()
    const { publicKey, sendTransaction } = useWallet()
    const link = () => {
        return txSig ? `https://explorer.solana.com/tx/${txSig}?cluster=devnet` : ''
    }

    const sendSol = event => {
        event.preventDefault()
        if (!connection || !publicKey) { return }

        const transaction = new web3.Transaction()
        const recipientPubKey = new web3.PublicKey(event.target.recipient.value)

        const sendSolInstruction = web3.SystemProgram.transfer({
            fromPubkey: publicKey,
            toPubkey: recipientPubKey,
            lamports: web3.LAMPORTS_PER_SOL * event.target.amount.value
        })

        transaction.add(sendSolInstruction)
        sendTransaction(transaction, connection).then(sig => {
            setTxSig(sig)
        })
    }

    return (
        <div>
            {
                publicKey ?

                    <form onSubmit={sendSol} className={styles.form}>
                        <label htmlFor="amount">Amount (in SOL) to send:</label>
                        <input id='amount' type='text' required placeholder='e.g. 1' />
                        <label htmlFor="recipient">Send SOL to:</label>
                        <input id='recipient' type='text' placeholder='e.g. Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod' required />

                        <button type="submit" className={styles.formButton}>Send</button>
                    </form> :
                    <span>Connect Your Wallet</span>

            }
            {
                txSig ?
                    <div>
                        <p>View your transaction on:<a href={link()}> Solana Explorer</a> </p>
                    </div> :
                    null
            }
        </div>
    )
}

// transaction -> https://explorer.solana.com/tx/2kDSRJqb6g4mRpV4ZB6aj6nFWzzrqR2pmRdugq6xuoJqAjg5PWGWKS8va1KZvvTe36c7q7heKdzrFX6ZJWgeJx1r?cluster=devnet