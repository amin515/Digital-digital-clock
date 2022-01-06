const box = document.querySelector('#container');
const h = document.querySelector('#h');
const m = document.querySelector('#m');
const s = document.querySelector('#s');
const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const week1 = document.querySelector('#week');
const sun = document.querySelector('#sun');
const mon = document.querySelector('#mon');
const tues = document.querySelector('#tues');
const wed = document.querySelector('#wed');
const thur = document.querySelector('#thur');
const fri = document.querySelector('#fri');
const sat = document.querySelector('#sat');
const amp = document.querySelector('#amp');
const p_m = document.querySelector('#p-m');
const p_s = document.querySelector('#p-s');


setInterval(function () {
    let date = new Date();
    let ss = date.getSeconds();
    let mm = date.getMinutes();
    let hh = date.getHours();
    let day1 = date.getDate();
    let month1 = date.getMonth() + 1;
    let year1 = date.getFullYear();
    let ampm = hh > 12 ? 'PM': 'AM'



    s.innerHTML = `${ss > 9 ? ss : '0'+ ss}`
    p_s.innerHTML = 'sec';

    m.innerHTML = `${mm > 9 ? mm : '0'+ mm}`
    p_m.innerHTML = 'min'
    h.innerHTML = zero(date.getHours() > 12 ? date.getHours() - 12 : date.getHours());
    amp.innerHTML = `${ampm}`

    day.innerHTML = `${day1 > 9 ? day1 : '0'+ day1}`;
    month.innerHTML = `${month1 > 9 ? month1 : '0'+ month1}`;
    year.innerHTML = `${year1}`;
    sun.innerHTML = `${task(date.getDay())}`
 
}, 1000);








