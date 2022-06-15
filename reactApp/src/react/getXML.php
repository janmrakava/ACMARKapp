<?php

header("Access-Control-Allow-Origin: *");
//header("Content-Type: application/json; charset=UTF-8");
define('ARES','http://wwwinfo.mfcr.cz/cgi-bin/ares/darv_bas.cgi?ico=');
$cin = intval($_REQUEST['ico']);
$file = @file_get_contents(ARES.$cin);
if ($file)
{
    $xml = @simplexml_load_string($file);
}
$a = array();
if ($xml)
{
    $ns = $xml->getDocNamespaces();
    $data = $xml->children($ns['are']);
    $el = $data->children($ns['D'])->VBAS;
    if (strval($el->ICO) == $cin)
    {
        $a['cin'] = strval($el->ICO);
        $a['dic'] = strval($el->DIC);
        $a['name'] = strval($el->OF);
        $a['street'] = strval($el->AA->NU).' '.strval($el->AA->CO);
        $a['city'] = strval($el->AA->N);
        $a['zip'] = strval($el->AA->PSC);
        $a['stav'] = 'ok';
    } else {
        $a['stav'] = 'ICO firmy nebylo nalezeno';
    }
}else {
    $a['stav'] = 'Databaze ARES neni dostupna';
}

echo json_encode($a);

