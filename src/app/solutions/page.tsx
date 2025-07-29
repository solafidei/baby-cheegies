import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions | Factors Western',
  description: 'Explore real-world cash flow solutions tailored for Canadian businesses.',
  alternates: { canonical: '/solutions' },
  openGraph: {
    title: 'Solutions | Factors Western',
    description: 'Explore real-world cash flow solutions tailored for Canadian businesses.',
    url: 'https://www.factorswestern.com/solutions',
    type: 'website',
  },
};

export default function Solutions() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        >
          <source src="/IMG_7876.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white bg-opacity-60"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Solutions
            </h1>
            <p className="text-xl text-gray-700">
              Real-world scenarios where Factors Western makes a difference
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="text-xl text-gray-600 mb-12">
              Over the years Factors Western has helped numerous companies with their cash flow and financing. We pride ourselves in going outside the box to find solutions where other companies may not.
            </p>
            <p className="text-lg text-gray-600 mb-16">
              Below are a few typical situations where Factors Western can provide solutions:
            </p>

            {/* Situation One */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12 border-l-4 border-red-600">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Situation One: Oil & Gas Industry</h2>
              <div className="text-gray-600 leading-relaxed">
                <p>
                  John works in the Oil and Gas Industry. He has a small fleet of Water Trucks and has a couple contracts with two of the large Oil and Gas Companies. John has an opportunity to take on a new good sized contract. He knows that the payment terms are anywhere from 30 to 90 days...
                </p>
                <p className="mt-4">
                  However, recently he had learned about the services of Factors Western. Within a couple of days, John had signed up with Factors Western, and they had provided him with a free credit check on the new company. John was able to accept the contract knowing that Factors Western would be able to advance to him a large portion of his invoices...
                </p>
                <p className="mt-4">
                  This allowed him to pay his employees and suppliers and increase his business. He also could now control his cash flow, and was not waiting for cheques to arrive in the mail.
                </p>
              </div>
            </div>

            {/* Situation Two */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-red-600">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Situation Two: Landscaping Business</h2>
              <div className="text-gray-600 leading-relaxed">
                <p>
                  Peter had recently started a landscaping company. Eager to grow his business, he took on several new jobs for some of the local business buildings in his area. He hired extra staff and purchased some extra equipment to complete all these new jobs.
                </p>
                <p className="mt-4">
                  However he soon learned that the companies he was doing the work for would not pay him for 30 to 60 days after he invoiced them. He was a week away from needing funds for his next payroll, and was not sure when the cheques would arrive in the mail.
                </p>
                <p className="mt-4">
                  Peter was in a cash flow crunch from all the growth his business was experiencing. His friend had heard about Factors Western and told Peter to give them a call. Factors Western was able to quickly set up Peter&apos;s company and advance on his invoices within a couple days, which allowed Peter to meet his payroll and continue to grow.
                </p>
                <p className="mt-4">
                  Once Peter was set up he no longer needed to worry about if a cheque would arrive in time, he knew he would be able to meet his cash flow requirements. He soon was able to take on more business without fear of not having the available funds to do so.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Find Your Solution?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to discuss how we can help your business overcome cash flow challenges.
          </p>
          <a href="/contact" className="btn-primary">
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
} 