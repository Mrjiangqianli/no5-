<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/6/29 0029
 * Time: 下午 2:36
 */




//  前台提交过来的参数
// 跨域
header('Access-Control-Allow-Origin: *');

$username = $_POST['username'];
$pwd = $_POST['pwd'];
$email = $_POST['email'];
// echo $username.$pwd.$email;

class Res{
    public $status;
    public $msg;
}

//  注册

$conn = new mysqli('127.0.0.1','root','','mydb') or die('连接失败');
//  查看 users表里面有没有存在 $username 一样的名字
$sql = "select * from users where uname='$username'";
$result = $conn->query($sql);

if ($result && $result->num_rows>0){
    // 存在相同的用户
    $res = new Res();
    $res->status = 0;
    $res->msg = '用户已存在';
    echo json_encode($res);
}else{
    // 不存在相同的用户  插入数据
    $sql = "insert into users(uname,upwd,uemail) values('$username','$pwd','$email')";
    $result = $conn->query($sql);
    if($result){
        $res = new Res();
        $res->status = 1;
        $res->msg = '注册成功!';
        echo json_encode($res);
    }else{
        $res = new Res();
        $res->status = 2;
        $res->msg = '注册失败!';
        echo json_encode($res);
    }

}

