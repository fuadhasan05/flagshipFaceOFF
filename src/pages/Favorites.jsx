import React, { useEffect, useState } from 'react';
import PhoneCard from '../components/PhoneCard';
import { getFavorites, removeFavorite } from '../utilities';

const Favorites = () => {
    const [displayPhones, setDisplayPhones] = useState([])
    useEffect(() => {
        const shavePhones = getFavorites ()
        setDisplayPhones(shavePhones)
    }, [])

const handleRemove = (id) => {
    removeFavorite(id)
    setDisplayPhones(getFavorites())
}    
        return (
        <div className='py-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
                {
                    displayPhones.map(phone => <PhoneCard key={phone.id} phone={phone} remove={true} handleRemove={handleRemove}></PhoneCard>)
                }
            </div>
        </div>
    );
};

export default Favorites;