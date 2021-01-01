import React from 'react';
import './Modal.css';
import Auxiliary from '../../../HOC/Auxiliary';

const Modal = (props) =>(
    <Auxiliary>
    <div className="modal"
        style={{transform:props.show?'translateY(0)':'translateY(-50vh)',
        opacity:props.show?'1':'0'}}>
          {props.children}
    </div>
    </Auxiliary>
);
export default Modal;