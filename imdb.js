// http://www.omdbapi.com/?i=tt3896198&apikey=647669e9

let input = document.getElementById("search");
input.addEventListener("keyup", e=>{
if(e.keyCode===13){
    let value = e.target.value;
    searchMovies(value);
}
});
function searchMovies(searchText){
   window.fetch(`http://www.omdbapi.com/?s=${searchText}&apikey=647669e9`)
    .then(data => {
        //convert response body into JSON OBJECT
        data.json().then(movies => {
            let moviesData = movies.Search;
            let  output =[];
            for(let movie of moviesData) {
                console.log(movie);
                output +=`<div>
                    <img src=${movie.Poster} alt=${movie.Title}/>
                    <h1>${movie.Title}</h1>
                    <p>${movie.Year}</p>
                    <p>${movie.Type}</p>
                </div>`;
            }
            document.getElementById("template").innerHTML=output;
            // console.log(movies.Search) //Capital S
            
        }).catch(err =>console.log(err));
    }).catch(err => console.log(err));
}


