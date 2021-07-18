//Cara untuk membuat Object pada Javascritp

// 1. Object Literal
// object ini mudah digunakan jika object nya hanya 1
// jika ada nama object yang sama makan akan error

// Tidak efektif untuk object yang banyak
// let mahasiswa1 = {
//     nama: 'Edi Setiawan',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Hallo $(this.nama), Selamat makan!!`);
//     }
// }

// let mahasiswa2 = {
//     nama: 'Budi Himawan',
//     energi: 20,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Hallo $(this.nama), Selamat makan!`);
//     }
// }

// Jika terdapat 2 object yang sama maka muncul pesan : Identifier 'mahasiswa' has already been declared


// 2. function declaration
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     //diatas kita baru membuat property
//     //kemudian dibawah kita akan membuat method nya
//     mahasiswa.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo $(this.nama), Selamat makan !!`);
//     }

//     //dengan seperti ini kita dapat membuat banyak function

//     mahasiswa.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo $(this.nama), Selamat Bermain!!`);
//     }

//     //kalau menggunakan function declaration harus ada return nya
//     return mahasiswa;
// }

// //berikut ini instansiasi nya
// let yudi = Mahasiswa('kristian', 10);


//  ####################################################

// 3. Constrructor Function
// ini menggunakan keyword new

function Mahasiswa(nama, energi) {

    this.nama = nama;
    this.energi = energi;
    //diatas kita baru membuat property
    //kemudian dibawah kita akan membuat method nya
    this.makan = function (porsi) {
        this.energi += porsi;
        console.log(`Halo $(this.nama), Selamat makan !!`);
    }

    //dengan seperti ini kita dapat membuat banyak function

    this.main = function (jam) {
        this.energi -= jam;
        console.log(`Halo $(this.nama), Selamat Bermain!!`);
    }

}

//berikut ini instansiasi nya
let yudi = new Mahasiswa('kristian', 10);

