<?php
//old scripts
//print_r($_POST);
$to = 'APMS<apmsglobal@gmail.com>';

$subject = 'Feedback from MicorTechNA: ' . $_POST["name"];

$message = "Feedback from MicroTech:\n\n" 
."\n\nName: ". $_POST["name"]
."\n\nCompany Name: ". $_POST["companyName"]
."\n\nEmail: ". $_POST["email"]
."\n\nSubject: ". $_POST["subject"]
."\n\nMessage: ". $_POST["message"]
."\n\n\nthis is a feedback from micortechna.com";


$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: <'.$_POST["name"] . $_POST["email"].'>'."\r\n";
$headers .= 'Reply-To: <'.$_POST["email"].'>' . "\r\n";
if(mail( $to, $subject, $message, $headers ))
{
    header('location: index.html');
}
else{
    echo 'error';
}
//echo $mail_sent ? include "index.html" : include "work.html" ;
exit(0);


?>
