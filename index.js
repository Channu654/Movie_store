//  https://www.omdbapi.com/?i=tt3896198&apikey=9a49e97e

  
let container =document.getElementById('container')
let moviesArr = [];
async function searchMovies(){
    container.innerHTML = "";
try{
let search =document.getElementById('search').value;
let res =await fetch(`https://www.omdbapi.com/?s=${search}&page=1&apikey=9a49e97e`)
    
let data =await res.json();
let result =  data.Search
result.forEach(async function(el){
    var id =el.imdbID;
    console.log('id:', id)
let  res  = await fetch(`https://www.omdbapi.com/?i=${id}&page=1&apikey=9a49e97e`)
 let value = await res.json();
 moviesArr.push(value);
 appendData(moviesArr);
 console.log('moviesArr:', moviesArr)
 console.log('value:', value)
});
// appendData(data.Search);

console.log('data:', data.Search)

// if(data.res===true appendData(data.Search)){

// }
  }
 catch(err){
 console.log('err:', err)
 }   
}
//  searchMovies()

    function appendData(data){
    container.innerHTML=null;
   
    if(data==undefined){
        let img1 = document.createElement("img")
        img1.src="https://www.freeiconspng.com/uploads/error-icon-28.png"
        img1.setAttribute("id","img1")
  
        container.append(img1);
        return ;
    }
    data.forEach( function (el){
        if(el.imdbRating >=8.5){
            var movie_div = document.createElement("div");
            movie_div.setAttribute("id","movie_div");

            let image_div = document.createElement("div");
            image_div.setAttribute("id","image_div");

            var image = document.createElement("img");
        }
    let div = document.createElement("div") 
    let poster =document.createElement('img')
    poster.src=el.Poster;

    let rating = document.createElement("p");
    rating.innerText= el.imdbRating;
    
    let reco = document.createElement("h2");
    reco.textContent = "Recomended";
   

    let title =document.createElement('p')
   title.innerText=el.Title;

   let year =document.createElement('p')
    year.innerText=el.Year;

    let type =document.createElement('p')
    type.innerText=el.Type;

    let imd =document.createElement('p')
    imd.innerText=el.imdbID;

  
// append
    div.append(poster,title,year,type ,imd , rating);
    container.append(div)
 })
  
}

