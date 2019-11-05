import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {
    ModalSettings,
    ModalWindow,
    CloseButton,
} from './styledComponents';

export default class Modal extends React.Component {
    static propTypes = {
        path: PropTypes.object,
        isOpen: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired,
        children: PropTypes.object.isRequired,
    };

    static defaultProps = {
        path: document.body,
    };

    root = document.createElement('div');

    componentWillUnmount() {
        this.props.path.removeChild(this.root);
    }

    componentDidMount() {
        this.props.path.appendChild(this.root);
    }

    render() {
        const {
            isOpen,
            onClose,
            children,
        } = this.props;
        return isOpen ? ReactDOM.createPortal(
            <ModalSettings>
                <ModalWindow>
                    <CloseButton className='modal-window__close-button fa fa-times' aria-hidden='true' onClick={onClose}/>
                    {children}
                </ModalWindow>
            </ModalSettings>,
            this.root
        ) : null;
    }
}