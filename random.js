const bChoice = document.getElementById('bChoice');
const bRandom = document.getElementById('bRandom');
const numberChoice = document.getElementById('numberChoice');
const result = document.getElementById('result');
let numbers = [];

function getRandom (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

bChoice.onclick = function () {
    let luckyNumber = Number(numberChoice.value);
    if (luckyNumber > 0 && luckyNumber <= 60 && numbers.indexOf(luckyNumber) == -1) {
        numbers.push(luckyNumber);
    } else {
        alert('Verifique os números, entre 1 e 60 e não repetidos');
    }
    result.innerHTML = numbers;
    numberChoice.value = '';
    numberChoice.focus();
};

bRandom.onclick = function () {
    while (numbers.length < 6) {
        let res = getRandom(1, 60);
        if (numbers.indexOf(res) == -1) {
            numbers.push(res);
        }
    }
    numbers.sort(function (a, b) { // retorna numero em ordem crescente
        return a - b;
    });
    result.innerHTML = `Seus números da sorte são ${numbers}`;
    //Assim para futuras interações | ${numbers[0]},${numbers[1]},${numbers[2]},${numbers[3]},${numbers[4]},${numbers[5]}
    numbers = [];
};

