// 타입 단언(type assertion)

const a;
a = 20;
a = 'a'
const b = a as string;

// DOM API 조작
// <div id="app">hi</div>


const div = document.querySelector('div');
if (div) {
    div.innerText
}