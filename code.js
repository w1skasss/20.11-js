// 485 1
// function setText(selector, text) {
//     let elem = document.querySelector(selector);
//     elem.textContent = text;
// }
// setText('#elem1', 'text1');
// setText('#elem2', 'text2');

// 485 2
// function setAttr(selector, attrName, attrValue) {
//     const element = document.querySelector(selector);
//     if (element) {
//         element.setAttribute(attrName, attrValue);
//     } else {
//         console.error('Element with selector ' + selector + ' not found');
//     }
// }
// setAttr('#elem', 'class', 'newClass');

// 486 1
// function appendText(selector, text) {
//     const elements = document.querySelectorAll(selector);
//     if (elements.length > 0) {
//         elements.forEach(element => {
//             element.textContent += text;
//         });
//     } else {
//         console.error('Elements with selector ' + selector + ' not found');
//     }
// }
// setAttr('#elem', 'class', 'newClass');
// appendText('.class', ' New Text');

// 487 1
// function setAttr(selector, attrName, attrValue) {
//     const element = document.querySelector(selector);
//     if (element) {
//         element.setAttribute(attrName, attrValue);
//     } else {
//         console.error('Element with selector ' + selector + ' not found');
//     }
// }
// function appendText(selector, text) {
//     const elements = document.querySelectorAll(selector);
//     if (elements.length > 0) {
//         elements.forEach(element => {
//             element.textContent += text;
//         });
//     } else {
//         console.error('Elements with selector ' + selector + ' not found');
//     }
// }
// setAttr('#elem', 'class', 'newClass');
// appendText('.class', ' New Text');
// appendText('p', '!');

// 488 1
// function setAttr(selector, attrName, attrValue) {
//     const element = document.querySelector(selector);
//     if (element) {
//         element.setAttribute(attrName, attrValue);
//     } else {
//         console.error('Element with selector ' + selector + ' not found');
//     }
// }
// function appendText(selector, text) {
//     const elements = document.querySelectorAll(selector);
//     if (elements.length > 0) {
//         elements.forEach((element, index) => {
//             element.textContent = (index + 1) + '. ' + element.textContent;
//         });
//     } else {
//         console.error('Elements with selector ' + selector + ' not found');
//     }
// }
// setAttr('#myElement', 'class', 'newClass');
// appendText('.myClass', ' New Text');
// appendText('p', '!');
  
// 489 1
// function appendText(element, text) {
//     element.innerHTML += text;
// }
// const element = document.getElementById('myElement');
// appendText(element, 'Appended Text');

// 489 2
// function appendText(element, text) {
//     element.innerHTML += text;
// }
// const paragraphs = document.getElementsByTagName('p');
// for (let i = 0; i < paragraphs.length; i++) {
//     appendText(paragraphs[i], '!');
// }

// 489 3
// function setValue(input, text) {
//     input.value = text;
// }
// const inputElement = document.getElementById('myInput');
// setValue(inputElement, 'Hello, World!');
  
// 490 1
// function appendText(elements, text) {
//     elements.forEach(element => {
//         element.textContent += text;
//     });
// }
// const paragraphs = document.querySelectorAll('p');
// appendText(paragraphs, ' New Text Added!');

// 490 2
// function appendElem(ulElement, text) {
//     const li = document.createElement('li');
//     li.textContent = text;
//     ulElement.appendChild(li);
// }
// const ul = document.querySelector('ul');
// appendElem(ul, 'New List Item Added!');

// 490 3
// function appendElem(ulElement, text) {
//     const li = document.createElement('li');
//     li.textContent = text;
//     ulElement.appendChild(li);
// }
// const ul = document.querySelector('ul');
// const array = ['Item 1', 'Item 2', 'Item 3'];
// array.forEach(item => {
//     appendElem(ul, item);
// });

// 491 1
// function createTable(rows, cols, parent) {
//     let table = document.createElement('table');
//     for (let i = 0; i < rows; i++) {
//         let row = table.insertRow();
//         for (let j = 0; j < cols; j++) {
//             let cell = row.insertCell();
//             cell.textContent = Row ${i + 1}, Col ${j + 1};
//         }
//     }
//     parent.appendChild(table);
// }
// const container = document.querySelector('.container');
// createTable(3, 4, container);

// 492 1
// function createTable(rows, cols) {
//     const table = document.createElement('table');
//     for (let i = 0; i < rows; i++) {
//         const row = table.insertRow();
//         for (let j = 0; j < cols; j++) {
//             const cell = row.insertCell();
//             cell.textContent = Row ${i + 1}, Cell ${j + 1};
//         }
//     }
//     return table;
// }

// 492 2
// function createTable() {
//     var table = document.createElement('table');
//     var tbody = document.createElement('tbody');
//     for (var i = 1; i <= 3; i++) {
//         var tr = document.createElement('tr');
//         var td = document.createElement('td');
//         td.appendChild(document.createTextNode(i));
//         tr.appendChild(td);
//         tbody.appendChild(tr);
//     }
//     table.appendChild(tbody);
//     document.getElementById('elem').appendChild(table);
// }
// createTable();

// 493 1
// let div = document.querySelector('#elem');
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let table = createTableByArr(arr);
// div.appendChild(table);
// function createTableByArr(arr) {
//     var table = document.createElement('table');
//     var tbody = document.createElement('tbody');
//     for (var i = 0; i < arr.length; i++) {
//       var row = document.createElement('tr');
//       for (var j = 0; j < arr[i].length; j++) {
//             var cell = document.createElement('td');
//             cell.textContent = arr[i][j];
//             row.appendChild(cell);
//         }
//         tbody.appendChild(row);
//     }
//     table.appendChild(tbody);
//     return table;
// }
// let div = document.querySelector('#elem');
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let table = createTableByArr(arr);
// div.appendChild(table);

// 497 1
// function calculateSum() { 
//     let num1 = +document.getElementById('num1').value; 
//     let num2 = +document.getElementById('num2').value; 
//     let num3 = +document.getElementById('num3').value; 
//     let sum = num1 + num2 + num3; 
//     console.log('The sum is: ' + sum); 
// } 
// document.getElementById('calculate').addEventListener('click', calculateSum);

// 501 1
// (function() { 
//     let str1 = 'переменная модуля'; 
//     let str2 = 'переменная модуля'; 
//     let str3 = 'переменная модуля'; 
//     function func1() { 
//         alert('функция модуля'); 
//     } 
//     function func2() { 
//         alert('функция модуля'); 
//     } 
//     function func3() { 
//         alert('функция модуля'); 
//     } 
//     window.func1 = func1;
//     window.func2 = func2;
//     window.str1 = str1;
// })();