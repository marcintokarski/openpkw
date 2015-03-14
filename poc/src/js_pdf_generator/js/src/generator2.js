var docDefinition = '';

$(document).ready(function() {

	$("#barcode").JsBarcode(md5('OPENPKW PROOF OF CONCEPT'),{
			    width:  1,
			    height: 25,
			    quite: 5,
			    format: "CODE128",
			    displayValue: true,
			    font:"Tahoma",
			    textAlign:"center",
			    fontSize: 10,
			    backgroundColor:"",
			    lineColor:"#000"
			}).attr('src');

  docDefinition = {
    	pageSize: 'A4',
    	
    	footer: function(currentPage, pageCount) { return [
    			{image: $("#barcode").attr('src'),style: {alignment:'center'}}
    		]

    		 },
        
        content: [{
                text: 'Załączniki do uchwały Państwowej Komisji Wyborczej z\ndnia 26 stycznia 2015 r. (poz. ....)\nZałącznik nr 1',
                style: {
                    fontSize: 8
                },
                margin: [330, 0, 0, 5]
            },
            {
                table: {
                    // headers are automatically repeated if the table spans over multiple pages
                    // you can declare how many rows should be treated as headers
                    headerRows: 0,
                    widths: [500],

                    body: [
                    		[{ text: [
                    				{ text: '…………………………… *)\n', style:{fontSize: 8, alignment: 'right'}},
									{ text: 'WYBORY PREZYDENTA RZECZYPOSPOLITEJ POLSKIEJ', style:{fontSize: 12 ,alignment: 'center',bold:true}}
								   ]
							}]
                    	]
                }
            },
            {
                table: {
                    // headers are automatically repeated if the table spans over multiple pages
                    // you can declare how many rows should be treated as headers
                    headerRows: 0,
                    widths: [130,12,12,12,12,12,12,151,12,12,12,12],

                    body: [
                    		[
                    			{text: 'Kod terytorialny gminy\n(dzielnicy w m. st. Warszawie)',style: {alignment:'left'}},
                    			{text:'1',style: 'centerInputValue'},
                    			{text:'2',style: 'centerInputValue'},
                    			{text:'3',style: 'centerInputValue'},
                    			{text:'4',style: 'centerInputValue'},
                    			{text:'5',style: 'centerInputValue'},
                    			{text:'6',style: 'centerInputValue'},
                    			{text: 'Numer obwodu do głosowania',style: {alignment:'right'},margin:[0,5,0,0]},
                    			{text:'1',style: 'centerInputValue'},
                    			{text:'2',style: 'centerInputValue'},
                    			{text:'3',style: 'centerInputValue'},
                    			{text:'4',style: 'centerInputValue'},
                    		]
                    	]
                },
                layout: {hLineWidth: function(i, node) {return (i === 0) ? 0 : 1;}}
				
            },
            {
                table: {
                    // headers are automatically repeated if the table spans over multiple pages
                    // you can declare how many rows should be treated as headers
                    headerRows: 0,
                    widths: [151,340],

                    body: [
                    		[
                    			{text: 'Siedziba Obwodowej Komisji\nWyborczej (adres)',style: {alignment:'right'}},
                    			{text:' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',style: 'centerInputTextValue'},
                    		]
                    	]
                },
                layout: {hLineWidth: function(i, node) {return (i === 0) ? 0 : 1;}}
				
            },
            {
                table: {
                    // headers are automatically repeated if the table spans over multiple pages
                    // you can declare how many rows should be treated as headers
                    headerRows: 0,
                    widths: [42,100,36,119,58,100],

                    body: [
                    		[
                    			{text: 'Gmina/\nDzielnica',style: {alignment:'center'}},
                    			{text:' Lorem Ipsum',style: 'centerInputTextValue',margin:[0,4,0,0]},
                    			{text: 'Powiat',style: {alignment:'center'},margin:[0,4,0,0]},
                    			{text:' Lorem Ipsum',style: 'centerInputTextValue',margin:[0,4,0,0]},
                    			{text: 'Województwo',style: {alignment:'center'},margin:[0,4,0,0]},
                    			{text:' Lorem Ipsum',style: 'centerInputTextValue',margin:[0,4,0,0]},
                    		]
                    	]
                },
                layout: {hLineWidth: function(i, node) {return (i === 0) ? 0 : 1;}}
				
            },
            {
                text: 'PROTOKÓŁ WYNIKÓW GŁOSOWANIA W OBWODZIE\n'
						+'W WYBORACH PREZYDENTA RZECZYPOSPOLITEJ POLSKIEJ\n'
						+'PRZEPROWADZONEGO W DNIU ………………………………………………',
                style: {fontSize: 12,alignment: 'center',bold: 'true'},
                margin: [0, 10, 0, 0]
            },
            {
                text: 'Głosowanie rozpoczęło się w dniu ..................................... 20......... r. o godz. ......... i trwało do godz. ......... ',
                margin: [0, 10, 0, 0]
            },
            createHeaderElement('I.',' ROZLICZENIE KART DO GŁOSOWANIA'),
            {
                table: createVoteResultTable([
            			createVoteResultRow('1','Liczba wyborców uprawnionych do głosowania (umieszczonych w spisie, z uwzględnieniem dodatkowych formularzy) w chwili zakończenia głosowania',randomNumber())
            		])
				
            },
            {
            	margin:[0,20,0,0],
                table: createVoteResultTable([
                    		createVoteResultRow('2','Komisja otrzymała kart do głosowania',randomNumber()),
                    		createVoteResultRow('3','Nie wykorzystano kart do głosowania',randomNumber()),
                    		createVoteResultRow('4','Liczba wyborców, którym wydano karty do głosowania\n(liczba podpisów w spisie oraz adnotacje „odmowa podpisu”)',randomNumber()),
                    	])
                
				
            },
            { 
            		margin:[2,4,0,0],
            		style: {fontSize: 9},
					columns: createNoticeColumns('Suma liczb z pkt. 3 i 4 powinna być równa liczbie z pkt. 2, jeśli tak nie jest — przypuszczalną przyczynę należy opisać \nw punkcie 15.')
            },
            {
            	margin:[0,10,0,0],
                table: createVoteResultTable([
                    		createVoteResultRow('5','Liczba wyborców głosujących przez pełnomocnika (liczba kart do głosowania wydanych na podstawie otrzymanych przez komisję aktów pełnomocnictwa)',randomNumber()),
                    	])
				
            },
            {
            	margin:[0,20,0,0],
                table: createVoteResultTable([
                    		createVoteResultRow('6','Liczba wyborców głosujących na podstawie zaświadczenia o prawie do głosowania',randomNumber()),
                    ]) 
            },
            {
            	margin:[0,20,0,0],
                table: createVoteResultTable([
                    		createVoteResultRow('7','Liczba wyborców, którym wysłano pakiety wyborcze',randomNumber()),
                    		createVoteResultRow('8','Liczba otrzymanych kopert zwrotnych',randomNumber()),
                    		createVoteResultRow('8a','Liczba kopert zwrotnych, w których nie było oświadczenia o osobistym i tajnym oddaniu głosu',randomNumber()),
                    		createVoteResultRow('8b','Liczba kopert zwrotnych, w których oświadczenie nie było podpisane przez wyborcę',randomNumber()),
                    		createVoteResultRow('8c','Liczba kopert zwrotnych, w których nie było koperty na kartę do głosowania',randomNumber()),
                    		createVoteResultRow('8d','Liczba kopert zwrotnych, w których znajdowała się niezaklejona koperta na kartę do głosowania',randomNumber()),
                    		createVoteResultRow('8e','Liczba kopert na kartę do głosowania wrzuconych do urny',randomNumber())
                    	])
            },
            { 
            		margin:[2,4,0,0],
            		style: {fontSize: 9},
            		pageBreak: 'after',
            		columns: createNoticeColumns('Liczba z pkt. 8 nie może być większa od liczby z pkt. 7. Suma liczba z pkt. 8a–8e nie może być większa od liczby z pkt. 8.')
            },
            createHeaderElement('II.','USTALENIE WYNIKÓW GŁOSOWANIA'),
            {
            	text: 'Komisja  stwierdziła,  że  pieczęcie  na  urnie  pozostały  nienaruszone.  Po  wyjęciu  kart  z  urny  Komisja ustaliła  na  ich podstawie następujące wyniki głosowania:'
            },
            {
            	margin:[0,5,0,0],
                table: createVoteResultTable([
                    		createVoteResultRow('9','Liczba kart wyjętych z urny',randomNumber()),
                    		createVoteResultRow('9a','w tym liczba kart wyjętych z kopert na kartę do głosowania ',randomNumber())
                    	])
            },
            { 
            		margin:[2,4,0,0],
            		style: {fontSize: 9},
					columns: createNoticeColumns('Liczba z pkt. 9 pomniejszona o liczbę z pkt. 9a powinna być równa liczbie z pkt. 4.'
													+ ' Dodatkowo liczba z pkt. 9a nie powinna być większa od liczby z pkt. 8e; '
													+ 'jeśli tak nie jest — przypuszczalną przyczynę należy opisać w punkcie 16.')
            },
            {
            	margin:[0,5,0,0],
                table: createVoteResultTable([
                    		createVoteResultRow('10','Liczba kart nieważnych (innych niż urzędowo ustalone lub nieopatrzonych'
														+ 'pieczęcią obwodowej komisji wyborczej)',randomNumber()),
                    		createVoteResultRow('11','Liczba kart ważnych ',randomNumber())
                    	])
            },
            { 
            		margin:[2,4,0,0],
            		style: {fontSize: 9},
					columns: createNoticeColumns('Suma liczb z pkt. 10 i 11 musi być równa liczbie z pkt. 9.\n'
												+ 'Jeśli w pkt. 10 liczba jest większa niż 0, przyczynę należy opisać w pkt. 17.')
            },
            {
            	margin:[0,5,0,0],
                table: createVoteResultTable([
                    		createVoteResultRow('12','Liczba głosów nieważnych (z kart ważnych)',randomNumber()),
                    		createVoteResultRow('13','Liczba głosów ważnych oddanych łącznie na wszystkich'
                    					+ ' kandydatów (z kart ważnych)',randomNumber())
                    	])
            },
            { 
            		margin:[2,4,0,0],
            		style: {fontSize: 9},
					columns: createNoticeColumns('Suma liczb z pkt. 12 i 13 musi być równa liczbie z pkt. 11.')
            },
            {
            	text: '14. Na poszczególnych  kandydatów na Prezydenta Rzeczypospolitej Polskiej  oddano' 
							+ 'następujące liczby głosów ważnych:',
				margin:[0,10,0,0],
				style: {fontSize: 12,bold:true},
            },
            {
            	margin:[0,5,0,0],
            	table:createVoteResultTable([
            				createVoteResultHeaderRow('Lp.','Nazwisko i imię - imiona','Liczba głosów ważnych'),
            				createVoteResultRow('1',''),createVoteResultRow('2',''),createVoteResultRow('3',''),
            				createVoteResultRow('4',''),createVoteResultRow('5',''),createVoteResultRow('...','')
            		])
            },
            {
            	margin:[403,0,0,0],
            	table:{
            		headerRows: 0,
            		widths: [12,12,12,12,12],
            		body:[
            			[ 
            				
            				{text:' ',style: 'centerInputValue'}, 
	            			{text:' ',style: 'centerInputValue'},
            				{text:' ',style: 'centerInputValue'},
            				{text:' ',style: 'centerInputValue'},
            				{text:' ',style: 'centerInputValue'}]
            			
            		]

            	},
				layout: {
						hLineWidth: function(i, node) {return (i === 0) ? 0 : 1;}
				}
            },
            {text:'Razem: ',margin:[365,-18,0,18]},
            { 
            		margin:[2,4,0,0],
            		style: {fontSize: 9},
            		pageBreak: 'after',
					columns: createNoticeColumns('Suma głosów ważnych oddanych na wszystkich kandydatów (rubryka „Razem”)'
								+' musi być równa liczbie z pkt 13, czyli liczbie głosów ważnych oddanych'
								+ ' łącznie na wszystkich kandydatów.')
            },
            createHeaderElement('III.','UWAGI I ADNOTACJE'),
            createAdnotationText('15.**)','Uwagi  o  przypuszczalnej  przyczynie  ewentualnej  różnicy  pomiędzy  sumą  '
				            			+'liczb  z pkt. 3 i 4 a liczbą z pkt. 2; jeżeli różnica nie występuje, wpisać „brak uwag”:'),
            createAdnotationValue('Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'),
            
            createAdnotationText('16.**)','Uwagi o przypuszczalnej przyczynie ewentualnej różnicy pomiędzy liczbą z pkt. 9 pomniejszoną o liczbę z pkt. 9a a liczbą z pkt. 4,a także o przypuszczalnej przyczynie ewentualnej różnicy pomiędzy liczbą z pkt. 9a a liczbą z pkt. 8e; jeżeli różnice nie występują, wpisać „brak uwag”:'),
            createAdnotationValue('Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'),
            
            createAdnotationText('17.**)','Uwagi o przypuszczalnej przyczynie wystąpienia  kart  nieważnych  (pkt 10);  jeżeli  liczba  w  pkt. 10 wynosi 0,'),
            createAdnotationValue('Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'),
            
            createAdnotationText('18.**)','W trakcie głosowania wydano następujące zarządzenia; jeżeli nie wydano, wpisać „brak zarządzeń”:'),
            createAdnotationValue('brak uwag'),
            
            createAdnotationText('19.**)','Adnotacja o wniesieniu uwag przez  mężów  zaufania  z  wymienieniem  konkretnych  zarzutów ***);  jeżeli  nie ma,wpisać „brak zarzutów” lub „brak mężów zaufania w obwodzie”'),
            createAdnotationValue('Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'),
            
            createAdnotationText('20.**)','Adnotacja o wniesieniu uwag przez członków Komisji z wymienieniem konkretnych zarzutów ***); jeżeli nie ma,wpisać „brak zarzutów”'),
            createAdnotationValue('brak uwag'),
            
            createAdnotationText('21.**)','Inne uwagi; jeżeli nie ma, wpisać „brak uwag”'),
            createAdnotationValue('Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'),

            {text: 'Przy sporządzeniu protokołu obecni byli członkowie Komisji:'},
            createCommisionSignatures(),
            {text: '(pieczęć komisji)',margin:[0,50],style:{alignment:'center',fontSize:8}},
            {
			    table: {
			            widths: [150,150],
			            body: [[" "], [" "]]
			    },
			    layout: {
			        hLineWidth: function(i, node) {return (i === 0 || i === node.table.body.length) ? 0 : 0.5;},
			        vLineWidth: function(i, node) {return 0;},
    			}
			},
			{columns:[{width: 35, text: '*) ',style: {fontSize: 8},margin:[0,-12,0,0]},{width:'*',text:'W ponownym głosowaniu wpisać wyraz „PONOWNE”.',margin:[0,-12,0,0]}]},
			{columns:[{width: 35, text: '**) ',style: {fontSize: 8}},{width:'*',text:'Jeżeli treść dotycząca danego punktu protokołu nie mieści się na formularzu, należy dołączyć ją do protokołu, zaznaczając to w odpowiednim punkcie protokołu'}]},
			{columns:[{width: 35, text: '***) ',style: {fontSize: 8}},{width:'*',text:'W razie zgłoszenia uwag przez mężów zaufania lub członków Komisji, stanowisko Komisji wobec zarzutów należy dołączyć do protokołu.'}]},
			
        ],
        styles: {
					centerInputValue: {alignment:'right', color: 'red', bold :true, fontSize:14,margin:[0,4,2,0]},
					centerInputTextValue: {alignment:'center', color: 'red',fontSize:10}
				},
        defaultStyle: {
            font: 'times',
            fontSize:10
        }
    };

    pdfMake.fonts = {
            times: {
                normal: 'times.ttf',
                bold: 'timesbd.ttf',
                italics: 'times.ttf',
                bolditalics: 'times.ttf'
            }
        }
        //var printer = new PdfPrinter();
        
        
    /*
    var pdfBase64 = pdfMake.createPdf(docDefinition).getBase64(function(data) {

        //console.log("data:application/pdf;base64," + data)});
        //$('#pdfDownlo').attr('src', "data:application/pdf;base64," + data)
    })
	*/


    function createVoteResultRow(col1Text,col2Text,voteValue){
    	row = new Array();

    	row.push({text: col1Text ,style: {alignment:'center'},margin:[0,4,0,0]});
    	row.push({text: col2Text, margin:[0,4,0,0]});
    	
    	//reverse string
		voteValue ?  voteValue = reverse(voteValue.toString()) : undefined;
	
    	for(i=0; i <= 4; i++){
    		
    		if (voteValue && !voteValue.charAt(4-i)){
    			row.push({text:'*',style: 'centerInputValue'})
    		} else if(voteValue){
    			row.push({text:voteValue.charAt(4-i), style: 'centerInputValue'})
    		} else {
    			row.push({text:' ', style: 'centerInputValue'})
    		}
    	}
    	
    	return row;

    }

    function createVoteResultHeaderRow(col1Text,col2Text,col3Text){
    	row = new Array();

    	headerStyle = {alignment:'center',bold:true};

    	row.push({text: col1Text ,style: headerStyle,margin:[0,4,0,0]});
    	row.push({text: col2Text, margin:[0,4,0,0],style: headerStyle});
    	row.push({text: col3Text,colSpan: 5,margin:[0,4,0,0],style: headerStyle})

    	return row;
    }

    function createVoteResultTable(rows){
    	table = new Object();

    	table.headerRows = 0,
        table.widths = [20,365,12,12,12,12,12],
        table.body = rows

    	return table;
    }

    function createNoticeColumns(noticeText){
    	columns = new Array();

    	columns.push({width: 35, text: 'Uwaga! ',style: {bold: true}});
    	columns.push({width: 'auto', text: noticeText});

    	return	columns
    }

    function createHeaderElement(index,text){
    	header = new Object();

    	header.margin = [0, 10, 0, 3];
    	header.style = {fontSize: 12,bold: 'true'};
    	header.columns = new Array();

    	header.columns.push({width: 'auto', text: index,margin:[0,0,5,0]});
    	header.columns.push({width: 'auto', text: text});

    	return header;
    }

    function createAdnotationText(number,text){
    	
    	columns = new Array();
		columns.push({width: 35, text: number});
    	columns.push({width: 470, text: text});
    	
    	return {columns:columns};
    }

    function createAdnotationValue(text){
    	value = {};
    	value.text = text;
    	value.style = 'centerInputTextValue';
    	value.margin = [0,6,0,6]
    	return value;
    }


    function createCommisionMember(name,surname,func){
    		return{name:name,surname:surname,func:func};
    }

    function createCommisionSignatures(){
    	commisionBoard = [
    		createCommisionMember('Imię','Nazwisko','Funkcja'),
    		createCommisionMember('Imię','Nazwisko','Funkcja'),
    		createCommisionMember('Imię','Nazwisko','Funkcja'),
    		createCommisionMember('Imię','Nazwisko','Funkcja'),
    		createCommisionMember('Imię','Nazwisko','Funkcja'),
    		createCommisionMember('Imię','Nazwisko','Funkcja'),
    		createCommisionMember('Imię','Nazwisko','Funkcja')
    	]

    	

    	container ={
            	margin:[0,10,0,0],
            	table:{
            		headerRows: 0,
            		widths: [35,150,300],
            		body:[]

            	},
				layout: {
						hLineWidth: function(i, node) {return 0;},
						vLineWidth: function(i, node) {return 0;}
				}
            }

	
    	for (i=0; i< commisionBoard.length;i++){
    		member = commisionBoard[i];
    		row = []
    		container.table.body.push([
					{text: (i+1).toString()+")"},
					{text: member.name + ' ' + member.surname, style:{alignment:'center'},margin:[0,2,0,0]},
					{text: Array(100).join("."),style:{alignment:'center'},margin:[0,4,0,0]}
    			]);
    		}
    	
    	return container;
    }
    function randomNumber(){
		return Math.floor((Math.random() * 99999) + 1)
    }

    function reverse(s) {
	  var o = [];
	  for (var i = 0, len = s.length; i <= len; i++)
	    o.push(s.charAt(len - i));
	  return o.join('');
	}

})
