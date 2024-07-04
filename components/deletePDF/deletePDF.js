// FileList.js

import axios from "axios";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./fileList.module.scss";

export const FileList = ({ apiUrl }) => {
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get(`${apiUrl}/pdf/fetch/`);
        setFiles(
          response.data.map((file) => ({
            id: file.id,
            name: file.filename,
          }))
        );
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };

    fetchFiles();
  }, [apiUrl]);

  const handleDelete = async (fileId) => {
    setIsLoading(true);
    try {
      const response = await axios.delete(`${apiUrl}/pdf/delete/${fileId}`);
      if (response.status === 200) {
        setMessage("File deleted successfully");
        setFiles(files.filter((file) => file.id !== fileId));
        console.log(setFiles); // Update the file list
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
    <div className={styles["file-list-container"]}>
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
    </div>
  );
};

FileList.propTypes = {
  apiUrl: PropTypes.string.isRequired,
};
