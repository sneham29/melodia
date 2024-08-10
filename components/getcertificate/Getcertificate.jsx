import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './Getcertificate.css';  // Import the CSS file

const CertificateGenerator = () => {
  const [name, setName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [date] = useState(new Date().toLocaleDateString());
  const certificateRef = useRef();

  const handleGenerate = async () => {
    const certificateElement = certificateRef.current;

    // Make the certificate element temporarily visible
    certificateElement.style.display = 'block';

    const canvas = await html2canvas(certificateElement);
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'pt', 'a4');
    pdf.addImage(imgData, 'PNG', 40, 60, 520, 700);  // Adjust position and size as needed
    pdf.save('certificate.pdf');

    // Hide the certificate element again
    certificateElement.style.display = 'none';
  };

  return (
    <div className="certificate-container">
      <h1>Certificate Generator</h1>
      <form className="certificate-form">
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Course Name:
          <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
        </label>
        <button type="button" onClick={handleGenerate}>Generate Certificate</button>
      </form>
      <div id="certificate" className="certificate" ref={certificateRef} style={{ display: 'none' }}>
        <h2>Certificate of Completion</h2>
        <p>This is to certify that</p>
        <h3>{name}</h3>
        <p>has successfully completed the</p>
        <h3>{courseName}</h3>
        <p>course on</p>
        <h4>{date}</h4>
        <div className="seal"></div>
        <div className="signature">Signature</div>
      </div>
    </div>
  );
};

export default CertificateGenerator;
