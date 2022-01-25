// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

document.getElementById('main_header').classList.add('sep_2021');


// b) робить шириниу елементу ul 400px

let tagName = document.getElementsByTagName('ul');
tagName[0].style.width = '400px';
tagName[0].style.border = '1px solid red';

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let linklistClass = document.getElementsByClassName('linkList');
for (let item of linklistClass) {
    item.style.border = '1px solid blue';
    item.style.width = '50%';
}
// d) отримує текст який зберігається в елементі з класом listElement2

let listElement2Text = document.getElementsByClassName('listElement2');
console.log(listElement2Text);
listElement2Text[0].innerText = 'okten';

// e) отримує всі елементи li та змінює ім колір фону на сірий

let tagLi = document.getElementsByTagName('li');
for (let li of tagLi) {
    li.style.margin = '2px';
    li.style.backgroundColor = 'silver';
}
// f) отримує всі елементи 'a' та додає їм клас anchor

let tagA = document.getElementsByTagName('a');
for (const item of tagA) {
    item.classList.add('anchor');
    console.log(item);
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let aElement = document.getElementsByTagName('a');
for (const a of aElement) {
    if (a.innerText.includes('link3')){
        a.style.fontSize = '40px';
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

for (const a of aElement) {
    a.classList.add('XXX');
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let classSub_header = document.getElementsByClassName('sub-header');
for (const item of classSub_header) {
    item.style.background = prompt('enter color: (red,green,blue');
}
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

for (let item of classSub_header) {
    if (item.innerText === 'content 2 segment'){
        item.style.color = prompt('your color is ?');
    }
}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let content1 = document.getElementsByClassName('content_1');
console.log(content1);
content1[0].innerText = prompt();

// l) отримати елементи p та змінити їм padding на 20px

let pList = document.getElementsByTagName('p');
for (const p of pList) {
    p.style.padding = '20px';
}


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let text2Class = document.getElementsByClassName('text2');
text2Class[0].innerText = 'semp-2021';
