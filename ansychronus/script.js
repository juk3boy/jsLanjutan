/** Spread Operator Vs Rest Parameter */

/** spread operator di representasikan oleh . . . (titik 3 x) */

//Spread Operator
/**memecah itarebles menjadi single element */

// const mhs = ['Budiman', 'Supriadi', 'Rudy'];
// const dosen = ['Edy', 'Herry', 'Maman'];

// console.log(mhs);

//console.log(...mhs);   /** Ini yg awalnya Array akan di ubah menjadi Strings */

// Spread Operator Juga Dapat Digunakan untuk mengabungan 2 Array

//console.log(...mhs, ...dosen);  /** ini hasil nya ke 2 array tsb digabungkan */

//console.log(...mhs[1]);  /** ini hasilnya array no. 1 (Supriadi) namanya akan dipisah2 hufuf nya */

/** Bisa untuk mengcopy Array */

// const mhs = ['Budiman', 'Supriadi', 'Rudy'];

// const mhs1 = mhs;  /** ini artinya membuat referensinya */
// jika kita ingin menambahkan / mengganti msh1 (copy an nya dengan nama lain maka yg msh jg akan ikut berubah)
// const mhs1 = [...mhs];   /** kalau ini benar2 copy annya */
// mhs1[1] = 'Sujatmiko';
// console.log(mhs1);


// kita akan mengubah li di html menjadi Array
// const liMhs = document.querySelectorAll('li');


/** Cara ke I */
// const mhs = [];
// for (i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// }

// console.log(mhs);

/** Cara menggunakan Spread Operator untuk mengubah menjadi Array */

// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);


/** Membuat text menjadi terpisah menjadi masing-masing huruf dan efek membesar jika kursor diarahkan */

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join(''); //.map fungsinya utk melooping <span>

nama.innerHTML = huruf;

// console.log(huruf);




/** CALLBACKS */

/** Function yang dikirimkan sebagai parameter pada function yang lain */

//Callback - Synchronous
// function halo(nama) {
//     alert(`Halo, Nama saya ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukan nama anda');
//     callback(nama);
// }

// tampilkanPesan(nama => alert(`Hallo, nama saya ${nama}`));


// const mhs = [
//     {
//         "nama": "Yudi Kristianta",
//         "nrp": "2342334243",
//         "email": "yudi@gmail.com",
//         "jurusan": "Teknik",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "Budiman",
//         "nrp": "732234234",
//         "email": "budiman@gmail.com",
//         "jurusan": "Teknik Sipil",
//         "idDosenWali": 2
//     },
//     {
//         "nama": "Firman",
//         "nrp": "34343234",
//         "email": "firman@gmail.com",
//         "jurusan": "Bahasa",
//         "idDosenWali": 2
//     }
// ];

// console.log('mulai');
// mhs.forEach(m => {
//     for (let i = 0; i < 10000000; i++) {
//         let date = new Date();
//     }
//     console.log(m.nama);
// });
// console.log('selesai');


/** JQUREY */

console.log('mulai');

$.ajax({

})
console.log('selsai');

