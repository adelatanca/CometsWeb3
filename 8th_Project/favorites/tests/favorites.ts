import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Favorites } from "../target/types/favorites";
import { assert } from "chai";

const web3 = anchor.web3;

describe("favorites", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env()
  anchor.setProvider(provider);
  const user = (provider.wallet as anchor.Wallet).payer

  const program = anchor.workspace.Favorites as Program<Favorites>;

  before(async () => {
    const balance = await provider.connection.getBalance(user.publicKey)
    const balanceInSOL = balance / web3.LAMPORTS_PER_SOL;
    const formattedBalance = new Intl.NumberFormat().format(balanceInSOL);

    console.log(`Balance: ${formattedBalance} SOL`)
  })

  it("Saves as user's favorites to the blockchain", async () => {
    const favoriteNumber = new anchor.BN(23);
    const favoriteColor = "purple";
    const favoriteHobbies = ["skiing", "skydiving", "biking"]

    await program.methods.setFavorites(favoriteNumber, favoriteColor, favoriteHobbies).signers([user]).rpc()

    const favoritesPdaAndBump = web3.PublicKey.findProgramAddressSync(
      [Buffer.from("favorites"), user.publicKey.toBuffer()],
      program.programId
    )

    const favoritesPda = favoritesPdaAndBump[0];

    const dataFromPda = await program.account.favorites.fetch(favoritesPda)

    console.log('dataFromPda => ', JSON.stringify(dataFromPda))

    assert.equal(dataFromPda.color, favoriteColor)
    assert.equal(dataFromPda.number.toString(), favoriteNumber.toString())
    assert.deepEqual(dataFromPda.hobbies, favoriteHobbies)

  })

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });


  it("Doesn't let people write to favorites for other users", async () => {
    const someRandomGuy = anchor.web3.Keypair.generate();
    try {
      await program.methods
        .setFavorites(new anchor.BN(420), "red", ["being a dork"])
        .signers([someRandomGuy])
        .rpc();
    } catch (error) {
      const errorMessage = (error as Error).message;
      assert.isTrue(errorMessage.includes("unknown signer"));
    }
  });
});
