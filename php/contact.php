<?php
    if (isset($_POST["submit"]) && isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["message"])) {
        $name = $_POST["name"];
        $mail = $_POST["email"];
        $message = $_POST["message"];
        
        $to = "trimy@trimy.sk";
        $subject = "Správa od ".$name;
        $headers = "From: ".$mail;

        mail($to, $subject, $message, $headers);
    }
?>