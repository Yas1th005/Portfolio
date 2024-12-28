const Dashboard = ({ bookings }) => {


    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-6">
        <h2 className="text-3xl font-semibold text-primary mb-6">Bookings Dashboard</h2>
        {bookings.length === 0 ? (
          <p className="text-gray-400">No bookings yet.</p>
        ) : (
          <div className="grid gap-4 w-full max-w-3xl">
            {bookings.map((booking, index) => (
              <div
                key={index}
                className="bg-cardBg p-4 rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center"
              >
                <div>
                  <p className="text-lg font-semibold">{booking.name}</p>
                  <p className="text-sm text-gray-400">{booking.email}</p>
                </div>
                <div className="text-right text-sm text-gray-400">
                  <p>{booking.date}</p>
                  <p>{booking.time}</p>
                </div>
              </div>
            ))}

            <button
              className="w-full bg-primary text-black py-3 rounded-lg"
            >
              Request Submitted
            </button>
          </div>
          
        )}
      </section>
    );
  };
  
  export default Dashboard;
  