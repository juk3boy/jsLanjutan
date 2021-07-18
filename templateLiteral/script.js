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

const lagu = {
    judul: 'Maju',
    penyanyi: 'Makmur',
    // feat: 'bumi jalan'  /** bisa ada bisa enggak */
}

const el = `<div class="lagu">
<li>${lagu.penyanyi}</li>

<li>${lagu.judul} ${lagu.feat ? `(feat.${lagu.feat})` : ''}</li>
</div>`
document.body.innerHTML = el;

