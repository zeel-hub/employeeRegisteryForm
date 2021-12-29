<?php
/*
    Assignment by: Zeel K Patel, 000824838
    I, Zeel Patel, student number 000824838, certify that this material is my original work. No other person's work has been used without due acknowledgment and I have not made my work available to anyone else.
*/

// retrieving user input from post request from frontend
$employeeId = $_REQUEST["employeeId"];

// backend verification and echoing json text back
if (strlen($employeeId) === 0) {
    echo "0";
} else if (strlen($employeeId) < 9 or strlen($employeeId) > 9) {
    echo "1";
} else if (preg_match('~[A-Z]+~', $employeeId)) {
    echo "2";
} else if (preg_match('~[a-z]+~', $employeeId)) {
    echo "3";
} else {
    echo "4";
}

?>