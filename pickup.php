<html>
<head>
<title>Bus Pickup Attendance</title>
<style type="text/css">
body {
	font-family: arial 'Arial';
	font-size:12px;
}
table {
	border-collapse: collapse;
}
.inp {
	border:1px solid #666;
	width:50px;
	padding: 3px;
}
</style>
</head>
<body>
<h4>Attendance</h4>
<table border="1" cellpadding="2" cellspacing="0">
<tr><th>Location</th><th>Time</th><th>Name</th><th>Pickup</th></tr>
<?php
$conn = mysqli_connect("localhost","sribabku_funwork","ule#7EKWI}t0","sribabku_funwork");
date_default_timezone_set('Asia/Kolkata');
$data = mysqli_connect($conn,"select b.route_id, b.loc_name, b.pickup_time, a.full_name, a.adult_count, a.child_count, a.mobile_no, a.adult_pickedup, a.child_pickedup, a.user_id from users a, pickup_locations b where a.loc_id=b.loc_id and a.loc_id>0 order by a.loc_id, a.full_name");
if(mysqli_num_rows($data)>0) {
	while($row = mysqli_fetch_assoc($data)) {
		print '<tr><td>'.$row['loc_name'].' (Route '.$row['route_id'].')</td><td>'.$row['pickup_time'].'</td><td>'.$row['full_name'].'</td><td><input type="number" value="'.$row['adult_pickedup'].'" name="adult_'.$row['user_id'].'" id="adult_'.$row['user_id'].'" class="inp" /> <input type="number" value="'.$row['child_pickedup'].'" name="child_'.$row['user_id'].'" id="child_'.$row['user_id'].'" class="inp" /></td></tr>';
	}
}
?>
</table>
</body>
</html>
