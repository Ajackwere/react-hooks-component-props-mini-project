import React from 'react'

export default function Header({blogName}) {
  return (
    <>
        <header>
            <h1>
                {blogName}
            </h1>
        </header>
    </>
  )
}
