var OpenPKW = OpenPKW || {};

var pollingStationsData;
var geographyTaxonomy;

$(document).ready(function() {

	loadGeographyTaxonomy();
	fillVoivodships();

	$("#loadDataButton").on("click", function( event ) {
		// Wczytanie pliku KLK
		$.ajax({
			type: "GET",
			url: "http://54.173.158.97:8080/openpkw/106101.xml",
			dataType: "xml",
			success: function (xml) {
				var candidates = OpenPKW.KlkParser.loadCandidates(xml);
				fillCandidates(candidates);

				pollingStationsData = OpenPKW.KlkParser.loadPollingStationsData(xml);
				fillPollingStationsData(pollingStationsData);
			}
		});
	});

	$("#wyborOKW").on("change", function(event) {
		updatePollingStationData();
	});

	$("#wyborWojewodztwa").on("change", function(event) {
		fillDistricts();
	});

	$("#wyborPowiatu").on("change", function(event) {
		fillCommunities();
	})
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
	var adresOKW = $('#wyborOKW');
	$.each(pollingStationsData, function(idx, pollingStationData) {
    	adresOKW.append(
	        $('<option></option>').val(idx).html("Obwód nr "+pollingStationData.nrObwodu+": "+pollingStationData.siedzibaKomisjiObwodowej)
	    );
	});

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

function updatePollingStationData() {
	var idx = $("#wyborOKW").find("option:selected").val();
	var pollingStationData = pollingStationsData[idx];
	$("#kodGminy").val(pollingStationData.kodGminy);
	$("#nrObwodu").val(pollingStationData.nrObwodu);
	$("#adresOKW").val(pollingStationData.siedzibaKomisjiObwodowej);
	$("#liczbaWyborcow").val(pollingStationData.liczbaWyborcow);
}

function loadGeographyTaxonomy() {
	var voivodships = new Array();
	voivodships[0] = {id : "02", name: "DOLNOŚLĄSKIE", children: [
		{id:"00", name: "bolesławiecki", children: [
			{id:"01", name: "Bolesławiec (gmina miejska)"},
			{id:"02", name: "Bolesławiec (gmina wiejska)"}
		]},
		{id:"01", name: "dzierżoniowski", children: [
			{id:"01", name: "Bielawa"},
			{id:"02", name: "Dzierżoniów"}
		]}
	]};
	voivodships[1] = {id : "04", name: "KUJAWSKO-POMORSKIE", children: [
		{id:"01", name: "aleksandrowski", children: [
			{id: "01", name: "Aleksandrów Kujawski"},
			{id: "02", name: "Ciechocinek"}
		]},
		{id:"02", name: "brodnicki", children: [
			{id: "01", name: "Brodnica"},
			{id: "02", name: "Bobrowo"}
		]}
	]};

	geographyTaxonomy = voivodships;
}

function fillVoivodships() {
	var wyborWojewodztwa = $("#wyborWojewodztwa");
	wyborWojewodztwa.empty();
	$.each(geographyTaxonomy, function(idx, voivodship) {
    	wyborWojewodztwa.append(
	        $('<option></option>').val(idx).html(voivodship.name+" (id: "+voivodship.id+")")
	    );
	});
	fillDistricts();
}

function fillDistricts() {
	var voivodshipIdx = $("#wyborWojewodztwa").find("option:selected").val();
	var districts = geographyTaxonomy[voivodshipIdx].children;
	var wyborPowiatu = $("#wyborPowiatu");
	wyborPowiatu.empty();
	$.each(districts, function(idx, district) {
    	wyborPowiatu.append(
	        $('<option></option>').val(idx).html(district.name+" (id: "+district.id+")")
	    );
	});
	fillCommunities();
}

function fillCommunities() {
	var voivodshipIdx = $("#wyborWojewodztwa").find("option:selected").val();
	var districtIdx = $("#wyborPowiatu").find("option:selected").val();
	var districts = geographyTaxonomy[voivodshipIdx].children;
	var communities = districts[districtIdx].children;

	var wyborGminy = $("#wyborGminy");
	wyborGminy.empty();
	$.each(communities, function(idx, community) {
    	wyborGminy.append(
	        $('<option></option>').val(idx).html(community.name+" (id: "+community.id+")")
	    );
	});
}