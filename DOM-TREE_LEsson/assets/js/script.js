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

// №16

// function go(){
//     let input = document.querySelector('#test');
//     input.value = 'Ой, я поменял свой текст и css';
//     input.type = 'text';
//     input.style = 'color:red; width:300px; height:50px; border-radius:10px; display:flex; flex-direction:column; align-items:flex-start; margin-bottom: 15px;'
    
// }

// №17

// function go(){
//     const button_First = document.getElementById('test');
//     const button_Second = document.getElementById('test2');
//     button_First.value = 'О, теперь вы не можете на меня нажимать!';
//     button_First.disabled = true;
//     button_Second.style = 'display:flex; flex-direction:column; margin-top:15px;'
// }

// function out(){
//     const button_First = document.getElementById('test');
//     const button_Second = document.getElementById('test2');
//     button_First.value = 'О, на меня снова можно нажимать!';
//     button_First.disabled = false;
//     button_Second.style.display = 'none';
// }

// №18

function go(){
    const counter = document.getElementById('test');
    counter.value = parseInt(counter.value) + 1;
    counter.style = 'width: 200px; margin-bottom: 20px;'
}



