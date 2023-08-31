import React from 'react'

const ResponsiveWrapper = ({ children }) => {
  return (
    <div>
      <div className="container-sm container-md container-lg container-xl container-xxl"></div>
      <div className="d-flex p-2 d-flex justify-content-center"></div>
      {children}
    </div>
  )
}

export default ResponsiveWrapper