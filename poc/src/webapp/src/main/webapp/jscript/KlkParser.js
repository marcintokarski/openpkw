var OpenPKW = OpenPKW || {};

OpenPKW.KlkParser = {

	loadCandidates: function(xmlDoc) {
		result = [];
		var candidateElements = $(xmlDoc).find("kandydat");
		candidateElements.each(function(index) {
			var positionOnList = parseInt($(this).attr("kdtNumerNaKarcie"));
			var firstName = $(this).find("imiona")[0].innerHTML;
			var lastName = $(this).find("nazwisko")[0].innerHTML;
			result[result.length] = new OpenPKW.Candidate(positionOnList, firstName, lastName);
		});
	 	return result;
	}
}