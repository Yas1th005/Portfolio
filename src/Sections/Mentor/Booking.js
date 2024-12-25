import { useState } from 'react';

const BookingForm = ({ onSaveBooking }) => {
  const [formData, setFormData] = useState({ name: '', email: '', date: '', time: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveBooking(formData);
    setFormData({ name: '', email: '', date: '', time: '' }); // Reset form
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6">
      <h2 className="text-3xl font-semibold text-primary mb-6">Book Your Session</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-cardBg p-8 rounded-lg shadow-lg w-full max-w-md space-y-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-3 rounded-md bg-darkBg text-white focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-3 rounded-md bg-darkBg text-white focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="w-full p-3 rounded-md bg-darkBg text-white focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
        <input
          type="time"
          value={formData.time}
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          className="w-full p-3 rounded-md bg-darkBg text-white focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
        <button
          type="submit"
          className="w-full bg-primary text-black py-3 rounded-lg hover:bg-secondary hover:text-white transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default BookingForm;
