import React from 'react';

import { Link } from 'react-router-dom'

export const ButtonBackToHome = () => (
    <Link className='button is-info' style={{marginBottom: '50px'}}
        to='/'>
        Volver a la portada
    </Link>
)