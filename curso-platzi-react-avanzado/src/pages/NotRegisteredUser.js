import React from 'react'
import Context from '../Context'

import { UserForm } from '../components/UserForm'
// import { RegisterMutation } from '../container/RegisterMutation'
import { useRegisterMutation } from '../Hooks/useRegisterMutation'

// Usando Container RegisterMutation
// export const NotRegisteredUser = () => (
//   <Context.Consumer>
//     {
//     ({ isAuth, activateAuth }) => {
//       return (
//         <>
//           <RegisterMutation>
//             {
//             (register) => {
//               const onSubmit = ({ email, password }) => {
//                 const input = { email, password }
//                 const variables = { input }
//                 { /* register que es una mutacion devuelve una promesa */ }
//                 register({ variables }).then(activateAuth)
//               }
//               return <UserForm title='Registrarse' onSubmit={onSubmit} />
//             }
//           }
//           </RegisterMutation>

//           <UserForm title='Iniciar sesión' onSubmit={activateAuth} />
//         </>
//       )
//     }
//   }
//   </Context.Consumer>
// )
const Registro = ({ activateAuth }) => {
  const { register } = useRegisterMutation()
  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    register({ variables }).then(res => {
      activateAuth()
    })
  }
  return <UserForm onSubmit={onSubmit} title='Registrarse' />
}

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ isAuth, activateAuth }) => {
        return (
          <>
            <Registro activateAuth={activateAuth} />
            <UserForm activateAuth={activateAuth} title='Iniciar sesión' />
          </>
        )
      }
    }
  </Context.Consumer>
)
