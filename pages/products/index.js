import React from 'react'
import Image from 'next/image';
import styles from '@/styles/Products.module.css'
import Link from 'next/link';

export async function getStaticProps () {
  const res = await fetch('https://dummyjson.com/products?limit=12')
  const data = await res.json()
  return {
    props:{products:data.products}
  }
}
export default function Index ({products}) {
  return (
    <>
      <div className={styles.container}>
        {products.map(item=>(
          <div key={item.id}>
          <Link href={'/products/'+ item.id}>
            <h2 className={styles.title}>{item.title}</h2>
            <Image className={styles.imgProduct} src={item.thumbnail} width={250} height={250} alt={item.title}/>
          </Link>
          </div>
        ))}
      </div>
    </>
  )
}