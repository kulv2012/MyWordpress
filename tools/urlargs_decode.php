<?php


ini_set("display_errors", TRUE);
ini_set("error_reporting", E_ALL);
echo '<meta http-equiv="Content-Type" content="text/html; charset=utf-8">' ;
echo '<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
        <META HTTP-EQUIV="Expires" CONTENT="-1">';

if ( ! function_exists('explode_url_query_to_args'))
{                                                                                                                                                                                      
	function explode_url_query_to_args($querystr)
	{    
		$queryParts = explode('&', $querystr);
		$params = array();
		foreach ($queryParts as $param){
			$item = explode('=', $param);
			$params[$item[0]] = urldecode($item[1]);
		}    
		return $params;

	}    
}


$urls = isset($_REQUEST['urls']) ? $_REQUEST['urls'] : "" ;
$decodestr = "" ;
if( $urls != ""){
	$ary = explode("\n", $urls) ;
	foreach($ary as $it ){

		 $parts = parse_url($it);

		 $args = explode_url_query_to_args( $parts['query']) ;
		 ksort($args);
		 var_duMP($args);
	}
}

?>

<h2> url 参数格式化, 支持多行. json格式化用<a href='http://json.parser.online.fr'>json online</a></h2>
<form action='/tools/urlargs_decode.php' method='GET'>
<textarea name='urls' style="width:1000px;height:300px"><?=$urls?></textarea>

	<input type='submit' value='解码'></input>
</form>

<h3>解码结果：</h3>
<textarea name='urls' style="width:1000px;height:300px"><?php echo $decodestr;?></textarea>

