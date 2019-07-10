'use strict';

function grouping_count(collection) {
  return collection.reduce((p,k) => (p[k]++ || (p[k] = 1),p),{});
  //implement here
}

module.exports = grouping_count;
