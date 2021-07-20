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