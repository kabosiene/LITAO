<?php
  if (isset($_POST["submit"])) {
    $name = $_POST['name'];
    $company = $_POST['company'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $to = 'lina@litao.lt';
    $subject = 'LITAO Message from Contact Form ';

    $body = "From: $name\n
     Company: $company \n
     E-Mail: $email\n
     Phone: $phone \n
     Message:\n $message";


// If there are no errors, send the email

    if (mail($to, $subject, $body, $from)) {
      header("Location:http://litao.lt/connect_with_us.html"); /* Redirect browser */
exit();
    } else {
      echo 'error';
    }

  }
?>
