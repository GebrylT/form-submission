
document.addEventListener('DOMContentLoaded', () =>{
  let name = document.getElementById("name").value
  let email = document.getElementById("email").value
  let message = document.getElementById("message").value
  let form = document.getElementById("form")

    form.addEventListener("submit", (event) => {
     event.preventDefault()
        if(name&&email&&message){
         alert("form successfully submit")
        }
        else{
            alert("form incomplete")

        }

    })

})
