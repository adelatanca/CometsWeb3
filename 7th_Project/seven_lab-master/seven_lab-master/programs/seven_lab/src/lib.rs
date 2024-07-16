use anchor_lang::prelude::*;

declare_id!("8neXcWC6fFjMro2Y8iPrJ6dRYtUijXniTVVNGXDfZeSA");

#[program]
pub mod seven_lab {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
