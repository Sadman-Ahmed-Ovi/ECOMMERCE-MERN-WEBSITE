import React from 'react';
import Layout from '../core/Layout';
import { API } from '../config'

const Signup = () => {
    return (
        <Layout 
            title="Signup"
            description="Signup to Node React E-commerce App"
            className="container col-md-8 offset-md-2"
        >
              {API}
              
        </Layout>
    );
};

export default Signup;