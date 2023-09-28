'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    if (compareFunction && typeof compareFunction === 'function') {
      for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < this.length - i - 1; j++) {
          if (compareFunction(this[j], this[j + 1]) > 0) {
            const temp = this[j];

            this[j] = this[j + 1];
            this[j + 1] = temp;
          }
        }
      }

      return this;
    }
  };
}

const compareAsString = (a, b) => {
  const stringA = String(a);
  const stringB = String(b);

  return stringA > stringB ? 1 : -1;
};

module.exports = applyCustomSort;
