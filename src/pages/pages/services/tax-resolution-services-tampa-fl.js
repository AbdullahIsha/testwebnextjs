import CallToAction from "@/components/CallToAction";
import MainFooter from "@/components/MainFooter";
import MainNav from "@/components/MainNav";
import QuickInquiry from "@/components/QuickInquiry";
import ServiceSideBar from "@/components/ServiceSideBar";
import Head from "next/head";
// import Image from "next/image";

const TaxResolutionServicesTampaFl = () => {
  return (
    <>
      <Head>
        <title>Tax Resolution Services - Apex Advisor Group Inc</title>
        <meta
          name="description"
          content="Apex Advisor Group Inc's tax resolution service helps individuals and businesses navigate tax disputes, audits, and back taxes. Our experienced team works with tax agencies to create payment plans that fit your budget. Contact us for a consultation and achieve financial freedom."
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
                  src="/image/tax-resolution-services.jpg"
                  alt="tax-resolution-services"
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
                  <h4>Tax Resolution Services</h4>
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
                  src="/image/tax-resolution-services-2.jpg"
                  alt="tax-resolution-services"
                  height={500}
                  width={1024}
                />
                <h2>Tax Resolution Services</h2>
                <p>
                  We can help reduce or eliminate your IRS debts legally and
                  ethically. So many resolutions are available to taxpayers that
                  owe back taxes to the IRS. Let Apex Advisor help you get
                  through this stressful situation.
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

export default TaxResolutionServicesTampaFl;
