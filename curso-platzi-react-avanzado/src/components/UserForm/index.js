import React from 'react'

import { Form, Input, Button, Title, Error } from './styles'

import { useInputValue } from '../../hooks/useInputValue'
// El siguiente es un hook personalizado
// const useInputValue = initialValue => {
//   const [value, setValue] = useState(initialValue)
//   const onChange = e => setValue(e.target.value)

//   return { value, onChange }
// }

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    // evitamos que haga el POST por defecto con la sig linea
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <>
      <Form onSubmit={handleSubmit} disabled={disabled}>
        <Title>{title}</Title>
        {/* <input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} /> */}
        {/* <input placeholder='Email' value={email.value} onChange={email.onChange} /> */}
        <Input placeholder='Email' {...email} disabled={disabled} />
        {/* <input placeholder='Password' type='password' value={password} onChange={e => setPassword(e.target.value)} /> */}
        <Input placeholder='Password' type='password' {...password} disabled={disabled} />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
