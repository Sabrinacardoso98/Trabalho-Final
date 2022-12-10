import axios from "axios";

function Profile({product = {}}){
    return (
        <div>
            <p class="number">{product.id}</p>
            <p class="titulop">{product.title}</p>
            <img src={product.image} />
            <p class="descricao">{product.description}</p>
        </div>
    )
}    


export async function getStaticProps(context) {
    const response= await axios.get(
        'https://fakestoreapi.com/products/' + context.params.id
    );

    const product = await response.data;
    return {
      props: {product} // will be passed to the page component as props
    }
} 

export async function getStaticPaths(){
    const response = await axios.get(
        'https://fakestoreapi.com/products'
    );
    const products = await response.data;
    const paths = products.map((product) => {
        return {params:{id:String(product.id)}};
    });
    return{
        paths,
        fallback: true,
    };
}

export default Profile;