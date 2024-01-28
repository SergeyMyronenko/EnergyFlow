import axios from 'axios';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const feedbackFormData = "feedback-form-state";
const form = document.querySelector('.footer-subscription');
const emailInput = form.querySelector('.input-footer');

function displayErrorMessage(message) {
    Swal.fire({
  position: "center",
  icon: "error",
  title: "Enter a valid email!",
  showConfirmButton: false,
  timer: 2000
});
}

function displaySuccessfulMessage(message) {
   Swal.fire({
  position: "center",
  icon: "success",
  title: "Congratulations, you have successfully subscribed!",
  showConfirmButton: false,
  timer: 2000
});
}

const fetchSubscription = async(email) => {
    try {
        const response = await axios.post('https://energyflow.b.goit.study/api/subscription', { email });
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

const validityСheck = async (event) => {
    event.preventDefault();
    const footerEmail = emailInput.value.trim();
    if (!emailPattern.test(footerEmail)) {
        displayErrorMessage('Enter a valid email!');
    } else {
        try {
            await fetchSubscription(footerEmail);
            displaySuccessfulMessage('Successful subscription!');
        } catch (error) {
            displayErrorMessage('Error subscribing: ' + error.message);
        }
        localStorage.removeItem(feedbackFormData);
        form.reset();
    }
}

form.addEventListener('submit', validityСheck);

form.addEventListener('input', (event) => {
    const footerEmail = emailInput.value.trim();
    const combinedData = JSON.stringify({footerEmail});
    localStorage.setItem(feedbackFormData, combinedData);
});