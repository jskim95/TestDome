// numbers 배열의값 2개를 더해서 sum값을 만드는 인덱스 return 하기
// ex) - numbers = [3, 1, 5, 7, 5, 9], sum = 10
// return [0, 3]

function findTwoSum(numbers, sum) {
    let obj = {};
    for (let i = 0; i < numbers.length; i++) {
        let val = sum - numbers[i];
        if (obj[numbers[i]] !== undefined) {
            return [obj[numbers[i]], i]
        }
        obj[val] = i;
    }
}

const indices = findTwoSum([3, 1, 5, 7, 5, 9], 10);
console.log(indices);