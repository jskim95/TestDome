let obj = {
    age: 19,
    name: 'kim',
    home: 'seoul'
}

function removeProperty(obj, prop) {
    for (let i in obj) {
        if (obj.hasOwnProperty(prop)) {
            return delete obj[prop];
        }
    }
    return null;
}
console.log(obj); // { age: 19, name: 'kim', home: 'seoul' }
removeProperty(obj, 'home')
console.log(obj); // { age: 19, name: 'kim' }