let check1;
let check2;
let check3;
let chosenFood;
let chosenDrink;
let chosenDessert;
let priceFood=0;
let priceDrink=0;
let priceDessert=0;
let total=0;

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
function selectdessert(opt3){
    const selecteddessert = document.querySelector('.dessert .green-border ');
    if(selecteddessert !== null){
        selecteddessert.classList.remove('green-border');
    }
    opt3.classList.add('green-border');
    check3 = 3;
    orderComplete();
}

function hotdog(){
    chosenFood = "NOT-Dog";
    priceFood=8.49;
}
function vegburguer(){
    chosenFood = "Hulk-Burguer";
    priceFood=7.99;
}
function seitan(){
    chosenFood = "Seitan";
    priceFood=12.99;
}
function nuggets(){
    chosenFood = "Nuggets";
    priceFood=8.49;
}
function guara(){
    chosenDrink = "Wewi Guaraná";
    priceDrink =4.99;
}
function abacaxi(){
    chosenDrink = "Suco de Abacaxi";
    priceDrink=3.99;
}
function cola(){
    chosenDrink = "Wewi Cola";
    priceDrink=4.99;
}
function laranja(){
    chosenDrink = "Suco de Laranja";
    priceDrink=2.99;
}
function brownie(){
    chosenDessert = "Brownie";
    priceDessert=3.99;
}
function brigadeiro(){
    chosenDessert = "Brigadeiros";
    priceDessert=5.99;
}
function shake(){
    chosenDessert = "Milk-Shake Oreo";
    priceDessert=7.49;
}
function pudim(){
    chosenDessert = "Pudim de Tapioca";
    priceDessert=5.99;
}


function orderComplete() {

    if(check1 === 1 && check2 === 2 && check3 === 3){
        document.getElementById("green-button").style.display = "flex";
        document.getElementById("grey-button").style.display = "none";
    }
    total = Number(priceFood)+Number(priceDrink)+Number(priceDessert);
}

function sendWpp(){
    let message = "Olá, gostaria de fazer o pedido:" + "\n\n"+
    "- Prato: " + chosenFood + "\n" +
    "- Bebida: " + chosenDrink + "\n" +
    "- Sobremesa: " + chosenDessert + "\n\n" +
    "Total: R$ " + total.toFixed(2);
    console.log(message);

    window.open('https://wa.me/5561992687312?text=' +encodeURIComponent(message));
}