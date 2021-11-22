// interface Person {
//     name: string;
//     age: number;
// }


// type은 어느 곳에나 다 쓸 수 있다.
type Person = {
    name: string;
    age: number;
}

const jay: Person = {
    name: 'jay',
    age: 27
}

type MyString = string
const str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean }
function getTodo(todo: Todo) {

}