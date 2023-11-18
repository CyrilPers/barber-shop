import { createContext } from "react";

export default createContext({
    selectedService: {},
    setSelectedService: () => { },
    selectedBarber: {},
    setSelectedBarber: () => { },
    bookedServices: {},
    setBookedServices: () => { },
    calendar: {},
    setCalendar: () => { },
});