import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <>
        <section className="first-banner-sec">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="first-banner-txt">
                            <h6>WELCOME TO OUR WEBSITE</h6>
                            <h2>Lilac Home Goods</h2>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                unknown
                                printer took...</p>
                            <Link href="#" className="themebtn">Order Now</Link>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="row first-banner-slider">
                            <div className="col-lg-12">
                                <div className="first-banner-slide">
                                    <img src="images/first-banner-slider.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="categories-sec">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="category-txt">
                            <h4>Categories</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has
                                been
                                the industry.</p>
                        </div>
                    </div>
                </div>
                <div className="row category-slider">
                    <div className="col-lg-2">
                        <div className="category-img">
                            <img src="images/cate-1.png" alt=""/>
                            <h5>Birds</h5>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="category-img">
                            <img src="images/cate-2.png" alt=""/>
                            <h5>Cats</h5>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="category-img">
                            <img src="images/cate-3.png" alt=""/>
                            <h5>Dogs</h5>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="category-img">
                            <img src="images/cate-4.png" alt=""/>
                            <h5>Rabbits</h5>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="category-img">
                            <img src="images/cate-5.png" alt=""/>
                            <h5>Guinea pigs</h5>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="category-img">
                            <img src="images/cate-6.png" alt=""/>
                            <h5>Hamsters</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <section className="about-us-banner">
            <div className="about-abslt">
                <img src="images/about-abslt.png" alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-banner-img">
                            <img src="images/about-banner.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-us-txt">
                            <h6>About Us</h6>
                            <h4>Lilac Home Goods</h4>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not
                                only five centuries, but also the leap into electronic typesetting, remaining
                                essentially
                                unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                containing Lorem
                                Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                                including versions of Lorem Ipsum.It is a long established fact that a reader will be
                                distracted
                                by the readable content of a page when looking at its layout. The point of using Lorem
                                Ipsum is
                                that it has a more-or-less normal distribution of letters, as opposed to using 'Content
                                here,
                                content here', making it look like readable English. Many desktop publishing packages
                                and web
                                page editors now use Lorem Ipsum...</p>
                            <a href="#" className="themelight">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <section className="our-product-sec">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="our-product-txt">
                            <h2>Our product</h2>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                unknown
                                printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
                <div className="row product-slider">
                    <div className="col-lg-4">
                        <div className="product-cart">
                            <div className="product-imgs">
                                <img src="images/product-img-1.png" alt="" />
                                <div className="sale-btn">
                                    <a href="#">Best Seller</a>
                                    <a href="#">Sale</a>
                                </div>
                            </div>
                            <div className="product-txt">
                                <div className="review-starstxt">
                                    <div className="review-star">
                                        <ul>
                                            <li><i className='bx bxs-star'></i></li>
                                            <li><i className='bx bxs-star'></i></li>
                                            <li><i className='bx bxs-star'></i></li>
                                            <li><i className='bx bxs-star'></i></li>
                                            <li><i className='bx bxs-star'></i></li>
                                        </ul>
                                        <p className="stars-nmbr">4/5</p>
                                    </div>
                                    <h6 className="pro-category">Loremipsum</h6>
                                </div>
                                <h3>Place Your Heading Title Here</h3>
                                <p>This product may contain chemicals known to the State of California to cause
                                    cancer...</p>
                                <div className="shop-now-btn">
                                    <a href="#" className="themebtn">Shop Now <i className='bx bx-right-arrow-alt'></i></a>
                                    <h4>$30 <span>$38</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="product-cart">
                            <div className="product-imgs">
                                <img src="images/product-img-2.png" alt=""/>
                                <div className="sale-btn">
                                    <a href="#">Top Rated</a>
                                </div>
                            </div>
                            <div className="product-txt">
                                <div className="review-starstxt">
                                    <div className="review-star">
                                        <ul>
                                            <li><i className='bx bxs-star'></i></li>
                                            <li><i className='bx bxs-star'></i></li>
                                            <li><i className='bx bxs-star'></i></li>
                                            <li><i className='bx bxs-star'></i></li>
                                            <li><i className='bx bxs-star'></i></li>
                                        </ul>
                                        <p className="stars-nmbr">4/5</p>
                                    </div>
                                    <h6 className="pro-category">Loremipsum</h6>
                                </div>
                                <h3>Place Your Heading Title Here</h3>
                                <p>This product may contain chemicals known to the State of California to cause
                                    cancer...</p>
                                <div className="shop-now-btn">
                                    <a href="#" className="themebtn">Shop Now <i className='bx bx-right-arrow-alt'></i></a>
                                    <h4>$30 <span>$38</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="product-cart">
                            <div className="product-imgs">
                                <img src="images/product-img-3.png" alt="" />
                                <div className="sale-btn">
                                    <a href="#">Best Seller</a>
                                </div>
                            </div>
                            <div className="product-txt">
                                <div className="review-starstxt">
                                    <div className="review-star">
                                        <ul>
                                            <li><i className='bx bxs-star'></i></li>
                                            <li><i className='bx bxs-star'></i></li>
                                            <li><i className='bx bxs-star'></i></li>
                                            <li><i className='bx bxs-star'></i></li>
                                            <li><i className='bx bxs-star'></i></li>
                                        </ul>
                                        <p className="stars-nmbr">4/5</p>
                                    </div>
                                    <h6 className="pro-category">Loremipsum</h6>
                                </div>
                                <h3>Place Your Heading Title Here</h3>
                                <p>This product may contain chemicals known to the State of California to cause
                                    cancer...</p>
                                <div className="shop-now-btn">
                                    <a href="#" className="themebtn">Shop Now <i className='bx bx-right-arrow-alt'></i></a>
                                    <h4>$30 <span>$38</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="upcoming-event-sec">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="upcoming-event">
                            <h4>Upcoming Events</h4>
                            <p>lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has
                                been.</p>
                            <a href="#" className="themebtn">Get Started</a>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="row upcoming-slider">
                            <div className="col-lg-4">
                                <div className="upcoming-img">
                                    <img src="images/upcoming-img-1.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="upcoming-img">
                                    <img src="images/upcoming-img-2.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="upcoming-img">
                                    <img src="images/upcoming-img-3.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>




        <section className="our-product-sec">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="our-product-txt">
                            <h2>Featured Products</h2>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
                <div className="row product-slider">
                    <div className="col-lg-4">
                        <div className="product-cart">
                            <div className="product-imgs">
                                <img src="images/feature-pro-1.png" alt="" />
                            </div>
                            <div className="product-txt">
                                <div className="review-starstxt">
                                    <div className="review-star">
                                        <ul>
                                            <li><i className='bx bxs-star'></i></li>
                                            <li><i className='bx bxs-star'></i></li>
                                            <li><i className='bx bxs-star'></i></li>
                                            <li><i className='bx bxs-star'></i></li>
                                            <li><i className='bx bxs-star'></i></li>
                                        </ul>
                                        <p className="stars-nmbr">4/5</p>
                                    </div>
                                    <h6 className="pro-category">Loremipsum</h6>
                                </div>
                                <h3>Place Your Heading Title Here</h3>
                                <p>This product may contain chemicals known to the State of California to cause
                                    cancer...</p>
                                <div className="shop-now-btn">
                                    <a href="#" className="themebtn">Shop Now <i className='bx bx-right-arrow-alt'></i></a>
                                    <h4>$30 <span>$38</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="product-cart">
                            <div className="product-imgs">
                                <img src="images/feature-pro-2.png" alt="" />
                            </div>
                            <div className="product-txt">
                                <div className="review-starstxt">
                                    <div className="review-star">
                                        <ul>
                                            <li><i className='bx bxs-star'></i></li>
                                            <li><i className='bx bxs-star'></i></li>
                                            <li><i className='bx bxs-star'></i></li>
                                            <li><i className='bx bxs-star'></i></li>
                                            <li><i className='bx bxs-star'></i></li>
                                        </ul>
                                        <p className="stars-nmbr">4/5</p>
                                    </div>
                                    <h6 className="pro-category">Loremipsum</h6>
                                </div>
                                <h3>Place Your Heading Title Here</h3>
                                <p>This product may contain chemicals known to the State of California to cause
                                    cancer...</p>
                                <div className="shop-now-btn">
                                    <a href="#" className="themebtn">Shop Now <i className='bx bx-right-arrow-alt'></i></a>
                                    <h4>$30 <span>$38</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="product-cart">
                            <div className="product-imgs">
                                <img src="images/feature-pro-3.png" alt="" />
                                <div className="sale-btn">
                                    <a href="#">Best Seller</a>
                                </div>
                            </div>
                            <div className="product-txt">
                                <div className="review-starstxt">
                                    <div className="review-star">
                                        <ul>
                                            <li><i className='bx bxs-star'></i></li>
                                            <li><i className='bx bxs-star'></i></li>
                                            <li><i className='bx bxs-star'></i></li>
                                            <li><i className='bx bxs-star'></i></li>
                                            <li><i className='bx bxs-star'></i></li>
                                        </ul>
                                        <p className="stars-nmbr">4/5</p>
                                    </div>
                                    <h6 className="pro-category">Loremipsum</h6>
                                </div>
                                <h3>Place Your Heading Title Here</h3>
                                <p>This product may contain chemicals known to the State of California to cause
                                    cancer...</p>
                                <div className="shop-now-btn">
                                    <a href="#" className="themebtn">Shop Now <i className='bx bx-right-arrow-alt'></i></a>
                                    <h4>$30 <span>$38</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <section className="our-client-say">
            <div className="client-ablst">
                <img src="images/client-img-abslt.png" alt="" />
            </div>
            <h2>What Our Client Say’s</h2>
            <div className="container">
                <div className="row client-slider">
                    <div className="col-lg-4">
                        <div className="testimonial">
                            <img src="images/testi-img-1.png" alt="" />
                            <div className="review-star">
                                <ul>
                                    <li><i className='bx bxs-star'></i></li>
                                    <li><i className='bx bxs-star'></i></li>
                                    <li><i className='bx bxs-star'></i></li>
                                    <li><i className='bx bxs-star'></i></li>
                                    <li><i className='bx bxs-star'></i></li>
                                </ul>
                            </div>
                            <p>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown” </p>
                            <h6>- KENT</h6>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="testimonial">
                            <img src="images/testi-img-2.png" alt="" />
                            <div className="review-star">
                                <ul>
                                    <li><i className='bx bxs-star'></i></li>
                                    <li><i className='bx bxs-star'></i></li>
                                    <li><i className='bx bxs-star'></i></li>
                                    <li><i className='bx bxs-star'></i></li>
                                    <li><i className='bx bxs-star'></i></li>
                                </ul>
                            </div>
                            <p>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown” </p>
                            <h6>- KENT</h6>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="testimonial">
                            <img src="images/testi-img-3.png" alt="" />
                            <div className="review-star">
                                <ul>
                                    <li><i className='bx bxs-star'></i></li>
                                    <li><i className='bx bxs-star'></i></li>
                                    <li><i className='bx bxs-star'></i></li>
                                    <li><i className='bx bxs-star'></i></li>
                                    <li><i className='bx bxs-star'></i></li>
                                </ul>
                            </div>
                            <p>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown” </p>
                            <h6>- KENT</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </>
  );
}
