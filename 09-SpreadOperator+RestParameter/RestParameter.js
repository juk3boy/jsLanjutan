


/** REST PARAMETER */

/** Mempresentasikan argument pada funtion dengan jumlah yang tak terbatas menjadi sebuah Array */

// function myFunc(...myArgs) {
//     // return `a=${a}, b=${b}, myArgs = ${myArgs}`; /** Hasilnya Array */
//     // return myArgs;  /** Hasilnya Array */
//     // return Array.from(arguments); /** Hasilnya Array */
//     return [...arguments];
// }

// console.log(myFunc(1, 2, 3, 4, 5));


// Contoh Lain

// function jumlahkan(...angka) {

/** Ini mengunakan */
// let total = 0;
// for (const a of angka) {
//     total += a;

/** ini menggunakan
 * Higher Order Function : Reduce
 */

// return angka.reduce((a, b) => a + b); /** Hasilnya 15 */

/** Menggunakan Array Disctructering */
// contoh kita ingin membuat daftar kelompok

// }

// console.log(jumlahkan(1, 2, 3, 4, 5));




// const kelompok1 = ['Budiman', 'Ferry', 'Lukman', 'Fredy', 'Justin'];
// // kita akan membuat ke 1 : ketua; ke 2 : wakil; dst adalah anggota
// const [ketua, wakil, ...anggota] = kelompok1;

// console.log(ketua, anggota);



// Object Destructering

// const team = {
//     pm: 'Budiman',
//     frontEnd1: 'Bryant',
//     frontEnd2: 'Lukman',
//     backEnd: 'Beni',
//     ux: 'Hendra',
//     devOps: 'Ridwan'
// }

// const { pm, ...myTeam } = team;

// console.log(myTeam);

/** Contoh jika kita ingin melakukan filer dng distructering */

// filtering

function filterBy(type, ...values) {

    // kita lakukan looping
    return values.filter(v => typeof v === type);

}
// console.log(type nya mau apa, dan sisa nya yaitu nilainya)
// console.log(filterBy('number', 1, 2, 'Yudi Kristianta', false, 10, true, 'Budiman',)); /** Ini akan memunculkan angka */

// console.log(filterBy('string', 1, 2, 'Yudi Kristianta', false, 10, true, 'Budiman',)); /** Ini yang akan tampil yaitu Yudi Kristiantan & Budiman */

console.log(filterBy('boolean', 1, 2, 'Yudi Kristianta', false, 10, true, 'Budiman',)); /** Ini yang akan tampil yaitu false & true */

