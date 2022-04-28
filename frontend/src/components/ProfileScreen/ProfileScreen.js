import React, { useState, useEffect } from "react"
import { Table, Form, Button, Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getUserDetails, userUpdate } from "../../action/userAction"
import Loader from "../Utils/Loader"
import Message from "../Utils/Message"

import { useParams } from "react-router-dom"

const ProfileScreen = ({}) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [message, setMessage] = useState(null)
  const dispatch = useDispatch()
  const { id } = useParams()
  const { userInfo } = useSelector((state) => state.loginReducer)
  const { userDetails } = useSelector((state) => state.userReducer)
  console.log(userDetails)
  useEffect(() => {
    if (userDetails) {
      setName(userDetails.name)
      setEmail(userDetails.email)
    } else {
      dispatch(getUserDetails(id))
    }
  }, [dispatch, userDetails])
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(userUpdate({ name, email, password }, id))
    dispatch({ type: "USER_UPDATE_PROFILE_RESET" })
  }
  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {message && <Message variant="danger">{message}</Message>}
        {}

        {
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

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

            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        }
      </Col>
      <Col md={9}>
        <h2>My Orders</h2>(
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th></th>
            </tr>
          </thead>
        </Table>
      </Col>
    </Row>
  )
}

export default ProfileScreen
