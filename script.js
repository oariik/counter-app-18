const sendBtn = document.querySelector('#sendBtn');
const messageOut = document.querySelector('#messageOut');
const messageIn = document.querySelector('#messageIn');

sendBtn.addEventListener('click',sendMsg);

function sendMsg(){

    let content = messageIn.value;
    console.log(content);   
    if(content === ' ') {
        alert ('Please enter a value')
    }else {

        messageOut.innerHTML = content;
        messageIn.value = '';
    }
}