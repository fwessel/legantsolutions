<?php

<!--send email with php.
<https://www.quackit.com/php/tutorial/php_mail.cfm>
this file works with the other file: "contact.html".
still need to add/configure the php.ini file-->

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Set the recipient email address
    $to = "fwessel@gmail.com"; // Replace with your email address

    // Set the email subject
    $subject = "New Contact Form Submission from $name";

    // Create the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Message:\n$message\n";

    // Set the email headers
    $headers = "From: $name <$email>";

    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        echo "Thank you for contacting us, $name. We will get back to you soon!";
    } else {
        echo "Oops! Something went wrong, and we couldn't send your message.";
    }
} else {
    echo "Invalid request.";
}
?>
