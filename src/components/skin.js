import React from 'react';

export default class Skin extends React.Component{
    componentDidMount(){
        if(this.props.type==="skins"){
            document.title = "Skin"
        }else{
            document.title = "Weapon"
        }
    }
    state={
        variant:0
    }
    render(){
        console.log(this.props.skinData);
        if(this.props.type==="skins"){
            return(
                <div>
                    <h1>{this.props.skinData.displayName}</h1>
                    <img src={this.props.skinData.chromas[this.state.variant].displayIcon} alt="" />
                    <h3>SELECT Variant</h3>
                    {this.props.skinData.chromas.map((gun,i)=>{
                        return(
                            <div id={gun.uuid}>
                                <button style={{background: `url('${this.props.skinData.chromas[i].swatch}') no-repeat top left`,width:"50px",height:"50px",backgroundSize: "100%"}} onClick={()=>{
                                    this.setState({
                                        variant:i
                                    })
                                }}></button>
                            </div>
                        )
                    })}
                        {this.props.skinData.levels[1]?

                        <video style={{height:"220px"}} controls>
                            <source src={this.props.skinData.levels[1].streamedVideo} type="video/mp4"></source>
                        </video>:null
                    }
                </div>
            )
        }
        else if(this.props.skinData.category==="EEquippableCategory::Melee"){
            return(
                <div>
                    <div>
                        <h1>{this.props.skinData.displayName}</h1>
                        <img src={this.props.skinData.displayIcon} alt="" />
                    </div>
                </div>
            )
        }
        else if(this.props.skinData.shopData.category==="SMGs" || this.props.skinData.shopData.category==="Rifles" || this.props.skinData.shopData.category==="Heavy Weapons" || this.props.skinData.shopData.category==="Sniper Rifles"){
                return(
                <div>
                    <div>
                        <h1>{this.props.skinData.displayName}</h1>
                        <img src={this.props.skinData.displayIcon} alt="" />
                    </div>
                    <div>
                        <h3>Weapon Stats</h3>
                        <p>Weapon Category: {this.props.skinData.shopData.category}</p>
                        <p>In-Game Price: {this.props.skinData.shopData.cost}</p>
                        <p>Equip Time: {this.props.skinData.weaponStats.equipTimeSeconds}s</p>
                        <p>First Bullet Accuracy: {this.props.skinData.weaponStats.firstBulletAccuracy}</p>
                        <p>Run Speed Multiplier: {this.props.skinData.weaponStats.runSpeedMultiplier}</p>
                        <p>Mag Capcity: {this.props.skinData.weaponStats.magazineSize}</p>
                        <p>Reload Time: {this.props.skinData.weaponStats.reloadTimeSeconds}s</p>
                        <p>Run Speed Multiplier: {this.props.skinData.weaponStats.runSpeedMultiplier}s</p>
                        <h3>Damages</h3>
                        {JSON.stringify(this.props.skinData.weaponStats.damageRanges)}
                        <h4>ADS Mode</h4>
                        <p>Burst Count: {this.props.skinData.weaponStats.adsStats.burstCount}</p>
                        <p>Fire Rate: {this.props.skinData.weaponStats.adsStats.fireRate}</p>
                        <p>First Bullet Accuracy: {this.props.skinData.weaponStats.adsStats.firstBulletAccuracy}</p>
                        <p>Run Speed Multiplier: {this.props.skinData.weaponStats.adsStats.runSpeedMultiplier}</p>
                        <p>Zoom Multiplier: {this.props.skinData.weaponStats.adsStats.zoomMultiplier}</p>
                        <p>Wall Penetration: {this.props.skinData.weaponStats.wallPenetration}</p>
                    </div>
                </div>
                )
        }else if(this.props.skinData.shopData.category==="Shotguns"){
            return(
                <div>
                    <div>
                        <h1>{this.props.skinData.displayName}</h1>
                        <img src={this.props.skinData.displayIcon} alt="" />
                    </div>
                    <h3>Weapon Stats</h3>
                        <p>Weapon Category: {this.props.skinData.shopData.category}</p>
                        <p>In-Game Price: {this.props.skinData.shopData.cost}</p>
                        <p>Equip Time: {this.props.skinData.weaponStats.equipTimeSeconds}s</p>
                        <p>First Bullet Accuracy: {this.props.skinData.weaponStats.firstBulletAccuracy}</p>
                        <p>Run Speed Multiplier: {this.props.skinData.weaponStats.runSpeedMultiplier}</p>
                        <p>Mag Capcity: {this.props.skinData.weaponStats.magazineSize}</p>
                        <p>Fire Rate: {this.props.skinData.weaponStats.fireRate}</p>
                        <p>First Bullet Accuracy: {this.props.skinData.weaponStats.firstBulletAccuracy}</p>
                        <p>Reload Time: {this.props.skinData.weaponStats.reloadTimeSeconds}s</p>
                        <p>Run Speed Multiplier: {this.props.skinData.weaponStats.runSpeedMultiplier}s</p>
                        <h3>Damages</h3>
                        {JSON.stringify(this.props.skinData.weaponStats.damageRanges)}
                        {this.props.skinData.weaponStats.airBurstStats?
                            <div>
                                <h3>Air Burst Stats</h3>
                                <p>Shotgun Pallet Count: {this.props.skinData.weaponStats.shotgunPelletCount}</p>
                                <p>Shotgun Pallet Count: {this.props.skinData.weaponStats.airBurstStats.burstDistance}</p>
                            </div>
                            :null}
                        <p>Wall Penetration: {this.props.skinData.weaponStats.wallPenetration}</p>
                    {console.log(this.props.skinData)}
                </div>
            )
        }
        else{
            return(
                <div>
                    <div>
                        <h1>{this.props.skinData.displayName}</h1>
                        <img src={this.props.skinData.displayIcon} alt="" />
                    </div>
                    <h3>Weapon Stats</h3>
                        <p>Weapon Category: {this.props.skinData.shopData.category}</p>
                        <p>In-Game Price: {this.props.skinData.shopData.cost}</p>
                        <p>Equip Time: {this.props.skinData.weaponStats.equipTimeSeconds}s</p>
                        <p>First Bullet Accuracy: {this.props.skinData.weaponStats.firstBulletAccuracy}</p>
                        <p>Run Speed Multiplier: {this.props.skinData.weaponStats.runSpeedMultiplier}</p>
                        <p>Mag Capcity: {this.props.skinData.weaponStats.magazineSize}</p>
                        <p>Fire Rate: {this.props.skinData.weaponStats.fireRate}</p>
                        <p>First Bullet Accuracy: {this.props.skinData.weaponStats.firstBulletAccuracy}</p>
                        <p>Reload Time: {this.props.skinData.weaponStats.reloadTimeSeconds}s</p>
                        <p>Run Speed Multiplier: {this.props.skinData.weaponStats.runSpeedMultiplier}s</p>
                        <h3>Damages</h3>
                        {JSON.stringify(this.props.skinData.weaponStats.damageRanges)}                        
                        <p>Wall Penetration: {this.props.skinData.weaponStats.wallPenetration}</p>
                    {console.log(this.props.skinData)}
                </div>
            )
        }
    }
}