import React from 'react';

export function Footer() {
    const companyName = "Fanbase Manchester United";
    const companyAddress = "Old Trafood";
    const contactPerson = "GGMU";
    const contactEmail = "ggmu@gmail.com";
    const contactPhone = "081234556";
  
    return (
      <footer>
        <div className="footer-content">
          <div className="footer-info">
            <h4>{companyName}</h4>
            <p>{companyAddress}</p>
          </div>
          <div className="footer-contact">
            <h4>Contact Person</h4>
            <p>Name: {contactPerson}</p>
            <p>Email: {contactEmail}</p>
            <p>Phone: {contactPhone}</p>
          </div>
        </div>
      </footer>
    );
  }