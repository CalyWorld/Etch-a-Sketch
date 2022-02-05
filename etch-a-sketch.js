
const holdingContainer = document.getElementById('grid-container');



function createGrid(number){ //creates a grid size eg 16x16
    if(number <100){
    const rows = number;
    const cols = rows;
    holdingContainer.style.setProperty('--grid-rows', rows);  //sets the row to 16
    holdingContainer.style.setProperty('--grid-cols', cols); //sets the column to 16
 
    for(i = 0; i<(cols * rows); i++){
        const cell = document.createElement('div'); //creating 16X16 div  
        holdingContainer.appendChild(cell); //adds div to grid-container
        cell.classList.add('items'); //adds classname grid-items to the div
    }
}else {
    prompt("Number above input limit");
}
}

function setBackground(){

const item = document.querySelectorAll('.items');  //selects all div inside grid-container

item.forEach((items)=>{  //iterate each items

    items.addEventListener('mouseover', (e) =>{   
  
          e.target.style.background = 'black'; //sets the background-color to black
        
});

});
}
function reset(){
    
}
function start(){
const btn = document.querySelector('.button-33');

btn.addEventListener('click',() =>{   

    const number = Number(prompt("Enter a Number : "));
    createGrid(number);
    setBackground();

     
});
}
