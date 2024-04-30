
// Button Alert

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible text-center fw-bold" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    // toggle the alert
    if (alertPlaceholder.children.length === 0) {
      appendAlert('Hello World!', 'success')
    } else {
      alertPlaceholder.innerHTML = '';
    }
  })
}
// Form setting 

function handleSubmit(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  // Redirect to the home page (Replace 'home.html' with the actual URL of your home page)
  window.location.href = 'index.html';
}

// Function to handle form reset
function handleReset() {
  // Reset the form (Replace 'contact-form' with the actual ID of your form)
  document.getElementById('contact-form').reset();
}
// PopOvers Button

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))