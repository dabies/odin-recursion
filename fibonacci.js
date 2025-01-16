function innerFib(i) {
    if (i < 2) {
     return i;
     } else {
     return (innerFib(i-1) + innerFib(i-2));
     }
}

function fibs(n) {
    let array = [];
    for (i = 0; i < n; i++) {
         array.push(innerFib(i));
    }
    return array;
}

function fibsRecursive(n, array = [0, 1]) {
    console.log('Recursive?')
    if (n <= 2) {
        return array;
    } else {
        let current = array.length;
        const sum = array[current-1] + array[current-2];
        array.push(sum);
        return fibsRecursive(n-1, array);
    }
    
}