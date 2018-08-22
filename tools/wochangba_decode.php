<?php
/*
 用来检查沃唱吧中，每个手机号当前的状态跟联通那边的状态是否一致。
 用时请清空wochangba_tmp临时表。
 */


ini_set("display_errors", TRUE);
ini_set("error_reporting", E_ALL);
require_once __DIR__ . '/../../common.admin.php';
echo '<meta http-equiv="Content-Type" content="text/html; charset=utf-8">' ;
echo '<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
        <META HTTP-EQUIV="Expires" CONTENT="-1">';

$_zuitaoKtv = new ZuitaoKTV();



if( isset($argv[0]) ){
	$_REQUEST['urls'] = file_get_contents("./201407-201503-failedurls.txt") ;
}

$urls = isset($_REQUEST['urls']) ? $_REQUEST['urls'] : "" ;
$decodestr = "" ;
if( $urls != ""){
	$ary = explode("\n", $urls) ;
	foreach($ary as $it ){
		$it = substr($it, strpos($it, "?")+1 ) ;
		if( $it == "") continue ;
		$arg = explode_url_query_to_args( $it) ;
		$encodedstr = $arg['to_url'] ;

		$it = str_replace(array('-','_',''), array('+','/','=') ,$encodedstr); 
		$decodestr .= "\n".base64_decode($it) ;
	}
}

if( isset($argv[0] ) ){
	echo $decodestr."\n\n" ;
	die();
}
?>


<h2>沃唱吧base64_decode, 支持多行</h2>
<form action='/innerscript/wochangba/wochangba_decode.php' method='POST'>
<textarea name='urls' style="width:1000px;height:300px"><?=$urls?></textarea>

	<input type='submit' value='解码'></input>
</form>

<h3>解码结果：</h3>
<textarea name='urls' style="width:1000px;height:300px"><?php echo $decodestr;?></textarea>

