import React from "react";
import PropTypes from "prop-types";

function FileInfo({ fileInfo }) {
  return (
    <div>
      <h2>File Information:</h2>
      <div>
        <strong>FileName:</strong> {fileInfo.fileName}
      </div>
      <div>
        <strong>Mtrl No:</strong> {fileInfo.mtrlNo}
      </div>
      <div>
        <strong>Ser/Corps/Inst:</strong> {fileInfo.serCorInst}
      </div>
      <div>
        <strong>Est/Br:</strong> {fileInfo.estBr}
      </div>
      <div>
        <strong>Dte/Sec/Sub/Publisher:</strong> {fileInfo.dteSecSubPublisher}
      </div>
      <div>
        <strong>Sub Sec/Vol/Author:</strong> {fileInfo.subSecVolAuthor}
      </div>
      <div>
        <strong>Year:</strong> {fileInfo.year}
      </div>
      <div>
        <strong>Collection Type:</strong> {fileInfo.collectionType}
      </div>
      <div>
        <strong>No:</strong> {fileInfo.no}
      </div>
      <div>
        <strong>Loc:</strong> {fileInfo.loc}
      </div>
      <div>
        <strong>Location:</strong> {fileInfo.location}
      </div>
      <div>
        <strong>Page No:</strong> {fileInfo.pageNo}
      </div>
      <button onClick={() => console.log("Read Now button clicked")}>
        Read Now
      </button>
    </div>
  );
}

FileInfo.propTypes = {
  fileInfo: PropTypes.shape({
    fileName: PropTypes.string,
    mtrlNo: PropTypes.string,
    serCorInst: PropTypes.string,
    estBr: PropTypes.string,
    dteSecSubPublisher: PropTypes.string,
    subSecVolAuthor: PropTypes.string,
    year: PropTypes.string,
    collectionType: PropTypes.string,
    no: PropTypes.string,
    loc: PropTypes.string,
    location: PropTypes.string,
    pageNo: PropTypes.string,
  }).isRequired,
};

export default FileInfo;
