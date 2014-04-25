<?php
//Receive userData from JavaScript
$birthday = $_POST["birthday"];
$studyfield = $_POST["studyfield"];
$country = $_POST["country"];
$mothertongue = $_POST["mothertongue"];
$germanyears = $_POST["germanyears"];

include 'connect.php';

//Insert variables into database
mysql_query("INSERT INTO user_data (birthday, studyfield, country, mothertongue, germanyears) 
VALUES ('$birthday', '$studyfield', '$country', '$mothertongue', '$germanyears');");

//Disconnect
mysql_close($con);
?>

