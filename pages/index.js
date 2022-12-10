import Head from 'next/head';
import axios from 'axios';
import styles from '../styles/Home.module.css'


export default function Home(){
  return(
    <div className={styles.container}>
      <Head>
        <title> Projeto SSG</title>
      </Head>
      
      <h1 class=" inicio"> Projeto Produtos </h1>
      <p class="apresenta"> Clique no link abaixo para conhecer os nossos produtos disponiveis</p>
      <a class ="linkp"href="\products"> Abrir produtos</a>
    

    </div>
  )
}