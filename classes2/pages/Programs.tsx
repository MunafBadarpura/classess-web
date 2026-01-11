import React from 'react';
import { PROGRAMS } from '../constants';
import WaveSeparator from '../components/WaveSeparator';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';

const Programs: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-20">
      <section className="bg-brand-blue pt-20 pb-36 md:pb-48 text-center relative text-white">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Programs</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">Structured courses designed to help you excel in your exams and build a strong foundation.</p>
        </div>
        <WaveSeparator position="bottom" color="fill-gray-50" />
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {PROGRAMS.map((program, index) => (
              <div 
                key={program.id} 
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 bg-white p-8 md:p-12 rounded-4xl shadow-lg border border-gray-100`}
              >
                <div className="lg:w-1/2 w-full">
                  <div className={`${program.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md`}>
                    {program.icon}
                  </div>
                  <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">{program.title}</h2>
                  <h3 className="text-xl text-brand-blue font-semibold mb-4">{program.grade}</h3>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                    <h4 className="font-bold text-gray-900 mb-4">What we cover:</h4>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {program.subjects.map((subj, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="text-green-500 w-5 h-5 mr-2 mt-0.5" />
                          <span className="text-gray-700">{subj}</span>
                        </li>
                      ))}
                      <li className="flex items-start">
                         <Check className="text-green-500 w-5 h-5 mr-2 mt-0.5" />
                         <span className="text-gray-700">Regular Tests</span>
                      </li>
                      <li className="flex items-start">
                         <Check className="text-green-500 w-5 h-5 mr-2 mt-0.5" />
                         <span className="text-gray-700">Doubt Sessions</span>
                      </li>
                    </ul>
                  </div>

                  <Button onClick={() => navigate('/contact')}>Enroll in {program.title}</Button>
                </div>
                
                <div className="lg:w-1/2 w-full">
                  <img 
                    src={`https://picsum.photos/seed/${program.id}edu/800/600`} 
                    alt={program.title} 
                    className="rounded-3xl shadow-xl w-full h-[300px] lg:h-[400px] object-cover hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;