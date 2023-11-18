import { useState } from 'react'

export const useBooked = () => {
    const [bookedServices, setBookedServices] = useState()

    return { bookedServices, setBookedServices }
}

