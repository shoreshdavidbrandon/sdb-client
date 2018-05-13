import * as React from 'react';

export const Contact = () => {
  return (
    <div className="inner contact">
      <div className="contact-form">
        <form id="contact-us">
          <div className="col-md-6 wow animated slideInLeft">
            <input
              type="text"
              name="name"
              id="name"
              className="form"
              placeholder="Name"
            />
            <input
              type="email"
              name="mail"
              id="mail"
              className="form"
              placeholder="Email"
            />
            <input
              type="text"
              name="subject"
              id="subject"
              className="form"
              placeholder="Subject"
            />
          </div>
          <div className="col-md-6 wow animated slideInRight">
            <textarea
              name="message"
              id="message"
              className="form textarea"
              placeholder="Message"
            />
          </div>
          <div className="relative fullwidth col-md-12">
            <button
              type="submit"
              id="submit"
              name="submit"
              className="form-btn semibold"
            >
              Send Message
            </button>
          </div>
          <div className="clear" />
        </form>
      </div>
    </div>
  );
};
