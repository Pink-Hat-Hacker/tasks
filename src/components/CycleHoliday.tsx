import React, { useState } from "react";
import { Button } from "react-bootstrap";
//fav holidays: halloween, christmas, new year, chinese new year, thanksgiving
//emojis: 🎄, 🦃, 🎆, 🧧, 🎃
export function CycleHoliday(): JSX.Element {
    type holiday =
        | "Halloween"
        | "Christmas"
        | "New Year"
        | "Chinese New Year"
        | "Thanksgiving";
    const [holi, setHoliday] = useState<holiday>("New Year");
    //alphabetical
    function alpha(): void {
        if (holi === "Chinese New Year") {
            setHoliday("Christmas");
        } else if (holi === "Christmas") {
            setHoliday("Halloween");
        } else if (holi === "Halloween") {
            setHoliday("New Year");
        } else if (holi === "New Year") {
            setHoliday("Thanksgiving");
        } else {
            setHoliday("Chinese New Year");
        }
    }
    //date
    function byDate(): void {
        if (holi === "New Year") {
            setHoliday("Chinese New Year");
        } else if (holi === "Chinese New Year") {
            setHoliday("Halloween");
        } else if (holi === "Halloween") {
            setHoliday("Thanksgiving");
        } else if (holi === "Thanksgiving") {
            setHoliday("Christmas");
        } else {
            setHoliday("New Year");
        }
    }
    //
    function emoji(): void {
        if (holi === "New Year") {
            return 🎆; 
        } else if (holi === "Chinese New Year") {
            return 🧧; 
        } else if (holi === "Halloween") {
            return 🎃; 
        } else if (holi === "Thanksgiving") {
            return 🦃;
        } else {
            return 🎄;
        }
    }
    return <div>Cycle Holiday</div>;
}
