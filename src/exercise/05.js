// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const smallBox = (
  <div
    className="box box--small"
    style={{marginTop: 20, fontStyle: 'italic', backgroundColor: 'lightblue'}}
  >
    small lightblue box
  </div>
)

const mediumBox = (
  <div
    className="box box--medium"
    style={{marginTop: 20, fontStyle: 'italic', backgroundColor: 'pink'}}
  >
    medium pink box
  </div>
)
const largeBox = (
  <div
    className="box box--large"
    style={{marginTop: 20, fontStyle: 'italic', backgroundColor: 'orange'}}
  >
    large orange box
  </div>
)

//  Extra 1
function Box({size, style, className = '', ...otherProps}) {
  const sizeClassName =  size ? `box--${size}` : ''
  return (
    <div className={`box ${className} ${sizeClassName} `} style={{ fontStyle: 'italic', ...style}} {...otherProps}/>
  )
}

function App() {
  return (
    /*<div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>*/

    <div>
      <Box
        size="small"
        style={{marginTop: 20, backgroundColor: 'lightblue'}}
      >
        small lightblue box
      </Box>
      <Box
        size="medium"
        style={{marginTop: 20, backgroundColor: 'pink'}}
      >
        medium pink box
      </Box>
      <Box
        size="large"
        style={{marginTop: 20, backgroundColor: 'orange'}}
      >
        large orange box
      </Box>
    </div>
  )
}

export default App
