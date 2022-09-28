function validate(){
   var name = document.getElementById('userName');
   var num = document.getElementById('phoneNum');
   var password = document.getElementById('password');
   var confirmPassword = document.getElementById('confirmPassword');

   removeMessage();
   var valid = true;
   if(name.value.length==0){
    name.className="wrong-input";
    name.nextElementSibling.innerHTML = "Name can't be blank";
    valid=false;
   }

   if(num.value.length<10){
    num.className="wrong-input";
    num.nextElementSibling.innerHTML = "Contact info can't be blank";
    valid=false;
    }

    if(password.value.length<6){
        password.className="wrong-input";
        password.nextElementSibling.innerHTML = "Password can't be less than 6";
        valid=false;
    }

    if(password.value!=confirmPassword.value){
        confirmPassword.className="wrong-input";
        confirmPassword.nextElementSibling.innerHTML = "Password does not match";
        valid=false;
    }
    return valid;
}

function removeMessage(){
    var errorinput=document.querySelectorAll(".wrong-input");
    [].forEach.call(errorinput, function(el){
        el.classList.remove(".wrong-input");
    })
    var errorpara=document.querySelectorAll('.error');
    [].forEach.call(errorinput, function(el){
        el.innerHTML="";
    });
}