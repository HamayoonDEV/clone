const btnplus = document.querySelector("#btn1")
const btnminus = document.querySelector("#btn2")
function Name(){
let price = 100
let qty = 1
let result = 100

btnplus.addEventListener("click",()=>{
    qty+= 1
    result= price*qty
    document.querySelector("#Qty").innerHTML = qty
    document.querySelector("#Rs").innerHTML = result
})
btnminus.addEventListener("click",()=>{
    if(qty == 1){
        qtu = 1
        document.querySelector("#Qty").innerHTML = qty
        document.querySelector("#Rs").innerHTML = result
    }else{
    qty -= 1
    document.querySelector("#Qty").innerHTML = qty
    document.querySelector("#Rs").innerHTML = result -= price
}
})}