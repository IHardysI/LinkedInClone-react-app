import React from "react"
import moment from "moment/moment"

export default function GetTimeStamp(timeFormat) {
    return (
            moment().format(timeFormat)
        )
}