import React, { useMemo, useState } from "react";
import Topbar from "../Components/common/Topbar/Topbar";
import { getCurrentUser } from "../api/StoreAPI";
import Connections from "../Pages/Connections";

export default function ConnectionsLayout() {
    const [currentUser, setCurrentUser] = useState({})
    useMemo(() => {
        getCurrentUser(setCurrentUser)
    }, [])
    return (
        <div>
            <Topbar currentUser={currentUser}/>
            <Connections currentUser={currentUser}/>
        </div>
    )
}