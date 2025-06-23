import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, Trophy } from 'lucide-react';

const FinalCTA = () => {
  const urgencyPoints = [
    {
      icon: Clock,
      text: "Vagas limitadas para garantir qualidade do atendimento"
    },
    {
      icon: Trophy,
      text: "Apenas profissionais qualificadas e comprometidas"
    },
    {
      icon: CheckCircle,
      text: "Processo seletivo para manter o padrão de excelência"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/3912979/pexels-photo-3912979.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop"
          alt="Success and achievement"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 left-20 text-primary/20"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Trophy size={50} />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
              Sua Jornada para a{' '}
              <span className="text-primary">Excelência</span>{' '}
              Começa <span className="text-accent">Aqui</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Não perca a oportunidade de transformar seu consultório em uma 
              operação de alta performance com a metodologia mais avançada do mercado.
            </p>
          </motion.div>

          {/* Urgency Points */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {urgencyPoints.map((point, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="bg-primary/20 p-2 rounded-full">
                  <point.icon className="text-primary" size={20} />
                </div>
                <span className="text-white text-sm md:text-base font-medium">
                  {point.text}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="group bg-primary hover:bg-primary-dark text-white px-12 py-6 rounded-2xl font-bold text-xl md:text-2xl transition-all duration-300 flex items-center space-x-4 mx-auto shadow-2xl hover:shadow-primary/50 transform hover:scale-105 mb-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>Quero Fazer Parte da DamaFace!</span>
              <ArrowRight className="transition-transform group-hover:translate-x-2" size={24} />
            </motion.button>
            
            <p className="text-gray-400 text-lg">
              Preencha o formulário e agende sua <span className="text-accent font-semibold">reunião estratégica</span> gratuita
            </p>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-400">Livre de Riscos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-400">Suporte Premium</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">ROI</div>
              <div className="text-gray-400">Garantido</div>
            </div>
          </motion.div>

          {/* Final Message */}
          <motion.div 
            className="mt-16 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm rounded-2xl p-8 border border-primary/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-white text-lg md:text-xl leading-relaxed">
              <strong className="text-primary">Atenção:</strong> Este não é um programa para todos. 
              Buscamos apenas profissionais sérias, comprometidas com a excelência e prontas 
              para investir no crescimento exponencial de seus consultórios.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;