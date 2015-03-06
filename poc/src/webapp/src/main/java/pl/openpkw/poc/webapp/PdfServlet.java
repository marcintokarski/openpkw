package pl.openpkw.poc.webapp;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class PdfServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public PdfServlet() {
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PdfGenerator generator = new PdfGenerator();
		byte[] pdfDocument = generator.generatePdf();
		response.getOutputStream().write(pdfDocument);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}
}