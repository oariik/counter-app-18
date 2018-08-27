
let counter = document.querySelector('.counter');

const lowerCount = document.querySelector('#lowerCountBtn');
const addCount = document.querySelector('#addCountBtn');


let count = 0;


addCount.addEventListener('click', incrementCounter);
lowerCount.addEventListener('click', decrementCounter);


function incrementCounter () {
        count++;
        counter.innerHTML= count;
        if(counter.innerHTML > 0) {
            counter.style.color = 'blue';
        }else if(counter.innerHTML === '0') {
            counter.style.color = 'white';
        }
}


function decrementCounter () {
        count--;
        counter.innerHTML= count;
        if(counter.innerHTML < 0) {
            counter.style.color = 'red';
        }else if(counter.innerHTML === '0') {
            counter.style.color = 'white';
        }

}


