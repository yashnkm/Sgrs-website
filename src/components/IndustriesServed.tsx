import React from 'react';

const IndustriesServed: React.FC = () => {
  const industries = [
    {
      title: "Pharmaceuticals",
      subtitle: "cGMP Compliance & Validation",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZvgCU9rFC8F1M5QT6gyxg7_-40myhnQ7Bfl55S3ees1hfSX4UcABw9puDxewaRZ1_1FKzVNtZX38dCkMo6mL1kj8ql6LtWpP4bPebBz4IjG-fZzg8uDGd3mrPxuk0-Z6O6GVzsiCdw4NpnrxnmKleQW7lVMGbtSS3bKORZfbeq2T78jkxQxtU7WhNehPjYlTx9ZE576sTO137vbBgTvnlkPEe0vChavyqTkaFTas_ZlwxQA5tkIcl2UJM5gqxwn_ZigLLjAKhhGc"
    },
    {
      title: "Manufacturing",
      subtitle: "Process Optimization & Control",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1P_Z02kBJo_tDoDEsTYmtwQxeqYmx1_Q-P05q7LqRCGBJUe9Rv71gHtxFiPHwuHyJoCuF6TuX6hXUHw-Xqs2HnFa1JoxZunNPk6tHW4z9uH9mhbPE0KqT_BD9SeBtl8gMa9WmXCQVgKd4U-rixYVWVvaTA3sxvNYM409bI3pCSEN0wqzVLHiPlgHSCcqOv5riG-LXhIlUd-EiqDSmq9QL5a_wEX-aIeSduNc6uo0M-KronTI0x4O4MD-mG4xOraFsXzFeilT2b4s"
    },
    {
      title: "Allied Industries",
      subtitle: "Custom Solutions for Every Need",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANcvPQAgqUWmvr5Bbrtk6P_xNqmFVaVC8RpgH0P2WNe_38YMhumrJm2-_IpxfeFhORZZDQqOVDr6WdwwciSXf79Ltl8jOxPbkUUbSmhXLSpQpXGH7ieI0_jueLch1k4VQ2roUpaGnClGwdERz84zAa1pKnSLTA9JW_wCX4lt4gg9-cMbqnFVC7Fpw5O2vnm0rVjpAESBzVG_iaJlfIS87HlKA7uH5WWtYKngN4UDr8-uOESznWcx9yGB1mfKGxHU9VLCnHviFHEtg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Industries We Serve</h2>
          <p className="mt-2 text-lg text-slate-600">Delivering specialized solutions across diverse sectors.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden group">
              <img 
                alt={industry.title}
                className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-300" 
                src={industry.image}
              />
              <div className="absolute inset-0 bg-black/50 flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{industry.title}</h3>
                  <p className="text-slate-200 mt-1">{industry.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;