// write your code below!
function happyHolidays(){
  return 'Happy holidays!'
}

function happyHolidaysTo(name){
  return 'Happy holidays, ${name}!'
}

function happyHolidayTo(holiday, name){
  return 'Happy ${holiday}, ${name}!'
}

console.log(happyHolidays())
console.log(happyHolidaysTo('Ray'))
console.log(happyHolidayTo('Halloween','Ray'))
