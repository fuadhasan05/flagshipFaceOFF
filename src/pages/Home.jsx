import React from 'react';
import Hero from '../components/Hero';
import PhonesContainner from '../components/PhonesContainner';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();

    return (
        <div>
            <Hero></Hero>
            <PhonesContainner phones={data} > </PhonesContainner>
        </div>
    );
};

export default Home;