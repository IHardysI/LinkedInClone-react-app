import React from "react";
import ClipLoader from "react-spinners/MoonLoader";

export default function Loader() {
    return (
        <div className="loader">
            <ClipLoader
                color='#0073b1'
            />
        </div>
    )
}