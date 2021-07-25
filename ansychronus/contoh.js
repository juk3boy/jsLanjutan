
/** Ini untuk button search */

$('.search-button').on('click', function () {
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=bd1aaa80&s=' + $('.input-keyword').val(),
        //success jikalau masuk ke url atas berhasil maka success akan mengembalikan apa
        success: results => {

            const movies = results.Search;
            // console.log(movies);  /** ini untuk melihat isi dari movies */

            let cards = '';
            movies.forEach(m => {
                cards += showCards(m);  /** ShowCards merupakan function yg ada dibawah */
            });

            $('.movie-container').html(cards);

            /** Ketika tombil detail di klik */
            $('.modal-detail-button').on('click', function () {
                // dibawah ini untuk mengecek imdbid apakah sudah terbaca
                // console.log($(this).data('imdbid'));

                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=bd1aaa80&i=' + $(this).data('imdbid'),

                    success: m => {

                        const movieDetail = showMovieDetail(m);

                        $('.modal-body').html(movieDetail);
                    },

                    error: (e) => {
                        // jika error
                        console.log(e.responseText);
                    }
                });
            });

        },
        error: (e) => {
            // jika error
            console.log(e.responseText);
        }
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
                                        </div > `;
}


