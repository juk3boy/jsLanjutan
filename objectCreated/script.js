

// 4. Object.created


const methodMahasiswa = {

    makan: function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat makan !!`);
    },

    main: function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, Selamat Bermain!!`);
    },

    tidur: function (jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, Selamat tidur!!`);
    }


}

function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    //diatas kita baru membuat property

    // mahasiswa.makan = methodMahasiswa.makan;
    // mahasiswa.main = methodMahasiswa.main;
    // mahasiswa.tidur = methodMahasiswa.tidur;

    //kalau menggunakan function declaration harus ada return nya
    return mahasiswa;
}

//berikut ini instansiasi nya
let yudi = Mahasiswa('kristian', 10);