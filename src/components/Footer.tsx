import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Shield, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  const [showPolitica, setShowPolitica] = useState(false);
  const [showTermos, setShowTermos] = useState(false);

  // Conteúdo dos modais (pode ser movido para arquivos separados)
 const politicaContent = (
  <div className="prose prose-sm max-w-none">
    <h2 className="text-xl font-bold mb-4 text-gray-900">Política de Privacidade – Licenciamento DamaFace</h2>
    <p className="text-gray-600 mb-6">Última atualização: 23/06/2025</p>
    
    <p className="text-gray-700 mb-6">
      A DamaFace valoriza sua privacidade e transparência. Esta política descreve como coletamos, usamos e protegemos as informações pessoais dos visitantes da página licenciamento.damaface.com.br. Ao utilizar este Site, você concorda com os termos abaixo.
    </p>

    <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-900">1. Informações Coletadas</h3>
    <h4 className="font-medium mb-2 text-gray-800">1.1 Dados Fornecidos por Você</h4>
    <p className="text-gray-700 mb-4">
      Coletamos informações quando você:
    </p>
    <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-1">
      <li>Preenche formulários (ex.: "Quero Ser Licenciada"): nome, e-mail, telefone, área de atuação (médica/biomédica), faturamento mensal estimado.</li>
      <li>Solicita atendimento via chat ou e-mail.</li>
    </ul>

    <h4 className="font-medium mb-2 text-gray-800">1.2 Dados Automáticos</h4>
    <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-1">
      <li>Navegação: Endereço IP, tipo de navegador, páginas acessadas, tempo de visita (via cookies e Google Analytics).</li>
      <li>Dispositivo: Sistema operacional, resolução de tela (para otimizar a experiência).</li>
    </ul>

    <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-900">2. Finalidades do Uso dos Dados</h3>
    <p className="text-gray-700 mb-2">
      As informações são utilizadas para:
    </p>
    <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-1">
      <li>Processar solicitações de licenciamento e enviar materiais explicativos.</li>
      <li>Melhorar a experiência no Site (ex.: personalizar conteúdo com base no perfil profissional).</li>
      <li>Comunicações de marketing (e-mails sobre novidades, descontos em suprimentos ou eventos da rede) — sempre com seu consentimento.</li>
      <li>Segurança: Prevenir fraudes e garantir a integridade do Site.</li>
    </ul>

    <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-900">3. Compartilhamento com Terceiros</h3>
    <p className="text-gray-700 mb-4">
      <span className="font-medium">Parceiros estratégicos:</span> Fornecedores da Central de Compras (ex.: Merz, Galderma) apenas para ofertas direcionadas, mediante autorização.
    </p>
    <p className="text-gray-700 mb-4">
      <span className="font-medium">Plataformas de pagamento (DamaPay):</span> Dados necessários para transações financeiras.
    </p>
    <p className="text-gray-700 mb-4">
      <span className="font-medium">Suporte técnico:</span> Empresas contratadas para manutenção do Site (com obrigação de confidencialidade).
    </p>
    <p className="text-gray-700 mb-4">
      Nunca vendemos seus dados a terceiros não autorizados.
    </p>

    <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-900">4. Cookies e Tecnologias Semelhantes</h3>
    <p className="text-gray-700 mb-2">
      <span className="font-medium">Cookies essenciais:</span> Mantêm a sessão ativa durante a navegação.
    </p>
    <p className="text-gray-700 mb-2">
      <span className="font-medium">Cookies de desempenho:</span> Analisam tráfego (Google Analytics) para melhorar o Site.
    </p>
    <p className="text-gray-700 mb-4">
      <span className="font-medium">Como gerenciar:</span> Você pode desativar cookies nas configurações do navegador, mas isso pode limitar funcionalidades.
    </p>

    <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-900">5. Direitos do Usuário</h3>
    <p className="text-gray-700 mb-2">
      Você pode:
    </p>
    <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-1">
      <li>✅ Acessar, corrigir ou solicitar a exclusão dos seus dados.</li>
      <li>✅ Revogar consentimento para comunicações de marketing (em qualquer e-mail nosso).</li>
      <li>✅ Solicitar portabilidade dos dados para outro serviço.</li>
    </ul>
    <p className="text-gray-700 mb-4">
      Para exercer esses direitos, envie um e-mail para <span className="font-medium">contato@damaface.com.br</span> com o assunto: "Privacidade – Licenciamento".
    </p>

    <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-900">6. Segurança dos Dados</h3>
    <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-1">
      <li>Criptografia SSL em todas as páginas.</li>
      <li>Armazenamento em servidores seguros com acesso restrito.</li>
    </ul>

    <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-900">7. Alterações na Política</h3>
    <p className="text-gray-700 mb-4">
      Esta política pode ser atualizada. A versão mais recente estará sempre disponível neste link, com a data de revisão destacada.
    </p>

    <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-900">8. Contato</h3>
    <p className="text-gray-700 mb-2">
      Dúvidas sobre esta política? Entre em contato:
    </p>
    <p className="text-gray-700 mb-1">
      <span className="font-medium">E-mail:</span> contato@damaface.com.br
    </p>
    <p className="text-gray-700">
      <span className="font-medium">Endereço físico:</span>  R. Gustavo Ambrust 36 - Campinas - SP
    </p>
  </div>
);

const termosContent = (
  <div className="prose prose-sm max-w-none">
    <h2 className="text-xl font-bold mb-4 text-gray-900">Termos de Serviço – Licenciamento DamaFace</h2>
    <p className="text-gray-600 mb-6">Última atualização: 23/06/2025</p>
    
    <p className="text-gray-700 mb-6">
      Bem-vinda(o) aos Termos de Serviço da plataforma licenciamento.damaface.com.br, operada pela DamaFace. Estes Termos regem seu acesso e uso do Site e dos serviços de licenciamento oferecidos. Ao utilizar o Site, você concorda integralmente com estas condições.
    </p>

    <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-900">1. Aceitação dos Termos</h3>
    <h4 className="font-medium mb-2 text-gray-800">1.1</h4>
    <p className="text-gray-700 mb-4">
      Ao acessar, preencher formulários ou utilizar qualquer serviço disponível no Site, você confirma que:
    </p>
    <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-1">
      <li>É uma profissional da área de saúde (médica ou biomédica) atuando em conformidade com as leis brasileiras.</li>
      <li>Leu, compreendeu e aceitou estes Termos e nossa Política de Privacidade.</li>
    </ul>

    <h4 className="font-medium mb-2 text-gray-800">1.2</h4>
    <p className="text-gray-700 mb-6">
      Caso não concorde, não utilize o Site.
    </p>

    <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-900">2. Serviços Oferecidos</h3>
    <h4 className="font-medium mb-2 text-gray-800">2.1</h4>
    <p className="text-gray-700 mb-2">
      O Site licenciamento.damaface.com.br é uma plataforma de contratação do Programa de Licenciamento DamaFace, que inclui:
    </p>
    <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-1">
      <li>Uso da marca "DamaFace by Dra. [Nome]".</li>
      <li>Acesso à Central de Compras com descontos.</li>
      <li>Utilização das plataformas DamaPay e Dama.IA.</li>
    </ul>

    <h4 className="font-medium mb-2 text-gray-800">2.2</h4>
    <p className="text-gray-700 mb-6">
      A contratação do licenciamento está sujeita a:
    </p>
    <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Pagamento da mensalidade (R$ 2.500,00).</li>
      <li>Aceitação do Contrato de Licenciamento (enviado após pré-cadastro).</li>
    </ul>

    <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-900">3. Obrigações da Usuária</h3>
    <h4 className="font-medium mb-2 text-gray-800">3.1</h4>
    <p className="text-gray-700 mb-2">
      Você concorda em:
    </p>
    <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-1">
      <li>Fornecer informações verdadeiras e atualizadas durante o cadastro.</li>
      <li>Utilizar os serviços apenas para fins profissionais legais, em conformidade com o Código de Ética Médica e leis vigentes.</li>
      <li>Não compartilhar logins, acessos ou benefícios (ex.: descontos em suprimentos) com terceiros não licenciados.</li>
    </ul>

    <h4 className="font-medium mb-2 text-gray-800">3.2</h4>
    <p className="text-gray-700 mb-2">
      É proibido:
    </p>
    <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Usar a marca DamaFace para práticas ilegais ou antiéticas.</li>
      <li>Copiar, modificar ou distribuir conteúdos do Site sem autorização.</li>
      <li>Utilizar robôs, spiders ou outros métodos automatizados para extrair dados.</li>
    </ul>

    <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-900">4. Propriedade Intelectual</h3>
    <h4 className="font-medium mb-2 text-gray-800">4.1</h4>
    <p className="text-gray-700 mb-4">
      Todo conteúdo do Site (textos, imagens, logotipos, plataformas Dama.AI e DamaPay) é propriedade exclusiva da DamaFace e protegido por leis de direitos autorais.
    </p>

    <h4 className="font-medium mb-2 text-gray-800">4.2</h4>
    <p className="text-gray-700 mb-6">
      A licença não transfere direitos de propriedade. Você pode usar a marca "DamaFace by Dra. [Nome]" apenas durante a vigência do contrato.
    </p>

    <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-900">5. Pagamentos e Cancelamento</h3>
    <h4 className="font-medium mb-2 text-gray-800">5.1 Mensalidade:</h4>
    <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-1">
      <li>Cobrança recorrente via cartão de crédito ou boleto.</li>
      <li>Não reembolsável, exceto em casos previstos no Contrato de Licenciamento.</li>
    </ul>

    <h4 className="font-medium mb-2 text-gray-800">5.2 Cancelamento:</h4>
    <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-1">
      <li>Deve ser solicitado com 30 dias de antecedência via e-mail (financeiro@damaface.com.br).</li>
      <li>Após o cancelamento, o uso da marca e benefícios será imediatamente suspenso.</li>
    </ul>

    <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-900">6. Limitação de Responsabilidade</h3>
    <h4 className="font-medium mb-2 text-gray-800">6.1</h4>
    <p className="text-gray-700 mb-2">
      A DamaFace não se responsabiliza por:
    </p>
    <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-1">
      <li>Danos decorrentes de uso indevido dos serviços por parte da licenciada.</li>
      <li>Interrupções temporárias do Site por manutenção ou falhas técnicas.</li>
      <li>Resultados financeiros ou profissionais obtidos com o licenciamento (variações individuais).</li>
    </ul>

    <h4 className="font-medium mb-2 text-gray-800">6.2 Garantias:</h4>
    <p className="text-gray-700 mb-6">
      Os serviços são fornecidos "no estado em que se encontram", sem garantias implícitas.
    </p>

    <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-900">7. Modificações nos Termos</h3>
    <h4 className="font-medium mb-2 text-gray-800">7.1</h4>
    <p className="text-gray-700 mb-4">
      Reservamo-nos o direito de atualizar estes Termos. Alterações serão comunicadas por e-mail e publicadas no Site com 15 dias de antecedência.
    </p>

    <h4 className="font-medium mb-2 text-gray-800">7.2</h4>
    <p className="text-gray-700 mb-6">
      O uso contínuo do Site após as modificações implica aceitação.
    </p>

    <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-900">8. Lei Aplicável e Foro</h3>
    <h4 className="font-medium mb-2 text-gray-800">8.1</h4>
    <p className="text-gray-700 mb-4">
      Estes Termos são regidos pelas leis brasileiras.
    </p>

    <h4 className="font-medium mb-2 text-gray-800">8.2</h4>
    <p className="text-gray-700 mb-6">
      Eventuais disputas serão resolvidas no Foro da Comarca de [Cidade-Sede da DamaFace].
    </p>

    <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-900">9. Contato</h3>
    <p className="text-gray-700 mb-2">
      Dúvidas sobre estes Termos? Entre em contato:
    </p>
    <p className="text-gray-700 mb-1">
      <span className="font-medium">E-mail:</span> juridico@damaface.com.br
    </p>
    <p className="text-gray-700">
      <span className="font-medium">Endereço:</span> R. Gustavo Ambrust 36 - Campinas - SP
    </p>
  </div>
);

  // Componente Modal reutilizável
  const Modal = ({ 
    isOpen, 
    onClose, 
    title, 
    children 
  }: {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
  }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Overlay */}
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
          onClick={onClose}
        ></div>
        
        {/* Modal */}
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div 
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            {/* Header */}
            <div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-between items-center border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900" id="modal-headline">
                {title}
              </h3>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-500 focus:outline-none"
                onClick={onClose}
              >
                <span className="sr-only">Fechar</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Body */}
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              {children}
            </div>
            
            {/* Footer */}
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse border-t border-gray-200">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:ml-3 sm:w-auto sm:text-sm"
                onClick={onClose}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://damaface.com.br/LOGO-DAMAFACE-HORIZONTAL-BRANCO.png"
              alt="DamaFace Logo"
              className="h-12 mb-6"
            />
            <p className="text-gray-400 leading-relaxed max-w-md mb-6">
              Transformando consultórios em operações de alta performance através 
              de tecnologia avançada, metodologia comprovada e uma comunidade 
              de profissionais de excelência.
            </p>
            <div className="flex items-center space-x-4">
              <div className="bg-primary/20 p-2 rounded-full">
                <Shield className="text-primary" size={20} />
              </div>
              <span className="text-sm text-gray-400">
                Dados 100% protegidos e confidenciais
              </span>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }} 
          >
            <h4 className="text-lg font-semibold mb-6 text-primary">
              Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-accent" size={16} />
                <span className="text-gray-400 text-sm">contato@damaface.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-accent" size={16} />
                <span className="text-gray-400 text-sm">(19) 99553-4809</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-accent" size={16} />
                <span className="text-gray-400 text-sm">Campinas - SP</span>
              </div>
            </div>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-primary">Legal</h4>
            <div className="space-y-3">
              <button
                onClick={() => setShowPolitica(true)}
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group w-full text-left p-0 bg-transparent border-0"
              >
                <FileText className="group-hover:text-accent transition-colors" size={16} />
                <span className="text-sm">Política de Privacidade</span>
              </button>

              <button
                onClick={() => setShowTermos(true)}
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group w-full text-left p-0 bg-transparent border-0"
              >
                <FileText className="group-hover:text-accent transition-colors" size={16} />
                <span className="text-sm">Termos de Uso</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            © 2025 DamaFace. Todos os direitos reservados. 
            <span className="text-accent font-medium ml-2">
              Feito com ❤️ para profissionais de alta performance.
            </span>
          </p>
        </motion.div>
      </div>

      {/* Modais */}
      <Modal 
        isOpen={showPolitica}
        onClose={() => setShowPolitica(false)}
        title="Política de Privacidade"
      >
        {politicaContent}
      </Modal>

      <Modal 
        isOpen={showTermos}
        onClose={() => setShowTermos(false)}
        title="Termos de Uso"
      >
        {termosContent}
      </Modal>
    </footer>
  );
};

export default Footer;