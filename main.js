const billInput = document.querySelector("#billInput");
const tipsInput = Array.from(document.querySelectorAll(".tipsDiv button"));
const customInput = document.querySelector("#tipInput");
const peopleInput = document.querySelector("#peopleInput");

const tipResult = document.querySelector("#tipResult");
const totalResult = document.querySelector("#totalResult");

const error = document.querySelector("#error");

const resetBtn = document.querySelector("#resetBtn");


let bilValue = 0;
let tipsValue = 0;
let peopleValue = 0;

let tipAmount = 0;
let total = 0;

billInput.addEventListener("input", event => {
    bilValue = parseInt(event.target.value);
    calculator();
    
});

tipsInput.map(button => {
    button.addEventListener("click", event => {
        tipsValue = parseInt(event.target.innerText);
        for(let i = 0; i < tipsInput.length; i++){
            tipsInput[i].classList.remove("tipsClicked");
        }
        button.classList.add("tipsClicked");
        calculator();   
    })
})

customInput.addEventListener("input", event => {
    tipsValue = parseInt(event.target.value);
    for(let i = 0; i < tipsInput.length; i++){
        tipsInput[i].classList.remove("tipsClicked");
    }
    calculator();
    
})

peopleInput.addEventListener("input", event => {
    peopleValue = parseInt(event.target.value);
    if(peopleValue == "" || peopleValue > 0){
        error.style.display = "block";
        peopleInput.style.borderColor = "#E17052";
    }else{
        error.style.display = "none";
        peopleInput.style.borderColor = "#26C2AE";
    }
    calculator();
})


function calculator(){
    if (bilValue && peopleValue && tipsValue) {
        tipAmount = (bilValue * tipsValue/100) / peopleValue;
        total = bilValue/peopleValue + tipAmount
        tipResult.innerText = `$${tipAmount.toFixed(2)}`;
        totalResult.innerText = `$${total.toFixed(2)}`;
    }else{
        tipResult.innerText = `$0.00`;
        totalResult.innerText = `$0.00`;
    }
}

resetBtn.addEventListener("click", () => {
    billInput.value = 0;
    peopleInput.value = 0;
    for(let i = 0; i < tipsInput.length; i++){
        tipsInput[i].classList.remove("tipsClicked");
    }
    customInput.value = 0;
    tipResult.innerText = `$0.00`;
    totalResult.innerText = `$0.00`;
    error.style.display = "none";
})