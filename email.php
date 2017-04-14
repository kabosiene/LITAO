<?php
  if (isset($_POST["submit"])) {
    $name = $_POST['name'];
    $company = $_POST['company_name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    // $human = intval($_POST['human']);
    $from = 'LITAO Contact Form';
    // $to = 'lina@litao.lt';
    $to = 'kristina.kabosiene@gmail.com';
    $subject = 'LITAO Message from Contact Form ';

    $body = "From: $name\n
     Company: @company \n
     E-Mail: $email\n
     Phone: $phone \n
     Message:\n $message";

    // Check if name has been entered
    if (!$_POST['name']) {
      $errName = 'Please enter your name';
    }

    // Check if email has been entered and is valid
    if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
      $errEmail = 'Please enter a valid email address';
    }

    //Check if message has been entered
    if (!$_POST['message']) {
      $errMessage = 'Please enter your message';
    }
    //Check if simple anti-bot test is correct
    // if ($human !== 5) {
    //   $errHuman = 'Your anti-spam is incorrect';
    // }

// If there are no errors, send the email
if (!$errName && !$errEmail && !$errMessage && !$errHuman) {
  if (mail ($to, $subject, $body, $from)) {
    $result='!!!';
  } else {
    $result='<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later</div>';
  }
}
  }
?>
