document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("form").addEventListener("submit", adddetails);

  function adddetails(e) {
      e.preventDefault();
      console.log("submitted");

      let fName = document.getElementById("firstName")
      let lName = document.getElementById("lastName")
      let password = document.getElementById("password")
      let confirms = document.getElementById("confirm")
      let email = document.getElementById("email")
      let surname = document.getElementById("surname")
  }

      let object = {
          First: fName.value,
          Last: lName.value,
          Password: password.value,
          Confirm: confirms.value,
          Email: email.value,
          Surname: surname.va
      };

      fetch('http://localhost:3000/singUp', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(object)
      })
      .then(response => response.json())
      .then(data => {
          console.log('Success:', data);
      })
});





