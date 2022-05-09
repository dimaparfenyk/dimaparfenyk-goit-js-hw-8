import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', throttle(onFormInput, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

function onFormInput(evt){
    const personalData = {
    email: feedbackForm.email.value,
    message: feedbackForm.message.value,
};
    
  localStorage.setItem('feedback-form-state', JSON.stringify(personalData));
};

function onFormSubmit(evt) {
    
    evt.preventDefault();

    const personalData = {
    email: feedbackForm.email.value,
    message: feedbackForm.message.value,
};
   
    evt.currentTarget.reset();
    console.log(personalData);
    localStorage.removeItem('feedback-form-state');
};

function checkFeedbackData() {
    const feedbackData = JSON.parse(localStorage.getItem('feedback-form-state'));
   
//     const data = JSON.parse(localStorage.getItem('feedback-form-state'));
//     const email = document.querySelector('.feedback-form input');
//   const message = document.querySelector('.feedback-form textarea');
  
if (feedbackData) {
    email.value = feedbackData.email;
    message.value = feedbackData.message;
  }
}
checkFeedbackData()

