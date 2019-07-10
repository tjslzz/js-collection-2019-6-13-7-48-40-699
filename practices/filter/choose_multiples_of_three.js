'use strict';

const condiction = (num)=>{
  return num % 3 == 0;
}
function choose_multiples_of_three(collection) {
  return collection.filter(condiction);
  //implement here
}

module.exports = choose_multiples_of_three;
