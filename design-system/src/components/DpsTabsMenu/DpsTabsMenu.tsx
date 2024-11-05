import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { styled } from '@mui/system';

interface TabItem {
    label: string;
    icon: React.ReactNode;
    content: React.ReactNode;
}

interface DpsTabsMenuProps {
    tabs: TabItem[];
}


const StyledTabs = styled((props) => <Tabs {...props} />)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    borderBottom: `1px solid ${theme.palette.divider}`,
}));


const StyledTab = styled((props) => <Tab {...props} />)(({ theme }) => ({
    textTransform: 'none',
    color: theme.palette.text.primary,
    '&.Mui-selected': {
        color: theme.palette.primary.main,
        fontWeight: 600,
    },
    '&.Mui-focusVisible': {
        backgroundColor: theme.palette.action.focus,
    },
}));


const TabPanel: React.FC<{
    children: React.ReactNode;
    value: number;
    index: number;
}> = ({ children, value, index, ...other }) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`custom-tabpanel-${index}`}
            aria-labelledby={`custom-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </div>
    );
};


const DpsTabsMenu: React.FC<DpsTabsMenuProps> = ({ tabs }) => {
    const [value, setValue] = useState<number>(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div>
            <StyledTabs value={value} onChange={handleChange} aria-label="dps tabs menu">
                {tabs.map((tab, index) => (
                    <StyledTab key={index} label={tab.label} icon={tab.icon} />
                ))}
            </StyledTabs>
            {tabs.map((tab, index) => (
                <TabPanel key={index} value={value} index={index}>
                    {tab.content}
                </TabPanel>
            ))}
        </div>
    );
};

export default DpsTabsMenu;
