import { createComponent } from '@lit-labs/react/development';
import PropTypes from 'prop-types';
import React from 'react'
export const Header = (props: any) => {
    console.log('this is the props', props);
    return <div>hi {props.text.name}</div>
}




