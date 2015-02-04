function validate() {

	try {
		var pole_1_1 = getInt("liczba_1_1", "Liczba wyborców uprawnionych do głosowania");
		var pole_1_2 = getInt("liczba_1_2", "Komisja otrzymała kart do głosowania");
		var pole_1_3 = getInt("liczba_1_3", "Liczba wyborców, którym wydano karty do głosowania");
		var pole_1_3a = getInt("liczba_1_3a", "Liczba wyborców głosujących przez pełnomocnika");
		var pole_1_4 = getInt("liczba_1_4", "Nie wykorzystano karto do głosowania");

		var liczba_osob_meldunek = 2342;
		var dopuszczalny_blad = liczba_osob_meldunek / 10;
		var roznica = Math.abs(liczba_osob_meldunek - pole_1_1);

		check(roznica < dopuszczalny_blad, "Liczba wyborców uprawnionych do głosowania jest różna od liczby osób z ostatniego meldunku wyborczego ("+liczba_osob_meldunek+") o wiecej niż 10%.");

		var min_liczba_kart = 0.8 * pole_1_1;
		check(pole_1_2 >= min_liczba_kart, "Liczba otrzymanych kart do głosowania jest mniejsza, niż 80% liczby wyborów uprawnionych do głosowania.");

		check(pole_1_3a <= pole_1_3, "Liczba wyborców głosujących przez pełnomocnika jest większa, niż liczba wyborców, którym wydano karty do głosowania.");

		var suma = parseInt(pole_1_3) + parseInt(pole_1_4);

		check(suma == pole_1_2, " Suma liczb z pkt. 3 i 4 powinna być równa liczbie z pkt. 2. Jeśli tak nie jest, przypuszczalną przyczynę należy omówić w pkt. 9.");

	} catch (err) {
		alert(err);
		return;
	}

	alert("Jest OK!");
}

function check(result, errorMessage) {
	if (!result) {
		throw errorMessage;
	}
}

function getInt(elementId, elementName) {
	var element = document.getElementById(elementId);
	if (!isInt(element.value)) {
		throw ("Wartość w polu ["+elementName+"] musi być liczbą całkowitą.");
	}
	return element.value;
}

function isInt(n) {
  return !isNaN(parseInt(n)) && isFinite(n) && parseInt(n) == n.toString();
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}