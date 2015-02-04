var OpenPKW = OpenPKW || {};

	function initialize() {
		document.getElementById("kodGminy").value = "020102 2";
		document.getElementById("nrObwodu").value = "Obwód nr 3";
		document.getElementById("adresOKW").value = "Szkoła Podstawowa Nr 3, ul. Sienkiewicza 25, w Bełchatowie";
		document.getElementById("gmina").value = "Nowogrodziec";
		document.getElementById("powiat").value = "Bolesławiecki";
		document.getElementById("wojewodztwo").value = "Dolnośląskie";
		document.getElementById("nrKomisji").value = "1";
		document.getElementById("miejsceOKW").value = "Bełchatowie";
	}

	$(document).ready(function() {
		$("#loadDataButton").on( "click", function( event ) {
			$.ajax({
			 	url: "http://54.173.158.97:8080/openpkw/data.json",
			 	success: function( data ) {
			 		json = JSON.parse(data);
		
			 		kodGminy = json.kodGminy;
			 		nrObwodu = json.nrObwodu;
			 		adresOKW = json.adresOKW;
			 		gmina = json.gmina;
			 		powiat = json.powiat;
			 		wojewodztwo = json.wojewodztwo;
			 		nrKomisji = json.nrKomisji;
			 		miejsceOKW = json.miejsceOKW;
		
					$("#kodGminy").val(kodGminy);
					$("#nrObwodu").val(nrObwodu);
					$("#adresOKW").val(adresOKW);
					$("#gmina").val(gmina);
					$("#powiat").val(powiat);
					$("#wojewodztwo").val(wojewodztwo);
					$("#nrKomisji").val(nrKomisji);
					$("#miejsceOKW").val(miejsceOKW);
			 	}
			 });

			// Wczytanie pliku KLK
			$.ajax({
    			type: "GET",
    			url: "http://54.173.158.97:8080/openpkw/106101.xml",
    			dataType: "xml",
    			success: function (xml) {
            		var kandydaci = OpenPKW.KlkParser.loadCandidates(xml);
            		$(kandydaci).each(function(index) {
            			var positionOnList = this.positionOnList;
            			var firstName = this.firstName;
            			var lastName = this.lastName;
	            		var textFieldId = "#kandydat_"+positionOnList+"_imiona_i_nazwisko";
	            		$(textFieldId).val(firstName+" "+lastName);
            		});
    			}
			});
		});
	});