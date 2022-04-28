import axios from "axios"
import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "../Utils/Message"
import Loader from "../Utils/Loader"
import { createProduct } from "../../action/productAction"

const ProductCreateScreen = ({}) => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState("")
  const [brand, setBrand] = useState("")
  const [category, setCategory] = useState("")
  const [inStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState("")
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append("image", file)
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }

      const { data } = await axios.post("/api/upload", formData, config)

      setImage(data)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }
  const history = useHistory()
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createProduct({
        name,
        price,
        image,
        brand,
        category,
        description,
        inStock,
      })
    )
    history.push("/")
  }

  return (
    <>
      <Link to="/admin/productlist" className="btn btn-light my-3 mx-2">
        Go Back
      </Link>
      <Link to="/admin/productlist" className="btn btn-light my-3">
        All Product
      </Link>
      <>
        <h1>Create Product</h1>

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

            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                placeholder="Enter image url"
                onChange={uploadFileHandler}
              ></Form.Control>
              {/* <Form.File
                id='image-file'
                label='Choose File'
                custom
                onChange={uploadFileHandler}
              ></Form.File> */}
            </Form.Group>

            <Form.Group controlId="brand">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="countInStock">
              <Form.Label>Count In Stock</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter countInStock"
                value={inStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary">
              Create
            </Button>
          </Form>
        }
      </>
    </>
  )
}

export default ProductCreateScreen
