
// /** Ini untuk button search */

// $('.search-button').on('click', function () {
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=bd1aaa80&s=' + $('.input-keyword').val(),
//         //success jikalau masuk ke url atas berhasil maka success akan mengembalikan apa
//         success: results => {

//             const movies = results.Search;
//             // console.log(movies);  /** ini untuk melihat isi dari movies */

//             let cards = '';
//             movies.forEach(m => {
//                 cards += showCards(m);  /** ShowCards merupakan function yg ada dibawah */
//             });

//             $('.movie-container').html(cards);

//             /** Ketika tombil detail di klik */
//             $('.modal-detail-button').on('click', function () {
//                 // dibawah ini untuk mengecek imdbid apakah sudah terbaca
//                 // console.log($(this).data('imdbid'));

//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=bd1aaa80&i=' + $(this).data('imdbid'),

//                     success: m => {

//                         const movieDetail = showMovieDetail(m);

//                         $('.modal-body').html(movieDetail);
//                     },

//                     error: (e) => {
//                         // jika error
//                         console.log(e.responseText);
//                     }
//                 });
//             });

//         },
//         error: (e) => {
//             // jika error
//             console.log(e.responseText);
//         }
//     });

// });

/** Fetch */
// fect itu dijavascritp yg hasil nya mengembalikan PROMISE
// ini menggunakan vanila javascript yang tidak memerlukan source dari luar
const searchButton = document.querySelector('.search-button');

// karena kita akan memakai this maka menggunakan function bukan arrow function (=>)
searchButton.addEventListener('click', function () {

    const inputKeyword = document.querySelector('.input-keyword');

    fetch('http://www.omdbapi.com/?apikey=bd1aaa80&s=' + inputKeyword.value)
        // response.json akan menghasilkan Promise
        .then(response => response.json())
        // .then(response => console.log(response)); /** melihat di console.log ini akan menghasilkan object */
        .then(response => {
            const movies = response.Search;
            let cards = '';
            movies.forEach(m => cards += showCards(m));

            // ini tidak bisa langsung harus melalui 2 tahap
            const movieContainer = document.querySelector('.movie-container');

            // kemudian kita buat si movieContainer nya
            movieContainer.innerHTML = cards;


            // Ketika tombil detai ditekan
            const modalDetailButton = document.querySelectorAll('.modal-detail-button');
            //disini kita tidak bisa langsung menggunakan eventendler
            // karena si modalDetailButton berisi nodeList
            // maka kita harus looing dahulu

            modalDetailButton.forEach(btn => {
                btn.addEventListener('click', function () {
                    // ini untuk mengambil this nya yaitu id IMDBID 
                    // this = tombol yang kita klik
                    // dibawah ini untuk mengambil atribut yg ada datanya dng javascrit
                    const imdbid = this.dataset.imdbid;

                    fetch('http://www.omdbapi.com/?apikey=bd1aaa80&i=' + imdbid)
                        .then(response => response.json())
                        .then(m => {
                            const movieDetail = showMovieDetail(m);

                            const modalBody = document.querySelector('.modal-body');
                            modalBody.innerHTML = movieDetail;

                            // $('.modal-body').html(movieDetail);  /** ini milik jqurey */
                        })
                })
            });

        });
});






function showCards(m) {
    return `<div class="col-md-4">
                    <div class=""container-fluid>
                        <div class="card mt-2">
                           <img src="${m.Poster}" class="card-img-top img-fluid" height="6vw"> 
                            <div class="card-body">
                               <h5 class="card-title">${m.Title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted small">${m.Year}</h6>
                                <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                            </div>
                        </div>
                    </div>
                    </div>`;
};

function showMovieDetail(m) {
    return `<div class="container fluid">
               <div class="row">
                <div class="col-md">
                    <img src="${m.Poster}" alt="img-fluid">
                </div >
                <div class="col-md">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <h4>${m.Title} (${m.Year})</h4>
                        </li>
                        <li class="list-group-item"><strong>Director : </strong> ${m.Director}</li>
                        <li class="list-group-item"> <strong>Actors : </strong> ${m.Actors} </li>
                        <li class="list-group-item"><strong>Writer :</strong> ${m.Writer} </li>
                        <li class="list-group-item"> <Strong>Plot :</Strong> <br> ${m.Plot} </li>
                    </ul>
                </div>
                </div>
            </div >`;
};

