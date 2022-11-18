<?php
header('Content-Type: text/html; charset=utf-8');

$mysqli = mysqli_connect("localhost", "cllgvkhf_0975", "123456", "cllgvkhf_0975");
if ($mysqli == false) {
  print("error");
} else {

  $email = trim(mb_strtolower($_POST["email"]));
  $pass = trim($POST["pass"]);

  $result = $mysqli->query("SELECT * FROM `users` WHERE `email`='$email'");
  $result = $result->fetch_assoc();

  if (password_verify($pass, $result["pass"])) {
    echo "ok";
  } else {
    echo "not_found";
  }
}
