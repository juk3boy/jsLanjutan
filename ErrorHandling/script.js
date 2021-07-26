/** ASYNC AWAIT */

/** Asynccronous Function */
/** Sebuah function yang bekerja secara asyncronous (melalui event loop), yang mehasilkan (implisit) promise sebagai retrun value nya, melalu cara penulisan code -nya menggunakan penulisan yang syncrounous(standard) */


// dibawah ini membuat Promise dimana resolve jika sukses sedangkan reject jika gagal
// new Promise((resolve, reject) =>);  /** ini jika kita menangani ada sukses dan gagal */

// const coba = new Promise(resolve => {

//     setTimeout(() => {

//         resolve('selesai');
//     }, 3000);
// }); /** Ini tidak menangani kondisi gagal */

/** jika langsung menggunakan console.log(coba)
 * maka promise nya akan pending
 * pada promise ada namanya .then
 */
// console.log(coba);

// coba.then(() => console.log(coba));



/** Promise diatas akan kita implementasikan apad Async dan Await */


// function cobaPromise() {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {

//             resolve('selesai');
//         }, 3000);
//     }); /** Ini tidak menangani kondisi gagal */
// }

// async function cobaAsync() {
//     const coba = await cobaPromise();

//     console.log(coba);
// }

// cobaAsync();

/** kita coba dengan resolve dan reject */

function cobaPromise() {
    return new Promise((resolve, reject) => {

        const waktu = 2000;
        if (waktu < 5000) {

            setTimeout(() => {

                resolve('selesai');
            }, waktu);
        } else {
            reject('Kelamana coy!!');
        }

    });
}

/** ini mengunakan .then dan .catch */

// const coba = cobaPromise();
// coba
//     .then(() => console.log(coba))
//     .catch(() => console.log(coba));

/** Akhir .then dan .catch */

/** Bagaimana jika menggunakan Async dan Await */

async function cobaAsync() {

    try {
        const coba = await cobaPromise();

        console.log(coba);

    } catch (err) {
        console.error(err);
    }
}

cobaAsync();