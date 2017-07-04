<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/30 0030
 * Time: 上午 11:38
 */

//支持跨域
header('Access-Control-Allow-Origin: *');

//先接收前端提交过来的参数
$username = $_POST["username"];
$pwd = $_POST["pwd"];

class Res{
    public $status;
    public $msg;
}

//连接数据库，并检测用户名和密码是否匹配

$conn = new mysqli('127.0.0.1','root','','mydb');
$sql = "select * from users where uname='$username' and upwd='$pwd'";
$result = $conn->query($sql);
if ($result && $result->num_rows > 0) {
    //登录成功
    $res = new Res();
    $res->status = 1;
    $res->msg = "登录成功！";
    echo  json_encode($res);
}
else {
    //登录失败，用户名或密码错误
    $res = new Res();
    $res->status = 0;
    $res->msg = "登录失败！ 用户名或密码错误";
    echo  json_encode($res);
}
$conn->close();






