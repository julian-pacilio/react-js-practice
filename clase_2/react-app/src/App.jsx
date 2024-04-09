import Counter from "./components/CounterComponent";
import MessageComponent from "./components/MessageComponent";

export default function App() {
 
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

          <div className="bg-purple-500 text-white p-6 rounded-lg mt-6">
            <Counter id="1" value="10"/>
          </div>
        </div>
      </div>
    </div>
  )
}