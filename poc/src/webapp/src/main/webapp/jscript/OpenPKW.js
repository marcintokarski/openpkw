var OpenPKW = OpenPKW || {};

$(document).ready(function() {
	$("#loadDataButton").on( "click", function( event ) {
		// Wczytanie pliku KLK
		$.ajax({
			type: "GET",
			url: "http://54.173.158.97:8080/openpkw/106101.xml",
			dataType: "xml",
			success: function (xml) {
				var candidates = OpenPKW.KlkParser.loadCandidates(xml);
				fillCandidates(candidates);

				var pollingStationsData = OpenPKW.KlkParser.loadPollingStationsData(xml);
				fillPollingStationsData(pollingStationsData);
			}
		});
	});
});

function fillCandidates(candidates) {
	$(candidates).each(function(index) {
		var positionOnList = this.positionOnList;
		var firstName = this.firstName;
		var lastName = this.lastName;
		var textFieldId = "#kandydat_"+positionOnList+"_imiona_i_nazwisko";
		$(textFieldId).val(firstName+" "+lastName);
	});
}

function fillPollingStationsData(pollingStationsData) {
	var pollingStationData = pollingStationsData[0];

	$("#kodGminy").val(pollingStationData.kodGminy);
	$("#nrObwodu").val(pollingStationData.nrObwodu);
	$("#adresOKW").val(pollingStationData.siedzibaKomisjiObwodowej);
	$("#gmina").val(pollingStationData.gmina);
	$("#powiat").val(pollingStationData.powiat);
	$("#wojewodztwo").val(pollingStationData.wojewodztwo);
	$("#nrKomisji").val(pollingStationData.numerKomisjiOkregowej);
	$("#miejsceOKW").val(pollingStationData.siedzibaKomisjiOkregowej);
	$("#liczbaWyborcow").val(pollingStationData.liczbaWyborcow);
}