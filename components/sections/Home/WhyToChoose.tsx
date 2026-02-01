const benefits = [
    "Multiple Categories Food",
    "Secure Payments",
    "Fast Ordering",
    "Real-time Tracking",
    "Fast Delivery",
    "Trusted Reviews",
];

export default function WhyToChoose() {
    return (
        <section className="my-20">
            <div className="w-11/12 mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Why Choose Us
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {benefits.map((item, idx) => (
                        <div key={idx} className="bg-card flex items-center justify-center p-6 rounded-xl shadow text-center">
                            <p className="font-medium">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};