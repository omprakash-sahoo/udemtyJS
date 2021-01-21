'use strict';
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnCloseModal = document.querySelector('.close-modal');
let btnOpenModal = document.querySelectorAll('.show-modal');

const closeModel = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
const openModel = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
for(let i = 0;i < btnOpenModal.length;i++){
    // console.log(btnOpenModal[i]);
    btnOpenModal[i].addEventListener('click',openModel);   
}

btnCloseModal.addEventListener('click',closeModel);
overlay.addEventListener('click',closeModel);
document.addEventListener('keydown',function(e){
    if(e.key == 'Escape' && !modal.classList.contains('hidden')){
        //Checking modal containg class or not
            closeModel();
    }
})

