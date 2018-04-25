function submitDetails(){
    var name = document.forms

    var name = document.forms["messageToSend"]["name"].value;
    var email = document.forms["messageToSend"]["email"].value;
    var subject = document.forms["messageToSend"]["subject"].value;
    var message = document.forms["messageToSend"]["message"].value;

    if(name  == "")
     {
        alertMessage('alert-danger', "Please enter your name. It's will help us to communicate easily");
         return;
     }
     else if(email  == "")
        {
            alertMessage('alert-danger', "Please enter your email. It's will help us to communicate easily");
            return;
        }
    else if(message == "")
        {
            alertMessage('alert-danger', "Please enter your message. It's will help us to understand your query");
           return;
        }
    else
      {
          submitajax(name, email, subject, message);
          return;
      }   
}


function submitajax(name, email, subject, message){   
    var submitter;
     
     var valueString =  "";
      
     valueString = "name=" + name + "&email=" + email + "&subject=" +  subject + "&message=" + message ;  

     submitter = new XMLHttpRequest();

     submitter.open("POST","./src/scripts/MessageContact.php", true);
     submitter.setRequestHeader("Content-type","application/x-www-form-urlencoded");
     submitter.send(valueString);

    submitter.onreadystatechange = function() {
        if(submitter.readyState == 4 && submitter.status == 200) {
            alertMessage('alert-success', 'Your message has been sent successfully. We will contact you soon');
            clearAllFormData();
        }
        else{
            console.log(submitter.message);
            alertMessage('alert-danger', 'Message not sent');
        }
    }
}

function alertMessage(className, message){
    var messageDiv = document.getElementById("alert");
    messageDiv.className = 'alert ' + className;
    messageDiv.innerHTML = message;
}

function clearAllFormData(){
    document.forms["messageToSend"]["name"].value = "";
    document.forms["messageToSend"]["email"].value = "";
    document.forms["messageToSend"]["subject"].value = "";
    document.forms["messageToSend"]["message"].value = "";
}
