<?php
 error_reporting(E_ALL);
 
    /*** the upload directory ***/
    $upload_dir= './uploads';

    /*** a message for users ***/
    $msg = 'Please select files for uploading';

    /*** an array to hold messages ***/
    $messages = array();

    /*** check if a file has been submitted ***/
    if(isset($_FILES['multifile']['tmp_name']))
    {
        /** loop through the array of files ***/
        for($i=0; $i < count($_FILES['multifile']['tmp_name']);$i++)
        {
            // check if there is a file in the array
            if(!is_uploaded_file($_FILES['multifile']['tmp_name'][$i]))
            {
                $messages[] = 'No file uploaded';
            }         
            else
            {
                // copy the file to the specified dir 
                if(@copy($_FILES['multifile']['tmp_name'][$i],$upload_dir.'/'.$_FILES['multifile']['name'][$i]))
                {
                    /*** give praise and thanks to the php gods ***/
                    $messages[] = $_FILES['multifile']['name'][$i].' uploaded';
                }
                else
                {
                    /*** an error message ***/
                    $messages[] = 'Uploading '.$_FILES['multifile']['name'][$i].' Failed';
                }
            }
        }
    }
	
$fp = fopen(__DIR__ . '\uploads\person_sample.csv','r');
echo json_encode(fgetcsv($fp));
fclose($fp);
?>