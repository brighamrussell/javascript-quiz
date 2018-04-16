#!/usr/bin/php

<?
$result=array();
$Z=array();
$nx=array();
for($x=3;$x<1000;$x=$x+2){
 array_push($nx, $x);
 for($y=3;$y<1000;$y=$y+2){
  $z=($x*$y);
  array_push($Z, $z);
}}
$result = array_unique($Z);
#$result=array_diff($nx,$Z);
#print_r($result);
#print_r($nx);
print_r($result);
?>
