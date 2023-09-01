import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary-subtle py-3 mt-auto">
      <div className="container text-center">
        <p className="mb-0">© {new Date().getFullYear()} BookSwapU. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;