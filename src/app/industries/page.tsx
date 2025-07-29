import React from 'react';

export default function Industries() {
  const industries = [
    {
      name: "Oil & Gas",
      description: "Supporting water truck services, equipment rental, and field services with reliable cash flow solutions.",
      icon: "🛢️"
    },
    {
      name: "Construction",
      description: "Helping contractors and subcontractors maintain positive cash flow during project cycles.",
      icon: "🏗️"
    },
    {
      name: "Transportation",
      description: "Assisting trucking companies and logistics providers with immediate payment on invoices.",
      icon: "🚛"
    },
    {
      name: "Landscaping",
      description: "Supporting landscaping and grounds maintenance companies with seasonal cash flow needs.",
      icon: "🌱"
    },
    {
      name: "Manufacturing",
      description: "Enabling manufacturers to maintain production schedules without waiting for customer payments.",
      icon: "🏭"
    },
    {
      name: "Healthcare Services",
      description: "Providing medical service providers with quick access to their earned revenue.",
      icon: "🏥"
    },
    {
      name: "Professional Services",
      description: "Supporting consulting firms, legal services, and other professional service providers.",
      icon: "💼"
    },
    {
      name: "Technology",
      description: "Helping tech companies and service providers maintain growth momentum.",
      icon: "💻"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl">
            Factors Western has helped companies from almost every industry with their cash flow needs
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Diverse Industry Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Since 1985, we've partnered with businesses across various industries, understanding the unique cash flow challenges each sector faces and providing tailored solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-600">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {industry.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Businesses Choose Factors Western
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Expertise</h3>
              <p className="text-gray-600">
                Nearly four decades of experience working with businesses across diverse industries means we understand your unique challenges and requirements.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Setup</h3>
              <p className="text-gray-600">
                We can typically set up your account and begin advancing on invoices within just a couple of days.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Flexible Solutions</h3>
              <p className="text-gray-600">
                Whether you need to factor all invoices or select specific ones, we work with your business requirements.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Canadian Focus</h3>
              <p className="text-gray-600">
                As a Calgary-based company, we understand the Canadian business landscape and regulatory environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't See Your Industry Listed?
          </h2>
          <p className="text-xl mb-8">
            We work with businesses across many industries. Contact us to discuss your specific needs.
          </p>
          <a href="/contact" className="bg-white text-red-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded transition-colors duration-200">
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
} 