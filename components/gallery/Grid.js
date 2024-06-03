import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import axios from "axios";
import styles from "./Grid.module.scss";

function Grid() {
  const [divisions, setDivisions] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [imageIds, setImageIds] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchDivisions = async () => {
      try {
        const response = await axios.get("http://localhost:8080/divisions");
        setDivisions(response.data);
      } catch (error) {
        console.error("Error fetching divisions:", error);
      }
    };
    fetchDivisions();
  }, []);

  useEffect(() => {
    const fetchImageIds = async () => {
      if (selectedDivision !== null) {
        try {
          const response = await axios.get(
            `http://localhost:8080/divisions/${selectedDivision}`
          );
          setImageIds(response.data);
        } catch (error) {
          console.error("Error fetching image IDs:", error);
        }
      }
    };
    fetchImageIds();
  }, [selectedDivision]);

  useEffect(() => {
    const fetchImages = async () => {
      if (imageIds.length > 0) {
        try {
          const fetchedImages = [];
          for (const idObj of imageIds) {
            const id = idObj._id; // Extract the image ID from the object
            const response = await axios.get(
              `http://localhost:8080/image/fetch/${id}`,
              {
                responseType: "blob", // Fetching image as blob
              }
            );

            // Create an object URL for the blob
            const imageUrl = URL.createObjectURL(response.data);
            fetchedImages.push(imageUrl);
          }
          setImages(fetchedImages);

          // Cleanup object URLs when the component is unmounted or images change
          return () => {
            fetchedImages.forEach((imageUrl) => URL.revokeObjectURL(imageUrl));
          };
        } catch (error) {
          console.error("Error fetching images:", error);
        }
      }
    };
    fetchImages();
  }, [imageIds]);

  const openImageInNewWindow = (imageUrl) => {
    window.open(imageUrl, "_blank");
  };

  return (
    <section className={styles.gallery}>
      <div className={styles.sectionButtons}>
        {divisions.map((division, index) => (
          <button key={index} onClick={() => setSelectedDivision(division)}>
            {division}
          </button>
        ))}
      </div>

      {selectedDivision && (
        <div>
          <h2>{selectedDivision}</h2>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 680: 2, 1020: 3, 1340: 4 }}
          >
            <Masonry>
              {images.map((imageUrl, idx) => (
                <div key={idx} className={styles.imageContainer}>
                  <img
                    src={imageUrl}
                    className={styles.image}
                    alt={`Image ${idx}`}
                    onClick={() => openImageInNewWindow(imageUrl)}
                    onError={(e) => console.error("Error loading image:", e)}
                  />
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      )}
    </section>
  );
}

export default Grid;
