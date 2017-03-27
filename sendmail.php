<?php
$to = 'APMS test<bdjunayed@gmail.com>';

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

// <<<<<<< HEAD
// $headers .= 'From: <'.$con_email.'>' . "\r\n";
// $headers .= 'Reply-To: <'.$con_email.'>' . "\r\n";
// //$headers .= 'Cc: bdjunayed@hotmail.com' . "\r\n";
// //$headers .= 'Bcc: bdjunayed@yahoo.com' . "\r\n";

// $mail_sent = mail($to, $con_subject, $message, $headers);


// echo $mail_sent ? "Your message has been sent. <a href='index.html'>click here</a>" : header('location: workwith.html') ;
// exit(0);
// =======
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
