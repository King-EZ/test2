import Document, { Html, Head, Main, NextScript } from 'next/document';


class Curtis123 extends Document {
  render() {
    return (
      <Html className='smooth-scroll' lang="en">
        <Head>
          {/* Add meta tags, stylesheets, and other head elements here */}
          <meta charSet="UTF-8" />
           {/* Set the site title */}
        <title>Curtis.123websupport</title>
        
        {/* Add a meta tag for the description */}
        <meta name="description" content="webdeveloper 2024" />
        
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          />
          {/* Add your own stylesheets or fonts here */}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Add custom scripts or analytics tracking scripts here */}
        </body>
      </Html>
    );
  }
}

export default Curtis123;