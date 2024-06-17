// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { CircularProgress } from '@mui/material';
// // import { getYouTubeVideos } from '../api/index'; // Assuming you have an API function to fetch YouTube videos

// const DashboardMain = styled.div`
//   padding: 20px 30px;
// `;

// const GridContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 20px;
// `;

// const VideoContainer = styled.div`
//   position: relative;
//   overflow: hidden;
//   padding-top: 56.25%; /* 16:9 aspect ratio */
// `;

// const VideoFrame = styled.iframe`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
// `;

// const Dashboard = () => {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     getYouTubeVideos() // Fetch videos from your backend API
//       .then((data) => {
//         setVideos(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching YouTube videos:', error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <DashboardMain>
//       {loading ? (
//         <CircularProgress />
//       ) : (
//         <GridContainer>
//           {videos.map((video) => (
//             <VideoContainer key={video.id}>
//               <VideoFrame
//                 src={`https://www.youtube.com/embed/${video.id}`}
//                 title={video.title}
//                 frameborder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowfullscreen
//               />
//             </VideoContainer>
//           ))}
//         </GridContainer>
//       )}
//     </DashboardMain>
//   );
// };

// export default Dashboard;