<?php
/** DOCUMENTATION:
 * THIS API WILL BE RUNNING ON PORT 8000
 * entry point for GET requests and acts a route to see api status; eg is it online?
 * 
*/

header("Content-Type: application/json"); //setup to return response as josn.

if ($_SERVER["REQUEST_METHOD"] === "GET") {

    //result of visiting the port - returns status:
    echo json_encode(["message" => "PHP Email API is running!"]);
} else {

    //methods from the port alone are not allowed:
    http_response_code(405);
    echo json_encode(["error" => "Invalid request method."]);
}
