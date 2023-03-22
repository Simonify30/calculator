const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');
const btn6 = document.querySelector('.btn6');
const btn7 = document.querySelector('.btn7');
const btn8 = document.querySelector('.btn8');
const btn9 = document.querySelector('.btn9');
const btn0 = document.querySelector('.btn0');
const add = document.querySelector('.add');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const minus = document.querySelector('.minus');
const wipe = document.querySelector('.wipe');
const dot = document.querySelector('.dot');
const del = document.querySelector('.delete');
const equal = document.querySelector('.equal');
const percent = document.querySelector('.percent');







const input = document.querySelector('input');



btn1.addEventListener('click', ()=>{
    input.value += '1'
})

btn2.addEventListener('click', ()=>{
    input.value += '2'
})

btn3.addEventListener('click', ()=>{
    input.value += '3'
})

btn4.addEventListener('click', ()=>{
    input.value += '4'
})

btn5.addEventListener('click', ()=>{
    input.value += '5'
})

btn6.addEventListener('click', ()=>{
    input.value += '6'
})

btn7.addEventListener('click', ()=>{
    input.value += '7'
})

btn8.addEventListener('click', ()=>{
    input.value += '8'
})

btn9.addEventListener('click', ()=>{
    input.value += '9'
})

btn0.addEventListener('click', ()=>{
    input.value += '0'
})

add.addEventListener('click', ()=>{
    input.value += '+'
})

minus.addEventListener('click', ()=>{
    input.value += '-'
})

divide.addEventListener('click', ()=>{
    input.value += '/'
})

multiply.addEventListener('click', ()=>{
    input.value += 'x'
})

percent.addEventListener('click', ()=>{
    input.value += '%'
})

wipe.addEventListener('click', ()=>{
    input.value = ''
})

dot.addEventListener('click', ()=>{
    input.value += '.'
})

del.addEventListener('click', ()=>{
    input.value = input.value.toString().slice(0,-1)
})

equal.addEventListener('click', ()=>{
    input.value = input.value = eval(input.value)
})

