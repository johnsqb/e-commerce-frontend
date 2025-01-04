import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentOptions.css';

const PaymentOptions = () => {
    
    const [total, setTotal] = useState(0); // Initialize with 0 to avoid NaN
    const navigate = useNavigate();
    const deliveryCharge = 50;
    const platformFee = 30;
    const userId = sessionStorage.getItem('Id');

    const loadRazorpayScript = () => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.async = true;
            script.onload = () => {
                console.log('Razorpay script loaded successfully');
                resolve();
            };
            script.onerror = () => {
                console.error('Failed to load Razorpay script');
                reject(new Error('Failed to load Razorpay script'));
            };
            document.body.appendChild(script);
        });
    };

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                await loadRazorpayScript();
                const response = await axios.get(`http://localhost:8080/api/cart/getCartByUser?id=${userId}`);
                
                if (response.data && response.data.total) {
                    setTotal(response.data.total); // Safely set the total
                    console.log("Total fetched:", response.data.total);
                } else {
                    console.warn('No total found in response:', response.data);
                }
            } catch (error) {
                console.error('Failed to fetch order details:', error);
            }
        };

        if (userId) fetchOrderDetails();
    }, [userId]);

    const createOrder = async (totalAmount) => {
        try {
            const response = await axios.post(`http://localhost:8080/api/orderDetails/add?userId=${userId}`, { total: totalAmount });
            if (response.status !== 200) {
                throw new Error('Failed to create order');
            }
            return response.data;
        } catch (error) {
            console.error('Error creating order:', error);
            throw error;
        }
    };

    const handlePayClick = async () => {
        try {
            const orderDetails = await createOrder(total); // Convert total to paisa for Razorpay
            console.log('Order Details:', orderDetails);

            const options = {
                key: 'rzp_test_cWF3MY4jPZmK8Z',
                amount: orderDetails.total,
                currency: orderDetails.currency,
                name: 'Qbtech',
                description: 'Test Transaction',
                order_id: orderDetails.id,
                handler: function (response) {
                    alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
                    navigate('/success');
                },
                prefill: {
                    name: 'Your Name',
                    email: 'Your email',
                    contact: 'Your phone number',
                },
                theme: {
                    color: '#3399cc',
                },
            };

            if (window.Razorpay) {
                const rzp = new window.Razorpay(options);
                rzp.open();
            } else {
                throw new Error('Razorpay script not loaded');
            }
        } catch (error) {
            console.error('Payment failed:', error);
            alert('Payment failed: ' + error.message);
        }
    };

    return (
        <>
            <div className="checkout-card">
                <div className="header">
                    <h2>Payment Options</h2>
                </div>
                <div className="content">
                    <p>Total: ₹{total}</p>
                    <button className="pay-button" onClick={handlePayClick}>
                        Pay Now
                    </button>
                </div>
            </div>

            <div className="price-details-card">
                <div className="price-details-header">Price Details</div>
                <div className="price-item">
                    <span>Price</span>
                    <span>₹{total}</span>
                </div>
                <div className="price-item">
                    <span>Delivery Charge</span>
                    <span>₹{deliveryCharge}</span>
                </div>
                <div className="price-item">
                    <span>Platform Fee</span>
                    <span>₹{platformFee}</span>
                </div>
                <div className="price-item price-item-total">
                    <span>Amount Payable</span>
                    <span>₹{total + deliveryCharge + platformFee}</span>
                </div>
            </div>
        </>
    );
};

export default PaymentOptions;
