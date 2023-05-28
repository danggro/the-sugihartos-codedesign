import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Source+Sans+Pro:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="text-white bg-[#1E1F2B] overflow-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
