import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { CustomTabPanel } from "../CustomTabPanel/CustomTabPanel";
import English from "../../tabs/English/English";

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Languages = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Английский/English" {...a11yProps(0)} />
                        <Tab label="Французский/Français" {...a11yProps(1)} />
                        {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <English />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    Французский/Français
                </CustomTabPanel>
                {/*  <CustomTabPanel value={value} index={2}>
                    Item Three
                </CustomTabPanel> */}
            </Box>
        </div>
    )
}

export default Languages;