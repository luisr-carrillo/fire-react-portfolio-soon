import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { Firestore } from '../firebase';

const Suscripcion = () => {
    const [email, setEmail] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [error, setError] = useState(false);

    const validateEmail = () => {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return !regex.test(email);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        if (validateEmail()) {
            setError(true);
            return;
        }
        setIsDisabled(true);

        try {
            const subsRef = Firestore.collection('subscriptions').doc();
            subsRef
                .set({
                    email,
                    createAt: new Date(),
                })
                .then((res) => {
                    Swal.fire({
                        title: '¡Éxito!',
                        text: 'El email se ha registrado correctamente.',
                        icon: 'success',
                    });
                });
        } catch (err) {
            Swal.fire({
                title: 'Algo salió mal... :(',
                text: err.message,
                icon: 'error',
            });
        } finally {
            setIsDisabled(false);
            setError(false);
            setEmail('');
        }
    };

    return (
        <div className="suscripcion">
            <form id="contact-form" onSubmit={submitHandler}>
                <input
                    type="email"
                    id="email"
                    placeholder="Correo electrónico..."
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" id="btn" disabled={isDisabled}>
                    <FontAwesomeIcon
                        icon={isDisabled ? faCircleNotch : faPaperPlane}
                        spin={isDisabled}
                        style={{ color: 'white', fontSize: '1.2rem' }}
                    />
                </button>
            </form>

            {error && (
                <div className="error">
                    <p className="email_val_error">Ingresa un email válido.</p>
                </div>
            )}
        </div>
    );
};

export default Suscripcion;
