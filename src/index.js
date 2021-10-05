import React from "react"
import ReactDOM from "react-dom"
import "./styles/styles.css"
import DropDown from "./components/dropDown/DropDown"


export default function App() {
  

  const handleValueChange = (val) => {
    console.log(val)
  }

  

 

  return (
    <div className="form">
      <div className="form-field">
        <div className="field-label">Language</div>
        <DropDown
          onChange={handleValueChange}
          data={[
            { value: "golang", label: "Go" },
            { value: "java", label: "Java" },
            { value: "nodejs", label: "NodeJs" },
            { value: "python", label: "Python" },
            { value: "c#", label: "C#" },
          ]}
          selectedValue="python"
        />
      </div>
      
      
      
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("container"))
