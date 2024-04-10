import React from "react";

import Counter from "./components/CounterComponent";
import MessageComponent from "./components/MessageComponent";


function ShowChildrenData(props) {
  
  let { id, counter, counter2 } = props.data

  return (
    <>
      { id &&
           <h3>Datos recibidos del contador Nro. {id} - {counter} - {counter2}</h3>
      }
      { !id &&
           <h3>No hay datos del contador</h3>
      } 
    </>
  )
}

class App extends React.Component {

  constructor() {
    super()

    this.recieveChildData = this.recieveChildData.bind(this)
  }

  state = {
    data : { 
      id : null,
      counter: null,
      counter2: null
    }
  }
 
  recieveChildData(data) {

    this.setState({ data })
  }

  render() {

    let { id, counter, counter2 } = this.state.data

    return (
      <div className="App">
        <div className="container mt-3 p-3 mx-auto">
          <div className="bg-purple-700 text-white p-6 rounded-lg">
            <h1 className="text-3xl font-bold">Mi Proyecto React.js</h1>  
            <hr className="my-3"/>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni dicta eum? Officia modi voluptate ex laborum, sequi porro, earum illum minima dicta velit accusantium!
            </p> 
            <hr className="my-3"/>
  
            <div className="grid grid-cols-3 gap-6">
                <MessageComponent message="Titulo 1" color="red" />     
                <MessageComponent message="Titulo 2" color="green"/> 
                <MessageComponent color="blue"/> 
            </div>
  
            <div className="bg-purple-200 text-black p-6 rounded-lg mt-6">
            {/* ------------------------------------------------------------ */}
            {/* Render condicional: Operador ternario => cond ? true : false */}
            {/* ------------------------------------------------------------ */}
            {/* 
              { id?
                <>
                  <h3>Datos recibidos del contador Nro. {id} - {counter} - {counter2}</h3>
                </>
                : 
                <>
                  <h3>No hay datos del contador</h3>
                </>
              }
            */}

            {/* ------------------------------------------------------------ */}
            {/*                 Render condicional: Operador &&              */}
            {/* ------------------------------------------------------------ */}
            {/* 
              { id &&
                <h3>Datos recibidos del contador Nro. {id} - {counter} - {counter2}</h3>
              }
              { !id &&
                <h3>No hay datos del contador</h3>
              } 
            */}

            {/* ------------------------------------------------------------ */}
            {/*             Render condicional: Dentro de componente         */}
            {/* ------------------------------------------------------------ */}

            <ShowChildrenData data={this.state.data}/>
            </div> 

            <div className="bg-purple-500 text-white p-6 rounded-lg mt-6">
              <Counter id="1" value1="123" value2="456" sendValue={this.recieveChildData}/>
            </div>

            <div className="bg-purple-500 text-white p-6 rounded-lg mt-6">
              <Counter id="2" value1="321" value2="654" sendValue={this.recieveChildData}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App