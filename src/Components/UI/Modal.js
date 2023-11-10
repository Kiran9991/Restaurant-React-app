import { Fragment, useContext } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';
import AuthContext from '../../Context/auth-context';

const Backdrop = props => {
    return <div className={classes.backdrop}/>
};

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays');

const Modal = props => {
    const authCtx = useContext(AuthContext);
    return authCtx.isCartItem && <Fragment>
        {ReactDOM.createPortal(<Backdrop/>,portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,
        portalElement)}
    </Fragment>
}

export default Modal;