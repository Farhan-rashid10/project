document.addEventListener("DOMContentLoaded" , function(){
     



document.querySelector("form").addEventListener("submit", adddetails);
  function adddetails(e){
  e.preventDefault()
  console.log("submitted");
const fName = document.getElementById("firstName")
const lName = document.getElementById("lastName")
const password = document.getElementById("password")
const confirms = document.getElementById("confirm")
const email = document.getElementById("email")
const surname = document.getElementById("surname")


let object= {
    First:fName.value,
    Last:lName.value,
    Password:password.value,
    Confirm:confirms.value,
    Email:email.value,
    surname:surname.value
  }

function singUp(){
    fetch("http://localhost:3000/singUp",{


  method:"POST",
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(object)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Data posted successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Failed to post data.');
    });
}
  }





})