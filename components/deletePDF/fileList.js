// SomePage.js

import { FileList } from "./deletePDF";

export async function getStaticProps() {
 
  return {
    props: {
      apiUrl: "http://localhost:8080",
    },
  };
}

export default function deletePDF({ apiUrl }) {
  return (
    <div>
      <h1>Delete PDF</h1>
      <FileList apiUrl={apiUrl} />
    </div>
  );
}
