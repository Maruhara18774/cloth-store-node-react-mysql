import React, { Component } from 'react';

export class Homepage extends Component {
    render() {
        return (
            <div>
                {/* Main Slider Start */}
                <div class="header">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-3">
                                <nav class="navbar bg-light">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#"><i class="fa fa-home"></i>Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#"><i class="fa fa-shopping-bag"></i>Best Selling</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#"><i class="fa fa-plus-square"></i>New Arrivals</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#"><i class="fa fa-female"></i>Fashion & Beauty</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#"><i class="fa fa-child"></i>Kids & Babies Clothes</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#"><i class="fa fa-tshirt"></i>Men & Women Clothes</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#"><i class="fa fa-mobile-alt"></i>Gadgets & Accessories</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#"><i class="fa fa-microchip"></i>Electronics & Accessories</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="col-md-6">
                                <div class="header-slider normal-slider">
                                    <div class="header-slider-item">
                                        <img src="img/slider-1.jpg" alt="Slider Image" />
                                        <div class="header-slider-caption">
                                            <p>Some text goes here that describes the image</p>
                                            <a class="btn" href=""><i class="fa fa-shopping-cart"></i>Shop Now</a>
                                        </div>
                                    </div>
                                    <div class="header-slider-item">
                                        <img src="img/slider-2.jpg" alt="Slider Image" />
                                        <div class="header-slider-caption">
                                            <p>Some text goes here that describes the image</p>
                                            <a class="btn" href=""><i class="fa fa-shopping-cart"></i>Shop Now</a>
                                        </div>
                                    </div>
                                    <div class="header-slider-item">
                                        <img src="img/slider-3.jpg" alt="Slider Image" />
                                        <div class="header-slider-caption">
                                            <p>Some text goes here that describes the image</p>
                                            <a class="btn" href=""><i class="fa fa-shopping-cart"></i>Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="header-img">
                                    <div class="img-item">
                                        <img src="img/category-1.jpg" />
                                        <a class="img-text" href="">
                                            <p>Some text goes here that describes the image</p>
                                        </a>
                                    </div>
                                    <div class="img-item">
                                        <img src="img/category-2.jpg" />
                                        <a class="img-text" href="">
                                            <p>Some text goes here that describes the image</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Main Slider End */}

                {/* Brand Start */}
                <div class="brand">
                    <div class="container-fluid">
                        <div class="brand-slider">
                            <div class="brand-item"><img src="img/brand-1.png" alt="" /></div>
                            <div class="brand-item"><img src="img/brand-2.png" alt="" /></div>
                            <div class="brand-item"><img src="img/brand-3.png" alt="" /></div>
                            <div class="brand-item"><img src="img/brand-4.png" alt="" /></div>
                            <div class="brand-item"><img src="img/brand-5.png" alt="" /></div>
                            <div class="brand-item"><img src="img/brand-6.png" alt="" /></div>
                        </div>
                    </div>
                </div>
                {/* Brand End */}
            </div>
        )
    }
}

export default Homepage
