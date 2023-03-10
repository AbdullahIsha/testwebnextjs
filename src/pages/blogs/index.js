import BlogSideBar from "@/components/BlogSideBar";
import CallToAction from "@/components/CallToAction";
import MainFooter from "@/components/MainFooter";
import MainNav from "@/components/MainNav";
import QuickInquiry from "@/components/QuickInquiry";
import Head from "next/head";
// import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
  return (
    <>
      <Head>
        <title>Blogs - Apex Advisor Group Inc</title>
        <meta
          name="description"
          content="Read the blog posts by Apex Advisor Group Inc - Tampa Accounting Firm. Our Tax Accountants offer Tax Preparation Services to clients across Tampa, Brandon &amp; Riverview."
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
                  src="/image/blog-image.jpg"
                  alt="blog"
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
                  <h1>Blogs</h1>
                  <h4>By Apex Advisor Group Inc</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="blog-container">
            <img
              src="/image/blog.jpg"
              alt="blog"
              height={682}
              width={1024}
              className="blog-detail-img"
            />
            <div className="row">
              <div className="col-9">
                <div className="blog-detail">
                  <h2>Announcing The New Website</h2>
                  <p class="blog-author">
                    Author: Apex Advisor Group Inc | Jun 17, 2020 | Categories:
                    <Link href="/blogs/tampa-accounting-firm-blog/tagged/accounting-firm">
                      Accounting Firm
                    </Link>
                    ,
                    <Link href="/blogs/tampa-accounting-firm-blog/tagged/accounting-services">
                      Accounting Services
                    </Link>
                    ,
                    <Link href="/blogs/tampa-accounting-firm-blog/tagged/bookkeeping">
                      Bookkeeping
                    </Link>
                    ,
                    <Link href="/blogs/tampa-accounting-firm-blog/tagged/corporate-tax-preparation">
                      Corporate Tax Preparation
                    </Link>
                    ,
                    <Link href="/blogs/tampa-accounting-firm-blog/tagged/credit-counseling">
                      Credit Counseling
                    </Link>
                    ,
                    <Link href="/blogs/tampa-accounting-firm-blog/tagged/credit-repair">
                      Credit Repair
                    </Link>
                    ,
                    <Link href="/blogs/tampa-accounting-firm-blog/tagged/health-insurance">
                      Health Insurance
                    </Link>
                    ,
                    <Link href="/blogs/tampa-accounting-firm-blog/tagged/life-insurance">
                      Life Insurance
                    </Link>
                    ,
                    <Link href="/blogs/tampa-accounting-firm-blog/tagged/notary">
                      Notary
                    </Link>
                    ,
                    <Link href="/blogs/tampa-accounting-firm-blog/tagged/payroll">
                      Payroll
                    </Link>
                    ,
                    <Link href="/blogs/tampa-accounting-firm-blog/tagged/tax-accountant">
                      Tax Accountant
                    </Link>
                    ,
                    <Link href="/blogs/tampa-accounting-firm-blog/tagged/tax-planning">
                      Tax Planning
                    </Link>
                    ,
                    <Link href="/blogs/tampa-accounting-firm-blog/tagged/tax-preparation">
                      Tax Preparation
                    </Link>
                    ,
                    <Link href="/blogs/tampa-accounting-firm-blog/tagged/tax-preparer">
                      Tax Preparer
                    </Link>
                    ,
                    <Link href="/blogs/tampa-accounting-firm-blog/tagged/tax-resolution">
                      Tax Resolution
                    </Link>
                  </p>
                  <h2>New Website Under Construction</h2>
                  <p class="blog-author">
                    Author: Apex Advisor Group Inc | Jun 17, 2020 | Categories:
                    <Link href="/blogs/tampa-accounting-firm-blog/tagged/accounting-firm">
                      Accounting Firm
                    </Link>
                    ,
                    <Link href="/blogs/tampa-accounting-firm-blog/tagged/accounting-services">
                      Accounting Services
                    </Link>
                    ,
                    <Link href="/blogs/tampa-accounting-firm-blog/tagged/bookkeeping">
                      Bookkeeping
                    </Link>
                    ,
                    <Link href="/blogs/tampa-accounting-firm-blog/tagged/corporate-tax-preparation">
                      Corporate Tax Preparation
                    </Link>
                    ,
                    <Link href="/blogs/tampa-accounting-firm-blog/tagged/credit-counseling">
                      Credit Counseling
                    </Link>
                    ,
                    <Link href="/blogs/tampa-accounting-firm-blog/tagged/credit-repair">
                      Credit Repair
                    </Link>
                    ,
                    <Link href="/blogs/tampa-accounting-firm-blog/tagged/health-insurance">
                      Health Insurance
                    </Link>
                    ,
                    <Link href="/blogs/tampa-accounting-firm-blog/tagged/life-insurance">
                      Life Insurance
                    </Link>
                    ,
                    <Link href="/blogs/tampa-accounting-firm-blog/tagged/notary">
                      Notary
                    </Link>
                    ,
                    <Link href="/blogs/tampa-accounting-firm-blog/tagged/payroll">
                      Payroll
                    </Link>
                    ,
                    <Link href="/blogs/tampa-accounting-firm-blog/tagged/tax-accountant">
                      Tax Accountant
                    </Link>
                    ,
                    <Link href="/blogs/tampa-accounting-firm-blog/tagged/tax-planning">
                      Tax Planning
                    </Link>
                    ,
                    <Link href="/blogs/tampa-accounting-firm-blog/tagged/tax-preparation">
                      Tax Preparation
                    </Link>
                    ,
                    <Link href="/blogs/tampa-accounting-firm-blog/tagged/tax-preparer">
                      Tax Preparer
                    </Link>
                    ,
                    <Link href="/blogs/tampa-accounting-firm-blog/tagged/tax-resolution">
                      Tax Resolution
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-3">
                <br />
                <BlogSideBar />
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

export default Blogs;
