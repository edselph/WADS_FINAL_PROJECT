// import React, { useRef } from 'react'
// import { Form, Button, Card } from 'react-bootstrap'
// import './Signup.css'
// import { useAuth } from '../contexts/AuthContext'

// const Signup = () => {
//   const emailRef = useRef()
//   const passwordRef = useRef()
//   const passwordConfirmRef = useRef()
//   const { signup } = useAuth()

//   function handleSubmit(e) {
//     e.preventDefault()

//     signup(emailRef.current.value, passwordRef.current.value)
//   }

//   return (
//     <>
//       <Card>
//       <Card.Body>
//         <h2 className="text-center mb-4">Sign Up</h2>
//         <Form>
//           <Form.Group id="email">
//             <Form.Label>Email</Form.Label>
//             <Form.Control type="email" ref={emailRef} required />
//           </Form.Group>
//           <Form.Group id="password">
//             <Form.Label>Password</Form.Label>
//             <Form.Control type="password" ref={passwordRef} required />
//           </Form.Group>
//           <Form.Group id="password-confirm">
//             <Form.Label>Password Confirmation</Form.Label>
//             <Form.Control type="password" ref={passwordConfirmRef} required />
//           </Form.Group>
//           <br />
//           <Button type="submit">Sign Up</Button>
//         </Form>
//         <div className="w-100 text-center mt-2">
//         Already have an account? Log In
//       </div>
//       </Card.Body>
//       </Card>
//     </>
//   )
// }

// export default Signup

import React from 'react'

const Signup = () => {
  return (
    <div>Signup</div>
  )
}

export default Signup
