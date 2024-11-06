import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { styled } from '@mui/system';

interface TabItem {
  label: string;
  icon?: React.ReactNode;  
  content: React.ReactNode;
}

interface DpsTabsMenuProps {
  tabs: TabItem[];
  variant?: 'text' | 'icon';
}

const StyledTabs = styled((props) => <Tabs {...props} />)(({ theme, variant }) => ({
  ...(variant === 'text' && {
    backgroundColor: theme.palette.common?.white,
    borderBottom: `1px solid ${theme.palette.primary?.main}`,
  }),

  ...(variant === 'icon' && {
    backgroundColor: 'transparent',
    indicatorColor: 'transparent', 
    border: 'none',
    minHeight: '32px',
    '& .css-4xpiga-MuiTabs-indicator': {
      display: 'none',
      backgroundColor: 'transparent',
    },
    '& .MuiSvgIcon-root': {
      marginBottom: '0',
      marginRight: '8px'
    }
  }),
}));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StyledTab = styled((props) => <Tab {...props} />)(({ theme, variant }: any) => ({
  textTransform: 'none',
  color: theme.palette.custom?.darkGray,
  fontWeight: 600,
  padding: variant === 'icon' ? '8px 16px' : '12px 24px',
  fontSize: '14px',
  margin: variant === 'icon' ? '0px 6px' : '0',
  lineHeight: variant === 'icon' ? '25px' : '35px',
  minHeight: '32px',

  '&.Mui-selected': {
    color: variant === 'icon' ? theme.palette.common?.white : theme.palette.primary?.main,
    backgroundColor: variant === 'icon' ? theme.palette.blue?.light : theme.palette.primary?.main + 10, 
    fontWeight: 700,
    borderRadius: variant === 'icon' ? '25px' : '0px',
  },

  '&.Mui-focusVisible': {
    backgroundColor: theme.palette.action?.focus,
  },

  

  ...(variant === 'text' && {
    border: 'none',
    '&:hover': {
      backgroundColor: theme.palette.primary?.main + '10',
    },
  }),

  ...(variant === 'icon' && {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '25px', 
    backgroundColor: 'transparent',
    flexDirection: 'row',
    fontWeight: '600',
    minWidth: '120px',
    border: 'none',
    fontSize: '14px',
    padding: '8px 16px',
    '&:hover': {
      backgroundColor: theme.palette.primary?.main + '10',
      color: theme.palette.primary?.main
    },
    '& .MuiButtonBase-root': {
      minHeight: '32px !important',
    },
    '& .MuiSvgIcon-root': {
      marginBottom: '0',
      marginRight: '4px',
      fontSize: '18px',
    }
  }),
}));


const TabPanel: React.FC<{ children: React.ReactNode; value: number; index: number; }> = ({ children, value, index, ...other }) => {
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

const DpsTabsMenu: React.FC<DpsTabsMenuProps> = ({ tabs, variant = 'text' }) => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <StyledTabs value={value} onChange={handleChange} 
      TabIndicatorProps={{ hidden: variant === 'icon' ? true : false, height: variant === 'icon' ? '32px' : '42px' }
     }
      aria-label="dps tabs menu">
        {tabs.map((tab, index) => (
          <StyledTab
            key={index}
            label={tab.label}
            icon={variant === 'icon' ? tab.icon : undefined}
            variant={variant} 
          />
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

