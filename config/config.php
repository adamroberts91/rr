<?php
$DOCUMENT_ROOT = $_SERVER['DOCUMENT_ROOT'];
require_once $DOCUMENT_ROOT . '/rateagenie/include/Zebra_Database.php';

session_start();

$db = new Zebra_Database();
$db->connect( 'localhost', 'root', 'password', 'rateagenie' );