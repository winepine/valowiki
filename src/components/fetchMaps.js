import React, { Component } from 'react';
import Mapdata from './mapdata';

class FetchMaps extends Component {
    
    constructor(props){
        super(props);
        this.state={
            maps:[],
            loading:true,
            number:0,
            back:false,
            classFor:"black",
            mapName:"mapName",
            component:true
        }
    }
    
    async componentDidMount(){
        document.title="Maps"
        const result =  await fetch("https://valorant-api.com/v1/maps");
        const newResult =  await result.json();
        this.setState({
            maps:newResult.data,
            loading:false
        })
    }
    endCheck=()=>{
        if(this.state.number===0){
            this.setState({
                back:false
            })
        }
        if(this.state.number===6){
            this.setState({
                back:true
            })
        }
    }
    NextMap = ()=>{
        if(!this.state.back){
            this.setState({
                number:this.state.number+1
            },this.endCheck)
        }else{
            this.setState({
                number:this.state.number-1
            },this.endCheck)
        }
        this.setState({
            classFor:"pitch",
            mapName:"mapNameTmp"
        },()=>{
            setTimeout(() => {  this.setState({
                classFor:"black",
                mapName:"mapName"
            }); }, 140);
        })
    }
    changeComponent = ()=>{
        this.setState({
            component:false
        })
    }
    goback = ()=>{
        this.setState({
            component:true
        })
    }
    render() {
        if(this.state.component)
        return (
            <div>
                {this.state.loading?<h1 className="pitch">LOADING..</h1>:
                    <div>
                        <img className="map" src={this.state.maps[this.state.number].splash} alt="" />
                        <h1 className={this.state.classFor}> </h1>
                        <h1 onClick={this.changeComponent} className={this.state.mapName}>{this.state.maps[this.state.number].displayName.toUpperCase()}</h1>
                        <button onClick={this.NextMap} className="nextButton">{this.state.back?"BACK":"NEXT"}</button>
                    </div>
                }
            </div>
        )
        else{
            return(
            <Mapdata goback={this.goback} map={this.state.maps[this.state.number]} />
            )
        }
    }
}

export default FetchMaps;