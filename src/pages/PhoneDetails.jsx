import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Button from './ui/Button';
import { MdBookmarkAdd, MdOutlineShoppingCartCheckout } from "react-icons/md";

const PhoneDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const singlePhone = data.find(phone => phone.id === parseInt(id));

    const { name, image, brand, model, storage, description, camera_info, price } = singlePhone || {};
    return (
        <div className='py-12 w-full'>
            <img src={image} alt="Banner Img"
                className='w-full mx-auto md:w-auto mb-8'
            />
            <div className="flex justify-between">
                <h1 className='font-thin text-7xl'>{name}</h1>
                <div className='flex items-center space-x-4'>
                    <Button label={<MdOutlineShoppingCartCheckout />}></Button>
                    <Button label={<MdBookmarkAdd />}></Button>
                </div>
            </div>
            <div className='font-thin text-5xl pt-10'>
                <h2>Details:</h2>
            </div>
            <div>
                <p className='text-black font-normal text-lg pt-4'>
                    <span className='font-bold'>Brand:</span> {brand}
                </p>
                <p className='text-black font-normal text-lg pt-4'>
                    <span className='font-bold'>Model:</span> {model}
                </p>
                <p className='text-black font-normal text-lg pt-4'>
                    <span className='font-bold'>Storage:</span> {storage}
                </p>
                <p className='text-lg pt-4 flex gap-2'>
                <h3 className='text-black font-bold'>Price:</h3>
                    <div>
                        <p>256GB: {price["256GB"]}</p>
                        <p>512GB: {price["512GB"]}</p>
                    </div>
                </p>
                <p className='text-black font-normal text-lg pt-4'>
                    <span className='font-bold'>Camera Info:</span> {camera_info}
                </p>
                <p className='text-black font-normal text-lg pt-4'>
                    <span className='font-bold'>Description:</span> {description}
                </p>
            </div>
        </div>
    );
};

export default PhoneDetails;