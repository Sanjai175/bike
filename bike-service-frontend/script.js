 //navbar for moblie and lap navgition bar
  function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("upSliderBtn").style.display = "block";
  } else {
    document.getElementById("upSliderBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; /* For Safari */
  document.documentElement.scrollTop = 0; /* For Chrome, Firefox, IE and Opera */
}


const userData = {
  email: 'velpradeep.vp1@gmail.com',
  password: 'pradeep03'
};

fetch('http://localhost:3003/signup', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(userData)
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

  app.get('/signup', (req, res) => {
    // Render a signup form or a signup page here
    res.send('Signup page');
});

document.getElementById('signup-form').addEventListener('submit', async function(event) {
  event.preventDefault();

  const formData = new FormData(this);
  const email = formData.get('email');
  const password = formData.get('password');

  try {
      const response = await fetch('http://localhost:3003/signup', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({email, password })
      });
      const data = await response.json();
      console.log(data); // You can handle the response data here
  } catch (error) {
      console.error('Error:', error);
  }
});
