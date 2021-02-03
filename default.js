function add(num1, num2 = 0 /*if value not set this is a backup*/ ) {
    // technic NO-01
    // if (num2 == undefined) {
    //     num2 = 0;
    // }

    // technic NO-02
    // num2 = num2 || 0;
    // num2 = num2 || 20;
    return num1 + num2;
}

const total = add(22, 1);
console.log(total);