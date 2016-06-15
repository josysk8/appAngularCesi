<?php
header("Content-Type: application/json");
$url = urldecode($_GET['url']);

print file_get_contents($url);

return;
