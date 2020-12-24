import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Button from '../Button';
import './index.css';

const Modal = props => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <span
        className="Modal-button"
        onClick={() => setShowModal(true)}
      >{props.children[0]}</span>

      {
        showModal ? (
          <ModalPanel
            {...props}
            setShowModal={setShowModal}
          />
        ) : null
      }
    </>
  );
};

const portal = document.createElement('div');

const ModalPanel = props => {
  const {
    children,
    title = 'Modal',
    width = 500,
    overflow = 'auto',
    maxHeight = 200,
    ok = '',
    cancel = '',
    handleOk = () => {},
    setShowModal,
  } = props;

  useEffect(() => {
    const root = document.getElementById('root');

    root.appendChild(portal);

    return () => {
      root.removeChild(portal);
    }
  });

  return createPortal(
    <div className="Modal-blackpanel">
      <figure className="Modal">
        <header className="Modal-header">
          <span>{title}</span>

          <div
            className="Modal-close"
            onClick={() => setShowModal(false)}
          ></div>
        </header>

        <section className="Modal-content" style={{width, maxHeight, overflowY: overflow}}>
          {children[1]}
        </section>

        {
          cancel || ok ? (
            <footer className="Modal-footer">
              {
                cancel ? (
                  <Button
                    value={cancel}
                    onClick={() => setShowModal(false)}
                  />
                ) : null
              }

              {
                ok ? (
                  <Button
                    value={ok}
                    color="grey"
                    onClick={() => handleOk()}
                  />
                ) : null
              }
            </footer>
          ) : null
        }
      </figure>
    </div>,
    portal
  );
}

export default Modal;