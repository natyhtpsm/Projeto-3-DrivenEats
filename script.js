/* 
let nameFood = '';
let nameDrink = '';
let nameDesert = ''; 

function verify(){
    if(nameFood !== ''){
        if(nameDrink !== ''){
            if(nameDesert !== ''){
                const buttonContinue = document.querySelector('.confirm');
                buttonContinue.classList.add('green-button');
            }
        }
    }

}

function changeButton(bttn){
    //if(food, drink e desert selecionado){
        const confirmTxt = document.querySelector('.confirm-txt'); //pega o texto do butão
        confirmTxt.innerHTML = 'Fechar Pedido';
        bttn.classList.add('green-button');

    //}
    verify();
} */

let check1;
let check2;
let check3;

function selectFood(opt1){
    const selectedFood = document.querySelector('.food .green-border ');
    if(selectedFood !== null){
        selectedFood.classList.remove('green-border');
    }
    opt1.classList.add('green-border');
    
   check1 = 1;
    orderComplete();
}
function selectDrink(opt2){
    const selectedDrink = document.querySelector('.drink .green-border ');
    if(selectedDrink !== null){
        selectedDrink.classList.remove('green-border');
    }
    opt2.classList.add('green-border');

    check2 = 2;
    orderComplete();
}
function selectDesert(opt3){
    const selectedDesert = document.querySelector('.desert .green-border ');
    if(selectedDesert !== null){
        selectedDesert.classList.remove('green-border');
    }
    opt3.classList.add('green-border');
    check3 = 3;
    orderComplete();
}

function orderComplete() {

    if(check1 === 1 && check2 === 2 && check3 === 3){
        document.getElementById("green-button").style.display = "flex";
        document.getElementById("grey-button").style.display = "none";

    }

}
