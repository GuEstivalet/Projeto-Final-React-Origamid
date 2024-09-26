import React from 'react';

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i,
    message: 'Preencha um email válido!',
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[A-Za-z\d$*&@#]{8,}$/,
    message: 'Deve conter no mínimo 8 caracteres, 1 letra maiúscula, 1 número e 1 caractere especial.',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true; // Se não houver tipo, sempre retorna válido
    if (value.length === 0) {
      setError('Preencha um valor.');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value); // Revalida se houver erro anterior
    setValue(target.value); // Atualiza o estado
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value), // Valida quando for chamado
    onBlur: () => validate(value), // Valida ao perder o foco
  };
};

export default useForm;
