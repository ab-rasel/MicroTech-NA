<?php
   
    if(isset($_POST['submit'])){
        $message= 'Email' .$_POST['Email'];
       
        $subject='Newsletter' .$_POST['Newsletter'];
                
        $to= 'abrasel600@gmail.com';
        mail ($to,$message, $subject);
        //header('location: send_successfully_done.php');
        echo "your message sent <a href=''>click here</a> another mail";
    }
 else {
        header('location: workwith.html');
        exit(0);
}
    
?>
