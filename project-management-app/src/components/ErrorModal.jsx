import React, { useImperativeHandle, useRef, forwardRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const ErrorModal = forwardRef(function ErrorModal({ children }, ref) {
  const modalRef = useRef();
  const [portalElement, setPortalElement] = useState(null);

  useEffect(() => {
    setPortalElement(document.getElementById('modal-root'));
  }, []);

  useImperativeHandle(ref, () => ({
    open() {
      modalRef.current?.showModal();
    }
  }), []);

  // CRITICAL GUARD
  if (!portalElement) return null;

  return createPortal(
    <dialog ref={modalRef}>
      {children}
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
    portalElement
  );
});

export default ErrorModal;