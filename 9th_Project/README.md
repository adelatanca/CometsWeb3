## Escrow Program
### Overview
The Escrow Program is built on the Solana blockchain using the Anchor framework. This program allows users to make offers involving token exchanges. Users can offer a specific amount of token A and specify the amount of token B they want in return. The program handles the secure transfer and storage of tokens within the offer process.

**Modules**
---- 
> constants: Contains constant values used throughout the program.
---- 
> error: Defines custom error types for the program.
---- 
> instructions: Contains the instruction handlers for various actions.
---- 
> state: Defines the state structures used in the program.
---- 
> MakeOffer: This is the primary instruction for creating an offer. It involves transferring the offered tokens to a vault and saving the offer details.

### Tests for this module [here](https://github.com/solana-developers/program-examples/blob/main/tokens/escrow/anchor/tests/escrow.ts).