import React, { Component } from 'react'
import Api from '../../Api/myApi'

export class VoucherBox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             voucher: "",
             product: this.props.product,
             user: this.props.user,
             price: this.props.price,
             vouchers: [
                {
                    code: "ABkjfsh2s4aas",
                    discount: 10
                },
                {
                    code: "ABkjfsh2s4dss",
                    discount: 15
                }
            ]
        }

    }
    async handleSubmit(){
        var state =false;
        var discount = 0;
        this.state.vouchers.forEach(voucher => {
            if(this.state.voucher == voucher.code){
                discount = voucher.discount;
                alert("Voucher is accepted");
                state = true
            }
        });
        if(state){
            var result = await Api.buyNow({
                productID: this.state.product,
                userID: this.state.user,
                soldPrice: this.state.price - discount
            });
            alert("Thank you")
        }
    }
    render() {
        return (
            <div class="row">
                    <div class="col-md-12">
                        <label>Voucher</label>
                        <input class="form-control" type="text" placeholder="Voucher" 
                        onChange={(e)=>this.setState({voucher:e.target.value})}/>
                    </div>
                    <div class="col-md-12">
                        <button class="btn" onClick={()=>this.handleSubmit()}>Submit</button>
                    </div>
                </div>
        )
    }
}

export default VoucherBox
