const stats = [
  { label: "Foods", value: "1000+" },
  { label: "Orders Delivered", value: "10k+" },
  { label: "Happy Customers", value: "2k+" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-muted text-white">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-6">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <h3 className="text-4xl font-bold text-chart-3">{stat.value}</h3>
            <p className="mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};