


/** REST PARAMETER */

/** Mempresentasikan argument pada funtion dengan jumlah yang tak terbatas menjadi sebuah Array */

function myFunc(...myArgs) {
    // return `a=${a}, b=${b}, myArgs = ${myArgs}`; /** Hasilnya Array */
    // return myArgs;  /** Hasilnya Array */
    // return Array.from(arguments); /** Hasilnya Array */
    return [...arguments];
}

console.log(myFunc(1, 2, 3, 4, 5));
