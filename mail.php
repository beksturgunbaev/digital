<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];

//$mail->SMTPDebug = 3;                              

$mail->isSMTP();                                      
$mail->Host = 'smtp.mail.ru';  																						
$mail->SMTPAuth = true;                               
$mail->Username = 'andrew.lisovoy@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'and25&liso78'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                          
$mail->Port = 465; // этот порт может отличаться у других провайдеров

$mail->setFrom('andrew.lisovoy@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('turgunbaaev@gmail.com');     // Кому будет уходить письмо 

$mail->isHTML(true);                                 

$mail->Subject = 'Заявка с сайта Digital';
$mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone.;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: index.html');
}
?>