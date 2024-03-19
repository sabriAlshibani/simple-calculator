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
                document.querySelector("#result").innerHTML = result;

                default:     
                document.querySelector("#result").innerHTML = "not found";


    }
}