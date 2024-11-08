import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/Conversation";
import { useTheme } from "@mui/material/styles";
import Contact from "../../components/Contact";

const GeneralApp = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* chat */}
      <Chats />

      <Box
        sx={{
          height: "100%",
          // width: "calc(100vw-720px)", //chieu rong khung chat
          width: "100%",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.paper,
        }}
      >
        {/* conversation */}
        <Conversation></Conversation>
      </Box>

      {/* contact */}
      <Contact />
    </Stack>
  );
};

export default GeneralApp;
