import Options from "./components/Options/Options"
import Textfield from "./components/Textfield/Textfield"

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center gap-4">
      <h1 className="text ">Password Generator</h1>
      <Textfield password="PTx1f5DaFX"/>
      <Options/>
    </div>
  )
}

export default App