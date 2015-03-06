package pl.openpkw.poc.webapp.pdf;

import java.io.File;
import java.io.FileOutputStream;

import org.junit.Test;

import pl.openpkw.poc.webapp.PdfGenerator;

public class PDF_creation_test {
	
	@Test
	public void hopsa() throws Exception {
		PdfGenerator generator = new PdfGenerator();
		byte[] pdf = generator.generatePdf();
		File output = new File("output.pdf");
		FileOutputStream out = new FileOutputStream(output);
		out.write(pdf);
		out.flush();
		out.close();
	}
}
