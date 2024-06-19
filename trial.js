document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register');
  function patch(e){
          e.preventDefault()
          let fName = registerForm.querySelector('input[placeholder="First Name"]').value;
          let lName = registerForm.querySelector('input[placeholder="Last Name"]').value;
          let surname = registerForm.querySelector('input[placeholder="Surname"]').value;
          let email = registerForm.querySelector('input[placeholder="Email Address"]').value;
          let county = registerForm.querySelector('input[placeholder="county"]').value;
          let phone = registerForm.querySelector('input[placeholder="number"]').value;
          let birth = registerForm.querySelector('input[placeholder="birth"]').value;
          let residence = registerForm.querySelector('input[placeholder="where you live"]').value;
          let nationality = registerForm.querySelector('input[placeholder="nationality"]').value;
          let applied = registerForm.querySelector('input[placeholder="studied or applied"]').value;
          let disable = registerForm.querySelector('input[placeholder="please specify"]').value;
          let living = registerForm.querySelector('input[placeholder="years your living"]').value;
          let study = registerForm.querySelector('input[placeholder="College or University"]').value;
          let write = registerForm.querySelector('textarea[placeholder="write"]').value;
          let primary = registerForm.querySelector('input[placeholder="primary school"]').value;
          let pgrade = registerForm.querySelector('input[placeholder="primary grade"]').value;
          let pcertificate = registerForm.querySelector('input[placeholder="primary certificate"]').value;
          let secondary = registerForm.querySelector('input[placeholder="secondary school"]').value;
          let sgrade = registerForm.querySelector('input[placeholder="secondary grade"]').value;
          let scertificate = registerForm.querySelector('input[placeholder="secondary certificate"]').value;
          let title = registerForm.querySelector('input[placeholder="title"]').value; 
          let gender = registerForm.querySelector('input[placeholder="gender"]').value; 
          let wish = registerForm.querySelector('textarea[placeholder="wish"]').value;
          let career = registerForm.querySelector('textarea[placeholder="career"]').value;
          let course = registerForm.querySelector('textarea[placeholder="course"]').value;

          const noobject = {
            title: title,
            fName: fName,
              lName: lName,
              surname: surname,
              email: email,
              county: county,
              Number: phone,
              birth: birth,
              gender: gender,
              residence: residence,
              nationality: nationality,
              applied: applied,
              disable: disable,
              living: living,
              university: study,
              description: write,
              primary: primary,
              pgrade: pgrade,
              pcertificate: pcertificate,
              secondary: secondary,
              sgrade: sgrade,
              scertificate: scertificate,
              wish: wish,
              career: career,
              course: course,

          }

          fetch("http://localhost:3000/update", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(noobject)
          })
          .then(response => response.json())
          .then(data => {
              alert('Registration successful!');
              registerForm.reset();
          })
      }
      registerForm.addEventListener('submit', patch);
  
    })
  
  