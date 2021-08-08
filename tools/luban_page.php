<?php
/*
 */


ini_set("display_errors", TRUE);
ini_set("error_reporting", E_ALL);
echo '<meta http-equiv="Content-Type" content="text/html; charset=utf-8">' ;
echo '<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
        <META HTTP-EQUIV="Expires" CONTENT="-1">';




if( isset($argv[0]) ){
}

$product_name = isset($_REQUEST['product_name']) ? $_REQUEST['product_name'] : "" ;
$product_name = isset($_REQUEST['product_name']) ? $_REQUEST['product_name'] : "" ;
$product_name = isset($_REQUEST['product_name']) ? $_REQUEST['product_name'] : "" ;
$product_name = isset($_REQUEST['product_name']) ? $_REQUEST['product_name'] : "" ;
$thriftdata = isset($_REQUEST['thriftdata']) ? $_REQUEST['thriftdata'] : "" ;

$decodestr = "";
$key = "";
if($thriftdata != ""){
    $js = json_decode($thriftdata, true);
    $js = $js['data'];
    $data = array();
    $key = "tcc_qc_audited_page_product_".$js['pageId'];
    $data['product_name'] = $js['productName'];
    $data['product_desc'] = $js['productDesc'];
    $data['product_recommend_remark'] = $js['productRecommendRemark'];
    $data['product_img'] = $js['productImg'];

    $decodestr = json_encode($data);
}

if( isset($argv[0] ) ){
	echo $decodestr."\n\n" ;
	die();
}
?>


<h2>鲁班落地页</h2>
<form action='/tools/luban_page.php' method='GET'>

    <h3>
    <!--
    pageid:<input name='pageid' value='<?=$pageid?>' size="100"></input></br></br>
    product_name:<input name='product_name' value='' size="100"></input></br>
	product_recommend_remark:<input name='product_recommend_remark' value='' size="100"></input></br>
	product_desc:<input name='product_desc' value='' size="100"></input></br>
	product_img:<input name='product_img' value='' size="100"></input></br>
    --!>
    data:<textarea name='thriftdata' style="width:1000px;height:300px"><?=$thriftdata?></textarea>
    <input type='submit' value='编码'></input>  
    </h3>
</form>

<hr>
<h3>解码结果：</h3>
tcc key: <input name='key' size="100" value="<?php echo $key;?>"></input></br>
tcc data:<textarea name='urls' style="width:1000px;height:300px"><?php echo $decodestr;?></textarea>

