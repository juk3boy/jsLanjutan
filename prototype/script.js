

// 4. Object.created


// const methodMahasiswa = {

//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat makan !!`);
//     },

//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Bermain!!`);
//     },

//     tidur: function (jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, Selamat tidur!!`);
//     }


// }

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     //diatas kita baru membuat property

//     // mahasiswa.makan = methodMahasiswa.makan;
//     // mahasiswa.main = methodMahasiswa.main;
//     // mahasiswa.tidur = methodMahasiswa.tidur;

//     //kalau menggunakan function declaration harus ada return nya
//     return mahasiswa;
// }

// //berikut ini instansiasi nya
// let yudi = Mahasiswa('kristian', 10);

//  ###################################################################

// PROTOTYPE

// function Mahasiswa(nama, energi) {
//     // let mahasiswa = Object.create(methodMahasiswa);
//     // let mahasiswa = {};

//     // Awalnya spt ini
//     // mahasiswa.nama = nama;
//     // mahasiswa.energi = energi;

//     // dibuah menjadi spt dibawah
//     // sebenarnya dibalik layar si javascritp nya membuat 0> let this = {}
//     // dibalik layar
//     // let this = Object.create(Mahasiswa.prototype);
//     this.nama = nama;
//     this.energi = energi;
//     // return this;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `Hallo ${this.nama}, Selamat makan!!`;
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `Hallo ${this.nama}, Selamat bermain!!`;
// }

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     return `Hallo ${this.nama}, Selamat tidur!!`;
// }

// let yudi = new Mahasiswa('Kristian', 10);

//  ###################################################################


// ini menggunakan class

class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return `Hallo ${this.nama}, Selamat makan!!`;
    }

    main(jam) {
        this.energi -= jam;
        return `Hallo ${this.nama}, Selamat bermain!!`;
    }

    tidur(jam) {
        this.energi += jam * 2;
        return `Hallo ${this.nama}, Selamat tidur!!`;
    }


}

let yudi = new Mahasiswa('Kristian', 10);
let edi = new Mahasiswa('himawan', 20);

