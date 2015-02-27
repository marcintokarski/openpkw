require 'nokogiri'

output = File.open("wmrodz.txt", "w")
wmrodz = File.read("slowniki/WMRODZ.xml")
wmrodz_xml = Nokogiri::XML(wmrodz)

wmrodz_xml.xpath("/teryt/catalog/row").each do |row|
	rm_id = row.xpath("col[@name='RM']").text
	rm_name = row.xpath("col[@name='NAZWA_RM']").text
	puts "#{rm_id} #{rm_name}"
	output.write "#{rm_id} #{rm_name}\n"
end