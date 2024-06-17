import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../redux/userSlice";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PsychologyIcon from "@mui/icons-material/Psychology";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MicIcon from "@mui/icons-material/Mic";
import PeopleIcon from "@mui/icons-material/People";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import DuoIcon from "@mui/icons-material/Duo";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import BackupRoundedIcon from "@mui/icons-material/BackupRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import CloseRounded from "@mui/icons-material/CloseRounded";
import LogoIcon from "../Images/black.png";
import { openSignin } from "../redux/setSigninSlice";

const MenuContainer = styled.div`
  flex: 1;
  flex-direction: column;
  height: 100vh;
  display: flex;
  box-sizing: border-box;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 1100px) {
    position: fixed;
    z-index: 1000;
    width: 100%;
    max-width: 250px;
    left: ${({ setMenuOpen }) => (setMenuOpen ? "0" : "-100%")};
    transition: 0.3s ease-in-out;
  }
`;

const ScrollableMenu = styled.div`
  flex: 1;
  width: 100%;
  overflow-y: auto;
`;

const Elements = styled.div`
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.text_secondary};
  width: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.text_secondary + 50};
  }
`;

const NavText = styled.div`
  padding: 12px 0px;
`;

const HR = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.text_secondary + 50};
  margin: 10px 0px;
`;

const Flex = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 0px 16px;
  width: 100%;
`;

const Close = styled.div`
  display: none;
  @media (max-width: 1100px) {
    display: block;
  }
`;

const Logo = styled.div`
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-weight: bold;
  font-size: 20px;
  margin: 16px 0px;
`;

const Image = styled.img`
  height: 60px;
`;

const Menu = ({ setMenuOpen, darkMode, setDarkMode, setUploadOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  const logoutUser = () => {
    dispatch(logout());
    navigate(`/`);
  };

  return (
    <MenuContainer setMenuOpen={setMenuOpen}>
      <Flex>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo style={{ display: "flex", alignItems: "center" }}>
            <Image src={LogoIcon} style={{ marginRight: "0px" }} />
            <span style={{ marginBottom: "2px" }}>SmartCrew</span>
          </Logo>
        </Link>
        <Close>
          <CloseRounded
            onClick={() => setMenuOpen(false)}
            style={{ cursor: "pointer" }}
          />
        </Close>
      </Flex>
      <ScrollableMenu>
        <Link
          to="/"
          style={{ textDecoration: "none", color: "inherit", width: "100%" }}
        >
          <Elements>
            <HomeRoundedIcon />
            <NavText>Home</NavText>
          </Elements>
        </Link>
        <Link
          to="/YoutubePodcasts"
          style={{ textDecoration: "none", color: "inherit", width: "100%" }}
        >
          <Elements>
            <MicIcon />
            <NavText>Interviews</NavText>
          </Elements>
        </Link>
        {/* <Link
          to="/search"
          style={{ textDecoration: "none", color: "inherit", width: "100%" }}
        >
          <Elements>
            <SearchRoundedIcon />
            <NavText>Search</NavText>
          </Elements>
        </Link> */}
        {/* {currentUser ? (
          <Link
            to="/favourites"
            style={{ textDecoration: "none", color: "inherit", width: "100%" }}
          >
            <Elements>
              <FavoriteRoundedIcon />
              <NavText>Favourites</NavText>
            </Elements>
          </Link>
        ) : (
          <Link
            onClick={() => dispatch(openSignin())}
            style={{ textDecoration: "none", color: "inherit", width: "100%" }}
          >
            <Elements>
              <FavoriteRoundedIcon />
              <NavText>Favourites</NavText>
            </Elements>
          </Link>
        )} */}
        {/* <Link
          to="/toppernotes"
          style={{ textDecoration: "none", color: "inherit", width: "100%" }}
        >
          <Elements>
            <FileCopyIcon />
            <NavText>Topper's Notes</NavText>
          </Elements>
        </Link> */}
        {currentUser ? (
          <Link
            to="/aichat"
            style={{ textDecoration: "none", color: "inherit", width: "100%" }}
          >
            <Elements>
              <PsychologyIcon />
              <NavText>AI Mentor</NavText>
            </Elements>
          </Link>
        ) : (
          <Link
            onClick={() => dispatch(openSignin())}
            style={{ textDecoration: "none", color: "inherit", width: "100%" }}
          >
            <Elements>
              <PsychologyIcon />
              <NavText>AI Mentor</NavText>
            </Elements>
          </Link>
        )}
        <Link
          to="/mentor"
          style={{ textDecoration: "none", color: "inherit", width: "100%" }}
        >
          <Elements>
            <DuoIcon />
            <NavText>Book a Call</NavText>
          </Elements>
        </Link>
        <Link
          to="/community"
          style={{ textDecoration: "none", color: "inherit", width: "100%" }}
        >
          <Elements>
            <PeopleIcon />
            <NavText>Community</NavText>
          </Elements>
        </Link>
        <HR />
        {/* <Link
          onClick={() => {
            if (currentUser) {
              setUploadOpen(true);
            } else {
              dispatch(openSignin());
            }
          }}
          style={{ textDecoration: "none", color: "inherit", width: "100%" }}
        >
          <Elements>
            <BackupRoundedIcon />
            <NavText>Upload</NavText>
          </Elements>
        </Link> */}
        {currentUser?.userType === "admin" && (
          <Link
            to="/allbookings"
            style={{ textDecoration: "none", color: "inherit", width: "100%" }}
          >
            <Elements>
              <FileCopyIcon />
              <NavText>All Bookings</NavText>
            </Elements>
          </Link>
        )}
        {currentUser?.userType === "admin" && (
          <Link
            to="/youtubeupload"
            style={{ textDecoration: "none", color: "inherit", width: "100%" }}
          >
            <Elements>
              <FileCopyIcon />
              <NavText>Youtube Upload</NavText>
            </Elements>
          </Link>
        )}
        <Link
          to="/profile"
          style={{ textDecoration: "none", color: "inherit", width: "100%" }}
        >
          <Elements>
            <HomeRoundedIcon />
            <NavText>Profile</NavText>
          </Elements>
        </Link>
        {/* {darkMode ? (
          <Elements onClick={() => setDarkMode(false)}>
            <LightModeRoundedIcon />
            <NavText>Light Mode</NavText>
          </Elements>
        ) : (
          <Elements onClick={() => setDarkMode(true)}>
            <DarkModeRoundedIcon />
            <NavText>Dark Mode</NavText>
          </Elements>
        )} */}
        {currentUser ? (
          <Elements onClick={() => logoutUser()}>
            <ExitToAppRoundedIcon />
            <NavText>Log Out</NavText>
          </Elements>
        ) : (
          <Elements onClick={() => dispatch(openSignin())}>
            <ExitToAppRoundedIcon />
            <NavText>Log In</NavText>
          </Elements>
        )}
      </ScrollableMenu>
    </MenuContainer>
  );
};

export default Menu;
