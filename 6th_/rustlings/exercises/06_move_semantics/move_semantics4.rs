fn main() {
    // You can optionally experiment here.

    let mut x = Vec::new();
    
    // Borrow `x` mutably with `y`
    let y = &mut x;
    y.push(42);  // Modify `x` through `y`
    
    // Borrow `x` mutably with `z` after `y` is done
    let z = &mut x;
    z.push(13);  // Modify `x` through `z`
    
    // Print the contents of `x` to verify
    println!("Contents of x: {:?}", x);
}

#[cfg(test)]
mod tests {
    // TODO: Fix the compiler errors only by reordering the lines in the test.
    // Don't add, change or remove any line.
    #[test]
    fn move_semantics4() {
        let mut x = Vec::new();
        let y = &mut x;
        y.push(42); 
        let z = &mut x;
        z.push(13);
        assert_eq!(x, [42, 13]);
    }
}
