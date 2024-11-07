import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/Conversation"

const GeneralApp = () => {
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* chat */}
      <Chats />

      {/* <Box sx={{backgroundColor: "#000"}}></Box> */}
      <Box
        sx={{
          height: "100%",
          width: "calc(100vw-420px)",
          backgroundColor: "#000",
        }}
      ></Box>
      {/* conversation */}
      <Conversation></Conversation>
    </Stack>
  );
};

export default GeneralApp;
