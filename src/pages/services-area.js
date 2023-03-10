import CallToAction from "@/components/CallToAction";
import MainFooter from "@/components/MainFooter";
import MainNav from "@/components/MainNav";
import QuickInquiry from "@/components/QuickInquiry";
import Head from "next/head";
// import Image from "next/image";
import { RiMapPin2Line } from "react-icons/ri";

const ServicesArea = () => {
  return (
    <>
      <Head>
        <title>Service Area - Apex Advisor</title>
        <meta
          name="description"
          content="Apex Advisor Group Inc provides financial and tax services to clients in many areas. Our experienced team tailors high-quality services to meet your unique needs. Contact us to achieve your financial goals."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainNav />
        <div
          className="head-top-container"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6">
              <div className="head-img">
                <img
                  src="/image/services-area.jpg"
                  alt="accountant-services"
                  height={657}
                  width={1000}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row top-head-position">
              <div className="col-6">
                <div className="top-head-position-inside">
                  <h1>About Apex Advisor Group Inc</h1>
                  <h4>Service Area</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="service-area-content">
            <p>
              We here at Apex Advisor Group are a team of highly qualified
              professionals that have over 40+ years of combined experience in
              the tax, accounting, insurance and financial services industry.
            </p>
            <div className="service-area-card-container">
              <h3>
                Tampa <RiMapPin2Line />
              </h3>
              <h3>
                Brandon <RiMapPin2Line />
              </h3>
              <h3>
                Riverview <RiMapPin2Line />
              </h3>
              <h3>
                Sun City <RiMapPin2Line />
              </h3>
              <h3>
                Ruskin <RiMapPin2Line />
              </h3>
              <h3>
                Plant City <RiMapPin2Line />
              </h3>
              <h3>
                Wesley Chapel <RiMapPin2Line />
              </h3>
              <h3>
                Lithia <RiMapPin2Line />
              </h3>
            </div>
          </div>
        </div>
        <CallToAction />
        <MainFooter />
        <QuickInquiry />
      </main>
      <script
        src="//code.tidio.co/vbdxwhbv8jwavxp55kspaiysemfvbur8.js"
        async
      ></script>
    </>
  );
};

export default ServicesArea;
