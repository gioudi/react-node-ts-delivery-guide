import DpsTabsMenu from './DpsTabsMenu';
import SearchIcon from '@mui/icons-material/Search';
import QrCodeIcon from '@mui/icons-material/QrCode';
import InfoIcon from '@mui/icons-material/Info';


const tabsData = [
    {
        label: 'Form example',
        icon: <SearchIcon />,
        content: (
            <form>
                <label>
                    Label 1:
                    <input type="text" name="name" />
                </label>
            </form>
        ),
    },
    {
        label: 'Text',
        icon: <QrCodeIcon/>,
        content: <div>This is some text content for the second tab.</div>,
    },
    {
        label: 'Input',
        icon: <InfoIcon />,
        content: (
            <div>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
            </div>
        ),
    },
];

export default  {
    component: DpsTabsMenu
}

export const DefaultDpsTabsMenu = () => {
    return (
        <DpsTabsMenu tabs={tabsData} />
    );
};

