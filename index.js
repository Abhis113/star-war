let id;
  
  async function getdeta(){
    let query = document.getElementById("query").value;

    let url = `https://swapi.dev/api/people/?search=${query}`;

    let res = await fetch(url);

    let data = await res.json();

    console.log(data);

    return data.results;
}

    function append(data){
   
    let container = document.getElementById("results");
    container.innerHTML = null;
     
    data.forEach(function(el){

    let p1 = document.createElement("p");
    p1.innerText  = "Nmae:-"+el.name;
    let p2 = document.createElement("p");
    p2.innerText  = "Height:-"+el.height;
    

    container.append(p1,p2);


    });
  
}

async function main(){
  let data =await getdeta();
  append(data);
}

function debouncing(func,delay){
 if(id){
  clearTimeout(id);
  }
  id = setTimeout(function(){

  func();

},delay);

}

