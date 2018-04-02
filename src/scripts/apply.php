<?php
 
 
$fname = $lname = $contactNumber = $email = "before";

   $fname = $_POST["fname"];
   $lname = $_POST["lname"];
   $contactNumber = $_POST["contact"];
   $email = $_POST["email"];
     
 function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
 }

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "customer";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO applicant (firstName, lastName, mobile, email)
VALUES ('$fname' ,'$lname' ,'$contactNumber' ,'$email' )";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>
