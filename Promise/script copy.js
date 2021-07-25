/** Promise = object*/

/** Promise ini fungsi nya untuk menangani callback hell */
/** Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous dimasa yang akan datang */

// fetch('http://www.omdbapi.com/?apikey=bd1aaa80&s=avengers')
//     .then(response => response.json())   /** Json pada funcition mengembalikan promise */
//     .then(response => console.log(response));

// diatas sama saja fungsi nya mengambil data dari imdb movie

/** Promise itu Janji
 *
 *Janji (terpenuhi / ingkar)
 * States (fulfilled / rejected / pending)
 * callback (resolve / reject / finally)
 * aksi (then / catch)
 */

// berikut contoh Promise yang sangat sederhana
// contoh 1

// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {

//     if (ditepati) {
//         resolve('Janji ditepati!!');
//     } else {
//         reject('Ingkar janji ...');
//     }

// });

// // console.log(janji1);

// janji1
//     .then(response => console.log('OK !! :' + response))
//     .catch(response => console.log('NOT OK! :' + response));


/** Contoh ke 2 */

// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepat) {
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu !!');
//         }, 2000)
//     } else {
//         setTimeout(() => {
//             resolve('Tidak ditepati setelah beberapa waktu !!');
//         }, 2000)
//     }
// });

// console.log('mulai');
// janji2
//     .then(response => console.log('OK !! :' + response))
//     .catch(response => console.log('NOT OK! :' + response));

// console.log('selesai');

/** Contoh menggunakan Promise dalam satu web */

const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: "Avengers",
            sutradara: "Lukman Hadi",
            pemeran: "Jordy, Evan"
        }])
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        //Anggap Json yang isinya array of object
        resolve([{
            kota: "Jakarta",
            temp: 29,
            kondisi: "Cerah Berawan"
        }]);
    }, 500);
})

// Jikalau kita ingin menjalankan satu per satu 

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

// Jika kita punya 5 API sekaligus, maka kita tulis diatas 5x

// jika kita ingin menjalakan 5 nya sekaligus maka kita menggunakan dibawah ini
// Promise.All ini berarti kita jalankan beberapa promise sekaligus

Promise.all([film, cuaca])
    // .then(response => console.log(response));

    // diatas ini juga akan muncul 2 2 nya dalam bentuk array
    // diatas yaitu array didalam array

    // jika ingin terpisah kita bisa menggunakan spread operator .then

    .then(response => {
        const [film, cuaca] = response;

        console.log(film);
        console.log(cuaca);

    });