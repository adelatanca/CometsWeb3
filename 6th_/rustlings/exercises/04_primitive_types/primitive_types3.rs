fn main() {
    // TODO: Create an array called `a` with at least 100 elements in it.
     let a = [1,2,3,4,5,5,6,7,8,54,54,45,57,7,8,65,44,343,43,2,352,35435,43,5435,345,345,345,345,346,34,534,6,346,34,3,3,3,3,3,3,5,5,6,6,1,2,3,4,5,5,6,7,8,54,54,45,57,7,8,65,44,343,43,2,352,35435,43,5435,345,345,345,345,3,1,2,3,4,5,5,6,7,8,54,54,45,57,7,8,65,44,343,43,2,352,35435,43,5435,345,345,345,345,3];

    if a.len() >= 100 {
        println!("Wow, that's a big array!");
    } else {
        println!("Meh, I eat arrays like that for breakfast.");
        panic!("Array not big enough, more elements needed");
    }
}
