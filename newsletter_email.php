<?php
$servername = "localhost";
$username = "newsletter01";
$password = "5ca~#D8*6%r}";
$dbname = "newsletter-signups";

$email= $_POST["newsletter"];

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

//$sql = "INSERT INTO `newsletter-email` (`email`, `domain`, `date`)
//VALUES ('.$email.', 'microtechna.com', '2017-06-06')";
$sql = "INSERT INTO `newsletter-email` (`email`, `domain`)
VALUES ('$email', 'microtechna.com')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

// Reference SQL Query
//CREATE TABLE `test`.`newsletter-email` ( `email` VARCHAR(50) NOT NULL , `domain` VARCHAR(50) NOT NULL , `record-date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`email`,`domain`)) COLLATE='latin1_swedish_ci' ENGINE=MyISAM;
?> 