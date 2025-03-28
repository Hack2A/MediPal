import React from 'react';
import Dock from './Dock';
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';

const DockComponent = () => {

    const navigate = useNavigate();

    const items = [
        { icon: <VscHome size={18} />, label: 'Home', onClick: () => { navigate("/"); } },
        { icon: <VscArchive size={18} />, label: 'Archive', onClick: () => { navigate("/"); } },
        { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => { navigate("/"); } },
        { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => { navigate("/"); } },
    ];

    return (
        <div className='absolute bottom-0 w-full'>
            <Dock
                items={items}
                panelHeight={68}
                baseItemSize={50}
                magnification={70}
            />
        </div>
    )
}

export default DockComponent