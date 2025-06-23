import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const Differentials = () => {
  const comparisons = [
    {
      feature: "Personalização da Marca",
      damaface: "Marca forte com o seu nome",
      others: "Marca engessada, sem personalização",
      damafaceIcon: Check,
      othersIcon: X
    },
    {
      feature: "Taxa de Adesão",
      damaface: "Sem taxa de adesão",
      others: "Taxas de R$ 15k a R$ 100k",
      damafaceIcon: Check,
      othersIcon: X
    },
    {
      feature: "Sistema de Gestão",
      damaface: "CRM com IA próprio (Dama.AI)",
      others: "Uso de ferramentas genéricas",
      damafaceIcon: Check,
      othersIcon: X
    },
    {
      feature: "Forma de Recebimento",
      damaface: "Recebimento à vista em 24x",
      others: "Vendas com inadimplência comum",
      damafaceIcon: Check,
      othersIcon: X
    },
    {
      feature: "Suporte e Mentoria",
      damaface: "Central de atendimento 24h",
      others: "Suporte técnico limitado",
      damafaceIcon: Check,
      othersIcon: X
    },
    {
      feature: "Flexibilidade",
      damaface: "Pertencimento com liberdade",
      others: "Controle e rigidez de marca",
      damafaceIcon: Check,
      othersIcon: X
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            DamaFace: A Escolha <span className="text-primary">Inteligente</span> para o Seu Crescimento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Compare e veja por que profissionais de alta performance escolhem 
            a DamaFace ao invés de franquias tradicionais.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="grid grid-cols-3 bg-gradient-to-r from-primary to-primary-dark text-white">
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold">Critério</h3>
              </div>
              <div className="p-6 text-center border-l border-white/20">
                <h3 className="text-xl font-bold">DamaFace Licenciamento</h3>
              </div>
              <div className="p-6 text-center border-l border-white/20">
                <h3 className="text-xl font-bold">Outras Franquias/Clubes</h3>
              </div>
            </div>

            {/* Comparison Rows */}
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-primary/5 transition-colors duration-300`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6 border-b border-gray-200">
                  <h4 className="font-semibold text-gray-900">{item.feature}</h4>
                </div>
                <div className="p-6 border-b border-l border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-1 rounded-full">
                      <item.damafaceIcon className="text-green-600" size={16} />
                    </div>
                    <span className="text-gray-800 font-medium">{item.damaface}</span>
                  </div>
                </div>
                <div className="p-6 border-b border-l border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="bg-red-100 p-1 rounded-full">
                      <item.othersIcon className="text-red-600" size={16} />
                    </div>
                    <span className="text-gray-600">{item.others}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Faça a Escolha Certa para Seu Futuro Profissional
              </h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Junte-se a profissionais que escolheram crescer com liberdade, 
                tecnologia de ponta e resultados comprovados.
              </p>
              <motion.button 
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Quero Conhecer Mais Sobre a DamaFace
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;