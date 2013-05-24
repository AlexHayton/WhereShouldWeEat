// Lookup/postcode funcs here
var minimisedPostcodeCoords = { X:10, Y:10, Width:100, Height:100 };

function SubmitPostcode() {
	// Minimise the postcode box
	$("#postcodeMain").css("position", "fixed")
					  .css("top", minimisedPostcodeCoords.X)
				 	 .css("left", minimisedPostcodeCoords.Y)
				 	 .width(minimisedPostcodeCoords.Width)
				 	 .css("top", minimisedPostcodeCoords.Height);
						 
	$("#mapMain").show();
	GetNewEstablishmentList();
}

function PostcodeAutocomplete() {
}

function InitialisePostcodeLookup() {
	$("#btnPostcodeSubmit").click(SubmitPostcode)
}
