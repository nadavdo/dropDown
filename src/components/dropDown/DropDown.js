import React, { useState, useEffect } from "react"
import "./DropDown.css"

// The drop down get data (array of objects with value and label), the default value and onchange method.
export default function DropDown({ data, selectedValue, onChange }) {
  const [clicked, setClicked] = useState(false)
  const [selectedItemValue, setSelectedItemValue] = useState(
    data[data.findIndex((p) => p.value === selectedValue)].value
  )

  useEffect(() => {
    itemClicked(selectedValue)
  }, [])

  const itemClicked = (value) => {
    setClicked(false)
    setSelectedItemValue(value)
    onChange(value)
  }

  return (
    <>
      <div className="drop-down">
        <div className="drop-down-container">
          {data[data.findIndex((p) => p.value === selectedItemValue)].label}
          <div className="drop-down-btn" onClick={() => setClicked(!clicked)} />
        </div>
        
      </div>
      {clicked ? (
        <div className="drop-down-panel">
           {data.map((item, index) => {
              return (
                <div className = {selectedItemValue === item.value ? "selected" : "notSelected"}
                  key={index}
                  onClick={() => {
                    itemClicked(item.value)
                  }}
                >
                  <span>{item.label}</span>
                  
                </div>
              )
            })}
          
        </div>
      ) : null}
    </>
  )
}
