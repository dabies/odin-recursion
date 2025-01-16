function threeOrFive(n, total = 0) {
    //base case is anything less than 3
    if (n < 3) {
        //if we hit that point, we return the total
        return total;
    } else {
        //check to see if number is divisible by 3 or 5
        if (n % 3 === 0 || n % 5 === 0) {
            //add to total if it is
            total += n;
        }
        //check the next number
        return threeOrFive(n-1, total);
    }
}