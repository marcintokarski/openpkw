describe("KlkParser", function() {
	describe("When loading list of candidates", function() {
	
		it("should return number of candidates", function() {
			var parser = OpenPKW.KlkParser
			var candidates = parser.loadCandidates(klk_xml);
			expect(candidates.length).toBe(10);
		});

		it("should return position of a candidate on a list", function() {
			var parser = OpenPKW.KlkParser
			var candidates = parser.loadCandidates(klk_xml);
			expect(candidates[3].positionOnList).toBe(4);
		});

		it("should return first name of a candidate", function() {
			var parser = OpenPKW.KlkParser
			var candidates = parser.loadCandidates(klk_xml);
			expect(candidates[3].firstName).toBe("Janusz Ryszard");
		});

		it("should return last name of a candidate", function() {
			var parser = OpenPKW.KlkParser
			var candidates = parser.loadCandidates(klk_xml);
			expect(candidates[3].lastName).toBe("KORWIN-MIKKE");
		});
	})

	describe("When loading polling station data", function() {
		it ("should return the community code", function () {
			var parser= OpenPKW.KlkParser
			var pollingStationData = parser.loadPollingStationData($.parseXML(klk_xml));
			expect(pollingStationData.kodGminy).toBe("106101");
		});

		it ("should return the circuit number", function () {
			var parser= OpenPKW.KlkParser
			var pollingStationData = parser.loadPollingStationData($.parseXML(klk_xml));
			expect(pollingStationData.nrObwodu).toBe("1");
		});

		it ("should return the circuit location", function () {
			var parser= OpenPKW.KlkParser
			var pollingStationData = parser.loadPollingStationData($.parseXML(klk_xml));
			expect(pollingStationData.siedzibaKomisjiObwodowej).toBe("Studio Consulting sp. z o.o., ul. Romanowska 55F");
		});		
	})
});