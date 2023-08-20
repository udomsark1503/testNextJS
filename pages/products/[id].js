//import { useRouter } from "next/router"
import Head from "next/head"
import Image from "next/image"
import styles from '@/styles/Detail.module.css'

export async function getStaticPaths(){
    const res = await fetch('https://dummyjson.com/products?limit=12')
    const data = await res.json()
    const paths = data.products.map((item)=>{
        return {
            params:{id:String(item.id)}
        }
    })
    console.log(paths)
    return {
        paths,
        fallback:false
    }
}
export async function getStaticProps ({params}) {
    const id = params.id
    const res = await fetch('https://dummyjson.com/products/'+id)
    const data = await res.json()
    console.log(data)
    return {
      props:{product:data}
    }
  }
export default function ProductDetail({product}){
    //const router=useRouter()
    //const {id} = router.query
    return (
        <>
            <Head>
                <title>MaxkyoTHo Market | {product.title}</title>
            </Head>
            <div className={styles.container}>
                <Image src={product.thumbnail} width={300} height={300} alt={product.title}/>
            <div className={styles.detail}>
                <h1>Product name : {product.title}</h1>
                <h2>Price : {product.price}</h2>
                <h2>Group : {product.category}</h2>
                <h3>BRAND : {product.brand}</h3>
                <h4>Detail : {product.description}</h4>
                <h4>Rating : {product.rating}</h4>
            </div>
            </div>
        </>
    )
}