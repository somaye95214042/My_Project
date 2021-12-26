import React from 'react';
import Display from "../Components/Display";
import Counter from "../Components/Counter";
import Customers from "../Components/Customers";

const Home = () => {
    return (
        <div>
            <Display/>
            <Counter/>
            <Customers/>
        </div>

    );
};

export default Home;