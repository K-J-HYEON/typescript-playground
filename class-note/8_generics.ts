// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText(10); //  number  10
// logText('하이'); // string 하이
// logText(true); // boolean true

function logText<T>(text: T): T {
    console.log(text);
    return text;
}
logText<string>('하이');