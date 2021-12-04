import React, { Component } from 'react'
import Api from '../../Api/myApi'
import VoucherBox from '../../Components/VoucherBox'

export class StorePage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             categories: [],
             productPackage:{},
             products: [],
             isShowVoucherBox: false,
             currentProductID: "",
             currentProductPrice: 0
        }
    }
    async componentDidMount(){
        this.state.categories = await Api.getCategories()
        this.state.productPackage = await Api.getProducts();
        this.state.products = (await Api.getProducts()).products

        this.setState(this)
        console.log(this.state.products)
    }
    async buyNow(productID, currentPrice){
        this.setState({isShowVoucherBox: true, currentProductID: productID, currentProductPrice: currentPrice})
    }
    render() {
        return (
            <div>
                {/* Breadcrumb Start */}
                <div class="breadcrumb-wrap">
                    <div class="container-fluid">
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Products</a></li>
                            <li class="breadcrumb-item active">Product List</li>
                        </ul>
                    </div>
                </div>
                {/* Breadcrumb End */}
                {this.state.isShowVoucherBox?<VoucherBox product={this.state.currentProductID} user={this.props.userID} price={this.state.currentProductPrice}/>:<p></p>}
                {/* Product List Start */}
                <div class="product-view">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="product-view-top">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="product-search">
                                                        <input type="email" value="Search" />
                                                        <button><i class="fa fa-search"></i></button>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="product-short">
                                                        <div class="dropdown">
                                                            <div class="dropdown-toggle" data-toggle="dropdown">Product short by</div>
                                                            <div class="dropdown-menu dropdown-menu-right">
                                                                <a href="#" class="dropdown-item">Newest</a>
                                                                <a href="#" class="dropdown-item">Popular</a>
                                                                <a href="#" class="dropdown-item">Most sale</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="product-price-range">
                                                        <div class="dropdown">
                                                            <div class="dropdown-toggle" data-toggle="dropdown">Product price range</div>
                                                            <div class="dropdown-menu dropdown-menu-right">
                                                                <a href="#" class="dropdown-item">$0 to $50</a>
                                                                <a href="#" class="dropdown-item">$51 to $100</a>
                                                                <a href="#" class="dropdown-item">$101 to $150</a>
                                                                <a href="#" class="dropdown-item">$151 to $200</a>
                                                                <a href="#" class="dropdown-item">$201 to $250</a>
                                                                <a href="#" class="dropdown-item">$251 to $300</a>
                                                                <a href="#" class="dropdown-item">$301 to $350</a>
                                                                <a href="#" class="dropdown-item">$351 to $400</a>
                                                                <a href="#" class="dropdown-item">$401 to $450</a>
                                                                <a href="#" class="dropdown-item">$451 to $500</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {this.state.products.map((val,key)=>
                                    <div class="col-md-4">
                                    <div class="product-item">
                                        <div class="product-title">
                                            <a href="#">{val.name}</a>
                                            <div class="ratting">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <div class="product-image">
                                            <a href="product-detail.html">
                                                <img src={val.images.url} alt="Product Image" />
                                            </a>
                                            <div class="product-action">
                                                <a href="#"><i class="fa fa-cart-plus"></i></a>
                                                <a href="#"><i class="fa fa-heart"></i></a>
                                                <a href="#"><i class="fa fa-search"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-price">
                                            <h3><span>$</span>{val.price}</h3>
                                            <a class="btn" onClick={()=>this.buyNow(val._id,val.price)}><i class="fa fa-shopping-cart"></i>Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                                    
                                    )}
                                    </div>
                                {/* Pagination Start */}
                                <div class="col-md-12">
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination justify-content-center">
                                            <li class="page-item disabled">
                                                <a class="page-link" href="#" tabindex="-1">Previous</a>
                                            </li>
                                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item">
                                                <a class="page-link" href="#">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                {/* Pagination End */}
                            </div>

                            {/* Side Bar Start */}
                            <div class="col-lg-4 sidebar">
                                <div class="sidebar-widget category">
                                    <h2 class="title">Category</h2>
                                    <nav class="navbar bg-light">
                                        <ul class="navbar-nav">
                                            {this.state.categories.map((val, key) =>
                                            <li class="nav-item">
                                            <a class="nav-link" href="#">{val.name}</a>
                                        </li>
                                            )
                                            }
                                        </ul>
                                    </nav>
                                </div>

                                
                                <div class="sidebar-widget brands">
                                    <h2 class="title">Our Brands</h2>
                                    <ul>
                                        <li><a href="#">Nulla </a><span>(45)</span></li>
                                        <li><a href="#">Curabitur </a><span>(34)</span></li>
                                        <li><a href="#">Nunc </a><span>(67)</span></li>
                                        <li><a href="#">Ullamcorper</a><span>(74)</span></li>
                                        <li><a href="#">Fusce </a><span>(89)</span></li>
                                        <li><a href="#">Sagittis</a><span>(28)</span></li>
                                    </ul>
                                </div>

                                <div class="sidebar-widget tag">
                                    <h2 class="title">Tags Cloud</h2>
                                    <a href="#">Lorem ipsum</a>
                                    <a href="#">Vivamus</a>
                                </div>
                            </div>
                            {/* Side Bar End */}
                        </div>
                    </div>
                </div>
                {/* Product List End */}
            </div>
        )
    }
}

export default StorePage
