function input(value) {
    if(c !== "0") {
        document.getElementById('input').value += value; // input số vô màn hình
    }else {
        document.getElementById('input').value = value;
    }
}

function ac() {
    let clear = document.getElementById('input').value = ""; //clear number
}

let number1 = "0";
let number2 = "0";
let opt = "";
let c = "";

function tinhToan(op) {

    if(number1 == "0"){
        number1 = document.getElementById('input').value;
        opt = op;
        c = "0";
    }else if(number1 !== "0" && number2 == "0"){
        number2 = document.getElementById('input').value;
        calc(op);
    }
}

function calc(op) {
    let result = 0;
    switch (op) {
        case '+':
            result = Number(number1) + Number(number2);
            break;
    }
    number1 = result;
    number2 = "0";
    document.getElementById('input').value = result;
}


