import React, { useContext, useState, useRef, useEffect } from 'react';
import Routes from './routes';
import {Global} from "./GlobalStyle";
import Template from "./Templates/Default"
import {ContextTheme,ContextAuth, ContextPlay, ContextData} from './Context';
import {
    BrowserRouter as Router,
    Switch,
  } from "react-router-dom";

function App() {
    const [token,setToken] = useState(localStorage.getItem('jwt'));
    const [tema,setTema] = useState('dark');

    const ref = useRef(localStorage.getItem('jwt'));
    const [itemPlay,setItemPlay] = useState(null);
    const [data,setData] = useState({items:[0,1,2,3,4]});
    const [visitedAlbum,setVisitedAlbum] = 
    useState([]);
    
    useEffect(()=>{
        setToken(localStorage.getItem('jwt'));
    },[ref.current]);

    return (
        <ContextTheme.Provider 
            value={{
            tema,
            setTema
        }}>
        <ContextAuth.Provider 
            value={{
            token,
            setToken
        }}>
        <ContextData.Provider 
            value={{
            data,
            setData,
            visitedAlbum,
            setVisitedAlbum,
        }}>
        <ContextPlay.Provider 
            value={{
            itemPlay,
            setItemPlay
        }}>
        <Template>
            <Router>
                <Switch>
                    <Routes />
                </Switch>
            </Router>
            <Global />
        </Template>
        </ContextPlay.Provider>
        </ContextData.Provider>
        </ContextAuth.Provider>
        </ContextTheme.Provider>
    )
}

export default App;