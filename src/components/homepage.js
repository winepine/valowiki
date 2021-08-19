import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom';
export default class HomePage extends React.Component{
    componentDidMount(){
        document.title = "ValoWiki";
    }
    render(){
        return(
            <div className="homepage">
                <nav>
                    <ul>
                        <li>
                            <p className="hover-text">Hover<br/>Here!</p>
                        </li>
                    <li>
                        <Link className="home-btn" to="/skins">Skins</Link>
                    </li>
                    <li>
                        <Link className="home-btn" to="/weapons">Weapons</Link>
                    </li>
                    <li>
                        <Link className="home-btn" to="/maps">Maps</Link>
                    </li>
                    <li>
                        <Link className="home-btn" to="/">Buddies</Link>
                    </li>
                    <li>
                        <Link className="home-btn" to="/">Sprays</Link>
                    </li>
                    <li>
                        <Link className="home-btn" to="/">PlayerCards</Link>
                    </li>
                    <li>
                        <Link className="home-btn" to="/">Agents</Link>
                    </li>
                    </ul>
                </nav>
                <main>
                    <h1 className="hometag">VALORANT <br/> Wiki</h1>
                    <h1 className="bottomtext">By WinePine</h1>
                </main>
            </div>
        )
    }
}