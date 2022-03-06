import React, { useState } from "react";
import { Button } from "react-bootstrap";
//fav holidays: halloween, christmas, new year, chinese new year, thanksgiving
//emojis: 🎄, 🦃, 🎆, 🧧, 🎃
export function CycleHoliday(): JSX.Element {
    type holiday = "Halloween", "Christmas", "New Year", "Chinese New Year", "Thanksgiving";
    const [holi, setHoliday] = useState<holiday>("New Year");
    return <div>Cycle Holiday</div>;
}
