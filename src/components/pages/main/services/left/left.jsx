import React, { useState } from 'react'
import styled from 'styled-components';
import { menu } from '../../../../../assets/data/menu';
import Menu from '../../../../reusable-ui/Menu';
import { theme } from '../../../../../theme';

export default function Left() {

    return (
        <LeftStyled>
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
        </LeftStyled>

    )
}

const LeftStyled = styled.section`
width: 60%;
`;