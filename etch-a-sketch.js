const main = document.querySelector('#container');
const btn = document.querySelector('.button-33');
const item = document.querySelectorAll('.items');
const reset =  document.querySelector('.reset');
const button = document.querySelector('.random');
const tint = document.querySelector('.tint');


function createGrid(number){
    number = parseInt(prompt('Enter a number:'));
    if(number<=100){
for (let i = 0; i < number; i++) {
    let col = document.createElement("div");
    main.appendChild(col);
    col.classList.add("cell");


    for (let i = 0; i < number; i++) {
        let cell  = document.createElement('div');
        cell.classList.add('items');
        col.appendChild(cell); 

    }
  }
}
    else{
        alert('NUmber is above maximum input');
    }
}
function hover(){
let item = document.querySelectorAll('.items');
item.forEach((items)=>{
    items.addEventListener('mouseover', (event)=>{
        event.target.style.background = 'black';
    });
});
}

function resetButton(){
reset.addEventListener('click', ()=>{
    clearGrid();
});
}


function clearGrid(){
   let item = document.querySelectorAll('.cell');
   NodeList.prototype.forEach.call(item, function(node){
    node.parentNode.removeChild(node);
 });
}
    
function clickButton(){
    const btn = document.querySelector('.button-33');
    btn.addEventListener('click', ()=>{
        createGrid();
        hover();
        
    });
}

function getRandom(){
        var o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    }
 
    function colorHover(){

        let item = document.querySelectorAll('.items');
        item.forEach((items)=>{
        items.addEventListener('mouseover', (event)=>{
        event.target.style.background = getRandom().toString();
    });
});
    }
    function clickColorBtn(){
        button.addEventListener('click', ()=>{
            colorHover();
        });
    }
    function tintBtn(){
        tint.addEventListener('click', ()=>{
            colorTint();
        });
    }
    function colorTint(){
        let item = document.querySelectorAll('.items');
        item.forEach((items)=>{
            items.addEventListener('mouseover', (event)=>{         
                event.target.style.background = '#1a1a1a';
            });
        });
    }



clickButton();
resetButton();
clickColorBtn();
tintBtn();


