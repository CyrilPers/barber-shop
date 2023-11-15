import { useState } from 'react'

export const useBarbers = () => {
    const [selectedBarber, setSelectedBarber] = useState(null)

    return { selectedBarber, setSelectedBarber }
}

