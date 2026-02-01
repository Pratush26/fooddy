const steps = [
  { id: 1, title: "Browse Foods", desc: "Explore your Favourite foods" },
  { id: 2, title: "Choose Your Meal", desc: "Pick delicious items you love" },
  { id: 3, title: "Place Order", desc: "Checkout securely in seconds" },
  { id: 4, title: "Track Delivery", desc: "Get real-time order updates" },
];

const HowItWorks = () => {
  return (
    <section className="my-24">
      <div className="w-11/12 mx-auto ">
        <h2 className="text-3xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map(step => (
            <div key={step.id} className="text-center p-6 rounded-xl shadow hover:shadow-lg transition bg-card">
              <div className="text-4xl font-bold text-chart-3 mb-4">
                {step.id}
              </div>
              <h3 className="font-semibold text-lg">{step.title}</h3>
              <p className="text-sm mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;