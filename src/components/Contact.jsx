// import React from 'react'

// const Contact = () => {
//   return (
//     <div>
//       <h2 className='text-bold m-2 p-2'>Here is your contact details</h2>
//       <form>
//         <input  type="text" placeholder='Your Name' />
//         <input   type="text" placeholder='Message' />
//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default Contact

// ContactPage.js

import React from 'react';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>Contact Kitchen</h1>
      <p>
        Have questions or feedback? We'd love to hear from you! Contact our support team and we'll
        get back to you as soon as possible.
      </p>
      <div className="contact-info">
        <p>Email: support@Kitchen.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
    </div>
  );
};

export default ContactPage;
