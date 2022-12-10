import React from "react";
import axios from 'axios';
import Link from "next/link";

function Products ({products}){
    return (
        <div>
            <h3>Lista dos Produtos</h3>
            {products.map((product) => (
                <div>
                    <Link href='/profile/[id]' as={`/profile/${product.id}`}>
                        <p class="listap">{product.title}</p>
                    </Link>
                </div>
            ))}          
        </div>
    )
}

export async function getStaticProps(context){
    const response = await axios.get(
        'https://fakestoreapi.com/products'
    );
    const data = await response.data;
    return{
        props: {products:data},
    }
}

export default Products;