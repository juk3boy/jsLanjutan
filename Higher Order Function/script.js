// HIGHER ORDER FUNCTION
// ini membahas jika kita akan menggunakan javascript modern

// Definisi sbb :
// -> menurut https://eloquentjavascript.net : Function yg beroperasi pada function lain baik itu digunakan dalam argument, maupun sebagai return value.
// -> menurut http: sitepoint.com : Javascript memperlakukan Function sebagai object

// contoh Higher Order Function
// - Array.prototype.map()
// - Array.prototype.filter()
// - Array.prototype.reduce()


// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// dari array diatas kita akan mencari array yg >= 3

// jika menggunakan looping for

// const newAngka = [];  // ini sebagai penampung
// for (let i = 0; i < angka.length; i++) {

//     if (angka[i] >= 3) {

//         newAngka.push(angka[i]);

//     }
// }

// console.log(newAngka);

// #########################################

// Jika menggunakan filter

// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// const newAngka = angka.filter(function (a) {
//     return a >= 3;
// });

// console.log(newAngka);

// jika menggunakan Arrow Function

// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// const newAngka = angka.filter((a) => a >= 3);

// console.log(newAngka);



// Jika menggunakan map
// kalikan semua angka dengan 2

// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);

// diatas ini akan menghasilkan semua angka yg di dalam variable akan dikali kan 2 semua

// ##########################################################

// Reduce
// Melakukan sesuatu terhalam seluruh element array nya

// Jumlahkan seluruh elemen pada Array

// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// // kenapa menggunakan (()) karena kita menggunakan arrow function dan terdapat 2 parameter
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0)  // angka 0 (angka value) itu default value jika kita tidak ditulis pun akan ditambahkan oleh javascript nya

// console.log(newAngka);

// ini yg terjadi (yg diproses oleh Javascript) : 0 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9 = 26
// jika 0 itu diubah menjadi angka 5 maka nilainya akan berubah menjadi 31

// ##########################################################################

// Method Chaining (metode berantai)

// Cari angka > 5
// kemudan hasil angka itu akan di kalikan 3
// kemudian dijumlahkan

// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// // dengan membarikan . (titik) ini masuk ke metode chaining
// const hasil = angka.filter(a => a > 5) // 8 9 9
//     .map(a => a * 3) // 16 27 27
//     .reduce((accumulator, currentValue) => accumulator + currentValue);  // hasil nya = 78

// console.log(hasil);


// #################################################

// 1. Ambil semua elemet video nya dng menggunakan DOM SELECTION

// fungsi dari Array.from() : untuk mengubah nodeList
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// 2. Pilih hanya yang 'JAVASCRIPT LANJUTAN'
//  cari video yg didalamnya (.textContent) terdapat (.includes) tulisan apa ....
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))


    // 3. Ambil durasi masing-masing video nya

    .map(item => item.dataset.duration)

    // 4. Ubah durasi menjadi Float, ubah menit menjadi detik
    // 10:30 kita pecah menjadi array [10, 30] ini displit namanya
    .map(waktu => {
        const parts = waktu.split(':').map(part => parseFloat(part));

        return (parts[0] * 60 /** menit */) + parts[1];
    })

    // 5. Jumlahkan semua detik nya

    .reduce((total, detik) => total + detik, 0);

// 6. ubah kembali format nya menjadi Jam, Menit, Detik
// pembulatan kebawah -> floor; pembulatan keatas seil (langit2)
const jam = Math.floor(jsLanjut / 3600 /**menit */);  /** kalau 2 jam berarti 3600 * 2 = 7200 */

// berarti kita ambil dl sisa menit dari 8000 td

jsLanjut = jsLanjut - jam * 3600;

const menit = Math.floor(jsLanjut / 60);

const detik = jsLanjut - menit * 60;

// 7. Simpan di DOM

const pDurasi = document.querySelector('.total-durasi');


pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;

// ini untuk jumlah video
const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} Video.`;


console.log(jmlVideo);
// console.log(menit);
// console.log(detik);