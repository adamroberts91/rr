<?php
$DOCUMENT_ROOT = $_SERVER['DOCUMENT_ROOT'];
require_once $DOCUMENT_ROOT . '/ratedrepair/include/Zebra_Database.php';

session_start();

$db = new Zebra_Database();
$db->connect( 'localhost', 'root', 'password', 'ratedrepair' );
$db->debug = false;