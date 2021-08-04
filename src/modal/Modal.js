import React from 'react';
import './Modal.css';

const styleButton = {
    marginTop: '20%',
    marginLeft: '40%',
    textAlign: 'center',    
    fontSize: '1em',
    color: '#fff',
    width: '235px',
    height: '70px',
    backgroundColor: '#ff0000',
    borderRadius: '5px'
};

export default class Modal extends React.Component {

    state = {
        isOpen: false
    }

    render () {
        return (
            <React.Fragment>
                <button style={styleButton} onClick = {() => this.setState({isOpen: true})}>Кликни</button>

                {this.state.isOpen && (<div className="modal">
                    <div className="modal-body">
                        <h1>Модальное окно</h1>
                        <p>Текст модального окна</p>
                        <button onClick = {() => this.setState({isOpen: false})}>Закрыть</button>
                    </div>
                </div>)}
            </React.Fragment>
        )
    }
}