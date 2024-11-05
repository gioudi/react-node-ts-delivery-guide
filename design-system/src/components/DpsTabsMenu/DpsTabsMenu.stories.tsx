import DpsTabsMenu from './DpsTabsMenu';
import SearchIcon from '@mui/icons-material/Search';
import QrCodeIcon from '@mui/icons-material/QrCode';
import InfoIcon from '@mui/icons-material/Info';


const tabsRoundedData = [
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

const tabsData = [
    {
        label: 'Form example',
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
        content: <div>This is some text content for the second tab.</div>,
    },
    {
        label: 'Input',
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

export const RoundedDpsTabsMenu = () => {
    return (
        <DpsTabsMenu tabs={tabsRoundedData}  variant="icon"/>
    );
};

export const DefaultDpsTabsMenu = () => {
    return (
        <DpsTabsMenu tabs={tabsData}  variant="text"/>
    );
};

