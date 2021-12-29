<?php
/*
    Assignment by: Zeel K Patel, 000824838
    I, Zeel Patel, student number 000824838, certify that this material is my original work. No other person's work has been used without due acknowledgment and I have not made my work available to anyone else.
*/

// retrieving user input from post request from frontend
$bonus = $_REQUEST["bonus"];

// backend verification and echoing json text back
if ((preg_match('~[A-Z]+~', $bonus)) || (preg_match('~[a-z]+~', $bonus))) {
    echo "1";
}  else if (strlen($bonus) > 0) {
    echo "2";
}

?>