import "./App.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./components/earth";
import { TopSection } from "./components/topSection";
import Logo from "./components/logo.png";
import Breakdown from "./components/Breakdown.png"
import MBS from "./components/Marina_Bay_Sands.png"
import Group from "./components/Group.png"
import GaussDB from "./components/gaussdb.png"
// Importing of components and images.


const CanvasContainer = styled.div`
  width: 100%;
  height: 95%;
`;

function App() {
  return (
    //Divs of previous components.
    //Originally, this was supposed to contain a route from the backend to fetch the data.
    //However, there were once again issues with the integration and thus we were only
    //able to provide a mockup of the eventual product. Sincere apologies!
    //We hope that this visualization was still adequate.
    <CanvasContainer>
      <TopSection />
        <Canvas>
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </Canvas>
        <div style = {{display: 'flex',  justifyContent:'center', alignItems:'center', height: '0vh'}}>
          <img src={Logo} width = {420} height = {150}/>
        </div>
        <div className="searchForm" style = {{display: 'flex',  justifyContent:'center', alignItems:'center', height: '92vh'}} >
              <form>
                <div className="searchInputs">
                  <input type="text" id="filter" placeholder="018971"/>
                </div>
              </form>
        </div>
        <div style = {{display: 'flex',  justifyContent:'center', alignItems:'left', height: '100vh'}}>
            <img src={Breakdown} width = {1000} height = {750}/>
            <div style = {{justifyContent:'center', alignItems:'center', height: '100vh'}}>
              <img src={MBS} width = {200} height = {400}/>
            </div>
        </div>

        <div style = {{display: 'flex',  justifyContent:'center', alignItems:'center', height: '40vh'}}>
            <h1>Congratulations! Your Building, Marina Bay Sands, is perfoming outstandingly well.</h1>
        </div>

        <div style = {{display: 'flex',  justifyContent:'center', alignItems:'center', height: '20vh'}}>
            <h1>Here are some similar buildings around the area that have been benchmarked against yours.</h1>
        </div>

      <div style = {{display: 'flex', justifyContent:'center', alignItems:'center', height: '60vh'}}>
        <img src={Group} width = {600} height = {400}/>
      </div>
      <div style = {{display: 'flex',  justifyContent:'center', alignItems:'CENTER'}}>
            <h1>Recommendations: None for Q2 2022.</h1>
      </div>
      <div style = {{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
          <img src={GaussDB} width = {200} height = {150}/>
      </div>
      <div style = {{display: 'flex',  justifyContent:'center', alignItems:'CENTER', fontSize: 12}}>
            <h1>Powered by Huawei GaussDB</h1>
      </div>          
    </CanvasContainer>
  );
}

export default App;
