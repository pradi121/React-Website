import React from 'react'
import './Button.css';
import {Link} from 'react-router-dom';
import { pipelinePrimaryTopicReference } from '@babel/types';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES= ['button--medium', 'btn--large' ];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) =>{
    const checkbuttonStyle = STYLES.includes(buttonStyle)
     ? buttonStyle
      : STYLES[0];

      const checkbuttonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

      return(
          <Link to='/sign-up' className='btn-mobile'>
              <button className={'btn ${checkButtonStyle} ${checkButtonSize}'}
                onClick={onClick}
                type={type}
              >
                  {children}
              </button>

            </Link>
      )
};