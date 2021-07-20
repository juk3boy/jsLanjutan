/** Distructuring Function */

// function penjumlahanPerkalian(a, b) {
//     return [a + b, a * b];

// }

// // const jumlah = penjumlahanPerkalian(2, 3)[0];
// // const kali = penjumlahanPerkalian(2, 3)[1];

// // dng menggunakan diatas akan cukup repot, ada cara lain spt dibawah :
// const [jumlah, kali] = penjumlahanPerkalian(2, 3);

// console.log(jumlah);
// console.log(kali);


/** Distructuring Function Arguments */

const mhs1 = {
    nama: 'BUDI',
    umur: 34,
    email: 'budi@gmail.com',
    nilai: {
        tugas: 80,
        uts: 98,
        uas: 89,
    }
}

function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}.`;

}

console.log(cetakMhs(mhs1));
