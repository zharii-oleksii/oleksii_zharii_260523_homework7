document.getElementById("button1").addEventListener("click", function () {

    let result = ''
    for (let i = 10; i < 21; i++)
        if (i !== 20) {
            result = result + i + ', '
        } else {
            result = result + i
        }


    alert(result)
});

document.getElementById("button2").addEventListener("click", function () {

    let result = ''
    for (let i = 10; i < 21; i++)
        if (i !== 20) {
            result = result + (i ** 2) + ', '
        } else {
            result = result + (i ** 2)
        }


    alert(result)

});

document.getElementById("button3").addEventListener("click", function () {

    let digit = 7;
    let result = '';

    for (let i = 1; i < 11; i++) {
        result = result + '\n' + '7 x ' + i + ' = ' + 7 * i
    }

    alert(result)
});

document.getElementById("button4").addEventListener("click", function () {

    let sum = 0;
    for (let i = 1; i < 16; i++) {
        sum += i
    }
    alert(sum)
});

document.getElementById("button5").addEventListener("click", function () {

    let mult = 1;
    for (let i = 15; i < 36; i++) {
        mult *= i
    }
    alert(mult)

});

document.getElementById("button6").addEventListener("click", function () {

    let sum = 0;
    let count = 0;
    for (let i = 1; i <= 500; i++) {
        sum += i
        count += 1
    }
    alert(sum / count)

});

document.getElementById("button7").addEventListener("click", function () {

    let sum = 0;
    for (let i = 30; i <= 80; i++) {
        if (i % 2 === 0) {
            sum += i
        }
    }
    alert(sum)

});

document.getElementById("button8").addEventListener("click", function () {

    let result = '';

    for (let i = 100; i <= 200; i++) {
        if (i % 3 === 0) {
            result = result + i + ', '
        }
    }
    result = result.slice(0, -2);
    alert(result)

});

document.getElementById("button9").addEventListener("click", function () {

    let yourNumber = parseInt(prompt('Enter number'))
    while (isNaN(yourNumber)) {
        yourNumber = parseInt(prompt('Enter number'))
    }
    let i = 1;
    let count = 0;
    let sum = 0;
    result = '';
    while (i <= Math.floor(yourNumber / 2)) {
        if (yourNumber % i === 0) {
            result = result + i + ', '
            if (i % 2 === 0) {
                count += 1
                sum += i
            }
        }
        i += 1
    }
    alert(
        'Дільники числа ' + yourNumber + ' : ' + result.slice(0, -2) + '\n' +
        'Кількість парних дільників: ' + count + '\n' +
        'Сума парних дільників: ' + sum
    )
});

document.getElementById("button10").addEventListener("click", function () {

    let result = ''
    for (let i = 1; i <= 10; i++) {
        for (let k = 1; k <= 10; k++) {
            result = result + i + ' x ' + k + ' = ' + i * k + '\n'
        }
        result = result + '\n'
    }
    alert('Open console to see the result')
    console.log(result)
});