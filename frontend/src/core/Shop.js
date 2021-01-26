import React, { useState, useEffect }  from 'react';
import Layout from "./Layout";
import Card from "./Card";
import { getCategories, getFilteredProducts } from "./apiCore";

const Shop = () => {

    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(false);
    const [limit, setLimit] = useState(6);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(0);
    const [filteredResults, setFilteredResults] = useState([]);
    return (
        <Layout
            title="Shop Page"
            description="Search and find books of your choice"
            className="container-fluid"
        >
               <div className="row">

                 <div className="col-4">
                     <h4>Filter by categories</h4>
                 </div>

                 <div className="col-8">
                     <h2 className="mb-4">Products</h2>
                 </div>
               </div>
        </Layout>
    );
};

export default Shop;