document.addEventListener("DOMContentLoaded", function (){
    var lista = document.getElementById("listaPokemons");
    var ul = document.createElement("ul");
    lista.appendChild(ul);

    fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=151').then((res)=>{
      res.json().then((pokemons)=>{
        for(var i=0; i < pokemons.results.length; i++){
            var item = document.createElement("li");

            item.dataset.pokeUrl = pokemons.results[i].url;
            item.innerHTML = pokemons.results[i].name;
            
            item.classList.add(pokemons.results[i].name);
            item.style.cursor = "pointer";
            
            console.log(pokemons);
            item.addEventListener("click", consultarPokemon);
            ul.appendChild(item);
        }
      });
    });

    var consultarPokemon = function(event){
        console.log(event.target);
        console.log(event.target.dataset.pokeUrl);
        fetch(event.target.dataset.pokeUrl).then((res)=>{
            res.json().then((pokemon)=>{
                datosPokemon(pokemon);
            })
        });
    }

    function datosPokemon(pokemon){
        let item = document.getElementById("pokemon-1")
        let imagen = item.getElementsByTagName("img")[0];
        imagen.setAttribute("src", pokemon.sprites.front_default);

        let nombre = item.getElementsByTagName("p")[0];
        nombre.textContent = pokemon.name; 
    }
});
