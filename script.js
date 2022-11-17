var input = document.querySelector('.password');
var show = document.querySelector('.show');
show.addEventListener('click', active);
function active(){
  if(input.type === "password"){
    input.type = "text";
    show.style.color = "#1DA1F2";
    show.textContent = "UKRYJ";
  }else{
    input.type = "password";
    show.textContent = "POKAŻ HASŁO";
    show.style.color = "#111";
  }
}


const wrapper = document.getElementById("tiles");
  
let columns = 0,
    rows = 0,
    toggled = false;

const createTile = index => {
const tile = document.createElement("div");

tile.classList.add("tile");


return tile;
}

const createTiles = quantity => {
Array.from(Array(quantity)).map((tile, index) => {
    wrapper.appendChild(createTile(index));
});
}

const createGrid = () => {
wrapper.innerHTML = "";

const size = document.body.clientWidth > 800 ? 100 : 50;

columns = Math.floor(document.body.clientWidth / size);
rows = Math.floor(document.body.clientHeight / size);

wrapper.style.setProperty("--columns", columns);
wrapper.style.setProperty("--rows", rows);

createTiles(columns * rows);
}

createGrid();

window.onresize = () => createGrid();