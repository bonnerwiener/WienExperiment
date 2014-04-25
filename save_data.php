<?php
//Receive variables from JavaScript
$paradigm = $_POST["paradigm"];
$time = $_POST["time"];
$subject = $_POST["subject"];
$trial = $_POST["trial"];
$stimuli = $_POST["stimuli"];
$probe = $_POST["trial"];
$code = $_POST["code"];
$response = $_POST["response"];
$rt = $_POST["rt"];

include 'connect.php';

//Insert variables into database
mysql_query("INSERT INTO testexp (paradigm, time, subject, trial, probe, code, response, rt) 
VALUES ('$paradigm', '$time', '$subject', '$trial', '$code', '$probe','$response', '$rt');");

//Disconnect
mysql_close($con);

?>
