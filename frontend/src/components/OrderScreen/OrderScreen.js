import React, { useEffect } from "react"
import { Link, useHistory, useParams } from "react-router-dom"
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "../Utils/Message"
import { orderInfo } from "../../action/orderAction"

const OrderScreen = ({}) => {
  const dispatch = useDispatch()
  let history = useHistory()
  const { id } = useParams()

  const { orders, loading } = useSelector((state) => state.orderDetails)
  const { cart } = useSelector((state) => state.cart)
  console.log(orders)

  useEffect(() => {
    dispatch(orderInfo(id))
  }, [dispatch])

  return (
    <>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Address:</strong>
                {orders && orders.shippingAddress.address},{" "}
                {orders && orders.shippingAddress.city}{" "}
                {orders && orders.shippingAddress.postalCode},{" "}
                {orders && orders.shippingAddress.country}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <strong>Method: </strong>
              {orders && orders.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {orders && orders.orderItems.length === 0 ? (
                <Message>Your order is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {orders &&
                    orders.orderItems.map((item, index) => (
                      <ListGroup.Item key={index}>
                        <Row>
                          <Col md={1}>
                            <Image src={item && item.image} fluid rounded />
                          </Col>
                          <Col>
                            <Link to={`/product/${item.product}`}>
                              {item.name}
                            </Link>
                          </Col>
                          <Col md={4}>
                            {item.qty} x ${item.price} = $
                            {item.qty * item.price}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${orders && orders.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${orders && orders.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${orders && orders.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${orders && orders.totalPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={orders && orders.orderItems === 0}
                >
                  Payment
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default OrderScreen
