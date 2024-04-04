export default function shop() {
   return (
    <section className="product-area shop section">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-12">
                <div id="sidebar-expander"></div>
                <div className="shop-sidebar">
                    <div className="single-widget category" id="sidebar-category">
                        <h3 className="title">Categories</h3>
                    </div>
                    <div className="single-widget range">
                        <h3 className="title">Shop by Price</h3>
                        <div className="price-filter">
                            <div className="price-filter-inner">
                                <div id="slider-range" data-min="0" data-max="0.00" data-value="0.00"
                                    className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                                    <div className="ui-slider-range ui-widget-header ui-corner-all"></div><span
                                        className="ui-slider-handle ui-state-default ui-corner-all"></span><span
                                        className="ui-slider-handle ui-state-default ui-corner-all"></span>
                                </div>

                                <div className="price_slider_amount">
                                    <div className="label-input">
                                        <input type="text" id="amount" className="text-center" name="price"
                                            placeholder="Add Your Price" />
                                        <input type="hidden" id="start_price" value="0" className="filter" />
                                        <input type="hidden" id="end_price" value="0.00" className="filter" />
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn btn-block py-2 mt-2"
                                id="filter_by_price">Filter</button>
                        </div>
                    </div>
                    <div className="single-widget category">
                        <h3 className="title">Brands</h3>
                        <ul className="categor-list">
                        </ul>
                    </div>
                    <div className="single-widget category">
                        <h3 className="title">Tags</h3>
                        <ul className="categor-list">
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-9 col-12">
                <div className="row">
                    <div className="col-12">
                        <div className="shop-top">
                            <div className="shop-shorter">
                                <div className="single-shorter">
                                    <label>Show :</label>
                                    <select id="length" className="filter">
                                        <option value="09">09</option>
                                        <option value="15">15</option>
                                        <option value="25">25</option>
                                        <option value="30">30</option>
                                    </select>
                                </div>
                                <div className="single-shorter">
                                    <label>Sort By :</label>
                                    <select id="sort_by" className="filter">
                                        <option value="default">Default</option>
                                        <option value="oldest">Oldest</option>
                                        <option value="newest">Newest</option>
                                        <option value="low_to_high">Price: Low to High</option>
                                        <option value="high_to_low">Price: High to Low</option>
                                        <option value="a_to_z">Name: A-Z</option>
                                        <option value="z_to_a">Name: Z-A</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 ">
                        <div className="single-product">
                            <div className="product-img">
                                <a href="#">
                                    <img className="default-img"
                                        src="images/product-img-1.png"
                                        alt="" />
                                    <span className="new">new</span>
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                        <a href="#"
                                            title="Quick View" className="quick-shop">
                                            <i className="ri-eye-line"></i><span>Quick Shop</span>
                                        </a>

                                        <a title="Wishlist" className="btn-wishlist"
                                            href="#"><i className="ri-heart-line"></i><span>Add to Wishlist</span></a>
                                    </div>
                                    <div className="product-action-2">
                                        <a title="Add to cart" className="add_to_cart" data-type="simple_product"
                                            href="#">Add
                                            to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="product-content">
                                <h3><a
                                        href="#">Lorem Ipsum</a></h3>
                                <div className="product-price">
                                    <span>$ 0.00</span>
                                </div>
                                <div className="product-rating">
                                    <ul className="reviews">
                                        <li><i className="fa fa-star-o"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 ">
                        <div className="single-product">
                            <div className="product-img">
                                <a
                                    href="#">
                                    <img className="default-img"
                                        src="images/product-img-2.png"
                                        alt="" />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                        <a href="#"
                                            title="Quick View" className="quick-shop">
                                            <i className="ri-eye-line"></i><span>Quick Shop</span>
                                        </a>
                                        <a title="Wishlist" className="btn-wishlist"
                                            href="#"><i className="ri-heart-line"></i><span>Add to Wishlist</span></a>
                                    </div>
                                    <div className="product-action-2">
                                        <a title="Add to cart" className="add_to_cart" data-type="simple_product"
                                            href="#">Add
                                            to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="product-content">
                                <h3><a
                                        href="#">Lorem Ipsum</a></h3>
                                <div className="product-price">
                                    <span>$ 0.00</span>
                                </div>
                                <div className="product-rating">
                                    <ul className="reviews">
                                        <li><i className="fa fa-star-o"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 ">
                        <div className="single-product">
                            <div className="product-img">
                                <a href="#">
                                    <img className="default-img"
                                        src="images/product-img-3.png"
                                        alt="" />
                                </a>
                                <div className="button-head">
                                    <div className="product-action">
                                        <a href="#"
                                            title="Quick View" className="quick-shop">
                                            <i className="ri-eye-line"></i><span>Quick Shop</span>
                                        </a>

                                        <a title="Wishlist" className="btn-wishlist"
                                            href="#"><i className="ri-heart-line"></i><span>Add to Wishlist</span></a>
                                    </div>
                                    <div className="product-action-2">
                                        <a title="Add to cart" className="add_to_cart" data-type="simple_product" href="">Addto cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="product-content">
                                <h3><a
                                        href="#">Lorem Ipsum</a></h3>
                                <div className="product-price">
                                    <span>$ 0.00</span>
                                </div>
                                <div className="product-rating">
                                    <ul className="reviews">
                                        <li><i className="fa fa-star-o"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                        <li><i className="fa fa-star-o"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

   )
}