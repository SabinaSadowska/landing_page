import Head from "next/head";
import Albums from "./components/Albums/Albums";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Landing Page</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <div>
        <Header />
        <Albums />
      </div>
    </div>
  );
}
