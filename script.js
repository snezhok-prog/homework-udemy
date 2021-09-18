console.log ("Я вернулся ))))");
function promt () {
    numberOfFilms = +(prompt("Сколько фильмов вы уже посмотрели?", ""));
    if ((numberOfFilms.length == 0) || (numberOfFilms.length >= 50)) {
        promt();
    }
}

promt();
promt();

PersonalMovieBD = {
    count: numberOfFilms,
    movies: { },
    actors: { },
    genres: [ ],
    privat: false
};

 if (PersonalMovieBD.count < 10){
     alert ("Просмотренно довольно мало фильмов");
 } else if ((PersonalMovieBD.count >= 10) || (PersonalMovieBD.count < 30)) {
     alert ('Вы классический зритель');
 } else if (PersonalMovieBD.count > 30) {
     alert ("Вы киноман");
 } else {
     console.log ("Произошла ошибка");
 }

function promt_2 (){
    a = prompt ('Один из последних и не только последних просмотренных фильмов?', '');
    b = prompt ('На сколько оцените его и не только его', '');
    if ((a == null) || (b == null)) {
        promt_2 ();
    } else if ((a.length == 0) || (a.length > 50)) {
        promt_2 ();
    }
    return (a,b);
}

for (i = 0; i<2; i++){
    promt_2 ();
    PersonalMovieBD.movies[a] = b;
}

console.log (PersonalMovieBD);