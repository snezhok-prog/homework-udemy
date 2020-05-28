numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", 0);

movie = new Object;
actor = new Object;
genre = {};
PersonalMovieBD = {
    count: numberOfFilms,
    movies: { },
    actors: { },
    genres: [ ],
    privat: false
}
 
for (i = 0; i<2; i++){
    a = prompt ('Один из последних просмотренных фтльмов?');
    b = prompt ('На сколько оцените его');
    PersonalMovieBD.movies[a] = b;
}
console.log (PersonalMovieBD.movies)