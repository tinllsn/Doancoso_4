import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
import { connectSocket, socket } from "../../socket";
import { showSnackbar } from "../../redux/slices/app";

const DashboardLayout = () => {
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => state.auth);

  const user_id = window.localStorage.getItem("user_id");

  useEffect(() => {
    if (isLoggedIn) {
      window.onload = function () {
        if (!window.location.hash) {
          window.location = window.location + "#loaded";
          window.location.reload();
        }
      };

      //   window.onload();

      if (!socket) {
        connectSocket(user_id);
      }

      // socket.on("audio_call_notification", (data) => {
      //   // TODO => dispatch an action to add this in call_queue
      //   dispatch(PushToAudioCallQueue(data));
      // });

      // socket.on("video_call_notification", (data) => {
      //   // TODO => dispatch an action to add this in call_queue
      //   dispatch(PushToVideoCallQueue(data));
      // });

      // socket.on("new_message", (data) => {
      //   const message = data.message;
      //   console.log(current_conversation, data);
      //   // check if msg we got is from currently selected conversation
      //   if (current_conversation?.id === data.conversation_id) {
      //     dispatch(
      //       AddDirectMessage({
      //         id: message._id,
      //         type: "msg",
      //         subtype: message.type,
      //         message: message.text,
      //         incoming: message.to === user_id,
      //         outgoing: message.from === user_id,
      //       })
      //     );
      //   }
      // });

      socket.on("start_chat", (data) => {
        // console.log(data);
        // // add / update to conversation list
        // const existing_conversation = conversations.find(
        //   (el) => el?.id === data._id
        // );
        // if (existing_conversation) {
        //   // update direct conversation
        //   dispatch(UpdateDirectConversation({ conversation: data }));
        // } else {
        //   // add direct conversation
        //   dispatch(AddDirectConversation({ conversation: data }));
        // }
        // dispatch(SelectConversation({ room_id: data._id }));
      });

      socket.on("new_friend_request", (data) => {
        dispatch(
          showSnackbar({
            severity: "success",
            message: "New friend request received",
          })
        );
      });

      socket.on("request_accepted", (data) => {
        dispatch(
          showSnackbar({
            severity: "success",
            message: "Friend Request Accepted",
          })
        );
      });

      socket.on("request_sent", (data) => {
        dispatch(showSnackbar({ severity: "success", message: data.message }));
      });
    }

    // Remove event listener on component unmount
    return () => {
      socket?.off("new_friend_request");
      socket?.off("request_accepted");
      socket?.off("request_sent");
      socket?.off("start_chat");
    //   socket?.off("new_message");
    //   socket?.off("audio_call_notification");
    };
  }, [isLoggedIn, dispatch, user_id]);

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" />;
  }
  // const theme = useTheme();

  // const [selected, setSelected] = useState(0);

  // console.log(theme);

  // const { onToggleMode } = useSettings();

  return (
    <Stack direction="row">
      {/* SideBar */}
      <SideBar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
