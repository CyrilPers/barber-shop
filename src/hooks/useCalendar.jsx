import { useState } from "react";

export const useCalendar = () => {
    const [calendar, setCalendar] = useState([])
    return { calendar, setCalendar }
}
