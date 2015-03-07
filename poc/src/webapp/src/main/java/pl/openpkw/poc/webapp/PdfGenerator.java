package pl.openpkw.poc.webapp;

import java.io.ByteArrayOutputStream;
import java.lang.annotation.Annotation;
import java.lang.reflect.Field;

import org.xhtmlrenderer.pdf.ITextRenderer;

import com.lowagie.text.Element;
import com.lowagie.text.Font;
import com.lowagie.text.Image;
import com.lowagie.text.Phrase;
import com.lowagie.text.pdf.BaseFont;
import com.lowagie.text.pdf.ColumnText;
import com.lowagie.text.pdf.PdfContentByte;
import com.lowagie.text.pdf.PdfReader;
import com.lowagie.text.pdf.PdfStamper;

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

	public byte[] stamp(Formularz formularz) {
		try {
			PdfReader pdfReader = new PdfReader(this.getClass().getResource("/templates/prezydent_2015.pdf"));
			ByteArrayOutputStream out = new ByteArrayOutputStream();
			PdfStamper pdfStamper = new PdfStamper(pdfReader, out);

			Field[] fields = Formularz.class.getDeclaredFields();
			for (Field f : fields) {
				f.setAccessible(true);
				Annotation a = f.getAnnotation(FormElement.class);
				String text = (String) f.get(formularz);
				int page = ((FormElement) a).page();
				int x = ((FormElement) a).x();
				int y = ((FormElement) a).y();
				print(pdfStamper, text, page, x, y);
			}
			
			for (int i = 1; i <= pdfReader.getNumberOfPages(); i++) {
				Image barcode = Image.getInstance(this.getClass().getResource("/barcode.jpeg"));
				barcode.setAbsolutePosition(45f,  10f);
				PdfContentByte content = pdfStamper.getUnderContent(i);
				content.addImage(barcode);
			}

			pdfStamper.close();
			out.close();
			return out.toByteArray();
		} catch (Exception ex) {
			throw new RuntimeException("Failed to stam the form: " + ex.getMessage(), ex);
		}

	}

	private void print(PdfStamper stamper, String text, int page, int x, int y) throws Exception {
		PdfContentByte content = stamper.getUnderContent(page);
		BaseFont bf = BaseFont.createFont("/fonts/arial.ttf", BaseFont.IDENTITY_H, BaseFont.EMBEDDED);
		Font f = new Font(bf, 10);
		f.setColor(255, 0, 0);
		Phrase p = new Phrase(text, f);
		ColumnText.showTextAligned(content, Element.ALIGN_LEFT, p, x, y, 0);
	}
}