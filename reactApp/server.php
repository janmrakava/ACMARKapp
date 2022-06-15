<?php
    header('Access-Control-Allow-Origin: http://localhost:8081', 'Content-Type: text/plain');
    $ico = $_POST['ico'];
    $xml = simplexml_load_file('https://wwwinfo.mfcr.cz/cgi-bin/ares/darv_bas.cgi?ico=27082440');
    echo ("Hello from server: $ico    ");
    echo $xml;
?>