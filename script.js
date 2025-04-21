if (document.getElementById('contact-form')) {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        // Redirect to contact.html with success parameter
        window.location.href = 'contact.html?success=true';
      } else {
        throw new Error('Form submission failed');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again.');
    });
  });
}