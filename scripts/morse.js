import {MorseCodeDic} from "./morse-code.js";

const dic = new MorseCodeDic();

function stringifyMorse(morse) {
    let str = '';
    for (let m of morse) {
        str += `${m}_`;
    }
    return str.slice(0, -1);
}

function convertTextToMorse() {
    const textBox = document.getElementById('textIn');
    const val = textBox.value;
    if (val == null || val.trim() === '') {
        return;
    }
    const morse = dic.convertTextToMorse(val);
    document.getElementById('morseOut').innerHTML = stringifyMorse(morse);
}

function convertMorseToText(){
    const textBox = document.getElementById('textIn');
    const val = textBox.value;
    if (val == null || val.trim() === '') {
        return;
    }
    document.getElementById('morseOut').innerHTML = dic.convertMorseToText(val);
}

function init() {
    document.getElementById('convBtn').addEventListener('click', () => {
        convertTextToMorse();
    })
    document.getElementById('convBtn2').addEventListener('click', () => {
        convertMorseToText();
    })
}

document.addEventListener('DOMContentLoaded', (event) => {
    init();
});