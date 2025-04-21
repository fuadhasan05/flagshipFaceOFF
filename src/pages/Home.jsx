import React, {useState} from 'react';
import Hero from '../components/Hero';
import PhonesContainner from '../components/PhonesContainner';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();

    const [phones, setPhones] = useState(data);
    const handleSearch = (e, text) => {
        e.preventDefault()
        if (text === '') return setPhones(data);
        const searchText = data.filter(phone => 
            phone?.name?.toLowerCase().split(' ').includes(text.toLowerCase()) ||
            phone.brand?.toLowerCase().split(' ').includes(text.toLowerCase()));
        setPhones(searchText);
      }

    return (
        <div>
            <Hero handleSearch={handleSearch}></Hero>
            <PhonesContainner phones={phones} > </PhonesContainner>
        </div>
    );
};

export default Home;