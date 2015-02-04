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
	},

	loadPollingStationData: function(xmlDoc) {
		result = [];

		//xml = $.parseXML(xmlDoc);
		xml = xmlDoc;
		var kodGminy = OpenPKW.KlkParser.getAttribute(xml, "/kalkulator/akcja/jednostka/jednostka/jednostka/@jnsKod");
		var nrObwodu = OpenPKW.KlkParser.getAttribute(xml, "/kalkulator/akcja/jednostka/jednostka/jednostka/obwod[1]/@obdNumer");
		var siedzibaKomisjiObwodowej = OpenPKW.KlkParser.getAttribute(xml, "/kalkulator/akcja/jednostka/jednostka/jednostka/obwod[1]/obdAdres");
		var gmina = OpenPKW.KlkParser.getAttribute(xml, "/kalkulator/akcja/jednostka/jednostka/jednostka/jnsNazwa");
		var powiat = "?";
		var wojewodztwo = OpenPKW.KlkParser.getAttribute(xml, "/kalkulator/akcja/jednostka/jednostka/jnsNazwa");
		var numerKomisjiOkregowej = OpenPKW.KlkParser.getAttribute(xml, "/kalkulator/akcja/jednostka/jednostka/jednostka/organWyborczy/slownik/wpis[@typ='NUMER']");
		var siedzibaKomisjiOkregowej = OpenPKW.KlkParser.getAttribute(xml, "/kalkulator/akcja/jednostka/jednostka/jednostka/organWyborczy/slownik/wpis[@typ='MIEJSCOWNIK_W']");

		result = new OpenPKW.PollingStationData(kodGminy, nrObwodu, siedzibaKomisjiObwodowej, gmina, powiat, wojewodztwo, numerKomisjiOkregowej, siedzibaKomisjiOkregowej);
		return result;
	},

	getAttribute:function(document, path) {
		return document.evaluate(path, document, null, XPathResult.ANY_TYPE, null).iterateNext().textContent;
	}

}