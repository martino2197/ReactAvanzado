import React from 'react'

import { useInputValue } from '../../hooks/useInputValue'
// El siguiente es un hook personalizado
// const useInputValue = initialValue => {
//   const [value, setValue] = useState(initialValue)
//   const onChange = e => setValue(e.target.value)

//   return { value, onChange }
// }

export const UserForm = ({ onSubmit }) => {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <form onSubmit={onSubmit}>
      {/* <input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} /> */}
      {/* <input placeholder='Email' value={email.value} onChange={email.onChange} /> */}
      <input placeholder='Email' {...email} />
      {/* <input placeholder='Password' type='password' value={password} onChange={e => setPassword(e.target.value)} /> */}
      <input placeholder='Password' type='password' {...password} />
      <button>Iniciar sesión</button>
    </form>
  )
}
