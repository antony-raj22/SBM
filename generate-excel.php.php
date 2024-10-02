<?php
require 'vendor/autoload.php'; // Load the PHPExcel library

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

$spreadsheet = new Spreadsheet();
$sheet = $spreadsheet->getActiveSheet();

// Example data from the form
$sheet->setCellValue('A1', 'First Name');
$sheet->setCellValue('B1', 'Last Name');
// Add more data as needed

// Save the spreadsheet as a file
$writer = new Xlsx($spreadsheet);
$file = 'https://docs.google.com/spreadsheets/d/19NMFZM0j3RHnx4IocGN-VwcnYw3-C1GIDfSYW9JDX_U/edit?usp=sharing';
$writer->save($file);

// Redirect to the Excel file for download
header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
header('Content-Disposition: attachment; filename="'.basename($file).'"');
header('Content-Length: ' . filesize($file));
readfile($file);
exit;
?>
