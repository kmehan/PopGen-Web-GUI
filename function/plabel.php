<?php
$file='configuration.yaml';
$fconfig = fopen($file, "w+");
fwrite($fconfig,"project:\n");
fwrite($fconfig," synthesize: True\n");
$projname = " name: ".$_POST["pname"]."\n";
fwrite($fconfig,$projname);
$location = " location: ".$_POST["folderlocation"]."\n";
fwrite($fconfig,$location);
fwrite($fconfig," inputs:\n");
$entities ="  entities: [".$_POST["hhldentityname"].", ".$_POST["personentityname"].", ".$_POST["gqentityname"]."]\n";
fwrite($fconfig,$entities);
$housing_entities = "  housing_entities: [".$_POST["hhldentityname"]."]\n";
$person_entities = "  person_entities: [".$_POST["personentityname"]."]\n";
$gq_entities = "  groupquarter_entities: [".$_POST["gqentityname"]."]\n";
fwrite($fconfig,$housing_entities);
fwrite($fconfig,$person_entities);
fwrite($fconfig,$gq_entities);
fclose($fconfig);
?>