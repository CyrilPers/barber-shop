import React, { useState } from 'react'
import Menu from '../../../../reusable-ui/Menu'
import { menu } from '../../../../../assets/data/menu'

export default function ServicesMapping({ setSelectedService }) {


    const handleSelectService = (service) => {
        setSelectedService(service)
    }

    return (
        <>
            {menu.map(({ id, category, services }) => {
                return (
                    <div className="service-card"
                        key={id}>
                        <Menu
                            handleSelectService={handleSelectService}
                            label={category}
                            services={services}
                        />
                    </div>
                )
            })}
        </>
    )
}
