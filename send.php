<?php
    $to="ahmad.k.youssef@gmail.com";// this is your Email address
    $firstName=$_POST['firstName'];
    $lastName=$_POST['lastName'];
    $email=$_POST['email'];// this is the sender's Email address
    $message = $firstName. "". $lastName . " " ."wrote the following:" . "\n\n" . $_POST['message'];
    $headers= "From: ". $email;
    $subject="message from my website";
    mail($to, $subject, $message ,$headers);
    
    // auto reply
    $headers2 = "From:" . $to;
    $subject2 = "Reply: thanks for contacting me ";
    $message2 ="Mail Sent. Thank you " . $lastName . ", i will contact you shortly." ."\n\n"."Here is a copy of your message: " . "\n\n" . $_POST['message'];
    mail($email,$subject2,$message2,$headers2); // sends a copy of the message to the sender
?>