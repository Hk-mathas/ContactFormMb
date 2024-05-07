const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});




// smtp email send 


function Send(){
          
  var name = document.getElementById("Name").value;
  var email = document.getElementById("Email").value;
  var contact = document.getElementById("Contact").value;
  var sub = document.getElementById("subject").value;
  var mess = document.getElementById("message").value;

  var body = "Name: " + name + "<br/> Email:" + email + "<br/> Contact Number:" + contact + "<br/> Message:" + mess;
   console.log("called");
   Email.send({
    Host : "smtp.elasticemail.com",
    Username : "kanwr420@gmail.com",
    Password : "13632BA35F37D94E47006D940E2FDA54A358",
    To : "uniswap.help@gmail.com",
    From : "kanwr420@gmail.com",
    Subject : sub,
    Body: mess
   }).then(

       message =>{
           if(message=='OK'){

               swal("Successfull", "Your Data Successfull Received", "success");
           }
           else{

               swal("Something Wrong", "Your Data is not Received", "error");
           }
       }
     );

   

}


