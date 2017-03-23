<?php
$con_name = $_POST['name'];
$con_email = $_POST['email'];
$con_company = $_POST['companyName'];
$con_subject = $_POST['subject'];
$con_message = $_POST['message'];

$to ='bdjunayed@gmail.com';

$message = 'Name: ' .$con_name.'<br/><br/>';
$message .= 'Email:' .$con_email.'<br/><br/>';
$message .= 'Company:' .$con_company.'<br/><br/>';
$message .= 'Message' .$con_message.'<br/><br/>';
$message .= 'Best Regards, from www.microtchna.com';

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: <'.$con_email.'>' . "\r\n";
$headers .= 'Reply-To: <'.$con_email.'>' . "\r\n";
//$headers .= 'Cc: bdjunayed@hotmail.com' . "\r\n";
//$headers .= 'Bcc: bdjunayed@yahoo.com' . "\r\n";

$mail_sent = @mail($to, $con_subject, $message, $headers);


echo $mail_sent ? include "success.php" : include "failed.php" ;

header('location: conatct.php');
?>

<?php
/*
    if(isset($_POST['submit'])){
        $message= 'name: '.$_POST['Name'] ."\n"
                .'Email' .$_POST['Email'] ."\n"
                . 'Company Name: ' .$_POST['CompanyName'];
        $subject='Subject' .$_POST['subject'];
        $sub= 'Message: ' .$_POST['Message'];

        $to= 'abrasel600@gmail.com';
        mail ($to,$message, $sub,$subject);

        echo "your message sent <a href=''>click here</a> another mail";
    }
 else {
        header('location: workwith.html');
        exit(0);
}

*/?>
