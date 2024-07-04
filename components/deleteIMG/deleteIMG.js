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
        const response = await axios.get(
          "http://localhost:8080/image/divisions"
        );
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
            `http://localhost:8080/image/divisions/${selectedDivision}`
          );
          setImageIds(response.data);
        } catch (error) {
          console.error("Error fetching image IDs:", error);
        }
      } else {
        setImageIds([]);
      }
    };
    fetchImageIds();
    // Clear images when changing divisions
    setImages([]);
  }, [selectedDivision]);

  useEffect(() => {
    const fetchImages = async () => {
      if (imageIds.length > 0) {
        try {
          const fetchedImages = [];
          for (const idObj of imageIds) {
            const id = idObj._id;
            const response = await axios.get(
              `http://localhost:8080/image/fetch/${id}`,
              {
                responseType: "blob",
              }
            );

            const imageUrl = URL.createObjectURL(response.data);
            fetchedImages.push({ id, url: imageUrl });
          }
          setImages(fetchedImages);

          return () => {
            fetchedImages.forEach((image) => URL.revokeObjectURL(image.url));
          };
        } catch (error) {
          console.error("Error fetching images:", error);
        }
      } else {
        setImages([]);
      }
    };
    fetchImages();
  }, [imageIds]);

  const openImageInNewWindow = (imageUrl) => {
    window.open(imageUrl, "_blank");
  };

  const deleteImage = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/image/delete/${id}`);
      setImages(images.filter((image) => image.id !== id));
      setImageIds(imageIds.filter((image) => image._id !== id));
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  const handleDivisionClick = (division) => {
    if (selectedDivision === division) {
      setSelectedDivision(null);
    } else {
      setSelectedDivision(division);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.divisionButtons}>
        {divisions.map((division, index) => (
          <button
            key={index}
            onClick={() => handleDivisionClick(division)}
            className={
              selectedDivision === division ? styles.selectedButton : ""
            }
          >
            {division}
          </button>
        ))}
      </div>

      {selectedDivision && (
        <div>
          <h2 className={styles.divisionHeading}>{selectedDivision}</h2>
          {images.length === 0 ? (
            <p>No images found for this division.</p>
          ) : (
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 680: 2, 1020: 3, 1340: 4 }}
            >
              <Masonry>
                {images.map((image, idx) => (
                  <div key={idx} className={styles.imageWrapper}>
                    <img
                      src={image.url}
                      alt={`Image ${idx}`}
                      onClick={() => openImageInNewWindow(image.url)}
                      onError={(e) => console.error("Error loading image:", e)}
                    />
                    <button onClick={() => deleteImage(image.id)}>
                      Delete
                    </button>
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          )}
        </div>
      )}
    </section>
  );
}

export default Grid;
