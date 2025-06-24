'use client';

import React, { useState, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Shield, Star } from 'lucide-react';
import axios from 'axios';

// Função de máscara de telefone
function phoneMask(value: string): string {
  const digits = value.replace(/\D/g, '');
  if (digits.length <= 2) return digits;

  const ddd = digits.slice(0, 2);
  const rest = digits.slice(2);

  if (rest.length <= 8) {
    return `(${ddd}) ${rest.slice(0, 4)}${rest.length > 4 ? '-' + rest.slice(4) : ''}`;
  } else {
    return `(${ddd}) ${rest.slice(0, 5)}-${rest.slice(5, 9)}`;
  }
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    faturamento: '',
    especialidade: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    axios.post('https://n8n-n8n.i4khe5.easypanel.host/webhook/lp-licenciamento', formData)
      .then(() => {
        console.log('Form submitted:', formData);
        alert('Obrigado! Entraremos em contato em breve.');

        setTimeout(() => {
          window.location.href = 'https://calendly.com/damafacefranchising/reuniao';
        }, 3000);
      })
      .catch((error) => {
        console.error('Erro ao enviar formulário:', error);
        alert('Ocorreu um erro ao enviar o formulário. Tente novamente.');
      });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'telefone') {
      setFormData({ ...formData, telefone: phoneMask(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <motion.div
      id="contact-form"
      className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-200"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <Star className="text-primary" size={24} />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Candidate-se ao Licenciamento
        </h3>
        <p className="text-gray-600">
          Preencha os dados para sua reunião estratégica
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
            Nome Completo *
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            value={formData.nome}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            placeholder="Dra. Seu Nome"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            E-mail Profissional *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            placeholder="seu@email.com"
          />
        </div>

        <div>
          <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
            WhatsApp *
          </label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            required
            value={formData.telefone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            placeholder="(11) 99999-9999"
          />
        </div>

        <div>
          <label htmlFor="especialidade" className="block text-sm font-medium text-gray-700 mb-2">
            Especialidade *
          </label>
          <select
            id="especialidade"
            name="especialidade"
            required
            value={formData.especialidade}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
          >
            <option value="">Selecione sua especialidade</option>
            <option value="dermatologia">Dermatologia</option>
            <option value="biomedicina">Biomedicina</option>
            <option value="medicina-estetica">Medicina Estética</option>
            <option value="farmaceutica-esteta">Farmacêutica Esteta</option>
            <option value="enfermeira">Enfermeira</option>
            <option value="biologa-esteta">Bióloga Esteta</option>
            <option value="dentista">Dentista</option>
            <option value="outras">Outras</option>
          </select>
        </div>

        <div>
          <label htmlFor="faturamento" className="block text-sm font-medium text-gray-700 mb-2">
            Faturamento Mensal Atual
          </label>
          <select
            id="faturamento"
            name="faturamento"
            value={formData.faturamento}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
          >
            <option value="">Selecione uma faixa</option>
            <option value="ate-20k">Até R$ 20.000</option>
            <option value="20k-50k">R$ 20.000 - R$ 50.000</option>
            <option value="50k-100k">R$ 50.000 - R$ 100.000</option>
            <option value="100k-mais">Acima de R$ 100.000</option>
          </select>
        </div>

        <motion.button
          type="submit"
          className="w-full bg-primary hover:bg-primary-dark text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Agendar Minha Reunião Estratégica</span>
          <Send size={20} />
        </motion.button>

        <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mt-4">
          <Shield size={16} />
          <span>Seus dados estão 100% seguros conosco</span>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
