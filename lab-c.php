<?php
/*
    Assignment by: Zeel K Patel, 000824838
    I, Zeel Patel, student number 000824838, certify that this material is my original work. No other person's work has been used without due acknowledgment and I have not made my work available to anyone else.
*/

// retrieving user input from post request from frontend
$department = $_REQUEST["department"];

// backend verification and echoing json text back
if (strlen($department) === 0) {
    echo "0";
} else if ($department === "Advertising") {
    echo "1";
} elseif ($department === "Sales") {
    echo "2";
} else {
    echo "3";
}



?>