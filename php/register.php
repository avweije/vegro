<?php
    // get the email address
    $email = isset($_GET["email"]) ? $_GET["email"] : "";
    // if we have an email address
    if ($email !== "") {
	// read the JSON file with registered email addresses
	$json = file_get_contents('../data/registered.json');
	  
	// decode the JSON file
	$data = json_decode($json,true);
	
	// make sure we have a valid JSON
	if (!isset($data["registered"])) {
	    $data["registered"] = [];
	}
	
	$exists = in_array($email, $data["registered"]);
	
	// if non-existing
	if (!$exists) {
	    // add to the list
	    $data["registered"][] = $email;
	    
	    // store the registered emails JSON
	    file_put_contents('../data/registered.json', json_encode($data));
	}

	// if existing
	if ($exists) {
    	    // send 409 response (duplicate)
	    http_response_code(409);
	} else {
    	    // send 200 response
            http_response_code(200);
	}
    } else {
    	// send 404 response
    	http_response_code(404);
    }
?>