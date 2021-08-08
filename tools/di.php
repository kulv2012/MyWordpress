<?php
/*
 */


ini_set("display_errors", TRUE);
ini_set("error_reporting", E_ALL);

$fn = "/tmp/didi.txt" ;
$msg = date("Y-m-d H:i:s")."\t".$_SERVER['REMOTE_ADDR']."\t".json_encode($_SERVER)."\n" ;
#echo $msg;
file_put_contents($fn, $msg, FILE_APPEND) ;

echo "<h2>请在WiFi环境下打开，查看内容...</h2>";
