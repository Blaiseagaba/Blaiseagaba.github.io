document.querySelectorAll('form[data-formspree]').forEach(form => {
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(form);
    const redirectUrl = form.dataset.redirect || window.location.pathname;

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        // Redirect to the same page with success parameter
        window.location.href = `${redirectUrl}?success=true`;
      } else {
        throw new Error('Form submission failed');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again.');
    });
  });
});