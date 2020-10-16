'use strict'
let textCont = document.querySelector('.text-content');
let style = document.querySelector('.style');
let textarea = document.querySelector('textarea');
let text = document.querySelector('.text');
// за допомогою функії addEventListene ми додаємо подію клік на елемент #edit. 
// При події клік буде відбуватися такі дії як видалення класу hide з нашого блоку textarea і додавання класу hide до блоку style
// ТОбто після події клік: повинен зяявитися блок textarea з певним текстом який ми копіюємо з нашого блоку .text-content і зникнути блок .style
document.querySelector('#edit').addEventListener('click', function () {
    document.querySelector('.textarea').classList.remove('hide')
    style.classList.add('hide')
    textarea.value = textCont.innerHTML;

})


// Прри події клік на елемент #save, текст який знаходиться в нашій textarea буде переноситися в наш блок text-content
// Після чого весь вміст тегу textarea буде видалений
document.querySelector('#save').addEventListener('click', function () {
    textCont.innerHTML = textarea.value;
    document.querySelector('.textarea').classList.add('hide')
    //     if(textCont.children.length > 6){
    //         textCont.children[5].remove();
    //    }
})




// Викнонується все те саме, що і при натисканні на елемент #edit тільки навпаки і без копіювання тексту в блок textarea
// Замість копіювання тексту появляється блок style у котрому реалізований свій функціонал
document.querySelector('#style').addEventListener('click', function () {
    style.classList.remove('hide')
    document.querySelector('.textarea').classList.add('hide')
})


const f1 = document.forms.f1
// У цьому циклі ми реалізовуємо клік на radio button які знаходяться у формі f1
// При натисканні на і-тий елемент форми виконується стилізація блоку .text, а саме зміна розміру шрифту
// Ця зміна відбувається присвоєнням до стилю fontSize значення і-тового елементу
for (let i = 0; i < 5; i++) {
    f1.elements[i].addEventListener('click', function () {
        text.style.fontSize = f1.elements[i].value + 'px';
    })

}


const f2 = document.forms.f2
// При кліку на 0 checkbox форми f2 буде відбуватися зміна ваги шрифту з нормального на більш жирніший
// При кліку на 0 checkbox форми f2 і зняття позначки checked буде відбуватися зміна ваги шрифту з більш жирнішого на нормальний
f2.elements[0].addEventListener('click', function () {
    if (f2.elements[0].checked) {
        text.style.fontWeight = 'bolder'
    } else {
        text.style.fontWeight = 'normal'
    }
})


// При кліку на 1 checkbox форми f2 буде відбуватися зміна стилю шрифту з нормального накурсивний
// При кліку на 1 checkbox форми f2 і зняття позначки checked буде відбуватися зміна ваги шрифту з курсивного на нормальний
f2.elements[1].addEventListener('click', function () {
    if (f2.elements[1].checked) {
        text.style.fontStyle = 'italic'
    } else {
        text.style.fontStyle = 'normal'
    }
})


const f3 = document.forms.f3
// У цій формі використовується select, тому ми додаємо клік на елемент select і після вибору певного option буде змінюватися шрифт з одного виду на інший всього є 4 види шрифтів в тезі select
// Присвоєння відбувається за допомогою event.target.value, тобто з елемента на котрий виконали клік, береться його значення і присвоюється блоку text
f3.family.addEventListener('click', function () {
    text.style.fontFamily = event.target.value;
})

let colBl = document.querySelector('.colBlock');
let colBl1 = document.querySelector('.colBlock1');
// При кліку на 0 елемент форми f4 відбувається зміна стилю display з none на flex, таким чином появляється блок colBlock, який міститьт 9 кольорових блоків у собі
// МИ додаємо клік на сам блок, таким чином коли виконається клін на один з 9 блоків, тоді відбудеться присвоєння стилю backgroundColor блоку на котрий натиснули, в стиль color шрифту блоку text-content
// Після цього наш блок colBlock зникає, оскільки до його стилю display ми додали значення none
document.forms.f4.elements[0].addEventListener('click', function () {
    colBl.style.display = 'flex';
    colBl1.style.display = 'none';

    colBl.addEventListener('click', function () {
        console.log(document.querySelector('.first').style.backgroundColor);
        textCont.style.color = event.target.style.backgroundColor;
        colBl.style.display = 'none';
    })
})


// При кліку на 1 елемент форми f4 відбувається зміна стилю display з none на flex, таким чином появляється блок colBlock1, який міститьт 9 кольорових блоків у собі
// Ми додаємо клік на сам блок, таким чином коли виконається клін на один з 9 блоків, тоді відбудеться присвоєння стилю backgroundColor блоку на котрий натиснули, в стиль backgroundColor блоку text
// Після цього наш блок colBlock1 зникає, оскільки до його стилю display ми додали значення none
document.forms.f4.elements[1].addEventListener('click', function () {
    colBl1.style.display = 'flex';
    colBl.style.display = 'none';
    colBl1.addEventListener('click', function () {
        console.log(document.querySelector('.first').style.backgroundColor);
        text.style.backgroundColor = event.target.style.backgroundColor;
        colBl1.style.display = 'none';

    })
})
let some = document.querySelector('.some');
// Ми створюємо змінну tablist в яку присвоюємо значення форми table-list до якої додаємо подію клік 
// Далі задаємо умови у яких буде визначно на що був зроблений клік і в злежності від того на котрий елемент був зроблений клік тоді одному з двох бдлків задастся значення displey flex  а іншому display none
const tablist = document.forms['table-list']
tablist.addEventListener('click', function () {
    if (event.target == tablist.elements[0]) {
        document.querySelector('.tableChoose').classList.remove('hide')
        document.querySelector('.listChoose').classList.add('hide')

    } else if (event.target == tablist.elements[1]) {
        document.querySelector('.listChoose').classList.remove('hide')
        document.querySelector('.tableChoose').classList.add('hide')
    }
})


// Замість того щоб робити фокус для кожного окремого елементу в css  можна зробити для всіх елементів форми за допомогою функції addEventListener в якій прописуємо значення focus
// А кожному елементу форми задати значення можна через масив
// Так само замість onfocus  можна використати addEventListener і в ньому використати blur  і задати початкові параметри
// Так само  кожному елементу форми задати значення можна через масив
const list = document.forms.list;
const table = document.forms.tableCount;
const tableStyle = document.forms.tableStyle;

function focus(formName) {
    for (let i = 0; i < formName.elements.length; i++) {
        formName.elements[i].addEventListener('focus', function () {
            formName.elements[i].style.outline = 'none';
            formName.elements[i].style.borderRadius = 5 + 'px';
            formName.elements[i].style.borderWidth = 1 + 'px';
            formName.elements[i].style.borderStyle = 'solid';
            formName.elements[i].style.borderColor = 'blue';
            formName.elements[i].style.boxShadow = '0 0px 1px 2px rgba(0, 0, 255, 0.53)';


        })
    }
    for (let i = 0; i < formName.elements.length; i++) {
        formName.elements[i].addEventListener('blur', function () {
            formName.elements[i].style.outline = 'none';
            formName.elements[i].style.borderRadius = 5 + 'px';
            formName.elements[i].style.borderWidth = 1 + 'px';
            formName.elements[i].style.borderStyle = 'solid';
            formName.elements[i].style.borderColor = 'black';
            formName.elements[i].style.boxShadow = 'none';

        })
    }
}
focus(table)
focus(tableStyle)
focus(list)


// До кнопки button ми додаємо подію клік при котрій буде виконуватися цикл створення тегу tr а в цьому циклі ще є цикл для створення тегу td 
// За кількість tr i td відповідає значення table.tr.value table.td.value, котрі заповнюються в формі 
// також в циклі td ми присвоюємо створеному тегу td  параметри style які заповнюються в формі
// далі ми присвоюємо створені елементи в блок який є з параметром none  
// після цього з нашого блоку вж е значення переноситься в textarea 
// Ну і робимо щоб елементи зникли, тобто додаємо їм значення дісплей нон, а іншим щоб появилися remove клас hide 


document.querySelector('#button').addEventListener('click', function () {
    let t = document.createElement('table');
    console.log(+table.tr.value);
    for (let i = 0; i < table.tr.value; i++) {
        let trTag = document.createElement('tr');
        for (let j = 0; j < +table.td.value; j++) {
            let tdTag = document.createElement('td');
            tdTag.textContent = 'TD'
            tdTag.style.width = tableStyle.widthTd.value + 'px';
            tdTag.style.height = tableStyle.heightTd.value + 'px';
            tdTag.style.borderWidth = tableStyle.widthB.value + 'px';
            tdTag.style.borderStyle = `${tableStyle.typeB.value}`;
            tdTag.style.borderColor = `${tableStyle.colorB.value}`;
            trTag.appendChild(tdTag);

        }
        t.appendChild(trTag)
    }
    // some.insertAdjacentElement('beforeend', t);
    // debugger
    // textarea.value = textCont.innerHTML;
    // textarea.value += some.innerHTML;
    // some.innerHTML = ''
    textarea.value += t.outerHTML
    console.log(t.outerHTML);
    document.querySelector('.container').classList.remove('hide');
    document.querySelector('.addContainer').style.display = 'none';
    if (tablist.elements[0].checked) {
        tablist.elements[0].checked = false;
        document.querySelector('.tableChoose').classList.add('hide')
    } else if (tablist.elements[1].checked) {
        tablist.elements[1].checked = false
        document.querySelector('.listChoose').classList.add('hide')
    }
})
// До нашої кнопки add ми додаємо подію клік при котрій появляється новий блок а інші зникають - це все відбувається завдяки значенняв displey flex i remove hide
// І скидуємо значення всіх форм -  тобто таблиць і лістів
document.querySelector('#add').addEventListener('click', function () {
    document.querySelector('.container').classList.add('hide')
    document.querySelector('.addContainer').style.display = 'flex';
    document.querySelector('#td').value = '';
    document.querySelector('#tr').value = '';
    // table.tr.value = '';
    tableStyle.widthTd.value = '';
    tableStyle.heightTd.value = '';
    tableStyle.widthB.value = '';
    list.li.value = '';
    tableStyle.typeB.options[0].selected = true;
    tableStyle.colorB.options[0].selected = true;
    list.typeM.options[0].selected = true;
    // some.lastChild.remove()
})




//До кнопки button ми додаємо подію клік при котрій буде виконуватися цикл створення тегу li
// За кількість li відповідає значення list.li.value, котрі заповнюються в формі 
// також в циклі td ми присвоюємо створеному тегу td  параметри style які заповнюються в формі
// далі ми присвоюємо створені елементи в блок який є з параметром none  
// після цього з нашого блоку вже значення переноситься в textarea 
// Ну і робимо щоб елементи зникли, тобто додаємо їм значення дісплей нон, а іншим щоб появилися remove клас hide 
document.querySelector('#button1').addEventListener('click', function () {
    let listTag = document.createElement(list.typeM.value);
    for (let i = 0; i < list.li.value; i++) {
        let liTag = document.createElement('li');
        listTag.appendChild(liTag);
        liTag.textContent = `item${i}`;
        liTag.style.listStyleType = `${list.typeM.value}`;
    }
    if (tablist.elements[0].checked) {
        tablist.elements[0].checked = false;
        document.querySelector('.tableChoose').classList.add('hide')


    } else if (tablist.elements[1].checked) {
        tablist.elements[1].checked = false
        document.querySelector('.listChoose').classList.add('hide')
    }
    // some.insertAdjacentElement('beforeend', listTag);
   
    textarea.value += listTag.outerHTML
    document.querySelector('.container').classList.remove('hide')
    document.querySelector('.addContainer').style.display = 'none'


})