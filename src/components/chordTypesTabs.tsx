import React from "react";

import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Titles } from "../reusable/labelEnums";

export const ChordTypesTabs = () => {
  // const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box>
      <AppBar position='static'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='secondary'
          textColor='inherit'
          variant='fullWidth'
          aria-label='full width tabs example'>
          <Tab
            label={Titles.openChords}
            // {...a11yProps(0)}
          />
          <Tab
            label={Titles.barreChords}
            // {...a11yProps(1)}
          />
          <Tab
            label={Titles.triads}
            // {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
    </Box>
  );
};
