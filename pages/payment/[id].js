import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useCallback } from "react";
import Head from 'next/head';

const Payment = () => {
    const router = useRouter();

    const payment = useCallback(async () => {
        try {
            const values = {
                id: router.query.id
            };
            const { data } = await axios.post(`/api/razorpay`, values);

            const options = {
                key: process.env.RAZORPAY_KEY,
                name: "OYO",
                currency: data.currency,
                amount: data.amount,
                order_id: data.id,
                description: "Thank You",
                handler: function (response) {
                    // Handle successful payment
                    // console.log(response);
                },
                prefill: {
                    name: "OYO",
                    email: "test@yo.com",
                    contact: 9876543211
                }
            };

            const paymentObj = new window.Razorpay(options);
            paymentObj.open();
        } catch (error) {
            console.error("Error processing payment:", error);
        }
    }, [router.query.id]);

    useEffect(() => {
        payment();
    }, [payment]);

    return (
        <>
            <Head>
                <script async src="https://checkout.razorpay.com/v1/checkout.js" />
            </Head>
        </>
    );
};

export default Payment;
