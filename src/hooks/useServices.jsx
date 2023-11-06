import { useState } from 'react'

export const useServices = () => {
    const [selectedService, setSelectedService] = useState()

    return { selectedService, setSelectedService }
}

