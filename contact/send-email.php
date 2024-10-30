<?php
// Configure error reporting
error_reporting(E_ALL);
ini_set('display_errors', 0);

// Set response header to JSON
header('Content-Type: application/json');

// Function to sanitize input
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Initialize response array
$response = [
    'success' => false,
    'message' => ''
];

// Check if it's a POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get and sanitize form data
    $name = isset($_POST['name']) ? sanitize_input($_POST['name']) : '';
    $email = isset($_POST['email']) ? sanitize_input($_POST['email']) : '';
    $message = isset($_POST['message']) ? sanitize_input($_POST['message']) : '';
    
    // Validate inputs
    if (empty($name) || empty($email) || empty($message)) {
        $response['message'] = 'All fields are required';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['message'] = 'Invalid email format';
    } else {
        // Email configuration
        $to = "zhafrang@gmail.com"; // Replace with your email
        $subject = "New Contact Form Submission";
        
        // Create email headers
        $headers = [
            'From' => $email,
            'Reply-To' => $email,
            'X-Mailer' => 'PHP/' . phpversion(),
            'Content-Type' => 'text/html; charset=UTF-8'
        ];
        
        // Create email body
        $email_body = "
            <html>
            <head>
                <title>New Contact Form Message</title>
            </head>
            <body>
                <h2>Contact Form Message</h2>
                <p><strong>Name:</strong> {$name}</p>
                <p><strong>Email:</strong> {$email}</p>
                <p><strong>Message:</strong></p>
                <p>" . nl2br($message) . "</p>
            </body>
            </html>
        ";
        
        // Try to send email
        try {
            if (mail($to, $subject, $email_body, $headers)) {
                $response['success'] = true;
                $response['message'] = 'Message sent successfully!';
                
                // Optional: Log successful submissions
                $log_message = date('Y-m-d H:i:s') . " - Email sent from: $email\n";
                file_put_contents('contact_log.txt', $log_message, FILE_APPEND);
            } else {
                throw new Exception('Failed to send email');
            }
        } catch (Exception $e) {
            $response['message'] = 'Sorry, there was an error sending your message. Please try again later.';
            
            // Log the error
            error_log("Email sending failed: " . $e->getMessage());
        }
    }
} else {
    $response['message'] = 'Invalid request method';
}

// Send JSON response
echo json_encode($response);
?>
