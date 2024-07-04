import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import axios from "axios";
import styles from "./Grid.module.scss";

function Grid() {
  const [divisions, setDivisions] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [videoIds, setVideoIds] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchDivisions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/video/divisions"
        );
        setDivisions(response.data);
      } catch (error) {
        console.error("Error fetching divisions:", error);
      }
    };
    fetchDivisions();
  }, []);

  useEffect(() => {
    const fetchVideoIds = async () => {
      if (selectedDivision !== null) {
        try {
          const response = await axios.get(
            `http://localhost:8080/video/divisions/${selectedDivision}`
          );
          setVideoIds(response.data);
        } catch (error) {
          console.error("Error fetching video IDs:", error);
        }
      }
    };
    fetchVideoIds();
  }, [selectedDivision]);

  useEffect(() => {
    const fetchVideos = async () => {
      if (videoIds.length > 0) {
        try {
          const fetchedVideos = [];
          for (const idObj of videoIds) {
            const id = idObj._id; // Extract the video ID from the object
            const response = await axios.get(
              `http://localhost:8080/video/fetch/${id}`,
              {
                responseType: "blob", // Fetching video as blob
              }
            );

            // Create an object URL for the blob
            const videoUrl = URL.createObjectURL(response.data);
            fetchedVideos.push(videoUrl);
          }
          setVideos(fetchedVideos);

          // Cleanup object URLs when the component is unmounted or videos change
          return () => {
            fetchedVideos.forEach((videoUrl) => URL.revokeObjectURL(videoUrl));
          };
        } catch (error) {
          console.error("Error fetching videos:", error);
        }
      }
    };
    fetchVideos();
  }, [videoIds]);

  const openVideoInNewWindow = (videoUrl) => {
    window.open(videoUrl, "_blank");
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
              {videos.map((videoUrl, idx) => (
                <div key={idx} className={styles.videoContainer}>
                  <video
                    src={videoUrl}
                    className={styles.video}
                    controls
                    alt={`Video ${idx}`}
                    onClick={() => openVideoInNewWindow(videoUrl)}
                    onError={(e) => console.error("Error loading video:", e)}
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
