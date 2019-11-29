<?php
if(isset( $_GET['tp'])){
$type = $_GET['tp'];
if($type=='signup') signup();
elseif($type=='login') login();
elseif($type=='feed') feed();
elseif($type=='chips') chips();
elseif($type=='chipsupdate') chipsupdate();
elseif($type=='chipsupdateplay') chipsupdateplay();
elseif($type=='checknumber') checknumber();
elseif($type=='feedUpdate') feedUpdate();
elseif($type=='addlotto') addlotto();
elseif($type=='feedDelete') feedDelete();
elseif($type=='totalprice') totalprice();
}
function login()
{
       require 'config.php';
       $json = json_decode(file_get_contents('php://input'), true);
       $username = $json['username']; $password = $json['password'];
       $userData =''; $query = "select * from users where username='$username' and password='$password'";
       $result= $db->query($query);
       $rowCount=$result->num_rows;

        if($rowCount>0)
        {
            $userData = $result->fetch_object();
            $user_id=$userData->user_id;
            $userData = json_encode($userData);
            echo '{"userData":'.$userData.'}';


        }
        else
        {
            echo '{"error":"Wrong username and password"}';
        }


}



function signup() {

        require 'config.php';


        $json = json_decode(file_get_contents('php://input'), true);
        $username = $json['username'];
        $password = $json['password'];
        $email = $json['email'];
        $name = $json['name'];

        $username_check = preg_match("/^[A-Za-z0-9_]{4,10}$/i", $username);
        $email_check = preg_match('/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.([a-zA-Z]{2,4})$/i', $email);
        $password_check = preg_match('/^[A-Za-z0-9!@#$%^&*()_]{4,20}$/i', $password);

        if($username_check==0)
            echo '{"error":"Invalid username"}';
        elseif($email_check==0)
            echo '{"error":"Invalid email"}';
        elseif($password_check ==0)
            echo '{"error":"Invalid password"}';

        elseif (strlen(trim($username))>0 && strlen(trim($password))>0 && strlen(trim($email))>0 &&
            $email_check>0 && $username_check>0 && $password_check>0)
        {


            $userData = '';

            $result = $db->query("select * from users where username='$username' or email='$email'");
            $rowCount=$result->num_rows;
            //echo '{"text": "'.$rowCount.'"}';

            if($rowCount==0)
            {

                $db->query("INSERT INTO users(username,password,email,name)
                            VALUES('$username','$password','$email','$name')");

                $userData ='';
                $query = "select * from users where username='$username' and password='$password'";
                $result= $db->query($query);
                $userData = $result->fetch_object();
                $user_id=$userData->user_id;
                $userData = json_encode($userData);
                echo '{"userData":'.$userData.'}';
            }
            else {
               echo '{"error":"username or email exists"}';
            }

        }
        else{
            echo '{"text":"Enter valid data2"}';
        }

}


function feed(){

    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);
    $user_id=$json['user_id'];

    $query = "SELECT * FROM feed WHERE user_id=$user_id ORDER BY feed_id ASC LIMIT 10";
    //$query = "SELECT * FROM feed ";
    $result = $db->query($query);

    $feedData = mysqli_fetch_all($result,MYSQLI_ASSOC);
    $feedData=json_encode($feedData);

    echo '{"feedData":'.$feedData.'}';


}
function chips(){

    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);
    $user_id=$json['user_id'];
    $chips='';
    $query = "SELECT chips FROM users AS chips WHERE user_id=$user_id ;";
    //$query = "SELECT * FROM feed ";
    $result = $db->query($query);

    $chips = $result->fetch_object();
    $chips=$chips->chips;
    $chips = json_encode($chips);
    echo '{"chips":'.$chips.'}';

}

function chipsupdate(){
  require 'config.php';
  $json = json_decode(file_get_contents('php://input'), true);
  $user_id=$json['user_id'];
  $chips=$json['chips'];
  $query = "UPDATE users SET chips=chips+$chips WHERE user_id=$user_id ;";
  //$query = "SELECT * FROM feed ";
  $result = $db->query($query);
  $chips = $result->fetch_object();
  $chips=$chips->chips;
  $chips = json_encode($chips);
  echo '{"chips":'.$chips.'}';
}
function chipsupdateplay(){
  require 'config.php';
  $json = json_decode(file_get_contents('php://input'), true);
  $user_id=$json['user_id'];
  $chips=$json['chips'];
  $query = "UPDATE users SET chips=$chips WHERE user_id=$user_id ;";
  //$query = "SELECT * FROM feed ";
  $result = $db->query($query);
  $chips = $result->fetch_object();
  $chips=$chips->chips;
  $chips = json_encode($chips);
  echo '{"chips":'.$chips.'}';
}
function feedUpdate(){

    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);
    $user_id=$json['user_id'];
    $feed=$json['feed'];
    $price=$json['price'];
    $feedData = '';
    if($user_id !=0)
    {
        $query = "INSERT INTO feed ( feed, user_id,price) VALUES ('$feed','$user_id',$price)";
        $db->query($query);
    }
    $query = "SELECT * FROM feed WHERE user_id=$user_id ORDER BY feed_id ASC LIMIT 10";
    $result = $db->query($query);

    $feedData = mysqli_fetch_all($result,MYSQLI_ASSOC);
    $feedData=json_encode($feedData);

    echo '{"feedData":'.$feedData.'}';

}

function feedDelete(){
    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);
    $user_id=$json['user_id'];
    $feed_id=$json['feed_id'];


    $query = "Delete FROM feed WHERE user_id=$user_id AND feed_id=$feed_id";
    $result = $db->query($query);
    if($result)
    {
        echo '{"success":"Feed deleted"}';
    } else{

        echo '{"error":"Delete error"}';
    }



}
function addlotto(){
    require 'config.php';
    $json = json_decode(file_get_contents('php://input'), true);
    $user_id=$json['user_id'];
    $number=$json['number'];
    $query = "INSERT INTO lotto ( lotto_id, lotto_no) VALUES ('$user_id','$number')";
    $result = $db->query($query);
    if($result===true)
    {
        echo '{"success":"Add Lotto"}';
    } else{

        echo '{"error":"Add error"}';
    }



}
function checknumber(){
    require 'config.php';
   $json = json_decode(file_get_contents('php://input'), true);
  $numberc=[];
    $query = "SELECT lotto_no FROM lotto as numberc ;";
  //  $query = "SELECT lotto_no from FROM lotto ;";
   if($result=$db->query($query)){
          while ($row=$result->fetch_array()){
            array_push($numberc,$row['lotto_no']);
          }}
        else {
          echo "kuy";
        }
/*$result = $db->query($query);*/
/*$numberc = $result->fetch_object();
$numberc=$numberc->numberc;*/
$numberc = json_encode($numberc);
echo '{"numberc":'.$numberc.'}';
print_r($numberc);
}




?>
