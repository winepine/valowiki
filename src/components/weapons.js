import React from 'react'
import Skin from './skin';
import './styles.css'
export default class weapons extends React.Component{
    
state={
    gunData:[],
    loading:true,
    gunValue:-1,
    searchValue:""    
}

    searchChange = event=>{
        this.setState({
            searchValue:event.target.value
        })
    }

    async componentDidMount(){
        if(this.props.req==="skins")
            document.title="Skins"
        else
            document.title="Weapons"
        let result;
        if(this.props.req==="skins")
            result=await fetch("https://valorant-api.com/v1/weapons/skins");
        else
            result=await fetch("https://valorant-api.com/v1/weapons");
            const newResult= await result.json();
        this.setState({
            gunData:newResult.data
        })
        this.state.gunData?this.setState({loading:false}):this.setState({loading:false});
    }

    btn_click = (event)=>{
        this.setState({
            gunValue:event
        })
    }

    render(){
        if(this.state.gunValue===-1){
            return(
                this.state.loading?
                <div>
                    <h1 className="pitch">LOADING..</h1>
                </div>:<div>
                    {this.props.req==="skins"?<h1>VALORANT Skins</h1>:<h1>VALORANT Weapons</h1>}
                    <input onChange={this.searchChange} value={this.state.searchValue} placeholder="SEARCH" style={{fontSize:"20px",margin:"20px"}} type="text" />
                    <div>
                    {this.state.gunData.map((gun,i)=>{
                        if(!gun.displayName.includes("Standard")){
                            if(gun.displayName.toLowerCase().includes(this.state.searchValue.toLowerCase())){
                                return(
                                    <div style={{margin:"2%"}}>
                                            <img style={{height:"50px"}} src={gun.displayIcon} alt="" />
                                        <button className="gun-btn" style={{height:"40px",width:"100px",fontFamily:"Poppins",border:"none"}} onClick={()=>{this.btn_click(i)}}>{gun.displayName}</button>
                                    </div>
                                )
                            }else return null;
                        }else return null;
                    })}
                    </div>
                </div>
            )
        }else{
            return(
                <div>
                    <button onClick={()=>{this.setState({
                        gunValue:-1
                    })}}>BACK</button>
                    <Skin type={this.props.req} skinData={this.state.gunData[this.state.gunValue]}/>
                </div>
            )
        }
    }
}