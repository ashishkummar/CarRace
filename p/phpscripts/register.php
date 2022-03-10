<?php 

/*
require("./sendgrid-php/sendgrid-php.php");
require("./sendgrid-php/vendor/autoload.php");
*/

session_start();
date_default_timezone_set("Asia/Kolkata");

function is_ajax() {
  return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
}


if(is_ajax()) {
    
    if($_POST['for'] == 'register'){
   
          if($_POST['username'] !='') {
              $username = $_POST['username'];
          }
          if($_POST['email'] !='') {
              $email = $_POST['email'];
          }
        
          if($_POST['score'] !='') {
              $score = $_POST['score'];
          }
            
          if($_POST['profileImgId'] !='') {
              $profile_img_id = $_POST['profileImgId'];
          }
        
        /* Database Credential  */
 
        define("DB_HOST", "localhost"); //Database host name
        define("DB_USER", "ashishk6_shell"); // Database User name
        define("DB_PASS", "Ashish@1234"); // Database Password Xe5PSDdhEQBQtN5Z
        define("DB_NAME", "ashishk6_shellGame"); //Database Name


        /* Database Connection */

        $con = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

        if (mysqli_connect_errno()) {
            echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ")" . $mysqli->connect_error;
        }  
        
        $sql = "SELECT * FROM userdata WHERE username='".$username."' OR email_id='".$email."'";
        $res = mysqli_query($con, $sql);
       
        if (mysqli_num_rows($res) > 0) {
            
            $row = mysqli_fetch_assoc($res);
            
            if ($email == $row['email_id']){
                echo "Email already exists";
            }
            elseif ($username == $row['username'] && $email == $row['email_id']){
                echo "User already exists";
            }
            
        } else {
            
            $sql = "INSERT INTO userdata(`username`, `email_id`, `score`, `profile_img_id`) VALUES ('".$username."', '".$email."', '".$score."', '".$profile_img_id."')";
        
            // Perform a query, check for error
            if (!mysqli_query($con, $sql)){
                echo("Error description: " . mysqli_error($con));
            } else {
                
                echo "User added successfully";

                /* sending mail */
                /*
                $email = new \SendGrid\Mail\Mail();
                $email->setFrom("sachin@blinkdigital.in", "sachin");
                $email->setSubject("Sending with SendGrid is Fun");
                $email->addContent(
                    "text/plain", "Youve got vouchers"
                );
                $sendgrid = new \SendGrid(getenv('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'));
                try {
                    $response = $sendgrid->send($email);
                    print $response->statusCode() . "\n";
                    print_r($response->headers());
                    print $response->body() . "\n";
                    echo "Message sent successfully";
                } catch (Exception $e) {
                    echo 'Caught exception: ',  $e->getMessage(), "\n";
                }
                */

            }
            
        }
        
        /* close db connection */
        mysqli_close($con);
    
    }    
    

}

 ?>
      
  