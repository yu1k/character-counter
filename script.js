"use strict";

function message(){
    var input_message = document.getElementById("input_message").value;
    const message_length = input_message.length;
    const result = ("入力された文字数は「" + message_length + "」文字です。");
    document.getElementById("output_message").innerHTML = result;
}

function main(){
    message();
}
