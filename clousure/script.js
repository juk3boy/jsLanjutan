
// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE



// console.log(nama);


// var nama = 'Yudi';

// Jika sperti diatas maka yg terjadi si JS akan mencari dulu ada gk variable ? ada gk function ? 
// kalau ada jalankan dulu variable kemudian disi undefine.
// jd dengan posisi seperti diatas makan akan muncul undefine

//   ## Creation Phase pada Global Context
//   nama var  = undefine
//   nama function = fn()
//   hoisting
//   window = global object
//   this = window

// Execution Phase 


// var nama = 'YUDI KRISTIANTA';
// var umur = 38;

// console.log(sayHello());

// function sayHello() {
//     return `Halo nama saya ${nama}, Saya berumur ${umur} tahun`;
// }

// Function membuat local Execution Context
// yg didalamnya terdapat creation dan execution phase
// window
// objek arguments


// CONTOH 1

// function satu() {
//     var nama = 'YUDI KRISTIANTA';
//     console.log(nama)
// }

// function dua() {
//     console.log(nama);
// }

// console.log(nama);
// var nama = 'Budiman';
// satu();
// dua('Setiadi');
// console.log(nama);


// CLOSURE

// LEXIAL SCOPE

// function init() {
//     let nama = 'YUDI';   // Local Variable

//     function tampilNama() {  // inner Function (Closure*)
//         console.log(nama);  // akses ke parent variable
//     }
//     tampilNama();
// }

// init();

// ############################################################

// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, Semoga harimu menyenangkan!!`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');


// selamatPagi('Yudi');
// selamatSiang('Yudi');
// selamatMalam('Yudi');

// seperti dibawah ini juga bisa
// console.dir(selamatPagi('Yudi'));


//  =================================ContohLain=======================


// menghitung angka 1, 2, 3 dst
// let counter = 0;
// let add = function () {
//     return ++counter;
// }

// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());

// dengan cara diatas maka jika kita kedepan ingin menambahkan counternya di luar function menjadi 100 dsb maka akan muncul dari angka 100 bkn angka 1

// maka bisa dengan cara dibawah ini


// untuk memasukan let a = add()  maka kita bisa membukusnya dengan immediatly Invoked Function Expression ( masukan didalam kurang lg semua fungsinya)

let add = (function () {
    let counter = 0;

    return function () {
        return ++counter;
    }

})();


console.log(add());
console.log(add());
console.log(add());
console.log(add());