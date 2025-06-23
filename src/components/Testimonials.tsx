import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dra. Marina Silva",
      specialty: "Dermatologia",
      location: "São Paulo - SP",
      photo: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      content: "A DamaFace transformou completamente meu consultório. Em 6 meses, meu faturamento dobrou e agora tenho uma agenda sempre lotada. A Dama.IA realmente funciona como uma secretária 24h!",
      results: "Faturamento: +120% em 6 meses"
    },
    {
      name: "Dra. Ana Costa",
      specialty: "Biomedicina Estética",
      location: "Rio de Janeiro - RJ",
      photo: "https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      content: "O que mais me impressionou foi a liberdade que tenho para manter minha identidade profissional, mas com toda a estrutura de uma grande clínica. O DamaPay acabou com a inadimplência!",
      results: "Inadimplência: 0% há 8 meses"
    },
    {
      name: "Dra. Patricia Oliveira",
      specialty: "Medicina Estética",
      location: "Belo Horizonte - MG",
      photo: "https://images.pexels.com/photos/7108344/pexels-photo-7108344.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      content: "A economia na central de compras já paga a mensalidade da DamaFace. Além disso, o networking com outras profissionais de alta performance é incrível. Nunca me senti tão segura para crescer!",
      results: "Economia: R$ 4.500/mês em produtos"
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
            O Que Nossas <span className="text-primary">Licenciadas de Alta Performance</span> Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Histórias reais de transformação e crescimento exponencial com a metodologia DamaFace.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Background Quote */}
              <div className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                <Quote size={60} />
              </div>

              {/* Profile Section */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-primary/20"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1">
                    <Star className="text-white" size={12} fill="currentColor" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-primary font-medium">
                    {testimonial.specialty}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400"
                    size={16}
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </blockquote>

              {/* Results Badge */}
              <div className="bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                {testimonial.results}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <motion.div 
          className="mt-16 bg-white rounded-2xl p-12 shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">Taxa de Satisfação</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">+150%</div>
              <div className="text-gray-600">Crescimento Médio</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24h</div>
              <div className="text-gray-600">Suporte Disponível</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Profissionais Impactadas</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;