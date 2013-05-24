<?php
	require("head.php");
?>
	<div id="postcodeMain">
		<h2>Look up a postcode</h2>
		<fieldset>
			<input type="text" id="txtLocation">Enter a location</input>
			<input type="submit" id="btnSubmit">Go!</input>
		</fieldset>
	</div>
	
	<div id="mapMain" style="display:none;">
		<canvas id="map-canvas" />
	</div>
	
	<div id="establishmentMain">
		<h2>Nearby Restaurants:</h2>
		<div id="establishmentList">
		</div>
	</div>
<?php
	require("foot.php");
?>