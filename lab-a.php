<?php
/*
    Assignment by: Zeel K Patel, 000824838
    I, Zeel Patel, student number 000824838, certify that this material is my original work. No other person's work has been used without due acknowledgment and I have not made my work available to anyone else.
*/

// retrieving user input from post request from frontend
$name = $_REQUEST["name"];

// backend verification and echoing json text back
if (strlen($name) < 5 and (strlen($name) > 0)) {
    echo "1";
} else if (strlen($name) > 20) {
    echo "2";
} else if (preg_match('~[0-9]+~', $name)) {
    echo "3";
} else if ($name === '') {
    echo "4";
} else {
    echo "5";
}

?>