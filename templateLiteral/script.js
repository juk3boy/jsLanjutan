// Template literar disebut juga Template String

// - Menggunakan `` back tick
// - Multi-line String
// - Embedded Expression
// - Expression Interpolation
// - Taged Template

// Multi-line String
// console.log('string 1\nstring 2');   /** Ini jika menggunakan kutip 1 */
// jika menggunakan back tcik `` maka tidak perlu ada \n lagi
// console.log(`String 1
// String 2`);

// const nama = 'YUDI KRISTIANTA';
// const umur = 38;

// console.log(`Halo, nama saya ${nama}, saya berumur ${umur} tahun`);


// Embedded Expression

// console.log(`${2 + 2}`);
// console.log(`${alert('Halo Semua')}`);

// const x = 10;

// console.log(`${(x % 2) ? 'Genap' : 'Ganjil'}`);


// HTML FRAGMENT

// const mhs = {
//     nama: 'YUDI KRISTIANTA',
//     umur: 38,
//     nrp: '32242323',
//     email: 'yudi_seti@yahoo.com'
// };

// const el = `<div class="mhs">
//                 <h2>${mhs.nama}</h2>
//                 <span class="msh">${mhs.nrp}</span>


//     </div>`;

// console.log(el);


//##############################################################

// LATIHAN

//##############################################################

// Looping

// const mhs = [
//     {
//         nama: 'Yudi Kristianta',
//         email: 'yudi_seti@yahoo.com'
//     },
//     {
//         nama: 'Budiman',
//         email: 'budiman@yahoo.com'
//     },
//     {
//         nama: 'Rudy',
//         email: 'rudy@yahoo.com'
//     },
// ];

// // kita looping menggunakan .map
// const el = `<div class="mhs">

//         ${mhs.map(m => `<ul> 
//             <li>${m.nama} </li>
//             <li>${m.email} </li>
//         </ul>`).join('')}
// </div>`

// .join('') ini digunakan untuk menghilangkan koma dari array


// 3. Conditionals
// bisa menggunakan ternary

// kita bisa beri conditinals

// const lagu = {
//     judul: 'Maju',
//     penyanyi: 'Makmur',
//     // feat: 'bumi jalan'  /** bisa ada bisa enggak */
// }

// const el = `<div class="lagu">
// <li>${lagu.penyanyi}</li>

// <li>${lagu.judul} ${lagu.feat ? `(feat.${lagu.feat})` : ''}</li>
// </div>`


/** NESTED
 * HTML Fragments Bersarang
 *
 */

// const mhs = {
//     nama: 'Yudi',
//     semesater: 5,
//     mataKuliah: ['Rekayasa Web',
//         'Analisis dan Perancangan Sistem Informasi',
//         'Pemprograman Sistem Interaktif',
//         'Perancangan Sistem Berorentasi Object']
// };

// function cetakMataKuliah(mataKuliah) {
//     return `
//     <ol>
//       ${mataKuliah.map(mk => `<li> ${mk}</li>`).join('')}
//     </ol >
//         `;
// }

// const el = `<div div class= "mhs" >
// <h2>${mhs.nama}</h2>
// <span>Semester : ${mhs.semesater}</span>
// <h4>Mata Kuliah :</h4>
// ${cetakMataKuliah(mhs.mataKuliah)}
// </div>`;
// document.body.innerHTML = el;


/** Akhir dari Nested */


/** Tagged Templates
 *
 * Definisi dari MDN web docs
 * Bentuk yang lebih kompleks dari Template Literals,
 * memungkinkan kita untuk membaca templates literals melalu sebuah function
 *
 */

// Tagged Templates

// const nama = 'Yudi Kristianta';
// const umur = 38;

// function coba(strings, ...values) {
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // });

//     // return result;

//     // diatas ini akan mencetak -> Halo nama saya Yudi Kristianta, saya berumur 38 tahun.

//     /** dan juga bisa menggunakan cara dibawah ini */

//     // return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba`Halo nama saya ${nama}, saya berumur ${umur} tahun.`;
// console.log(str);


// Jika ada Highlight di nama dan umur nya

// const nama = 'Yudi Kristianta';
// const umur = 38;
// const email = 'yudi@yahoo.com';

// function highlight(strings, ...values) {

//     return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
// }

// const str = highlight`Halo nama saya ${nama}, saya berumur ${umur} tahun, dan email saya ${email}`;

// // console.log(str);

// document.body.innerHTML = str;


/**
 * Contoh lain dari Tagged Templates
 */

/** Escaping / Sanitize HTML Tags */
// function sanitize(strings, ...values) {
//     return DOMPurify.sanitize(aboutMe);
// }

// const name = 'petyr bealish';
// const aboutMe = `I Love to do evil <img src="http://unplash.it/100/100?random" onload="alert('I Hacked You . haha');" />`;

// const html = sanitize`
//     <h3> ${name}</h3>
//     <p>${aboutMe}</p>
//     `;
