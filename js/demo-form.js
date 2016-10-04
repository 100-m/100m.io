var btn = document.querySelector(".button-demo")
var form = document.querySelector(".form-demo")
btn.onclick = function() {
  form.className += " opened"
  btn.innerHTML = "Send"
  btn.type = "submit"
}
form.onsubmit = function(e) {
  e.preventDefault()
  fetch(form.action, {
    method: form.method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      mode: 'cors',
      body: JSON.stringify({
        email: form
          .querySelector('[name="email"]')
          .value,
        phone: form
          .querySelector('[name="phone"]')
          .value
      })
    })
    .then(function() {
      form.innerHTML = '<span>We will contact you ASAP !</span>'
    })
    .catch(function() {
      form.innerHTML = '<span>Error</span>'
    })
}
smoothScroll.init();
