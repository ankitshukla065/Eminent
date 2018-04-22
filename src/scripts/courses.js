function submitDetails(){
    var fName = document.forms["applicantDetails"]["firstName"].value;
    var lName = document.forms["applicantDetails"]["lastName"].value;
    var contact = document.forms["applicantDetails"]["mobile"].value;
    var eID = document.forms["applicantDetails"]["emailId"].value;
    var courseList = document.forms["applicantDetails"]["course-options"];
    var courseName = courseList.options[courseList.selectedIndex].value;
    console.log(courseName);
    if(fName  == "")
     {
        alertMessage('alert-danger', 'Please enter first name');
         return;
     }
     else if(lName  == "")
        {
            alertMessage('alert-danger', 'Please enter last name');
            return;
        }
    else if(contact ==  "")
        {
            alertMessage('alert-danger', 'Please enter contact number');
            return;
        }
    else if(eID == "")
        {
            alertMessage('alert-danger', 'Plese enter email address');
           return;
        }
    else
      {
          submitajax(fName,lName,contact,eID,courseName);
          return;
      }   
}


function submitajax(fName,lName,contact,eID,courseName){
    console.log("submit ajax initiated"); 
    
    var submitter;
     
     var valueString =  "";
      
     valueString = "fname=" + fName + "&lname=" + lName + "&contact=" +  contact + "&email=" + eID + "&course=" + courseName ; 
     
    console.log(valueString);  

     submitter = new XMLHttpRequest();

     submitter.open("POST","./src/scripts/apply.php", true);
     submitter.setRequestHeader("Content-type","application/x-www-form-urlencoded");
     submitter.send(valueString);

    submitter.onreadystatechange = function() {
        if(submitter.readyState == 4 && submitter.status == 200) {
            console.log("Data Saved successfully + hi");
            alertMessage('alert-success', 'Your Message has successfully saved!!!');
            clearAllFormData();
        }
        else{
            alertMessage('alert-danger', 'data not saved');
        }
    }
}

function alertMessage(className, message){
    var messageDiv = document.getElementById("message");
    messageDiv.className = 'alert ' + className;
    messageDiv.innerHTML = message;
}

function clearAllFormData(){
    document.forms["applicantDetails"]["firstName"].value = "";
    document.forms["applicantDetails"]["lastName"].value = "";
    document.forms["applicantDetails"]["mobile"].value = "";
    document.forms["applicantDetails"]["emailId"].value = "";
}