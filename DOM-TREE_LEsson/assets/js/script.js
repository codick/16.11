// Задание №5

// function go(){
//     elem = document.getElementById('test');
//     alert(elem.value);
// }

// №6

// function go(){
//     elem = document.getElementById('test');
//     test.value = 'Ой, я поменял свой текст!'
// }

// №7

// function go(){
//     elem = document.getElementById('test');
//     elem.src = 'assets/img/2.jpg';
// }

// №8

// function go(input){
//     console.log(input);
// }


// №9

// function go(input){
//     input.value = 'Ой, я поменял свой текст!';
// }


// №10 

// function go(input){
//     input.value = 'Ой, я поменял свой текст!';
// }

// function go_2(input){
//     input.value = 'Ой, поменял еще раз!';
// }

// №11

// function go(input){
//     input.value = 'Ку-ку';
// }


// №12

// function go(input){
//     input.value = 'О, теперь на меня больше не нажать!';
//     input.disabled = true;
// }

// №13

// function over(input){
//     input.src = 'assets/img/2.jpg';
// }
// function out(input){
//     input.src = 'assets/img/1.jpg';
// }

// №14

// function go(){
//     let input = document.querySelector('#test');
//     input.style = 'color:red; width:300px;'
// }

// №15

// function go(){
//     let input = document.querySelector('#test');
//     input.remove();
// }

// function out(){
//    if (document.querySelector('#test') == null) {
//     let input = document.createElement('input');
//     input.id = 'test';
//     input.value = 'Ку-ку';
//     input.type = 'text';
//     document.body.insertAdjacentElement(
//         'afterbegin',input)
//    }
// }

function go(){
    let input = document.querySelector('#test');
    input.value = 'Ой, я поменял свой текст и css';
    input.type = 'text';
    input.style = 'color: red; width: 300px; height: 50px;border: 1px solid red; border-radius: 25px; display: flex; flex-direction:column; align-items:flex-start; '
    
}