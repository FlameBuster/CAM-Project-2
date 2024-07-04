import React from "react";
import withAuth from "../hoc/withAuth";
import UploadForm from "../../components/uploadForm/uploadForm";
import Navbar from "../../components/header/Navbar";

const UploadPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <div>
          <h1>Upload Files</h1>
          <UploadForm />
        </div>
      </main>
    </React.Fragment>
  );
};

export default withAuth(UploadPage);
