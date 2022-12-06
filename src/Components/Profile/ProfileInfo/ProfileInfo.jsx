import React from 'react';
import profInf from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
return <Preloader/>
    }

    return (
        <div>
            <div className={profInf.img}>
                <img src="https://kartinkin.net/uploads/posts/2021-07/thumbs/1625492587_25-kartinkin-com-p-sots-seti-fon-krasivie-foni-26.jpg"/>
            </div>
            <div className={profInf.descriptionBlock}>
                <img src={props.profile.photos.large}/>
               MyAvatarHere
            </div>
        </div>
    );
};

export default ProfileInfo;