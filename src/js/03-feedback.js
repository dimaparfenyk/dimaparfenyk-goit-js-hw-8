import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', throttle(onFormInput, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

let personalData = {};

function onFormInput(evt){
// console.log(evt);
    
  personalData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(personalData));
    
}

function onFormSubmit(evt) {
    
    evt.preventDefault();
    
    // const formData = new FormData(evt.currentTarget);
    // formData.forEach((value, name) => {
    //     console.log(name, value)
    // });
    
    evt.currentTarget.reset();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.removeItem('feedback-form-state');
};



