import React from 'react'
import Weapons from './weapons'
import {BrowserRouter as CatRouter, Route} from 'react-router-dom'
import HomePage from './homepage'
import './styles.css'
import FetchMaps from './fetchMaps'

export default class MainBody extends React.Component{
    render(){
        return(
            <div>
                <CatRouter>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/skins" >
                        <Weapons req="skins" />
                    </Route>
                    <Route exact path="/weapons">
                        <Weapons req="weapons" />
                    </Route>
                    <Route exact path="/maps">
                        <FetchMaps />
                    </Route>
                </CatRouter>
            </div>
        )
    }
}