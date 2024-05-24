import React from "react";
import PropTypes from "prop-types";
import FileInfo from "../../components/fileInfo/fileinfo"; 

function a(props) {
  const fileInfo = {
    fileName: "Sample File",
    mtrlNo: "123456",
    serCorInst: "Sample Corps",
    estBr: "Sample Est",
    dteSecSubPublisher: "Sample Publisher",
    subSecVolAuthor: "Sample Author",
    year: "2024",
    collectionType: "Sample Collection",
    no: "Sample No",
    loc: "Sample Location",
    location: "Sample Location",
    pageNo: "42",
  };

  return (
    <div>
      {/* Render the FileInfo component and pass fileInfo as prop */}
      <FileInfo fileInfo={fileInfo} />
    </div>
  );
}

export default a;
