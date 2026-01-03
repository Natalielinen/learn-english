import { Box, Tab, Tabs } from "@mui/material";
import { CustomTabPanel } from "../../components/CustomTabPanel/CustomTabPanel";
import { useState } from "react";
import LessonOne from "./LessonOne/LessonOne";

const English = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Lesson One" />
                        {/* <Tab label="Французский/Français" /> */}
                        {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <LessonOne />
                </CustomTabPanel>
                {/* <CustomTabPanel value={value} index={1}>
                    Французский/Français
                </CustomTabPanel> */}
                {/*  <CustomTabPanel value={value} index={2}>
                    Item Three
                </CustomTabPanel> */}
            </Box>
        </div>
    )
}

export default English;