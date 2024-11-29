import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";


const { unityProvider } = useUnityContext({
  loaderUrl: "Build/build.loader.js",
  dataUrl: "Build/build.data",
  frameworkUrl: "Build/build.framework.js",
  codeUrl: "Build/build.wasm",
});

function App() {
  return (
    <div className="App"> 
        <img src={logo} className="App-logo" alt="logo" />
        <Unity unityProvider={unityProvider}
                style={{width: '1500px', height: '800px'}}
        />
    </div>
  );
}

export default App;
