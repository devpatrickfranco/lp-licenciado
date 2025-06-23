import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Calendar, Target, ArrowRight } from 'lucide-react';

const Investment = () => {
  const investmentDetails = [
    {
      icon: DollarSign,
      label: "Taxa de Adesão",
      value: "Isenta",
      highlight: true,
      description: "Zero investimento inicial"
    },
    {
      icon: Calendar,
      label: "Mensalidade",
      value: "R$ 2.500",
      highlight: false,
      description: "Valor fixo mensal"
    },
    {
      icon: Target,
      label: "Contrato",
      value: "12 meses",
      highlight: false,
      description: "Prazo mínimo de parceria"
    },
    {
      icon: TrendingUp,
      label: "ROI Potencial",
      value: "300-500%",
      highlight: true,
      description: "Retorno sobre investimento"
    }
  ];

  const revenueBreakdown = [
    {
      source: "Receita com Procedimentos",
      potential: "R$ 80.000 - R$ 120.000/mês",
      description: "Aumento médio de 40-60% na receita de procedimentos"
    },
    {
      source: "Economia em Produtos",
      potential: "R$ 8.000 - R$ 15.000/mês",
      description: "Economia de 20-30% nos custos com fornecedores"
    },
    {
      source: "Eficiência Operacional",
      potential: "R$ 5.000 - R$ 10.000/mês",
      description: "Redução de custos operacionais com automação"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Investimento <span className="text-primary">Acessível</span>, Retorno <span className="text-primary">Imediato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Um modelo de negócio inteligente que se paga sozinho já no primeiro mês, 
            gerando resultados exponenciais para seu consultório.
          </p>
        </motion.div>

        {/* Investment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {investmentDetails.map((item, index) => (
            <motion.div
              key={index}
              className={`text-center p-8 rounded-2xl transition-all duration-300 ${
                item.highlight 
                  ? 'bg-gradient-to-br from-primary to-primary-dark text-white shadow-xl shadow-primary/25' 
                  : 'bg-gray-50 text-gray-900 hover:shadow-lg'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={`inline-flex p-4 rounded-full mb-4 ${
                item.highlight ? 'bg-white/20' : 'bg-primary/10'
              }`}>
                <item.icon className={item.highlight ? 'text-white' : 'text-primary'} size={32} />
              </div>
              <h3 className={`text-lg font-medium mb-2 text-gray-800 ${item.highlight ? 'text-white/90' : 'text-gray-600'}`}>
                {item.label}
              </h3>
              <div className="text-3xl font-bold mb-2">
                {item.value}
              </div>
              <p className={`text-sm ${item.highlight ? 'text-white/80' : 'text-gray-500'}`}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Revenue Potential */}
        <motion.div 
          className="bg-gradient-to-br from-gray-50 to-neutral rounded-2xl p-12 mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Potencial de Receita Mensal
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Veja como a DamaFace pode transformar a performance financeira do seu consultório
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {revenueBreakdown.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {item.source}
                </h4>
                <div className="text-2xl font-bold text-primary mb-4">
                  {item.potential}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        
      </div>
    </section>
  );
};

export default Investment;