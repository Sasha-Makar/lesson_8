// Напишіть код,  котрий :
// 1-- отримує текст з параграфа з id "content"

let idContent = document.getElementById('content');
console.log(idContent.innerText);

// 2-- отримує текст з блоку з id "rules"

let idRules = document.getElementById('rules');
console.log(idRules.innerText);

// 3-- замініть текст параграфа з id 'content' на будь-який інший

let pText = document.getElementById('content');
pText.innerText = 'okten is cool';
console.log(pText.innerText);

// 4-- замініть текст параграфа з id 'rules' на будь-який інший

let pText2 = document.getElementById('rules');
pText2.innerText = 'asdqwe';
console.log(pText2.innerText);


// 5-- змініть кожному елементу колір фону на червоний

let children = document.body.children;
for (const child of children) {
    console.log(child);
    child.style.background = 'red';
}


// 6-- змініть кожному елементу колір тексту на синій

let children1 = document.body.children;
for (const child of children1) {
    child.style.color = 'blue';
}
// 7-- отримати весь список класів елемента з id=rules і вивести їх в console.log

let rules = document.getElementById('rules');
console.log(rules.classList);

// 8-- поміняти колір тексту у всіх елементів fc_rules на червоний

let fc_rules = document.getElementsByClassName('fc_rules');
for (const item of fc_rules) {
    item.style.background = 'red';
    // item.style.background = 'black';
};








