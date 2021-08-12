function ensure(value) {
    if (value === undefined) {
        throw 'err';
    }
    return value;
}

try {
    console.log(ensure());
} catch (err) {
    console.log(err);
}