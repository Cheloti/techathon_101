import React, { Children } from 'react';
import About from './components/About';
import Button from './components/Buttons';
import Home from './components/Home';
import Login from './components/Login';
import Lorrem from './components/Lorrem';


export const App = () => {
  const info = {
    f_name: "Brian",
    l_name: "Cheloti",
    class: "ReactJs",
    Age: "24 Years Old"
  }

  return (
    <>
    <div>
      <h1 style={{color:"Blue"}}>{info.f_name}</h1>
      <h2>{info.l_name}</h2>
    </div>

    <div>
      <h3>{info.class}</h3>
      <h1 >
        <Home name={info}/>
      </h1>
    </div>

    <div>
      <About name={info} isLearning={'Yes, I am learning react'} />
    </div>

    
      <Button title={{name:'First Button', value:'Button1'}} background="red" />
      <Button title={{name: 'Second Button', value:'Button2'}} background="green"/>
      <Button />
      <Button title={{name:'Last Button', value:'Button3'}} background="yellow" />

      <Lorrem>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fuga enim, 
          recusandae ipsa laboriosam sequi illum perferendis! Ipsa quaerat, similique deserunt 
          mollitia omnis, repellendus placeat perferendis, labore beatae ipsum fugit? Harum numquam 
          cumque dolore provident eius, eligendi accusantium a blanditiis maiores, dolor vel quod, 
          sunt rem quasi libero exercitationem est.
        </p>
      </Lorrem>

      <Login />
    </>

  )
}

export default App

