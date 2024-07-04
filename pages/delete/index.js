import React, { useState } from "react";

import Grid from "../../components/deleteIMG/deleteIMG";
import VideoGrid from "../../components/deleteVID/deleteVID";
import axios from "axios";
import styles from "./fileList.module.scss";
import withAuth from "../hoc/withAuth";
import Navbar from "../../components/header/Navbar";

export async function getStaticProps() {
  let files = [];

  try {
    const response = await axios.get("http://localhost:8080/pdf/fetch/");
    files = response.data.map((file) => ({
      id: file.id,
      name: file.filename,
    }));
  } catch (error) {
    console.error("Error fetching files:", error);
  }

  return {
    props: {
      files: files,
    },
  };
}

const FileList = ({ files: initialFiles }) => {
  const [files, setFiles] = useState(initialFiles);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showFileList, setShowFileList] = useState(false);

  const handleDelete = async (fileId) => {
    setIsLoading(true);
    try {
      const response = await axios.delete(
        `http://localhost:8080/pdf/delete/${fileId}`
      );
      if (response.status === 200) {
        setMessage("File deleted successfully");
        setFiles(files.filter((file) => file.id !== fileId)); // Update the file list
      } else {
        setMessage("Error deleting file");
      }
    } catch (error) {
      console.error("Error deleting file:", error);
      setMessage("Error deleting file");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <main>
        <div className={styles["upload-form-container"]}>
          <UploadForm />
          <div className={styles["toggle-buttons"]}>
            <button className="" onClick={() => setShowFileList(!showFileList)}>
              {showFileList ? "Hide File List" : "Show File List"}
            </button>
          </div>
          {showFileList && (
            <>
              <h2>Files List</h2>
              {message && <div className={styles["message"]}>{message}</div>}
              {isLoading && <p>Loading...</p>}
              {!isLoading && (
                <ul>
                  {files.map((file) => (
                    <li key={file.id} className={styles["file-item"]}>
                      {file.name}
                      <button
                        className={styles["delete-button"]}
                        onClick={() => handleDelete(file.id)}
                        disabled={isLoading}
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      </main>
    </React.Fragment>
  );
};

export default withAuth(FileList);

export function UploadForm() {
  const [showDelete, setShowDelete] = useState({
    pdf: false,
    image: false,
    video: false,
  });

  const handleToggle = (type) => {
    setShowDelete({
      pdf: type === "pdf",
      image: type === "image",
      video: type === "video",
    });
  };

  return (
    <div className={styles["upload-form-container"]}>
      <div className={styles["toggle-buttons"]}>
        <button
          className={showDelete.image ? styles["active"] : ""}
          onClick={() => handleToggle("image")}
        >
          Delete Image
        </button>
        <button
          className={showDelete.video ? styles["active"] : ""}
          onClick={() => handleToggle("video")}
        >
          Delete Video
        </button>
      </div>

      {showDelete.image && <Grid />}
      {showDelete.video && <VideoGrid />}
    </div>
  );
}
