<?php
 
 
$fname = $lname = $contactNumber = $email = $course = "before";

   $fname = test_input($_POST["fname"]);
   $lname = test_input($_POST["lname"]);
   $contactNumber = test_input($_POST["contact"]);
   $email = test_input($_POST["email"]);
   $course = test_input($_POST["course"]);

     
 function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
 }

$servername = "localhost";
$username = "rootEminent";
$password = "DontAskForPassword!";
$dbname = "customerEminent";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

// Prepared Statement implmentation
$stmt = $conn->prepare("INSERT INTO applicant (firstName, lastName, mobile, email, course) VALUES (? , ? , ? , ? , ?)");

$stmt->bind_param("sssss", $fname, $lname, $contactNumber, $email, $course);

$stmt->execute();


// $sql = "INSERT INTO applicant (firstName, lastName, mobile, email, course)
// VALUES ('$fname' ,'$lname' ,'$contactNumber' ,'$email' ,'$course')";

// if ($conn->query($sql) === TRUE) {
//     echo "New record created successfully";
// } else {
//     echo "Error: " . $sql . "<br>" . $conn->error;
// }

$stmt->close();
$conn->close();

?>
