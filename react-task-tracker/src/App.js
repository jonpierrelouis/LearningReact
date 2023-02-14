import './App.css';
import Header from "./components/Header"


const App = () => {
  return(
    <div className='container'>
      <Header ></Header>
    </div>
  )
}

//A slightly different way to run the same code, 
//it can also be done using a class and importing react from react
// function App() {
//   const name = "Jon"
//   const x = true

//   return (
//     <div className="container">
//       <Header/>
//     </div>
//   );
// }

export default App;
