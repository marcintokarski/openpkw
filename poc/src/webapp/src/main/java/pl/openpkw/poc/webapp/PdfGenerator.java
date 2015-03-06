package pl.openpkw.poc.webapp;

import java.io.ByteArrayOutputStream;

import org.xhtmlrenderer.pdf.ITextRenderer;

public class PdfGenerator {

	public byte[] generatePdf() {
		try {
			String inputFile = this.getClass().getResource("/templates/pdf_template.html").toString();
			System.out.println(inputFile);
			ByteArrayOutputStream os = new ByteArrayOutputStream();

			ITextRenderer renderer = new ITextRenderer();
			renderer.setDocument(inputFile);
			renderer.layout();
			renderer.createPDF(os);
			os.close();
			byte[] result = os.toByteArray();
			System.out.println(result.length);
			return result;
		} catch (Exception ex) {
			throw new RuntimeException("Failed to generate a PDF document: " + ex.getMessage(), ex);
		}
	}
}
