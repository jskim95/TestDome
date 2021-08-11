function formatDate(userDate) {
    let date = userDate.split("/");
    if (date[0].length == 1) {
        date[0] = "0" + date[0];
    }
    if (date[1].length == 1) {
        date[1] = "0" + date[1];
    }
    return date[2] + date[0] + date[1];
}

console.log(formatDate("1/3/2014"));