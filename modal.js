
const btns = document.querySelectorAll('.modal_open-btn');
const spans = document.querySelectorAll('.close');
const modals = document.querySelectorAll('.modal');

// Listen for click on open button and open the window
btns.forEach((btn, ind) => {
btn.addEventListener('click', e => {modals[ind].style.display = 'block'});
});

// Listen for click on cross and close the window
spans.forEach((span, ind) => {
//  span.onclick = () => (modals[ind].style.display = 'none');
span.addEventListener('click', e => {modals[ind].style.display = 'none'});
});


// Listen for outside click and close the modal window
window.addEventListener('click', e => {
  modals.forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  })});
