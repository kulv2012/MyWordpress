<?php
/*
 用来检查沃唱吧中，每个手机号当前的状态跟联通那边的状态是否一致。
 用时请清空wochangba_tmp临时表。
 */


$destinationURL = "http://10.37.89.32:6789/admin/get_flag" ;
header("Location: $destinationURL", true, 302);

