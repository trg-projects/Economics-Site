import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        
        {/* <!-- Favicons --> */}
        <link href="/assets/img/favicon.png" rel="icon" />
        <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        <link rel="icon" href="/favicon.ico" />

        {/* <!-- Google Fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />

        

      </Head>
      <body>
        <Main />
        <a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        <NextScript />
        {/* <!-- Vendor JS Files --> */}
        < script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" async></script >
        <script src="/assets/vendor/aos/aos.js" async></script>
        <script src="/assets/vendor/glightbox/js/glightbox.min.js" async></script>
        <script src="/assets/vendor/purecounter/purecounter_vanilla.js" async></script>
        <script src="/assets/vendor/swiper/swiper-bundle.min.js" async></script>
        <script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js" async></script>

        {/* <!-- Template Main JS File --> */}
        <script src="/assets/js/main.js" async></script>
      </body>
    </Html>
  )
}
