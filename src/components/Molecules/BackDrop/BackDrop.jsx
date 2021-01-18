import React from 'react';
import './BackDrop.css';
const backdrop = (props) =>(
 props.show ? <div className="Backdrop"></div> : null
);

export default backdrop;