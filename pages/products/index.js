import React, { useState } from 'react'
import Image from 'next/image';
import styles from '@/styles/Products.module.css'
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FloatButton } from 'antd';

export async function getStaticProps () {
  const res = await fetch('https://dummyjson.com/products?limit=12')
  const data = await res.json()
  return {
    props:{products:data.products}
  }
}
export default function Index ({products}) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  return (
    <>
      <div className={styles.container}>
        {products.map(item=>(
          <div key={item.id} className={styles.Blogs}>
          <Card className={styles.cardID} >
          <Link href={'/products/'+ item.id}>
            <h2 style={{margin:'10px 0'}} className={styles.title}>{item.title}</h2>
            <div style={{textAlign:'center'}}>
            <Image className={styles.imgProduct} src={item.thumbnail} width={250} height={250} alt={item.title}/>
            </div>
          </Link>
          <Card.Body>
          <Card.Text className={styles.descriptstionP}>
          {item.description}
          </Card.Text>
          <Button onClick={() => addToCart(item)} className={styles.btnAddCart} variant="dark">Add to Cart</Button>
          </Card.Body>
          </Card>
          </div>
        ))}
        
      <FloatButton 
      tooltip={<div className={styles.addToCart}>
        <h4>My Cart</h4>
        <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
          <Image src={item.thumbnail} width={50} height={50} alt={item.title}/>
          {item.title} | ${item.price}</li>
        ))}
        </ul>
      </div>}
      />
      </div>
    </>
  )
}