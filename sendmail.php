<?php
   
    if(isset($_POST['submit'])){
        $message= 'name: '.$_POST['Name'] ."\n"
                .'Email' .$_POST['Email'] ."\n"
                . 'Company Name: ' .$_POST['CompanyName'];
        $sub= 'Message: ' .$_POST['Message'];
        $subject='Subject' .$_POST['subject'];
                
        $to= 'abrasel600@gmail.com';
        mail ($to,$message, $sub,$subject);
        //header('location: send_successfully_done.php');
        echo "your message sent <a href=''>click here</a> another mail";
    }
 else {
        header('location: workwith.html');
        exit(0);
}
    
?>
