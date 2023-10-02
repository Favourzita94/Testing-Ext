import React, { useEffect, useState } from "react";

const VideoRepository = () => {
  // Define a state variable to store the uploaded video URL
  const [uploadedVideoUrl, setUploadedVideoUrl] = useState(null);

  useEffect(() => {
    // Fetch the uploaded video URL from your backend when the component loads
    fetch("https://my-backend-api/get-uploaded-video-url")
      .then((response) => response.json())
      .then((data) => {
        const { videoUrl } = data; // Replace "videoUrl" with the actual response property name

        // Store the video URL in the state
        setUploadedVideoUrl(videoUrl);
      })
      .catch((error) => {
        console.error("Error fetching video URL:", error);
      });
  }, []);

  return (
    <div>
      {uploadedVideoUrl && (
        <video controls>
          <source src={uploadedVideoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoRepository;
