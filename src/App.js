import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import Signup from "../src/components/Signup.jsx";
import Signin from "../src/components/Signin.jsx";

import Navbar from "../src/components/Navbar.jsx";
import Menu from "../src/components/Menu.jsx";

import ToastMessage from "./components/ToastMessage.jsx";

import Profile from "../src/pages/Profile.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { closeSignin } from "./redux/setSigninSlice.jsx";

import Community from "./pages/Community.jsx";
import MentorshipBooking from "./pages/FirstMentor.jsx";
import ConfirmationPage from "./pages/ConfirmationPage.jsx";
import AllBookings from "./pages/AllBookings.jsx";
import HomePage from "./pages/Home.jsx";
import YouTubeUpload from "./pages/YoutubeUpload.jsx";
import DashboardYoutube from "./pages/DashboardYoutube.jsx";
import LearnMorePage from "./components/LearnMorePage.jsx";
import PrototypeAnnouncement from "./components/Prototype.jsx";
const Frame = styled.div`
  display: flex;

  flex-direction: column;
  flex: 3;
`;

const Podstream = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.bgLight};
  overflow-y: hidden;
  overflow-x: hidden;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const { open, message, severity } = useSelector((state) => state.snackbar);
  const { openplayer, type, episode, podid, currenttime, index } = useSelector(
    (state) => state.audioplayer
  );
  const { opensi } = useSelector((state) => state.signin);
  const [SignUpOpen, setSignUpOpen] = useState(false);
  const [SignInOpen, setSignInOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(true);
  const [uploadOpen, setUploadOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 1110) {
        setMenuOpen(false);
      } else {
        setMenuOpen(true);
      }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    dispatch(closeSignin());
  }, [dispatch]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        {opensi && (
          <Signin setSignInOpen={setSignInOpen} setSignUpOpen={setSignUpOpen} />
        )}
        {SignUpOpen && (
          <Signup setSignInOpen={setSignInOpen} setSignUpOpen={setSignUpOpen} />
        )}

        <Podstream>
          {menuOpen && (
            <Menu
              setMenuOpen={setMenuOpen}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              setSignInOpen={setSignInOpen}
            />
          )}

          <Frame>
            <Navbar
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              setSignInOpen={setSignInOpen}
              setSignUpOpen={setSignUpOpen}
            />
            <Routes>
              <Route path="/" exact element={<HomePage />} />
              <Route
                path="/YoutubePodcasts"
                exact
                element={<DashboardYoutube />}
              />
              {/* <Route path='/aichat' exact element={<Chat />} /> */}
              <Route path="/aichat" exact element={<PrototypeAnnouncement />} />
              <Route path="/learn-more" exact element={<LearnMorePage />} />

              <Route path="/mentor" exact element={<MentorshipBooking />} />
              <Route
                path="/mentor/confirmation"
                exact
                element={<ConfirmationPage />}
              />

              <Route path="/profile" exact element={<Profile />} />

              <Route path="/community" exact element={<Community />} />
              <Route path="/allbookings" exact element={<AllBookings />} />
              <Route path="/youtubeupload" exact element={<YouTubeUpload />} />
            </Routes>
          </Frame>
          {open && (
            <ToastMessage open={open} message={message} severity={severity} />
          )}
        </Podstream>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
