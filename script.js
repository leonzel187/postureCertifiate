function generateCertificate() {
    const name = document.getElementById("username").value.trim();
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    const certName = document.getElementById("cert-name");
    const certDate = document.getElementById("cert-date");
    const certDateFooter = document.getElementById("cert-date-footer");
    const pdfContainer = document.getElementById("pdf-container");
    const downloadBtn = document.getElementById("downloadBtn");

    const today = new Date().toLocaleDateString();

    certName.textContent = name;
    certDate.textContent = today;
    certDateFooter.textContent = today;

    downloadBtn.style.display = "inline-block";
}

function downloadPDF() {
    const element = document.getElementById("pdf-container");
    element.style.position = 'static';
    element.style.visibility = 'visible';

    const opt = {
        margin: 0,
        filename: 'Posture-Certificate.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2, scrollY: 0 },
        jsPDF: { unit: 'px', format: [794, 1123], orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save().then(() => {
        element.style.position = 'absolute';
        element.style.left = '-9999px';
    });
}
