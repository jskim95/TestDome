function createCheckDigit(membershipId) {
    let sum = membershipId;
    let result = 0;
    while (membershipId !== undefined) {
        for (var i = 0; i < sum.length; i++) {
            result += sum[i] * 1;
        }
        if (result < 10) {
            return result
        }
        sum = result + '';
        result = 0;
    }

    return 0;
}

console.log(createCheckDigit("55555"));