import React from "react";
import './Topbar.scss'
import LinkedinLogo from '../../../assets/linkedinLogo.png'
import { useNavigate } from "react-router-dom";
import userIcon from '../../../assets/user-icon.svg'

export default function Topbar() {
    function inputFocus() {
        let input = document.querySelector('.topbar__search-input')
        input.focus()
    } 
    const navigate = useNavigate()
    const goToRoute = (route) => {
        navigate(route)
    }

    return (
        <div className="topbar">
            <div className="topbar__block">
                <img className="topbar__logo" src={LinkedinLogo} alt="Logo" width={'41px'} onClick={() => navigate('/register')}/>
                <form className="topbar__search">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="gray" class="topbar__search-icon" width="21" height="21" focusable="false" onClick={inputFocus}>
                        <path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
                    </svg>
                    <input type="text" className="topbar__search-input" placeholder="Search" />
                </form>
                <div className="topbar__home topbar__common" onClick={() => goToRoute('/home')}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="gray" class="topbar__home-icon topbar__icon" width="24" height="24" focusable="false">
                        <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
                    </svg>
                    <p className="topbar__home-p">Home</p>
                </div>
                <div className="topbar__network topbar__common" onClick={() => goToRoute('/register')}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="gray" class="topbar__network-icon topbar__icon" width="24" height="24" focusable="false">
                        <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                    </svg>
                    <p className="topbar__network-p">Network</p>
                </div>
                <div className="topbar__work topbar__common">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="gray" class="topbar__work-icon topbar__icon" width="24" height="24" focusable="false">
                        <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                    </svg>
                    <p className="topbar__work-p">Work</p>
                </div>
                <div className="topbar__messaging topbar__common">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="gray" class="topbar__messaging-icon topbar__icon" width="24" height="24" focusable="false">
                        <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
                    </svg>
                    <p className="topbar__messaging-p">Messaging</p>
                </div>
                <div className="topbar__notifications topbar__common">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="gray" class="topbar__notifications-icon topbar__icon" width="24" height="24" focusable="false">
                        <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
                    </svg>
                    <p className="topbar__notifications-p">Notifications</p>
                </div>
                <div className="topbar__user topbar__common">
                    <svg className="topbar__user-icon topbar__icon" xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 96 960 960" width="22" fill="gray"><path d="M222 801q63-44 125-67.5T480 710q71 0 133.5 23.5T739 801q44-54 62.5-109T820 576q0-145-97.5-242.5T480 236q-145 0-242.5 97.5T140 576q0 61 19 116t63 109Zm257.814-195Q422 606 382.5 566.314q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314 566.5q-39.686 39.5-97.5 39.5Zm.654 370Q398 976 325 944.5q-73-31.5-127.5-86t-86-127.266Q80 658.468 80 575.734T111.5 420.5q31.5-72.5 86-127t127.266-86q72.766-31.5 155.5-31.5T635.5 207.5q72.5 31.5 127 86t86 127.032q31.5 72.532 31.5 155T848.5 731q-31.5 73-86 127.5t-127.032 86q-72.532 31.5-155 31.5ZM480 916q55 0 107.5-16T691 844q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480 916Zm0-370q34 0 55.5-21.5T557 469q0-34-21.5-55.5T480 392q-34 0-55.5 21.5T403 469q0 34 21.5 55.5T480 546Zm0-77Zm0 374Z"/></svg>
                    <p className="topbar__notifications-p">Me</p>
                </div>
            </div>

            
        </div>
    )
}