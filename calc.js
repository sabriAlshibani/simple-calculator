function calculator() {
    let calc = document.getElementById("calculator")
    let num1 = calc.querySelector("#num1");
    let num2 = calc.querySelector("#num2");
    let opera = calc.querySelector("#opera");
    let x = num1.value
    let y = num2.value
    let o = opera.value

    console.log('y: ', y, `x :`, x, `o:`, o)

    let result;
    switch (o) {
        case "+":
            result = x + y;
            document.querySelector("#result").innerHTML = result;
            break;
        case "-":
            result = x - y;
            document.querySelector("#result").innerHTML = result;

            break;
        case "/":
            if (y !== 0) {
                result = x / y;
                document.querySelector("#result").innerHTML = result;
            } else {
                document.querySelector("#result").innerHTML = " enter correct number";
            }
            break;
        default:
            document.querySelector("#result").innerHTML = "not found";


    }
}
function num1() {
    document.getElementById("result").value = 1;
    document.querySelectorAll("#button").style.backgroundColor = "green";
}
function num2() {
    document.getElementById("result").value = 2;
    document.querySelector("#num1").style.backgroundColor = "green";

}
function num3() {
    document.getElementById("result").value = 3;
    document.querySelector("#num1").style.backgroundColor = "green";

}
function num4() {
    document.getElementById("result").value = 4;
    document.querySelector("#num1").style.backgroundColor = "green";

}
function num5() {
    document.getElementById("result").value = 5;
    document.querySelector("#num1").style.backgroundColor = "green";

}
function num6() {
    document.getElementById("result").value = 6;
    document.querySelector("#num1").style.backgroundColor = "green";

}
function num7() {
    document.getElementById("result").value = 7;
    document.querySelector("#num1").style.backgroundColor = "green";

}
function num8() {
    document.getElementById("result").value = 8;
    document.querySelector("#num1").style.backgroundColor = "green";

}
function num9() {
    document.getElementById("result").value = 9;
    document.querySelector("#num1").style.backgroundColor = "green";

}
function del() {
    document.getElementById("result").value =8;
}
function res() {
    document.getElementById("result").value = 1;
}
function plus() {
    document.getElementById("result").value = 1;
}
function min() {
    document.getElementById("result").value = 1;
}
function no() {
    document.getElementById("result").value = 1;
}
function ne() {
    document.getElementById("result").value = 1;
}