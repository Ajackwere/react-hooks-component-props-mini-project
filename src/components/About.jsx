import React from 'react'

export default function About({aboutImage, aboutText}) {
    
  return (

    <>
        <aside>
            <img src={aboutImage} alt="blog logo" />
        </aside>
        <p>
            {aboutText}
        </p>
    </>
  )
}
