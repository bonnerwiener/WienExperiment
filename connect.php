<?php
//Connect to database
$host = "localhost";
$database = "wienexp";
$username = "wienexp";
$password = "jahahijSympyutotPami";
    
$con = mysql_connect($host, $username, $password);
mysql_select_db($database, $con) or die( "Unable to select database");
?>
