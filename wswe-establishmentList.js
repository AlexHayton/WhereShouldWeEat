function InitialiseEstablishmentList() {
}

function FillEstablishmentList(status, data) {
	
}

function GetNewEstablishmentList() {
	var params = {
		src: "yada.php",
		success: FillEstablishmentList,
		error: function (status, error) {
			alert("Error getting data!");
		}
	};
	$.ajax(params);
}