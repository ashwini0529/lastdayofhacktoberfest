<script>
function analyzeColor1(myColor) {
	if (myColor == "Blue") {
	    alert("Just like the sky!");
	}
}
</script>
<h3>Favorite Color</h3>
<label>
	<input type="radio" name="fav_color1" value="Blue" onclick="analyzeColor1(this.value);"> Blue
</label>
<label>
	<input type="radio" name="fav_color1" value="Red" onclick="analyzeColor1(this.value);"> Red
</label>
<label>
	<input type="radio" name="fav_color1" value="Green" onclick="analyzeColor1(this.value);"> Green
</label>
