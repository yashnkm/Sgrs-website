import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TechnicalCapabilities: React.FC = () => {
  const [activeTab, setActiveTab] = useState('hvac');
  const [currentEquipmentIndex, setCurrentEquipmentIndex] = useState(0);

  const capabilities = [
    {
      id: 'engineering',
      title: 'Advanced Engineering',
      description: 'Custom design solutions using latest CAD technology and engineering best practices for optimal performance.',
      features: ['3D Design & Modeling', 'Performance Simulation', 'Custom Engineering', 'Technical Documentation'],
      icon: '⚙️'
    },
    {
      id: 'manufacturing',
      title: 'Precision Manufacturing',
      description: 'State-of-the-art fabrication facilities with quality control systems ensuring consistent, reliable products.',
      features: ['CNC Machining', 'Sheet Metal Fabrication', 'Quality Control Systems', 'Lean Manufacturing'],
      icon: '🏭'
    },
    {
      id: 'installation',
      title: 'Expert Installation',
      description: 'Professional installation teams with extensive experience in complex industrial environments.',
      features: ['Certified Technicians', 'Project Management', 'Safety Compliance', 'Commissioning Support'],
      icon: '🔧'
    },
    {
      id: 'testing',
      title: 'Rigorous Testing',
      description: 'Comprehensive testing and validation protocols ensuring systems meet specifications and industry standards.',
      features: ['Performance Testing', 'Quality Validation', 'Compliance Verification', 'Documentation'],
      icon: '🧪'
    }
  ];

  const equipmentItems = [
    {
      id: 'ahu',
      title: 'Air Handling Units',
      description: 'High-efficiency AHU systems with advanced filtration and climate control capabilities.',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      specs: {
        capacity: '10,000 - 50,000 CFM',
        efficiency: '95% HEPA filtration',
        features: ['HEPA Filtration', 'Energy Efficient', 'Smart Controls']
      }
    },
    {
      id: 'cleanroom',
      title: 'Modular Cleanroom Panels',
      description: 'Precision-engineered panels for pharmaceutical and electronics applications.',
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      specs: {
        classification: 'ISO 5-8 Compliance',
        material: 'Aluminum frame, laminate panels',
        features: ['ISO Compliant', 'Modular Design', 'Easy Assembly']
      }
    },
    {
      id: 'partition',
      title: 'Aluminum Partition Systems',
      description: 'Lightweight, durable partition solutions for flexible space management.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      specs: {
        height: 'Up to 12 feet',
        glazing: 'Single/Double options',
        features: ['Sound Insulation', 'Fire Rated', 'Recyclable']
      }
    },
    {
      id: 'cooling',
      title: 'Water Cooling Towers',
      description: 'High-efficiency cooling systems for industrial heat rejection applications.',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      specs: {
        capacity: '50-2000 TR',
        efficiency: '95% heat rejection',
        features: ['Energy Efficient', 'Low Maintenance', 'Scalable']
      }
    },
    {
      id: 'fabrication',
      title: 'Manufacturing Facility',
      description: 'State-of-the-art fabrication equipment for precision manufacturing.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      specs: {
        area: '50,000 sq ft',
        equipment: 'CNC, Laser cutting, Welding',
        features: ['CNC Machining', 'Laser Cutting', 'Quality Control']
      }
    }
  ];

  const certifications = [
    {
      category: 'Quality Certifications',
      items: [
        { name: 'ISO 9001:2015', description: 'Quality Management Systems', badge: '🏆' },
        { name: 'ISO 14001:2015', description: 'Environmental Management', badge: '🌿' }
      ]
    },
    {
      category: 'Industry Standards',
      items: [
        { name: 'cGMP Compliant', description: 'Current Good Manufacturing Practice', badge: '💊' },
        { name: 'FDA Guidelines', description: 'Food & Drug Administration Standards', badge: '✅' }
      ]
    },
    {
      category: 'Safety & Compliance',
      items: [
        { name: 'OSHA Certified', description: 'Occupational Safety Standards', badge: '🛡️' },
        { name: 'UL Listed', description: 'Underwriters Laboratories', badge: '⚡' }
      ]
    }
  ];

  const technicalSpecs = {
    hvac: {
      title: 'HVAC Systems',
      categories: [
        {
          name: 'Air Handling Units',
          specs: [
            { label: 'Airflow Capacity', value: '1,000 - 50,000 CFM' },
            { label: 'Filtration Efficiency', value: '95% - 99.97% HEPA' },
            { label: 'Operating Temperature', value: '-20°C to +60°C' },
            { label: 'Energy Efficiency', value: 'EER 12.0+' }
          ]
        },
        {
          name: 'Ducting Systems',
          specs: [
            { label: 'Material Options', value: 'GI, Aluminum, Stainless Steel' },
            { label: 'Duct Sizes', value: '4" to 72" diameter' },
            { label: 'Pressure Rating', value: 'Up to 10" WG' },
            { label: 'Insulation', value: '1" to 4" thickness' }
          ]
        }
      ]
    },
    cleanroom: {
      title: 'Cleanrooms',
      categories: [
        {
          name: 'Cleanroom Classification',
          specs: [
            { label: 'ISO Classes', value: 'ISO 5, 6, 7, 8' },
            { label: 'Air Changes', value: '20-600 ACH' },
            { label: 'Particle Count', value: 'Per ISO 14644-1' },
            { label: 'Pressure Differential', value: '0.05" to 0.15" WG' }
          ]
        },
        {
          name: 'Panel Systems',
          specs: [
            { label: 'Panel Thickness', value: '50mm - 150mm' },
            { label: 'Frame Material', value: 'Aluminum extrusion' },
            { label: 'Surface Finish', value: 'High-pressure laminate' },
            { label: 'Fire Rating', value: 'Class A1 non-combustible' }
          ]
        }
      ]
    },
    partition: {
      title: 'Partitions',
      categories: [
        {
          name: 'Aluminum Systems',
          specs: [
            { label: 'Height Range', value: '8ft - 12ft' },
            { label: 'Panel Width', value: '3ft - 6ft' },
            { label: 'Glazing Options', value: 'Single/Double pane' },
            { label: 'Sound Rating', value: 'STC 35-45' }
          ]
        }
      ]
    },
    cooling: {
      title: 'Cooling Towers',
      categories: [
        {
          name: 'Performance Specs',
          specs: [
            { label: 'Capacity Range', value: '50 - 2000 TR' },
            { label: 'Efficiency Rating', value: '95% heat rejection' },
            { label: 'Water Quality', value: 'TDS up to 1500 ppm' },
            { label: 'Operating Range', value: '5°C to 50°C' }
          ]
        }
      ]
    }
  };

  const innovations = [
    {
      title: 'Smart Control Systems',
      description: 'IoT-enabled monitoring and control systems for real-time performance optimization and predictive maintenance.',
      features: ['Remote monitoring capabilities', 'Predictive maintenance alerts', 'Energy optimization algorithms', 'Mobile app integration'],
      icon: '🤖'
    },
    {
      title: 'Energy Efficiency',
      description: 'Advanced energy management solutions reducing operational costs while maintaining optimal performance.',
      features: ['Variable frequency drives', 'Heat recovery systems', 'LED lighting integration', 'Energy monitoring systems'],
      icon: '⚡'
    },
    {
      title: 'Digital Twin Technology',
      description: 'Virtual replicas of physical systems enabling advanced simulation, optimization, and maintenance planning.',
      features: ['3D system modeling', 'Performance simulation', 'Maintenance scheduling', 'Optimization analysis'],
      icon: '💻'
    },
    {
      title: 'Sustainable Solutions',
      description: 'Environmentally responsible technologies and materials supporting sustainability goals.',
      features: ['Recyclable materials', 'Low-emission systems', 'Water conservation', 'Green certifications'],
      icon: '🌱'
    }
  ];


  const updateEquipmentGallery = (index: number) => {
    setCurrentEquipmentIndex(index);
  };

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <motion.section 
      className="relative py-20 bg-slate-900 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20"></div>
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3 mb-6"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-2xl">⚙️</span>
            <span className="text-blue-300 font-medium">Technical Excellence</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-extrabold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block">Engineering Excellence</span>
            <span className="block text-blue-400">& Advanced Equipment</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-slate-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            State-of-the-art manufacturing capabilities, cutting-edge equipment, 
            and rigorous quality standards ensure superior solutions for every project.
          </motion.p>
          
          {/* Technical Stats */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="text-3xl font-bold text-blue-400">20+</div>
              <div className="text-slate-400">Years Experience</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="text-3xl font-bold text-green-400">500+</div>
              <div className="text-slate-400">Projects Delivered</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <div className="text-3xl font-bold text-purple-400">99%</div>
              <div className="text-slate-400">Quality Rating</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Core Capabilities */}
        <div className="mb-20">
          <motion.h3 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            Core Capabilities
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.id}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                whileHover={{ y: -10, scale: 1.02 }}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
              >
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h4 className="text-xl font-semibold mb-3 text-blue-300">{capability.title}</h4>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-slate-400 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Equipment Gallery */}
        <div className="mb-20">
          <motion.h3 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
          >
            Advanced Equipment & Technology
          </motion.h3>
          
          <div className="relative overflow-hidden rounded-xl">
            <motion.div 
              className="flex transition-transform duration-300"
              style={{ 
                width: `${equipmentItems.length * 100}%`,
                transform: `translateX(-${currentEquipmentIndex * 100}%)`
              }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
            >
              {equipmentItems.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-slate-800 rounded-xl overflow-hidden">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h5 className="font-semibold">{item.title}</h5>
                        <p className="text-sm text-slate-300">{Object.values(item.specs)[0]}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                      <p className="text-slate-300 mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.specs.features.map((feature, featureIndex) => (
                          <span 
                            key={featureIndex}
                            className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Equipment Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button 
              onClick={() => updateEquipmentGallery(Math.max(0, currentEquipmentIndex - 1))}
              className="p-2 bg-slate-700 hover:bg-slate-600 rounded-full transition-colors"
              disabled={currentEquipmentIndex === 0}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex gap-2">
              {equipmentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => updateEquipmentGallery(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentEquipmentIndex ? 'bg-blue-400 w-8' : 'bg-slate-600'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={() => updateEquipmentGallery(Math.min(equipmentItems.length - 1, currentEquipmentIndex + 1))}
              className="p-2 bg-slate-700 hover:bg-slate-600 rounded-full transition-colors"
              disabled={currentEquipmentIndex === equipmentItems.length - 1}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <motion.h3 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.8 }}
          >
            Certifications & Quality Standards
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((category, index) => (
              <motion.div 
                key={index} 
                className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3.0 + index * 0.1 }}
              >
                <h4 className="text-xl font-semibold mb-6 text-blue-300">{category.category}</h4>
                <div className="space-y-4">
                  {category.items.map((cert, certIndex) => (
                    <div key={certIndex} className="flex items-center gap-4 p-3 bg-slate-700/30 rounded-lg">
                      <div className="text-2xl">{cert.badge}</div>
                      <div>
                        <h5 className="font-semibold">{cert.name}</h5>
                        <p className="text-slate-400 text-sm">{cert.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-20">
          <motion.h3 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.5 }}
          >
            Technical Specifications
          </motion.h3>
          
          <div className="specs-tabs">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {Object.keys(technicalSpecs).map((tabId) => (
                <button
                  key={tabId}
                  onClick={() => handleTabClick(tabId)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === tabId 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {technicalSpecs[tabId as keyof typeof technicalSpecs].title}
                </button>
              ))}
            </div>
            
            <motion.div 
              className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.8 }}
            >
              {technicalSpecs[activeTab as keyof typeof technicalSpecs].categories.map((category, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  <h5 className="text-xl font-semibold mb-4 text-blue-300">{category.name}</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="flex justify-between p-3 bg-slate-700/30 rounded-lg">
                        <span className="text-slate-300">{spec.label}</span>
                        <span className="font-semibold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Innovation & Technology */}
        <div>
          <motion.h3 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 4.0 }}
          >
            Innovation & Future Technology
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {innovations.map((innovation, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ y: -10, scale: 1.02 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 4.2 + index * 0.1 }}
              >
                <div className="text-4xl mb-4">{innovation.icon}</div>
                <h4 className="text-xl font-semibold mb-3 text-purple-300">{innovation.title}</h4>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">{innovation.description}</p>
                <ul className="space-y-2">
                  {innovation.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-slate-400 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TechnicalCapabilities;