import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us srus</title>
                <meta name="description" content="Learn more about us on this page." />
                <link rel="canonical" href="http://example.com/about" />
            </Helmet>

            <div>
                <h1>About Us dupa</h1>
                <p>This is the About page of the React SSR application.
                    Cos jeszczw
                </p>
            </div>
        </>
    );
};

export default About;