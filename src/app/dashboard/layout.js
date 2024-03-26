import React from 'react'

function DashboardLayout({children}) {
  return (
  <>
  <section className='manikandan'>
    <nav></nav>
    <h1 className='p-24'>Header</h1>
    {children}
    <h1 className='p-24'>Footer</h1>
  </section>
  </>
  )
}

export default DashboardLayout