import React from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: "What is factoring?",
      answer: "Factoring is the process of converting business accounts receivable to cash. It's not a loan, but rather the discounted sale of an asset (receivable) for immediate cash. Invoices are purchased based on the credit worthiness of the payer."
    },
    {
      question: "How quickly can I get funded?",
      answer: "Once your company is set up with Factors Western, we can typically advance on your invoices within a couple of days. The initial setup process usually takes 2-3 business days."
    },
    {
      question: "What industries do you work with?",
      answer: "Factors Western has helped companies from almost every industry with their cash flow needs. We have particular experience with oil & gas, landscaping, construction, transportation, and many service industries."
    },
    {
      question: "What percentage of my invoices can I receive as an advance?",
      answer: "The advance percentage depends on various factors including the creditworthiness of your customers and your industry. We work with each client to provide the maximum advance possible while maintaining appropriate risk levels."
    },
    {
      question: "Do you require personal guarantees?",
      answer: "One of the attractive features of factoring is the usual absence of personal guarantees and collateral security, reducing concerns about risking personal assets for business purposes."
    },
    {
      question: "How are factoring fees calculated?",
      answer: "Factoring fees are typically calculated as a percentage of the invoice value and depend on factors such as invoice volume, customer creditworthiness, and payment terms. We provide transparent pricing for all our clients."
    },
    {
      question: "Can I factor all of my invoices or just some?",
      answer: "You have the flexibility to factor all of your invoices or select specific ones based on your cash flow needs. We work with your business requirements to provide the most suitable solution."
    },
    {
      question: "What happens if my customer doesn't pay?",
      answer: "Since invoices are purchased based on the credit worthiness of your customers, we conduct credit checks on your customers. In the rare event of non-payment, the specific terms depend on whether it's recourse or non-recourse factoring."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl">
            Get answers to common questions about factoring and our services
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Questions CTA */}
          <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Have More Questions?
            </h2>
            <p className="text-gray-600 mb-6">
              Our team is here to help you understand how factoring can benefit your business.
            </p>
            <a href="/contact" className="btn-primary">
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 