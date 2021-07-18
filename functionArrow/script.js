// Arrow Function adalah cara lain kita untuk menuliskan function
// agar menjadi lebih ringkas

// dimana awal function

// const tampilNama = function (nama) {
//     return `Halo, nama saya ${nama}`;
// }

// console.log(tampilNama('Yudi'));

// ############################################################

// function diatas bisa kita ubah menjadi 

// ini jika parameter 1 dilihat dari (nama) yg ada dialam kurung itu nama nya parameter
// const tampilNama = (nama) => { return `Halo, nama saya ${nama}`; }

// console.log(tampilNama('Yudi'));

// dan jika parameter ada 2 maka spt dibawah

// const tampilNama = (nama, waktu) => {
//     return `Halo selamat ${waktu}, nama saya ${nama}`;
// }

// console.log(tampilNama('Yudi', 'malam'));

//  #########################################################

// jika parameternya 1 tidak perlu dimasukan didalam kurung dan jika didalam function nya hanya return nya saja maka kita ditdk perlu menuliskan return nya
// dibawah ini jg bisa disebut implisit return

// const tampilNama = nama => `Halo, nama saya ${nama}`;

// console.log(tampilNama('Yudi'));

// dan jika kita tidak menuliskan parameternya maka kita wajib menuliskan parameternya;

// const tampilNama = () => `Hello Wordl !!`;

// console.log(tampilNama());



//  ###################################################################

// kita juga bisa menggunakan function yang lain
// spt function map pada javascript (memetakan function kedalam sebuah array)

// awalnya kita bisa seprti dibawah ini
// let mahasiswa = ['Yudi Kristianta', 'Budiman Sejati', 'Edwin'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });

// console.log(jumlahHuruf);


// dengan menggunakan function arrow maka akan lebih ringkat

// let mahasiswa = ['Yudi Kristianta', 'Budiman Sejati', 'Edwin'];

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

//  Kemudian jika kita ingin mengembalikannya dalam bentuk object lagi

// jika kurang kurawal ({}) ini dianggap return
// jika kita ingin kurung kurawan tsb dianggap object oleh javascritp maka kita bungkus dengan ({}) = object

// let mahasiswa = ['Yudi Kristianta', 'Budiman Sejati', 'Edwin'];

// let jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jumlahHuruf: nama.length }));

// console.log(jumlahHuruf);

// // jika ingin tampilannya berubah menjadi tabel maka kita ganti console.table()

// console.table(jumlahHuruf);



// ########################################################################
//    KONSEPT THIS PADA ARROW FUNCTION
// ########################################################################

// Constructor Function

// const Mahasiswa = function () {
//     this.nama = 'Yudi';
//     this.umur = 38;

//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, dan saya berumur ${this.umur} tahun`);
//     }
// }

// const yudi = new Mahasiswa();


// jika menggunakan obeject literal

// const mhs1 = {
//     nama: 'Yudi',
//     umur: 38,
//     sayHello: function () {
//         console.log(`Hallo, nama saya ${this.nama}, dan saya berumur ${this.umur} tahun.`);
//     }
// }


// MENGGUNAKAN ARROW FUNCTION
// pada arrow function tidak ada context this

// const Mahasiswa = function () {
//     this.nama = 'Yudi';
//     this.umur = 38;

//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, dan saya berumur ${this.umur} tahun`);
//     }

//     setInterval(() => {
//         console.log(this.umur--);
//     }, 500);

// }

// const yudi = new Mahasiswa();