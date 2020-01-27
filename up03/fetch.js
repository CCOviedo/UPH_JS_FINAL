fetch('https://pokeapi.co/api/v2/pokemon/').then((res)=>{
  res.json().then((obj)=>{
    console.log(obj);
  })
});

fetch('https://pokeapi.co/api/v2/pokemon/').then((res) =>{
  return res.json()
}).then((obj) => {
  console.log(obj);
})