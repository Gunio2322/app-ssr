import React from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    return (
        // Using Helmet to manage the document head     
        <>
                    <Helmet>
                        <title>Contact Us srus</title>
                        <meta name="description" content="Learn more about us on this page." />
                        <link rel="canonical" href="http://example.com/about" />
                    </Helmet>
        <div>
            <h1>Contact Us</h1>
            <p>You can reach us at contact@example.com.</p>
        </div>
        </>
    );
};

export default Contact;