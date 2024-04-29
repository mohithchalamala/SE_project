import React from "react"
import Navbar from "./comp/Navbar"
import Intro from "./comp/Intro"
import Intro2 from "./comp/Intro2"
import PhotoDisplay from "./comp/photo_display"

function Index() {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Intro2/>
      <PhotoDisplay/>
    </div>
  )
}

export default Index
