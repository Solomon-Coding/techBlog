const ingredients = document.querySelector('#ingredients').textContent;
const instructions = document.querySelector('#instructions').textContent;
async function emailFormHandler(event) {
  event.preventDefault();

  const recipient = document.querySelector('#emailRecipient').value;
  const subject = document.querySelector('#emailSubject').value;
  const note = document.querySelector('#emailMessage').value;
  const message = `<h3>${note}</h3><br><u>Ingredients:</u><p>${ingredients}</p><br><u>Instructions:</u><p>${instructions}</p>`;

  const response = await fetch(`/api/recipes/send`,{
    method: 'POST',
    body: JSON.stringify({
      recipient,
      subject,  
      message,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    // alert('Email has been sent');
  } else {
    alert('Email has been sent');
    // alert('Failed to send email');
  }
}

document
  .querySelector('.emailForm')
  .addEventListener('submit', emailFormHandler);
