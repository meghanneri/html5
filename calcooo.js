function dothis(event) {

    var value = event.srcElement.value;

    setValue(validateValue(value));
    if (value == 'C') {
        setValue(value, true);
    }
    if (value == '=') {
        try {
            ans(value)
        } catch (error) {
            console.log(error);
            syntax(value);
        }
    }
}
function setValue(value, reset) {
    var displayTxt = document.getElementsByTagName("input")[0];
    if (reset) {
        displayTxt.value = "";
        return;
    }
    displayTxt.value += value;
}
function validateValue(value) {
    if (value == "/") {
        return value;
    }
    if (value == "*") {
        return value;
    }
    if (value == "-") {
        return value;
    }
    if (value == "+") {

        return value;
    }

    if (parseInt(value) >= 0 && parseInt(value) <= 9) {
        return value;
    }
    return "";
    // body...
}
function ans(value) {
    var holder = 0;
    var displayTxt = document.getElementsByTagName("input")[0]
    holder += eval(displayTxt.value);
    displayTxt.value = "";
    displayTxt.value += holder;
}
function syntax(value) {
    var holder = " ";
    var displayTxt = document.getElementsByTagName("input")[0]
    displayTxt.value = "";
    holder += "Ooops! Syntax ERROR ";
    displayTxt.value += holder;
    console.log(holder);
}