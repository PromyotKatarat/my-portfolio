import React from 'react';

const Contact = () => (
  <section id="contact" className="p-8 bg-gray-100">
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input className="w-full p-2 border border-gray-300 rounded" type="text" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input className="w-full p-2 border border-gray-300 rounded" type="email" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea className="w-full p-2 border border-gray-300 rounded"></textarea>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Send</button>
      </form>
    </div>
  </section>
);

export default Contact;
