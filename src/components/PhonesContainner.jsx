import React, { useEffect, useState } from 'react';
import PhoneCard from './PhoneCard';
import Button from '../pages/ui/Button';

const PhonesContainner = ({ phones }) => {

    const [displayPhones, setDisplayPhones] = useState([])
    const [showAll, setShowAll] = useState(false)
    useEffect(() => {
        if (showAll) {
            setDisplayPhones(phones)
        }
        else {
            setDisplayPhones(phones.slice(0, 6))
        }
    }, [phones, showAll])

    return (
        <div className='py-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
                {
                    displayPhones.map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                }
            </div>
            <Button
                onClick={() => {
                    setShowAll(!showAll)
                    if (showAll) window.scrollTo(0, 400)
                }} type='submit' label={showAll ? 'Show Less' : 'Show All'}>
            </Button>
        </div>
    );
};

export default PhonesContainner;