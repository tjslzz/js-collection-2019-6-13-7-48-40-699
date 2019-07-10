'use strict';

const condition = (num)=>{
  return num %2 == 0;
}

function choose_even(collection) {
  return collection.filter(condition);
  //implement here
}

module.exports = choose_even;
