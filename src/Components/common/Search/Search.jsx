import React from "react";
import './Search.scss'
import { CloseCircleOutlined } from "@ant-design/icons";

export default function Search({ setSearchInput, setInputClicked, inputClicked }) {
    return (
        <div className={inputClicked ? "search-block clicked" : "search-block"} >
            <svg onClick={() => setInputClicked(true)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="gray" className="search-icon" width="21" height="21" focusable="false">
                <path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
            </svg>
            <input onClick={() => setInputClicked(true)} type="text" className={inputClicked ? "search-input clicked" : "search-input"} placeholder="Search" onChange={(event) => setSearchInput(event.target.value)} />
            {inputClicked ? <div onClick={() => setInputClicked(false)} className="search__close">
                <CloseCircleOutlined clas style={{color: "gray"}} />
            </div> : <></>}
        </div>
    )
}