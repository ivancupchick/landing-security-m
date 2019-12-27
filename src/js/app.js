import sayHello from './lib/sayHello';

sayHello();

const mobileMenu = document.querySelector('.mobile-menu'); // div  > nav > a

const mobileButton = document.querySelector('.nav-left'); // div > a

mobileButton.addEventListener('click', (e) => {
  if (mobileMenu.style.display === 'flex') {
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'flex';
  }
});

mobileMenu.addEventListener('click', (e) => {
  mobileMenu.style.display = 'none';
});

const orderForm = document.querySelector('.call-form');
const orderButton = document.getElementById('orderForm');

orderButton.addEventListener('click', (e) => {
  if (orderForm.style.display === 'flex') {
    orderForm.style.display = 'none';
  } else {
    orderForm.style.display = 'flex';
  }
});

orderForm.addEventListener('click', (e) => {
  if (e.target.classList.contains('call-form')) {
    orderForm.style.display = 'none';
  }
});


const callButton = document.getElementById('callButton'); // отправка письма на сервер

const nameField = document.getElementById('name');
const phoneField = document.getElementById('phone'); //
