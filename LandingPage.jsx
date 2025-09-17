export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <section className="flex flex-col items-center justify-center flex-1 text-center px-6 py-20 bg-gradient-to-b from-gray-100 to-white">
        <h1 className="text-5xl font-bold mb-6">Ciros Capital</h1>
        <p className="text-xl max-w-2xl mb-8">
          Smart, scalable investment solutions designed to grow your wealth and empower bold opportunities.
        </p>
        <a href="mailto:contact@ciroscapital.com" className="bg-black text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-gray-800 transition">
          Get in Touch
        </a>
      </section>
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">About Ciros Capital</h2>
        <p className="text-lg leading-relaxed">
          Ciros Capital is focused on connecting capital with high-potential opportunities. We specialize in
          strategic investments, property development funding, and partnerships that create long-term value.
        </p>
      </section>
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">Our Focus</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold mb-2">Property Development</h3>
              <p>Funding innovative developments that drive growth and deliver value to stakeholders.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold mb-2">Private Investment</h3>
              <p>Connecting investors with vetted opportunities for attractive risk-adjusted returns.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold mb-2">Strategic Partnerships</h3>
              <p>Collaborating with businesses and developers to bring large-scale projects to life.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Let’s Build Something Big</h2>
        <p className="text-lg mb-6">Reach out to explore collaboration or investment opportunities.</p>
        <a href="mailto:contact@ciroscapital.com" className="bg-black text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-gray-800 transition">
          Contact Us
        </a>
      </section>
      <footer className="py-6 text-center text-gray-500 border-t">
        <p>© {new Date().getFullYear()} Ciros Capital. All rights reserved.</p>
      </footer>
    </div>
  );
}
