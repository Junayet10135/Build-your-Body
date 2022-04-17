import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';


const CheckOut = () => {


    const handleCheckOut = async(event)=>{
        event.preventDefault();
        toast('Your checkout form Submitted');

    }
    return (
        <div className='container mx-auto w-50 mt-5 form-container'>
            <h2 className='text-center'>Checkout</h2>
            <Form onSubmit={handleCheckOut}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter Mobile Number" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Address" required />
                </Form.Group>
                <Button className='d-block w-50 mx-auto my-2' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default CheckOut;