import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

let Time= dayjs();

let TimeSoon = Time.add(1,'M').format('MMMM DD');
console.log(TimeSoon)