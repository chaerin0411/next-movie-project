import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home({ results }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Movies</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Movie</h1>

        <p className={styles.description}>
          {results?.map((movie) => (
            <div key={movie.id} className={styles.movie}>
              <img
                className={styles.movieImg}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
              <h4>{movie.original_title}</h4>
            </div>
          ))}
        </p>
      </main>

      <footer className={styles.footer}>chaerin</footer>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
