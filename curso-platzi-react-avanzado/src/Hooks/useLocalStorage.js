import { useState } from 'react'

// Lo siguiente es un custom Hook para el localStorage
export function useLocalStorage (key, initialValue) {
  // el estado de los likes lo guardamos en local storage
  const [storeValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
      // La informacion que se almacena en el localStorage es un string. Por eso cuando hacemos el cambio de !liked lo que estamos enviando es una cadena de texto true o false. Si aun asi tienen duda pueden comprobarlo con typeof like
    } catch (error) {
      return initialValue
    }
  })

  // este es el metodo que devolvemos para settear el valor en localStorage
  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (e) {
      console.error(e)
    }
  }

  return [storeValue, setLocalStorage]
}
