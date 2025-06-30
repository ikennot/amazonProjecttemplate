import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

let Time= dayjs();

const dateLater = Time.add(2,'d')

function isWeek(date){
    let week = date.format('dddd');
    return  week;
}

const later =  isWeek(dateLater);
console.log(later)