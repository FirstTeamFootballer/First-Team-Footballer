<?php

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: /");
    exit;
}

function clean($value) {
    return trim(strip_tags($value ?? ""));
}

$enquiryType = clean($_POST["enquiry_type"] ?? "");
$name = clean($_POST["name"] ?? "");
$organisation = clean($_POST["organisation"] ?? "");
$email = clean($_POST["email"] ?? "");
$phone = clean($_POST["phone"] ?? "");
$organisationType = clean($_POST["organisation_type"] ?? "");
$quantity = clean($_POST["quantity"] ?? "");
$clubSize = clean($_POST["club_size"] ?? "");
$message = clean($_POST["message"] ?? "");

/* Required field checks */
if (
    $enquiryType === "" ||
    $name === "" ||
    $organisation === "" ||
    $email === "" ||
    $organisationType === ""
) {
    die("Please complete all required fields.");
}

/* Validate email */
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Please enter a valid email address.");
}

/* Prevent email header injection */
if (
    preg_match("/[\r\n]/", $email) ||
    preg_match("/[\r\n]/", $name)
) {
    die("Invalid form submission.");
}

$to = "info@firstteamfootballer.com";

$subject = "New First Team Footballer Enquiry - " . $enquiryType;

$emailBody = "NEW FIRST TEAM FOOTBALLER ENQUIRY\n";
$emailBody .= "=================================\n\n";

$emailBody .= "Enquiry Type: " . $enquiryType . "\n";
$emailBody .= "Name: " . $name . "\n";
$emailBody .= "Organisation: " . $organisation . "\n";
$emailBody .= "Organisation Type: " . $organisationType . "\n";
$emailBody .= "Email: " . $email . "\n";
$emailBody .= "Phone: " . ($phone ?: "Not provided") . "\n";

if ($quantity !== "") {
    $emailBody .= "Approximate Number of Games: " . $quantity . "\n";
}

if ($clubSize !== "") {
    $emailBody .= "Approximate Players / Members: " . $clubSize . "\n";
}

$emailBody .= "\nMESSAGE\n";
$emailBody .= "-------\n";
$emailBody .= ($message ?: "No additional message provided.") . "\n";

$headers = [];
$headers[] = "From: First Team Footballer <info@firstteamfootballer.com>";
$headers[] = "Reply-To: " . $email;
$headers[] = "Content-Type: text/plain; charset=UTF-8";

$sent = mail(
    $to,
    $subject,
    $emailBody,
    implode("\r\n", $headers)
);

if ($sent) {
    header("Location: /?page=enquiry-success");
    exit;
}

die("Sorry, your enquiry could not be sent. Please email info@firstteamfootballer.com directly.");
?>