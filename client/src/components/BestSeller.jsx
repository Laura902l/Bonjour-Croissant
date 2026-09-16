import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../context/AppContext'

export default function BestSeller() {
    const { products } = useAppContext();
    return (
        <div className='mt-16'>
            <p className='text-2x] md:text-3x] font-medium'>Best Sellers</p>
            <div>
                <ProductCard product={products[0]} />
            </div>
        </div>
    )
}
