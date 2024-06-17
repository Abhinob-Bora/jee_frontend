import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";
import { getYouTubeVideos } from "../api/index"; // Assuming you have an API function to fetch YouTube videos

const DashboardMain = styled.div`
  padding: 20px 30px;
  max-height: 80vh; /* Adjust as needed */
  overflow-y: auto; /* Enable vertical scrolling */
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px solid #ccc;
`;

const VideoFrame = styled.iframe`
  width: 100%;
  height: 200px; /* Adjust as needed */
  border: 0;
`;

const VideoInfo = styled.div`
  padding: 10px;
  color: white;
`;

const Description = styled.p`
  max-height: 100px; /* Adjust as needed */
  overflow-y: auto;
`;

const Dashboard = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const videoRefs = useRef([]);

  useEffect(() => {
    setLoading(true);
    getYouTubeVideos() // Fetch videos from your backend API
      .then((response) => {
        console.log("Data received from backend:", response.data);
        setVideos(response.data);
        videoRefs.current = response.data.map(() => React.createRef());
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching YouTube videos:", error);
        setLoading(false);
      });
  }, []);

  return (
    <DashboardMain>
      {loading ? (
        <CircularProgress />
      ) : (
        <GridContainer>
          {videos.map((video, index) => (
            <VideoContainer key={video._id} ref={videoRefs.current[index]}>
              <VideoFrame
                src={`https://www.youtube.com/embed/${video.youtubeLink}`}
                title={video.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <VideoInfo>
                <h3>{video.name}</h3>
                <Description>{video.desc}</Description>
                <p>Tags: {video.tags.join(", ")}</p>
              </VideoInfo>
            </VideoContainer>
          ))}
        </GridContainer>
      )}
    </DashboardMain>
  );
};

export default Dashboard;
