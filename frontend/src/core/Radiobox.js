import React, { useState }  from 'react';

const Radiobox = ({  prices, handleFilters }) => {
    const [value, setValue] = useState([]);

    const handleChange = event=> {
        handleFilters(event.target.value, "price");
        setValue(event.target.value);
        
    };
    return prices.map((p, i) => (
        <div key={i}>
            <input
                onChange={handleChange}
                value={`${p._id}`}
                name={p}
                type="radio"
                className="mr-2 ml-4"
            />
            <label className="form-check-label">{p.name}</label>
        </div>
    ));
};

export default Radiobox;