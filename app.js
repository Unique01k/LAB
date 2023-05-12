const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Назва країни?\n`, country => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(res => res.json())
    .then(data => {
        console.log("Назва країни - " + data[0].name.common)
        console.log("Столиця - " + data[0].capital[0])
        console.log("Регіон - " + data[0].region)
    })
    .catch(err => console.error(err))
  readline.close();
});