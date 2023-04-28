const validate = (form, errors, setErrors) => {
  let isValid = true

  if (!form.email) {
    setErrors((prevErrors) => ({ ...prevErrors, email: 'Ingresa un email' }))
    isValid = false
  } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(form.email)) {
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: 'Ingresa un email válido'
    }))
    isValid = false
  } else {
    setErrors((prevErrors) => ({ ...prevErrors, email: '' }))
  }

  if (!form.password) {
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: 'Ingresa una contraseña'
    }))
    isValid = false
  } else {
    if (form.password.length < 8) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'La contraseña debe tener al menos 8 caracteres'
      }))
      isValid = false
    } else {
      if (form.password.length < 8) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: 'La contraseña debe tener al menos 8 caracteres'
        }))
        isValid = false
      } else {
        if (!/[A-Z]/.test(form.password)) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            password: 'La contraseña debe tener al menos una letra mayúscula'
          }))
          isValid = false
        } else {
          if (!/[a-z]/.test(form.password)) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              password: 'La contraseña debe tener al menos una letra minúscula'
            }))
            isValid = false
          } else {
            if (!/\d/.test(form.password)) {
              setErrors((prevErrors) => ({
                ...prevErrors,
                password: 'La contraseña debe tener al menos un número'
              }))
              isValid = false
            } else {
              if (/[[\]{}(),.;\\/]/.test(form.password)) {
                setErrors((prevErrors) => ({
                  ...prevErrors,
                  password: 'La contraseña no puede contener corchetes, llaves, comas, puntos o barras diagonales'
                }))
                isValid = false
              } else {
                setErrors((prevErrors) => ({ ...prevErrors, password: '' }))
              }
            }
          }
        }
      }
    }
  }

  return isValid
}

export default validate
