import { func } from './util.js';

console.log('works')
$('#superBtn').click(() => func('FCK YEAH'));

Array.prototype.get = function(position) {
    try {
        return this[position];
    } catch {
        return undefined;
    }
}

const arr = [];
const q = arr.get(0);

let dotDiv = $('<div id="dot">DOT</div>');
const dot = {};

//const arr = [2, 9, 18, 4, 1, 5, 19, 6, 3, 1, 2, 8]; // 1 1 2 2 3 4 5 6 8 9 18 19
//const arr = [3, 3, 4, 4, 5, 5]; // 1 1 2 2 3 4 5 6 8 9 18 19
//const arr = [1, 12, 4, 8, 3, 1, 5]; // 1 1 3 4 5 8 12
arr.sort((a, b) => a - b);

let tri = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 1 + i; j < arr.length; j++) {
        const a = arr[i];
        const b = arr[j];
        const sum = a + b;
        //const subar = arr.slice().splice(j + 1);
        const c = arr[i+2];
        tri += c < sum;
        //tri += subar.filter(c => a + b > c && a + c > b && c + b > a).length
    }
}
console.log(`tris = ${tri}`)

const ar = [2, 3, 7, 4, 6, 1, 5, 8, 9];
//const sorted = sordOdd(ar);
console.log(sorted);

function sordOdd(ar) {
    const odds = ar.filter(e => (e % 2)).sort((a, b) => a - b);
    let i = 0;
    return ar.map(e => e % 2 ? odds[i++] : e);
}

const inputStr = 'AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBB';
//const newStr = rle(inputStr);
const isEq = newStr === 'A4B3C2XYZD4E3F3A6B8'
console.log(newStr);
console.log(isEq);

function rle(str) {
    let result = '';

    const notMySolution = () => {
        let prev = str[0];
        let counter = 0;
        for (const x of str) {
            if (x === prev) {
                counter++;
            } else {
                result += prev + (counter > 1 ? counter : '');
                prev = x;
                counter = 1;
            }
        }

        result += prev + (counter > 1 ? counter : '');

        return result;
    }

    const mySolution = () => {
        for (let i = 0; i < str.length;) {
            let count = 1;
            const counter = (chr, chrI) => {
                if (chrI == str.length) {
                    return;
                }

                const nextChr = str[chrI];
                if (nextChr !== chr) {
                    return;
                }

                count++;
                return counter(nextChr, ++chrI);
            }
            let chr = str[i];
            counter(chr, i + 1);

            if (count > 1) {
                result += chr + count;
            } else {
                result += chr;
            }
            i += count;
        }
        return result;
    }

    return mySolution();
}
const lineAr = [1, 4, 3, 0, 4, 5, 4];
const res = lineAr.reduce((acc, cur) => (cur % 2 == 0) ? acc += Math.sqrt(cur) : acc, 0);
console.log(res);

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 10; j++) {
        if (i === 5 && j === 5) {
            break;
        }

        console.log(i, j);
    }
}

function move(event) {
    const keyCode = event.keyCode;
    switch (keyCode) {
        case 37: moveTo('left', 'minus'); break;
        case 38: moveTo('top', 'minus'); break;
        case 39: moveTo('left'); break;
        case 40: moveTo('top'); break;
    }
}

const moveTo = (to, exp) => {
    const oldValue = $('#player').css(`margin-${to}`).replace('px', '');
    const oldValueNumber = Number(oldValue);
    const newValue = exp ? oldValueNumber - 10 : oldValueNumber + 10;
    $('#player').css(`margin-${to}`, newValue);
    drawDot();
}

const drawDot = () => {
    if (!dot.x) {
        dot.x = random();
        dot.y = random();
    } else {
        dotDiv = $('#dot');
        dotDiv.remove();
    }
    dotDiv.css('padding-top', dot.y);
    dotDiv.css('padding-left', dot.x);
    dotDiv.appendTo('#field');
}

const random = () => {
    return Math.floor(Math.random() * 360) + 1;
}

const req = () => {
    let q = 10;
    return new Promise(resolve => {
        setTimeout(() => {
            q = 100000
            resolve(q)
            console.log("slow promise is done")
        }, 2000)
    })
}

async function asyncf(container) {
    const q = await req();
    console.log('waiting')
    container.text(q)
    console.log('ogo')
    return q;
}

function counter (container) {
    const asf = asyncf(container);
    let q = 10;
    for (let i = 0; i < 99990; i++) {
        if (i === 99989) {
            q = 99991;
        }
    }
    container.text(q)
}