import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (  
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
        >
          <source src="/IMG_7876.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 hero-overlay z-20"></div>
        <div className="relative z-30 flex items-center justify-center h-full text-white text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Unlock Your Cash Flow
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Factoring solutions tailored for Canadian businesses
            </p>
            <Link href="/solutions" className="btn-primary text-lg">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image 
                src="/financial-hero.jpeg" 
                alt="Financial documents" 
                width={800}
                height={600}
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Welcome to Factors Western
              </h2>
              <p className="text-gray-600 mb-4 text-lg">
                Established in 1985 in Calgary, Factors Western has helped companies from almost every industry with their cash flow needs and given companies the opportunities to increase their business.
              </p>
              <div className="mb-6">
                <h3 className="font-semibold text-xl mb-3">Factors Western can help your business to:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Convert Your Receivables to Cash
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Create Reliable Cash Flow
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Increase Your Business
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Meet Growing Cash Flow Needs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Factoring Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What is Factoring?</h2>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p>
              <strong>&quot;Factoring&quot;</strong> is the process of converting business accounts receivable to cash, facilitating continued and stable growth, and improved efficiency of the business by creating more productive positive time for owners to better manage their companies.
            </p>
            <p>
              Factoring is not a loan, but rather the discounted sale of an asset (receivable) for immediate cash. Invoices are purchased based on the &quot;credit worthiness&quot; of the payer, as opposed to the more conventional lending method of evaluating the credit and security of the client.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Improve Your Cash Flow?
          </h2>
          <p className="text-xl mb-8">
            Contact us today to learn how factoring can help your business grow.
          </p>
          <Link href="/contact" className="bg-white text-red-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded transition-colors duration-200">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
} 