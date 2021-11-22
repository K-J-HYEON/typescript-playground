const a = 'abc';

function getB(b = 10) {
    let c = 'hi';
    return b + c;
}

10 + '10' // 1010

// 타입 추론 기본2
interface Dropdown<T> {
    value: T;
    title: string;
}

let shoppingItem: Dropdown<string> = {
    value: 'abc',
    title: 'hello'
}

// 타입 추론 기본 3
interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
    description: string;
    tag: K;
}

const detailedItem: DetailedDropdown<number> = {
    title: 'abc',
    description: 'ab',
    value: 'a',
    tag: 'a',
}


// Best Common Type

const arr = [1, 2, true, 'a'];
