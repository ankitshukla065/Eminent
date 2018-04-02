function submitDetails(){
    var fName = document.forms["applicantDetails"]["firstName"].value;
    var lName = document.forms["applicantDetails"]["lastName"].value;
    var contact = document.forms["applicantDetails"]["mobile"].value;
    var eID = document.forms["applicantDetails"]["emailId"].value;
    
    if(fName  == "")
     {
         alert("Please enter first mame");
         return;
     }
     else if(lName  == "")
        {
            alert("Please enter last name");
            return;
        }
    else if(contact ==  "")
        {
            alert("Please enter contact number");
            return;
        }
    else if(eID == "")
        {
           alert("Plese enter email address");
           return;
        }
    else
      {
          submitajax(fName,lName,contact,eID);
          return;
      }   
}


function submitajax(fName,lName,contact,eID){
    console.log("submit ajax initiated"); 
    
    var submitter;
     
     var valueString =  "";
      
     valueString = "fname=" + fName + "&lname=" + lName + "&contact=" +  contact + "&email=" + eID ; 
     
    console.log(valueString);  

     submitter = new XMLHttpRequest();

     submitter.open("POST","./src/scripts/apply.php", true);
     submitter.setRequestHeader("Content-type","application/x-www-form-urlencoded");
     submitter.send(valueString);

    submitter.onreadystatechange = function() {
        if(submitter.readyState == 4 && submitter.status == 200) {
            console.log("Data Saved successfully");
        }
    }

    console.log(submitter);


}

