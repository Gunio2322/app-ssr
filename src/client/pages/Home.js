import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
<>
<Helmet>
                <title>Home</title>
                <meta name="description" content="Learn more about us on this page." />
            </Helmet>
        <div>
            <h1>Welcome to the Home Page</h1>
        </div>
        </>
    );
};

export default Home;