import React from 'react'
import BookedServicesList from './BookedServicesList';
import { deepClone } from '../../../../../../utils/helpers';
import { removeItemFromArray } from '../../../../../../utils/array.jsx'

export default function BookedServices({ setBookedServices, bookedServices }) {

    const handleDeleteBooked = (id) => {
        let bookedServicesCopy = deepClone(bookedServices)
        bookedServicesCopy = removeItemFromArray(id, bookedServicesCopy)
        setBookedServices(bookedServicesCopy)
    }
    return (
        <>
            <h1 id="booking">Vos rendez-vous</h1>
            <BookedServicesList bookedServices={bookedServices} handleDeleteBooked={handleDeleteBooked} />
        </>
    )
};
