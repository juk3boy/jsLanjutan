// DESTRUCTURING VARIABLE / DESCTRUCTURING ASSIGNMENT

/**
 * Bdskan MDN WEB
 * Expression pada javascript yang membuat kita dapat 'membongkar' nilai dari array atau object property dari object ke dalam variable yang terpisah.
 *
 */


// Distructuring Array

// const perkenalan = ['Halo', 'nama', 'saya', 'Yudi'];

// const [salam, satu, dua, nama] = perkenalan;

// selain diatas kita juga dapat membuat sperti dibawah ini
// dng model skipping items

// const [salam, , , nama] = perkenalan;
// console.log(salam);


/** Swap Items */

// let a = 1;
// let b = 2;

// console.log(a);
// console.log(b);

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

/** Rest Parameter  ( ... )*/

// const [a, b] = [1, 2];

// console.log(a);  // ini akan muncul 1
// console.log(b);   // ini akan muncul 2

// gimana kalau array nya banyak makan akan repot jika menggunakan ini

// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);


/** Distructuring Object */

// const mhs = {
//     nama: 'YUDI KRISTIANTA',
//     umur: 38,
// }

// const { nama, umur } = mhs;

// console.log(umur);

/** Assignment tanpa deklarasi object */
// awalnya spt diatas
// ({ nama, umur } = {
//     nama: 'YUDI KRISTIANTA',
//     umur: 38,
// });


/** Assign ke variable baru */

// const mhs = {
//     nama: 'YUDI KRISTIANTA',
//     umur: 38,
// }

// const { nama: n, umur: u } = mhs;

// console.log(u);


/** Memberikan default value */

// const mhs = {
//     nama: 'YUDI KRISTIANTA',
//     umur: 38,
//     email: 'yudi@yahooo.com',
// }

// const { nama, umur, email = 'janaudi@gmail.com' } = mhs;

// console.log(email);

// jika di atas tidak ada email maka akan mengambil default value


/** Kita bisa memberi nilai default  + assign ke variabel baru */

// const mhs = {
//     nama: 'YUDI KRISTIANTA',
//     umur: 38,
//     email: 'yudi@gmail.com'
// }

// const { nama: a, umur: d, email: e = 'supri@yahoo.com' } = mhs;

// console.log(e);

/** Rest Parameter */

// const mhs = {
//     nama: 'YUDI KRISTIANTA',
//     umur: 38,
//     email: 'yudi@yahooo.com',
// }

// const { nama, ...values } = mhs;

// console.log(values);

// /** Jika kita akan mengambil field pada object, dan setelah itu dikirim sebagai parameter untuk function */

// const mhs = {
//     id: 12312,
//     nama: 'YUDI KRISTIANTA',
//     umur: 38,
//     email: 'yudi@yahooo.com',
// }

// function getIdMhs({ id }) {
//     return id;
// }
// console.log(getIdMhs(mhs));

