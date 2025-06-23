import React from 'react';
import { motion } from 'framer-motion';
import { Crown, ShoppingCart, CreditCard, Bot, Users, Trophy } from 'lucide-react';

const ValueProposition = () => {
  const benefits = [
    {
      icon: Crown,
      title: "Chancela DamaFace",
      subtitle: "Autoridade e Posicionamento Premium",
      description: "Utilize a marca DamaFace com seu nome: 'DamaFace by Dra. [Seu Nome]'. Ganhe credibilidade instantânea e se posicione como referência no mercado de estética avançada.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: ShoppingCart,
      title: "Central de Compras Premium",
      subtitle: "Descontos Exclusivos de até 30%",
      description: "Acesso a descontos especiais nos principais laboratórios: Merz, Allergan, Rennova, VictaLab, Galderma, Pharmaestetica, Biometikal e Bioage. Reduza custos e aumente sua margem.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: CreditCard,
      title: "DamaPay",
      subtitle: "Receba à Vista, Venda em 24x",
      description: "Sistema exclusivo que elimina inadimplência e aumenta sua conversão. Ofereça parcelamento sem risco, receba o valor integral imediatamente e foque no que mais importa: seus pacientes.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Bot,
      title: "Dama.AI - Secretária Virtual 24h",
      subtitle: "Inteligência Artificial Completa",
      description: "Atendimento, qualificação, agendamento, follow-up e campanhas automatizados. Gestão de leads inteligente que trabalha 24/7 para maximizar suas oportunidades de negócio.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "Mentoria e Comunidade",
      subtitle: "Playbooks de Alta Performance",
      description: "Acesso exclusivo a estratégias validadas de vendas, marketing e gestão. Networking com profissionais de elite e mentorias diretas com os fundadores da DamaFace.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Trophy,
      title: "Suporte Personalizado",
      subtitle: "Crescimento Garantido",
      description: "Acompanhamento próximo da nossa equipe especializada. Implementação guiada, otimização contínua e suporte técnico premium para garantir seu sucesso desde o primeiro mês.",
      color: "from-pink-500 to-rose-500"
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
            O Que Você Recebe ao se Tornar uma{' '}
            <span className="text-primary">Licenciada DamaFace</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Um ecossistema completo para transformar seu consultório em uma operação 
            de alta performance, mantendo sua identidade e liberdade profissional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${benefit.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="text-white" size={32} />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <h4 className="text-lg font-medium text-primary mb-4">
                  {benefit.subtitle}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} 
                   style={{ padding: '2px' }}>
                <div className="w-full h-full bg-white rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-gray-50 to-neutral rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Tudo Isso por Apenas <span className="text-primary">R$ 2.500/mês</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Investimento que se paga sozinho já no primeiro mês. 
              Compare com franquias que cobram de R$ 15k a R$ 100k apenas para começar.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;