// src/hooks/useToast.js
import {useState} from 'react';

const useToast = () => {
  const [toast, setToast] = useState({
    visible: false,
    message: '',
    type: 'info',
  });

  const showToast = (message, type = 'info', duration = 2000) => {
    setToast({visible: true, message, type, duration});
  };

  const hideToast = () => {
    setToast({...toast, visible: false});
  };

  return {toast, showToast, hideToast};
};

export default useToast;
