<?php 
$name = $email = $subject =$message = "before";

	$name = input($_POST["name"]);
  $email = input($_POST["email"]);
  $subject = input($_POST["subject"]);
	$message = input($_POST["message"]);
     
 function input($data) {
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
$stmt = $conn->prepare("INSERT INTO messages (name, email, subject, message) VALUES (? , ? , ? , ?)");

$stmt->bind_param("ssss", $name, $email, $subject, $message);

$stmt->execute();

$stmt->close();
$conn->close();

?>
