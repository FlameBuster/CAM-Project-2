import { useState, useEffect } from "react";

import styles from "./upload.module.scss";
import UploadPDF from "../uploadPDF/uploadPDF";
import UploadImage from "../uploadIMG/uploadIMG";
import UploadVideo from "../uploadVID/uploadVID";



export default function UploadForm() {
  const [showPDF, setShowPDF] = useState(true);
  const [showImage, setShowImage] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  
  return (
    <div className={styles["upload-form-container"]}>
      <div className={styles["toggle-buttons"]}>
        <button
          className={showPDF ? styles["active"] : ""}
          onClick={() => {
            setShowPDF(true);
            setShowImage(false);
            setShowVideo(false);
          }}
        >
          Upload PDF
        </button>
        <button
          className={showImage ? styles["active"] : ""}
          onClick={() => {
            setShowPDF(false);
            setShowImage(true);
            setShowVideo(false);
          }}
        >
          Upload Image
        </button>
        <button
          className={showVideo ? styles["active"] : ""}
          onClick={() => {
            setShowPDF(false);
            setShowImage(false);
            setShowVideo(true);
          }}
        >
          Upload Video
        </button>
        
      </div>
      {showPDF && <UploadPDF />}
      {showImage && <UploadImage />}
      {showVideo && <UploadVideo />}
    </div>
  );
}
