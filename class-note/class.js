function Person(name, age) {
    this.name = name;
    this.age = age;
}

const capt = new Person('캡틴', 100);



class Person {
    constructor(name, age) {
        console.log('생성 되었습니다');
        this.name = name;
        this.age = age;
    }
}

const jay = new Person('재현', 27);
console.log('jay');
