<?php
require __DIR__ . '/vendor/autoload.php';
header('Access-Control-Allow-Origin: *');
//header('Access-Control-Allow-Credentials: true');
try {

$prichozi_zprava = strval($_POST['name']);
if ($prichozi_zprava !== ''){
  $prichozi_pridani_retezce = 'Odeslaná zpráva: '.$prichozi_zprava;
  $jeden_znak = preg_match('/..+/',$prichozi_zprava);
  $alfabeta = preg_match('/[a-zA-ZáčďéěíňóřšťůúýžÁČĎÉĚÍŇÓŘŠŤŮÚÝŽ]/',$prichozi_zprava);
  $zacina_cislem = preg_match('/^[0-9]/',$prichozi_zprava);
  $nealfanumericke = preg_match('/[^0-9a-zA-ZáčďéěíňóřšťůúýžÁČĎÉĚÍŇÓŘŠŤŮÚÝŽ\s]/',$prichozi_zprava);
  if ($jeden_znak) { 
    $jeden_znak_pridani = 'Odeslaná zpráva v sobě má více znaků';
  } else {
    $jeden_znak_pridani = 'Odeslaná zpráva v sobě má jeden znak'; 
  }
  if ($alfabeta){ 
    $alfabeta_pridani = 'Odeslaná zpráva v sobě má min. jeden abecední znak'; 
  } else{
    $alfabeta_pridani = 'Odeslaná zpráva v sobě nemá ani jeden abecední znak';
  }
  if ($zacina_cislem) {
    $zacina_cislem_pridani = 'Odeslaná zpráva začíná číslem';
  } else {
    $zacina_cislem_pridani = 'Odeslaná zpráva nezačíná číslem';
  }
  if (!$nealfanumericke) {
    $nealfanumericke_pridani = 'Odeslaná zpráva v sobě má jenom alfanumerické znaky a mezery';
  } else {
    $nealfanumericke_pridani = 'Odeslaná zpráva v sobě má nealfanumerické znaky';
  }
    $array = Array (
        "id" => "01",
        "zprava" => $prichozi_pridani_retezce,
        "jeden_znak" => $jeden_znak_pridani,
        "alfabeta" => $alfabeta_pridani,
        "zacina_cislem" => $zacina_cislem_pridani,
        "nealfanumericke" => $nealfanumericke_pridani,
        "povedene" => true,
    );  
  echo json_encode($array);
  return;
  } 
  else {
    echo json_encode(array("povedene" => false));
    return;
  } 
}
catch (Exception $e) {
  echo json_encode(array("povedene" => false, "zprava" => $e->getMessage()));
  return;
}
