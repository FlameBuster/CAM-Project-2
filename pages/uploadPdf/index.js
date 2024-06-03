import { useState } from "react";
import styles from "./upload.module.scss"; // Import SCSS file

export default function UploadPDF() {
  const [pdfFile, setPdfFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [mtrlNo, setMtrlNo] = useState("");
  const [serCorInst, setSerCorInst] = useState("");
  const [estBr, setEstBr] = useState("");
  const [dteSecSubPublisher, setDteSecSubPublisher] = useState("");
  const [subSecVolAuthor, setSubSecVolAuthor] = useState("");
  const [year, setYear] = useState("");
  const [collectionType, setCollectionType] = useState("");
  const [no, setNo] = useState("");
  const [loc, setLoc] = useState("");
  const [location, setLocation] = useState("");
  const [pageNo, setPageNo] = useState("");
  const [noOfCopies, setNoOfCopies] = useState("");
  const [remarks, setRemarks] = useState("");
  const [message, setMessage] = useState(null); // State for success or error message
  const [isLoading, setIsLoading] = useState(false); // State for loading

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("Please select a valid PDF file");
    }
  };

  const handleFileNameChange = (event) => {
    setFileName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!pdfFile) {
      alert("Please select a PDF file");
      return;
    }

    if (!fileName) {
      alert("Please enter a file name");
      return;
    }

    const formData = new FormData();
    formData.append("file", pdfFile, fileName + ".pdf");
    formData.append(
      "metadata",
      JSON.stringify({
        metadata: {
          materialNo: mtrlNo,
          Accession_number: {
            Ser_Corps_Inst: serCorInst,
            Est_Br: estBr,
            Sub_Publisher: dteSecSubPublisher,
            Vol: subSecVolAuthor,
            Year: year,
            Collection_type: collectionType,
            No: no,
            Loc: loc,
          },
          Location: location,
          Page_no: pageNo,
          No_of_copies: noOfCopies,
          Remarks: remarks,
        },
      })
    );

    setIsLoading(true); // Set loading state

    try {
      const response = await fetch("http://localhost:8080/pdf/create", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log(result);

      // Set message based on response
      if (response.ok) {
        setMessage("File uploaded successfully");
      } else {
        setMessage("Error uploading file");
      }
    } catch (error) {
      console.error(error);
      setMessage("Error uploading file");
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className={styles["upload-pdf-container"]}>
      <h2>Upload PDF</h2>
      {message && <div className={styles["message"]}>{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
          <label htmlFor="pdfFile">Select PDF File:</label>
          <br />
          <input
            type="file"
            id="pdfFile"
            name="pdfFile"
            accept=".pdf"
            onChange={handleFileChange}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="fileName">Enter File Name:</label>
          <br />
          <input
            type="text"
            id="fileName"
            name="fileName"
            value={fileName}
            onChange={handleFileNameChange}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="mtrlNo">Mtrl No:</label>
          <br />
          <input
            type="text"
            id="mtrlNo"
            name="mtrlNo"
            value={mtrlNo}
            onChange={(e) => setMtrlNo(e.target.value)}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="serCorInst">Ser/Corps/Inst:</label>
          <br />
          <input
            type="text"
            id="serCorInst"
            name="serCorInst"
            value={serCorInst}
            onChange={(e) => setSerCorInst(e.target.value)}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="estBr">Est/Br:</label>
          <br />
          <input
            type="text"
            id="estBr"
            name="estBr"
            value={estBr}
            onChange={(e) => setEstBr(e.target.value)}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="dteSecSubPublisher">Dte/Sec/Sub/Publisher:</label>
          <br />
          <input
            type="text"
            id="dteSecSubPublisher"
            name="dteSecSubPublisher"
            value={dteSecSubPublisher}
            onChange={(e) => setDteSecSubPublisher(e.target.value)}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="subSecVolAuthor">Sub Sec/Vol/Author:</label>
          <br />
          <input
            type="text"
            id="subSecVolAuthor"
            name="subSecVolAuthor"
            value={subSecVolAuthor}
            onChange={(e) => setSubSecVolAuthor(e.target.value)}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="year">Year:</label>
          <br />
          <input
            type="text"
            id="year"
            name="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="collectionType">Collection Type:</label>
          <br />
          <input
            type="text"
            id="collectionType"
            name="collectionType"
            value={collectionType}
            onChange={(e) => setCollectionType(e.target.value)}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="no">No:</label>
          <br />
          <input
            type="text"
            id="no"
            name="no"
            value={no}
            onChange={(e) => setNo(e.target.value)}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="loc">Loc:</label>
          <br />
          <input
            type="text"
            id="loc"
            name="loc"
            value={loc}
            onChange={(e) => setLoc(e.target.value)}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="location">Location:</label>
          <br />
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="pageNo">Page No:</label>
          <br />
          <input
            type="text"
            id="pageNo"
            name="pageNo"
            value={pageNo}
            onChange={(e) => setPageNo(e.target.value)}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="noOfCopies">No of Copies:</label>
          <br />
          <input
            type="text"
            id="noOfCopies"
            name="noOfCopies"
            value={noOfCopies}
            onChange={(e) => setNoOfCopies(e.target.value)}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="remarks">Remarks:</label>
          <br />
          <textarea
            id="remarks"
            name="remarks"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
}
