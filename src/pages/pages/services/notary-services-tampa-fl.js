import CallToAction from "@/components/CallToAction";
import MainFooter from "@/components/MainFooter";
import MainNav from "@/components/MainNav";
import QuickInquiry from "@/components/QuickInquiry";
import ServiceSideBar from "@/components/ServiceSideBar";
import Head from "next/head";
// import Image from "next/image";

const NotaryServicesTampaFl = () => {
  return (
    <>
      <Head>
        <title>Notary Services - Apex Advisor Group Inc</title>
        <meta
          name="description"
          content="Apex Advisor Group Inc offers Notary Services to clients across Tampa, Brandon, Riverview, Sun City, Ruskin, Plant City, Wesley Chapel, Lithia and the surrounding areas."
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
                  src="/image/notary-services.jpg"
                  alt="notary-services"
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
                  <h4>Notary Services</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-3"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              <ServiceSideBar />
            </div>
            <div
              className="col-9"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              <div className="service-detail">
                <img
                  src="/image/notary-services-2.jpg"
                  alt="notary-services"
                  height={500}
                  width={1024}
                />
                <h2>Notary Services</h2>
                <p>Licensed and bonded.</p>
                <p>
                  Our commitment to all our clients is to provide impeccable
                  service, keep them informed of current and upcoming events,
                  help them achieve their financial objectives and assist in
                  preparing for their financial future for themselves and their
                  family.
                </p>
              </div>
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

export default NotaryServicesTampaFl;
