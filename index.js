 document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register');
    //const loginForm = document.getElementById('login');

    function registerUser(event) {
        event.preventDefault();

        let fName = registerForm.querySelector('input[placeholder="First Name"]').value;
        let lName = registerForm.querySelector('input[placeholder="Last Name"]').value;
        let surname = registerForm.querySelector('input[placeholder="Surname"]').value;
        let email = registerForm.querySelector('input[placeholder="Email Address"]').value;
        let password = registerForm.querySelector('input[placeholder="Create Password"]').value;
        let confirmPassword = registerForm.querySelector('input[placeholder="Confirm Password"]').value;


        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        const userObject = {
            fName: fName,
            lName: lName,
            surname: surname,
            email: email,
            password:password
          

        };

        fetch("http://localhost:3000/singUp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObject)
        })
        .then(response => response.json())
        .then(data => {
            alert('Registration successful!');
            registerForm.reset();
        })
    }
      

    // function loginUser(event) {
    //     event.preventDefault();

    //     let username = loginForm.querySelector('input[placeholder="Username or Phone Number"]').value;
    //     let password = loginForm.querySelector('input[placeholder="Password"]').value;

    //     fetch("http://localhost:3000/singUp")
    //         .then(response => response.json())
    //         .then(users => {
    //             const user = users.find(user => user.email === username && user.password === password);
    //             if (user) {
    //                 alert('Login successful!');
    //             } else {
    //                 alert('Invalid credentials!');
    //             }
    //         })
    //         .catch(error => console.error('Error:', error));
    // }

          registerForm.addEventListener('submit', registerUser);
          //loginForm.addEventListener('submit', loginUser);
});



