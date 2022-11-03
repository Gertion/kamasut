import React from 'react';
import profInf from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={profInf.img}>
                <img src="https://kartinkin.net/uploads/posts/2021-07/thumbs/1625492587_25-kartinkin-com-p-sots-seti-fon-krasivie-foni-26.jpg"/>
            </div>
            <div className={profInf.descriptionBlock}>
               MyAvatarHere
            </div>
        </div>
    );
};

export default ProfileInfo;