interface User {
    age: number;
    name: string;
}


// 변수에 활용한 인터페이스
var seho: User = {
    age: 33,
    name : '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}
const jay = {
    name: '재현',
    age: 27
}
getUser(jay);

