import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Crown, Sparkles } from 'lucide-react';
import ContactForm from './ContactForm';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop"
          alt="Professional medical consultation"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 left-10 text-primary/20"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Crown size={40} />
      </motion.div>
      
      <motion.div 
        className="absolute top-40 right-20 text-accent/30"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Sparkles size={32} />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Column - Content */}
          <motion.div 
            className="text-white space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <motion.div 
              className="mb-8 -mt-20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <img 
              src="https://damaface.com.br/LOGO-DAMAFACE-HORIZONTAL-BRANCO.png"
              alt="DamaFace Logo"
              className="h-12 md:h-16 "
              />
            </motion.div>
            
            {/* Headline */}
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-white">Dobre o</span>{' '}
              <span className="text-primary">Faturamento</span>{' '}
              <span className="text-white">do Seu Consultório</span>
            </motion.h1>
            
            <motion.h2 
              className="text-xl md:text-2xl font-light text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Sem Abrir Mão da Sua <span className="text-accent font-medium">Liberdade</span>
            </motion.h2>
            
            {/* Sub-headline */}
            <motion.p 
              className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Transforme seu consultório em uma clínica de alta performance com a autoridade, 
              tecnologia e gestão de uma grande rede, mantendo seu nome e estilo.
            </motion.p>
            
            {/* Benefits List */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              {[
                'Marca Premium com Seu Nome',
                'IA 24h para Gestão Completa',
                'Receba à Vista, Venda em 24x',
                'Central de Compras'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </motion.div>
            
            {/* CTA Button */}
            <motion.button 
              className="group bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-primary/25 hover:shadow-2xl transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>Quero Dobrar Meu Faturamento Agora!</span>
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
            </motion.button>
          </motion.div>
          
          {/* Right Column - Contact Form */}
          <motion.div 
            className="lg:pl-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;