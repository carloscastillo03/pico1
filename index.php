<?php

$request = $_SERVER['REQUEST_URI'];
if (preg_match('/\.mp4$/i', $request)) {

    include 'site.php';
    exit;
} else {
    
    include 'site.php';
}
?>