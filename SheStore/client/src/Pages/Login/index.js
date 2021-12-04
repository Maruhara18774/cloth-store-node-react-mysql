import React, { Component } from 'react'
import Api from '../../Api/myApi'
import { ExportCSV } from '../../Components/ExportButton'

export class LoginForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: "",
             password: "",
             isLogin: false,
             data: [
                {
                     ID: 1,
                     Total: 300000
                 },
                 {
                    ID:2,
                    Total: 300000
                },
                {
                    Outcome: 600000,
                    Profit: 600000
                }
            ]
        }

    }
    async handleSubmit(){
        var data = {
            username: this.state.username,
            password: this.state.password
        }
        var result = await Api.login(data)
        if(result != undefined){
            alert("Login Success")
            this.setState({isLogin: true})
            this.props.callback(result.id)
        }
        else{
            alert("Login Failed")
        }
    }
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-md-6">
                        <label>E-mail / Username</label>
                        <input class="form-control" type="text" placeholder="E-mail / Username" 
                        onChange={(e)=>this.setState({username:e.target.value})}/>
                    </div>
                    <div class="col-md-6">
                        <label>Password</label>
                        <input class="form-control" type="text" placeholder="Password" 
                        onChange={(e)=>this.setState({password:e.target.value})}
                        type="password"/>
                    </div>
                    <div class="col-md-12">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="newaccount" />
                            <label class="custom-control-label" for="newaccount">Keep me signed in</label>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <button class="btn" onClick={()=>this.handleSubmit()}>Submit</button>
                    </div>
                </div>
                {this.state.isLogin?<ExportCSV csvData={this.state.data} fileName={this.state.username+"_"+(new Date()).toString()} />:<p></p>}
            </div>
        )
    }
}

export default LoginForm
