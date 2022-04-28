import React, { useState, useEffect } from "react"
import { Link, useHistory, useLocation } from "react-router-dom"
import { Form, Button, Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "../Utils/Message"
import Loader from "../Utils/Loader"
import { login } from "../../action/userAction"

const LoginScreen = ({}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState(null)
  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()

  /* const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister */

  const redirect = location.search ? location.search.split("=")[1] : "/"

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login({ email, password }))
    history.push("/")
  }

  return (
    <>
      <h1>Sign In</h1>
      {/*  {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />} */}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Login
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          Have an not Account?{" "}
          <Link
            to={
              redirect
                ? `/register/registration?redirect=${redirect}`
                : "/login/loginsite"
            }
          >
            Register
          </Link>
        </Col>
      </Row>
    </>
  )
}

export default LoginScreen
