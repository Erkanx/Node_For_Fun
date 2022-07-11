setTimeout(() => {
    console.log('Two seconds are up')
}, 2000)

let names = ['Andrew', 'Erkan', 'Jess'];
let shortNames = names.filter((name) => {
    return name.length <= 4;
});


geocode = (address, callback) => {
    setTimeout(() => {
        let data = {
            latitude: 0,
            longitude: 0
        }
        callback(data);
    }, 2000)
}

geocode('Louisiana', (data) => {
    console.log(data)
});


challengeCode = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 2000)
}


challengeCode(1, 4, (sum) => {
    console.log(sum);
})
