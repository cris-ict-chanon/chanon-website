
<html>
	<head>
		<title>Hello PHP</title>
	</head>
	<body>
<?php
$message = "Hello World";
$name = "Chanon";
$age = 16;
$list = array('Digital Art','Music','Manhwa')
?>
	<h2><?php echo $message; ?></h2>
  <p><?php echo "My name is " . $name; ?></p>
  <p><?php echo " I am " .$age ."years old"; ?></p>
  <p><?php echo "My interests are"; ?></p>
<?php
echo "\t<ul>\n";
foreach($list as $interests){
	echo "\t\t<li>".$interests."</li>\n";
}
echo "</ul>\n";

?>
	</body>
</html>
