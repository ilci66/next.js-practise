import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/navbar'
import Footer from '../comps/footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Next.js pre renders and sends to browser</p>
      <p className={styles.text}>Duis sunt nulla Lorem et nulla sit dolor sunt aliqua eiusmod sit magna labore in. Mollit in incididunt id id 
      aliquip duis. Voluptate est ad sit id magna nisi proident ex eiusmod aliqua amet elit veniam mollit.
      Elit tempor fugiat eiusmod qui do nisi ipsum dolore sunt aliqua. Dolor nostrud ad exercitation magna Lorem est 
      esse deserunt cillum amet culpa nisi magna deserunt. Fugiat id esse velit amet duis consectetur in mollit 
      occaecat laboris magna. Duis eiusmod laborum ad excepteur cillum sit culpa sunt in aliquip occaecat Lorem 
      ullamco.</p>
      <Link href="/test/testing">
        <a>Link for testing route</a>
      </Link>
    </div>
  )
}
