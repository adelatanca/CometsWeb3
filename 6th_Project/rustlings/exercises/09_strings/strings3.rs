fn trim_me(input: &str) -> &str {
    // TODO: Remove whitespace from both ends of a string.
    input.trim()
}

fn compose_me(input: &str) -> String {
    // TODO: Add " world!" to the string! There are multiple ways to do this.
    input.to_string() + " world!"
}

fn replace_me(input: &str) -> String {
    // TODO: Replace "cars" in the string with "balloons".
    input.replace("cars", "balloons")
}

fn main() {
    // You can optionally experiment here.

    // Testing trim_me function
    let trimmed1 = trim_me("Hello!     ");
    let trimmed2 = trim_me("  What's up!");
    let trimmed3 = trim_me("   Hola!  ");
    println!("Trimmed results:");
    println!("'Hello!     ' -> '{}'", trimmed1);
    println!("'  What's up!' -> '{}'", trimmed2);
    println!("'   Hola!  ' -> '{}'", trimmed3);

    // Testing compose_me function
    let composed1 = compose_me("Hello");
    let composed2 = compose_me("Goodbye");
    println!("Composed results:");
    println!("'Hello' -> '{}'", composed1);
    println!("'Goodbye' -> '{}'", composed2);

    // Testing replace_me function
    let replaced1 = replace_me("I think cars are cool");
    let replaced2 = replace_me("I love to look at cars");
    println!("Replaced results:");
    println!("'I think cars are cool' -> '{}'", replaced1);
    println!("'I love to look at cars' -> '{}'", replaced2);
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn trim_a_string() {
        assert_eq!(trim_me("Hello!     "), "Hello!");
        assert_eq!(trim_me("  What's up!"), "What's up!");
        assert_eq!(trim_me("   Hola!  "), "Hola!");
    }

    #[test]
    fn compose_a_string() {
        assert_eq!(compose_me("Hello"), "Hello world!");
        assert_eq!(compose_me("Goodbye"), "Goodbye world!");
    }

    #[test]
    fn replace_a_string() {
        assert_eq!(
            replace_me("I think cars are cool"),
            "I think balloons are cool",
        );
        assert_eq!(
            replace_me("I love to look at cars"),
            "I love to look at balloons",
        );
    }
}
