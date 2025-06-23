import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Calendar, Users, DollarSign, AlertCircle, Target } from 'lucide-react';

const PainPoints = () => {
  const painPoints = [
    {
      icon: DollarSign,
      title: "Margem apertada?",
      description: "Custos altos com pouco retorno sobre investimento"
    },
    {
      icon: TrendingDown,
      title: "Falta de estrutura para escalar?",
      description: "Processos manuais que limitam o crescimento"
    },
    {
      icon: Calendar,
      title: "Agenda vazia ou inconsistente?",
      description: "Dificuldade em manter fluxo constante de pacientes"
    },
    {
      icon: Users,
      title: "Pacientes que não retornam?",
      description: "Baixa fidelização e lifetime value dos clientes"
    },
    {
      icon: AlertCircle,
      title: "Sem autoridade de marca?",
      description: "Dificuldade para se destacar da concorrência"
    },
    {
      icon: Target,
      title: "Marketing que não converte?",
      description: "Investimento em publicidade sem resultados consistentes"
    }
  ];

  return (
    <section className="py-20 bg-neutral">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sua Clínica Enfrenta <span className="text-primary">Esses Desafios?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A maioria das profissionais de alta qualificação enfrentam os mesmos obstáculos 
            que impedem o crescimento exponencial de seus consultórios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-primary/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-red-50 p-3 rounded-full group-hover:bg-red-100 transition-colors">
                  <point.icon className="text-red-500" size={24} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-12 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            A DamaFace Oferece a Solução Completa
          </h3>
          <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Escale seu consultório sem as amarras de uma franquia. 
            Mantenha sua liberdade, potencialize seus resultados e construa 
            um negócio verdadeiramente escalável com nossa metodologia comprovada.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPoints;