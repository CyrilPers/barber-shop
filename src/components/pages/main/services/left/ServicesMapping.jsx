import React from 'react'
import Menu from '../../../../reusable-ui/Menu'
import { menu } from '../../../../../assets/data/menu'

export default function ServicesMapping() {
    return (
        <>
            {menu.map(({ id, category, services }) => {
                return (
                    <div className="service-card">
                        <Menu
                            key={id}
                            label={category}
                            services={services}
                        />
                    </div>
                )
            })}
        </>
    )
}
