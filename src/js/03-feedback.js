import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const STORAGE_KEY= "feedback-form-state";

feedbackForm.addEventListener('input', throttle(onFormInput, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

function onFormInput(evt){
    const FormData = {
    email: feedbackForm.email.value,
    message: feedbackForm.message.value,
};
    
  localStorage.setItem(STORAGE_KEY, JSON.stringify(FormData));
};

function onFormSubmit(evt) {
    
    evt.preventDefault();

    const FormData = {
    email: feedbackForm.email.value,
    message: feedbackForm.message.value,
};
   
    evt.currentTarget.reset();
    console.log(FormData);
    localStorage.removeItem(STORAGE_KEY);
};

function checkFeedbackData() {
    const feedbackData = JSON.parse(localStorage.getItem(STORAGE_KEY));
   
    const email = document.querySelector('.feedback-form input');
    const message = document.querySelector('.feedback-form textarea');
  
if (!feedbackData) {
        return;
    }
else {
    email.value = feedbackData.email;
    message.value = feedbackData.message;
  }
}
checkFeedbackData()

