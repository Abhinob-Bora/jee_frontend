import React, { useEffect, useLayoutEffect, useState } from "react";
import { Box, Avatar, Typography, Button, IconButton } from "@mui/material";
import red from "@mui/material/colors/red";
import ChatItem from "../components/chat/ChatItem";
import { IoMdSend } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import {
  deleteUserChats,
  getUserChats,
  sendChatRequest,
} from "../helpers/api-communicator";
import toast from "react-hot-toast";
import { getUsers } from "../api/index";
import { useSelector } from "react-redux";
import { get } from "mongoose";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const Chat = (personList) => {
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);

  const [chatMessages, setChatMessages] = useState([]);
  const { currentUser } = useSelector((state) => state.user);

  const [inputValue, setInputValue] = useState("");
  const [user, setUser] = useState();

  const token = localStorage.getItem("podstreamtoken");
  const getUser = async () => {
    await getUsers(token)
      .then((res) => {
        setUser(res.data);
      })
      .then((error) => {
        console.log(error);
      });
  };

  const getuser = async () => {
    if (currentUser) {
      setLoading(true);
      await getUser();
      setLoading(false);
    }
  };

  useEffect(() => {
    getuser();
  }, [currentUser]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async () => {
    const content = inputValue.trim();
    if (content === "") return;

    setInputValue("");

    const newMessage = { role: "user", content };
    setChatMessages((prev) => [...prev, newMessage]);

    try {
      const chatData = await sendChatRequest(content, token);
      setChatMessages([...chatData.chats]);
    } catch (error) {
      console.error("Failed to send chat request:", error);
      toast.error("Failed to send message");
    }
  };

  const handleDeleteChats = async () => {
    try {
      toast.loading("Deleting Chats", { id: "deletechats" });
      await deleteUserChats(token);
      setChatMessages([]);
      toast.success("Deleted Chats Successfully", { id: "deletechats" });
    } catch (error) {
      console.error("Deleting chats failed:", error);
      toast.error("Deleting chats failed", { id: "deletechats" });
    }
  };

  const [selectedPerson, setSelectedPerson] = useState("");

  const handleChanged = (event) => {
    setSelectedPerson(event.target.value);
  };

  useLayoutEffect(() => {
    if (currentUser) {
      toast.loading("Loading Chats", { id: "loadchats" });

      getUserChats(token)
        .then((data) => {
          setChatMessages([...data.chats]);
          toast.success("Successfully loaded chats", { id: "loadchats" });
        })
        .catch((err) => {
          console.error("Loading chats failed:", err);
          toast.error("Loading Failed", { id: "loadchats" });
        });
    }
  }, [currentUser]);

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: { md: "flex", xs: "none", sm: "none" },
          flex: 0.2,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "60vh",
            bgcolor: "rgb(17,29,39)",
            borderRadius: 5,
            flexDirection: "column",
            mx: 3,
          }}
        >
          {user && (
            <>
              <Avatar
                sx={{
                  mx: "auto",
                  my: 2,
                  bgcolor: "white",
                  color: "black",
                  fontWeight: 700,
                }}
              >
                {user.name[0]}
                {user.name.split(" ")[1][0]}
              </Avatar>
              <Typography
                sx={{ mx: "auto", fontFamily: "work sans", color: "white" }}
              >
                You are talking to :
              </Typography>
              <Select
                value={selectedPerson}
                onChange={handleChange}
                displayEmpty
                sx={{
                  mx: "auto",
                  my: 1,
                  bgcolor: "white",
                  color: "black",
                  fontWeight: 700,
                  borderRadius: 3,
                  width: "200px",
                }}
              >
                <MenuItem value="" disabled>
                  Select Person
                </MenuItem>
                {Array.isArray(personList) && personList.length > 0 ? (
                  personList.map((person, index) => (
                    <MenuItem key={index} value={person}>
                      {person}
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem value="" disabled>
                    No persons available
                  </MenuItem>
                )}
              </Select>
              <Typography
                sx={{
                  mx: "auto",
                  fontFamily: "work sans",
                  my: 4,
                  p: 3,
                  color: "white",
                }}
              >
                You can ask about JEE prep, covering topics like subjects
                difficulty, time management, problem-solving, resources, mock
                tests, stress management, study groups, and exam concerns.
              </Typography>

              <Button
                onClick={handleDeleteChats}
                sx={{
                  width: "200px",
                  my: "auto",
                  color: "white",
                  fontWeight: "700",
                  borderRadius: 3,
                  mx: "auto",
                  bgcolor: red[300],
                  ":hover": {
                    bgcolor: red.A400,
                  },
                }}
              >
                Clear Conversation
              </Button>
            </>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: { md: 0.8, xs: 1, sm: 1 },
          flexDirection: "column",
          px: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            color: "white",
            mb: 2,
            mx: "auto",
            fontWeight: "600",
          }}
        >
          Talk With Anyone
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "60vh",
            borderRadius: 3,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
            overflowX: "hidden",
            overflowY: "auto",
            scrollBehavior: "smooth",
          }}
        >
          {chatMessages.map((chat, index) => (
            <ChatItem content={chat.content} role={chat.role} key={index} />
          ))}
        </Box>
        <Box
          sx={{
            width: "100%",
            borderRadius: 8,
            backgroundColor: "rgb(17,27,39)",
            display: "flex",
            margin: "auto",
          }}
        >
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Type a message..."
            style={{
              width: "100%",
              backgroundColor: "transparent",
              padding: "30px",
              border: "none",
              outline: "none",
              color: "white",
              fontSize: "20px",
            }}
          />
          <IconButton onClick={handleSubmit} sx={{ color: "white", mx: 1 }}>
            <IoMdSend />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
