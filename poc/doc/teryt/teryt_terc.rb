require 'nokogiri'
require 'json'

output_slownik = File.open("terc_slownik.txt", "w")
output_taksonomia = File.open("terc_taksonomia.txt", "w")
wmrodz = File.read("slowniki/TERC.xml")
wmrodz_xml = Nokogiri::XML(wmrodz)

rodz = Hash.new { |hash, key| hash[key] = Array.new}

teryt = Array.new

currentWoj = nil
currentPow = nil
currentGmi = nil

wmrodz_xml.xpath("/teryt/catalog/row").each do |row|
	woj_id = row.xpath("col[@name='WOJ']").text
	pow_id = row.xpath("col[@name='POW']").text
	gmi_id = row.xpath("col[@name='GMI']").text
	rodz_id = row.xpath("col[@name='RODZ']").text
	nazwa = row.xpath("col[@name='NAZWA']").text
	rodz_name = row.xpath("col[@name='NAZDOD']").text

	is_woj = woj_id.length > 0
	is_pow = pow_id.length > 0
	is_gmi = gmi_id.length > 0
	is_rodz = false if rodz_id.length == 0
	is_rodz = rodz_id if rodz_id.length > 0

	id = "#{is_woj}, #{is_pow}, #{is_gmi}, #{is_rodz}"

	level = 0
	self_id = ""

	self_id += woj_id if is_woj
	self_id += ":#{pow_id}" if is_pow
	self_id += ":#{gmi_id}" if is_gmi

	level = 1 if is_woj
	level = 2 if is_pow
	level = 3 if is_gmi

	indent = "" if level == 1
	indent = "   " if level == 2
	indent = "      " if level == 3

	parent_id = self_id[0, self_id.length-3]

	short_id = self_id[-2, self_id.length]

	output_taksonomia.write "#{indent}#{short_id} #{nazwa} (#{rodz_name})\n"

	if level == 1
		woj = { :id => short_id, :name => nazwa, :type => rodz_name, :children => Array.new }
		teryt << woj
		currentWoj = woj
	end

	if level == 2
		pow = { :id => short_id, :name  => nazwa, :type => rodz_name,:children  =>Array.new }
		currentWoj[:children] << pow
		currentPow = pow
	end

	if level == 3
		gmi = { :id => short_id, :name => nazwa, :type => rodz_name, :children => Array.new }
		currentPow[:children] << gmi
		currentGmi = gmi
	end

	if (!rodz[id].include?(rodz_name))
		rodz[id] << rodz_name
	end
end

output_slownik.write("WOJ, POW, GMI, RODZ: NAZDOD\n")
rodz.each { |key, value| output_slownik.write "#{key}: #{value.map{|x| "'#{x}'"}.join(',')}\n"}

output_taksonomia = File.open("terc_taksonomia.json", "w")
output_taksonomia.write teryt.to_json