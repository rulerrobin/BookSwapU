import React from 'react'
import Footer from "./Footer"

const ResponsiveWrapper = ({ children }) => {
  return (
    <div className="pageWrapper">
      {children}
      <Footer />
    </div>
  );
}


export default ResponsiveWrapper