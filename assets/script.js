// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Priyanka Shah" // HINT: Replace this with your own name!
//quantity

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb/minus-gb and other ids..
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
//          chocolate..add/minus
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
//          sugar...add/minus
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

// Code to update name display
credit.textContent = `Created by ${yourName}`

//      gingerbread
gbPlusBtn.addEventListener('click', function() {
    gb++ 
    let quantitygb = document.querySelector('#qty-gb')
    quantitygb.textContent = gb
    //              total
    let amount = document.querySelector('#qty-total')
        amount.textContent = gb + cc + sugar
})

gbMinusBtn.addEventListener('click', function() {
    gb --
    if (gb < 0){
        gb = 0}
    let quantitygb = document.querySelector('#qty-gb')
    quantitygb.textContent = gb

    //              total
    let amount = document.querySelector('#qty-total')
    amount.textContent = gb + cc + sugar
    })
//      chocolate chip
 ccPlusBtn.addEventListener('click', function() {
    cc++ 
    let quantitycc = document.querySelector('#qty-cc')
    quantitycc.textContent = cc
    //              total
    let amount = document.querySelector('#qty-total')
    amount.textContent = gb + cc + sugar
    })
ccMinusBtn.addEventListener('click', function() {
    cc --
    //  negative
    if (cc < 0){
        cc = 0}
    let quantitycc = document.querySelector('#qty-cc')
    quantitycc.textContent = cc
    
    //              total
    let amount = document.querySelector('#qty-total')
    amount.textContent = gb + cc + sugar
    })
//          suagr
sugarPlusBtn.addEventListener('click', function() {
    sugar++ 
    let quantitySugar = document.querySelector('#qty-sugar')
    quantitySugar.textContent = sugar
    //              total
    let amount = document.querySelector('#qty-total')
    amount.textContent = gb + cc + sugar
    })
sugarMinusBtn.addEventListener('click', function() {
        sugar --
        //  negative
        if (sugar < 0){
            sugar = 0}
        let quantitysugar = document.querySelector('#qty-sugar')
        quantitysugar.textContent = sugar
        
        
        //              total
        let amount = document.querySelector('#qty-total')
        amount.textContent = gb + cc + sugar
        })
// TODO: Hook up event listeners for the rest of the buttons


