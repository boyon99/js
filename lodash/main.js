// 깊은 복사
import cloneDeep from 'lodash/cloneDeep.js'

const object = {
  a: "a",
  number: {
    one: 1,
    two: 2,
  },
  arr: [1, 2, [3, 4]],
};

const copy = cloneDeep(object)
copy.number.one = 10;

console.log(copy.number.one === object.number.one) // false
