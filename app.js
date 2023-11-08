// จงเขียน Function แปลงข้อมูลที่เป็น String ไปเป็น Array


function strToArr(word) {
    let toArr = word.split('')
    for (let i = 0; i < toArr.length; i++) {
        colArr.push(toArr[i])
    }
    return toArr;
}

const colArr = [];

console.log('god');
console.log(strToArr('god'));
console.log('cow');
console.log(strToArr('cow'));
console.log('fine');
console.log(strToArr('fine'));
console.log('possible');
console.log(strToArr('possible'));
console.log(colArr);


function splitToArr(word) {
    return word.split('');
}

console.log('');
console.log(splitToArr('JavaScript'));