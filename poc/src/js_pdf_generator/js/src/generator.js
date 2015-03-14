
$(document).ready(function() {


 

var pdf = new jsPDF('p', 'pt', 'letter');

var source = '';

$.get("doc_template.html").success(function(response){

	source = (new XMLSerializer()).serializeToString(response);
	console.debug(source);

	createPdf();
});

function createPdf()
{


margins = {
    top: 0,
    bottom: 60,
    left: 0,
    width: 522
  };
  // all coords and widths are in jsPDF instance's declared units
  // 'inches' in this case
pdf.fromHTML(
  	'ŁÓDŹ - ¥Æ¯ DDüß!' // HTML string or DOM elem ref.
  	, margins.left // x coord
  	, margins.top // y coord
  	, {
  		'width': margins.width // max width of content on PDF
  		, 'elementHandlers': {}
  	},
  	function (dispose) {
  	  // dispose: object with X, Y of the last line add to the PDF
  	  //          this allow the insertion of new lines after html
        //pdf.save('Test.pdf');
      },
  	margins
  )


var string = pdf.output('datauristring');
$('iframe').attr('src', string);

}




});