import { useState } from 'react';
import LandingSection from '../Mentor/Landing';
import BookingForm from '../Mentor/Booking';
import Dashboard from '../Mentor/Dashboard';

const Mentorship = () => {
  const [step, setStep] = useState('landing');
  const [bookings, setBookings] = useState([]);

  const handleStartBooking = () => setStep('booking');
  const handleSaveBooking = (booking) => {
    setBookings([...bookings, booking]);
    setStep('dashboard');
  };

  return (
    <div>
      {step === 'landing' && <LandingSection onStartBooking={handleStartBooking} />}
      {step === 'booking' && <BookingForm onSaveBooking={handleSaveBooking} />}
      {step === 'dashboard' && <Dashboard bookings={bookings} />}
    </div>
  );
};

export default Mentorship;
