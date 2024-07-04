import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import axios from "axios";
import styles from "./VideoGrid.module.scss";

function VideoGrid() {
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
      } else {
        setVideoIds([]);
      }
    };
    fetchVideoIds();
    // Clear videos when changing divisions
    setVideos([]);
  }, [selectedDivision]);

  useEffect(() => {
    const fetchVideos = async () => {
      if (videoIds.length > 0) {
        try {
          const fetchedVideos = [];
          for (const idObj of videoIds) {
            const id = idObj._id;
            const response = await axios.get(
              `http://localhost:8080/video/fetch/${id}`,
              {
                responseType: "blob",
              }
            );

            const videoUrl = URL.createObjectURL(response.data);
            fetchedVideos.push({ id, url: videoUrl });
          }
          setVideos(fetchedVideos);

          return () => {
            fetchedVideos.forEach((video) => URL.revokeObjectURL(video.url));
          };
        } catch (error) {
          console.error("Error fetching videos:", error);
        }
      } else {
        setVideos([]);
      }
    };
    fetchVideos();
  }, [videoIds]);

  const openVideoInNewWindow = (videoUrl) => {
    window.open(videoUrl, "_blank");
  };

  const deleteVideo = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/video/delete/${id}`);
      setVideos(videos.filter((video) => video.id !== id));
      setVideoIds(videoIds.filter((video) => video._id !== id));
    } catch (error) {
      console.error("Error deleting video:", error);
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
            className={`${styles.button} ${
              selectedDivision === division ? styles.selectedButton : ""
            }`}
          >
            {division}
          </button>
        ))}
      </div>

      {selectedDivision && (
        <div>
          <h2 className={styles.divisionHeading}>{selectedDivision}</h2>
          {videos.length === 0 ? (
            <p>No videos found for this division.</p>
          ) : (
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 680: 2, 1020: 3, 1340: 4 }}
            >
              <Masonry>
                {videos.map((video, idx) => (
                  <div key={idx} className={styles.videoWrapper}>
                    <video
                      src={video.url}
                      controls
                      onClick={() => openVideoInNewWindow(video.url)}
                      onError={(e) => console.error("Error loading video:", e)}
                    />
                    <button
                      className={styles.deleteButton}
                      onClick={() => deleteVideo(video.id)}
                    >
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

export default VideoGrid;