const box = document.querySelector('.box');
box.addEventListener('click', function () {

    let satu = 'size';
    let dua = 'caption';

    // jika classList didalam nya (containts) terdapat 1
    if (this.classList.contains(satu)) {
        // kalau yang dulu harus dibuat
        // satu = temp;
        // satu = dua;
        // satu = temp;

        // namun dengan adanya js yang baru maka bisa menggunakan 
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);

    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});