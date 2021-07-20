/** LOOPING PADA JAVASCRIPT MODERN */

/**
 * Looping baru
 * For ... of
 * For ... in
 */

/** FOR ... OF */

/**
 * For ... of :
 * Creates a loop iterating over itarable object
 * Sebuah looping yg bisa mengulang atau menelusuri object-object yang iterable
 */

/** Dibawah ini yg dapat dilooping oleh For...of
 * Berikut object-object yang iterable :
 * String
 * Array
 * Arguments / NodeList
 * TypedArray
 * Map
 * Set
 * User-Defined Iterables
 *
 */

// const mhs = ['Yudi', 'Medika', 'Brandon'];

// dibawah ini jika menggunakan looping biasa

// for (let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
// }

// kemudian jika menggunakan forEach

// mhs.forEach(m => console.log(m));

// berikut jika menggunakan For....of

// for (const m of mhs) {
//     console.log(m);
// }

/** Melooping String */

// const nama = 'Yudi Kristianta';

// for (n of nama) {
//     console.log(n);
// }

// diatas looping dng hasil huruf akan tersusun kebwh.

// jika ada index spt cth dibawah

// const mhs = ['Yudi', 'Medika', 'Brandon'];

// ini menggunakan forEach()
// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke ${i + 1}`);
// });

// ini menggunakan For ... of

// for (const [i, m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke ${i + 1}`);
// }


/** NodeList */

/** ini dilakukan pada saat kita melakukan query pada DOM */

// const liNama = document.querySelectorAll('.nama');

// liNama.forEach(n => console.log(n.innerHTML));
// liNama.forEach(n => console.log(n.textContent));

// dibawah ini menggunakan For ... of

// for (n of liNama) {
//     console.log(n.innerHTML);
// }


/** Arguments */

// function jumlahkanAngka() {
//     // return arguments.reduce((a, i) => a + i);  // kalau argument menggunakan reduce tdk bisa

//     let jumlah = 0;
//     // arguments.forEach(a => jumlah += a);  // forEach juga tidak bisa untuk digunakan pd arguments

//     for (a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;

//     // ini baru akan mengeluarkan hasil yaitu 15

//     console.log(jumlahkanAngka(1, 2, 3, 4, 5));


/** ######################################################### */

/** For .. in */

const mhs = {
    nama: 'YUDI KRISTIANTA',
    umur: 38,
    email: 'yudi_se@gmail.com'
}

// jika looping menggunakan for of maka dia tidak mau
// for (a of mhs) {
//     console.log(a);  // akan error : script.js:118 Uncaught TypeError: mhs is not iterable
// }

// namun jika menggunakan for ... in
// ini jika akan mengambil property nya
// for (m in mhs) {
//     console.log(m);
// }

// ingin mengambil value nya spt dibawah

for (m in mhs) {
    console.log(mhs[m]);
}