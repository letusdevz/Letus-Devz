import React, { useState } from 'react';
import { X, MessageSquare, Send, CheckCircle2, Phone, Mail, Sparkles, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultPackage?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultService = '',
  defaultPackage = ''
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(defaultService || 'Software & Web');
  const [message, setMessage] = useState(
    defaultPackage ? `Gostaria de solicitar informações sobre o ${defaultPackage}.` : ''
  );
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Olá LETUS DEV! Meu nome é ${name || 'um cliente'}. ` +
      `Gostaria de conversar sobre: ${service}. ` +
      (message ? `Mensagem: ${message}` : '')
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\+/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0a2a4a]/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#0D1B3E] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-xl bg-[#0D1B3E]/80 text-white/60 hover:text-white hover:bg-[#0D1B3E] transition-colors border border-white/10"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 space-y-1.5 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00C896]/10 border border-[#00C896]/30 text-[#00C896] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Fale Connosco
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white font-['Outfit']">
            Iniciar Projeto com a LETUS DEV
          </h3>
          <p className="text-xs text-white/60">
            Diga-nos o que precisa e a nossa equipa de engenharia responderá prontamente.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 bg-[#071525] rounded-2xl border border-[#00C896]/30 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#00C896]/20 text-[#00C896] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-black text-white font-['Outfit']">Pedido Enviado com Sucesso!</h4>
            <p className="text-xs text-white/80">
              Obrigado, {name || 'parceiro'}. Entraremos em contacto brevemente através do número ou e-mail fornecido.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="w-full py-3 rounded-xl bg-[#00C896] text-[#0D1B3E] font-black text-xs uppercase tracking-wider hover:bg-[#00b386] shadow-md"
            >
              Fechar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-white/80">Seu Nome *</label>
              <input
                type="text"
                required
                placeholder="Ex: Alberto Sitoe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#071525] border border-white/10 text-white text-xs placeholder-white/30 focus:outline-none focus:border-[#00C896] font-medium"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-white/80">WhatsApp / Telefone *</label>
                <input
                  type="tel"
                  required
                  placeholder="+258 84..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#071525] border border-white/10 text-white text-xs placeholder-white/30 focus:outline-none focus:border-[#00C896] font-medium"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-white/80">E-mail *</label>
                <input
                  type="email"
                  required
                  placeholder="seu@email.co.mz"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#071525] border border-white/10 text-white text-xs placeholder-white/30 focus:outline-none focus:border-[#00C896] font-medium"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-white/80">Área de Interesse</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#071525] border border-white/10 text-white text-xs focus:outline-none focus:border-[#00C896] font-medium"
              >
                <option value="Software & Web">Software & Web (Websites, Apps, ERP/CRM)</option>
                <option value="Gestão de Dados">Gestão de Dados (BI, Dashboards, Automação)</option>
                <option value="Design">Design UI/UX & Identidade Visual</option>
                <option value="Suporte Técnico">Suporte Técnico & Cloud</option>
                <option value="Pacote Start">Pacote Start</option>
                <option value="Pacote Profissional">Pacote Profissional</option>
                <option value="Pacote Enterprise">Pacote Enterprise</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-white/80">Mensagem ou Descrição</label>
              <textarea
                rows={3}
                placeholder="Breve resumo da sua necessidade..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#071525] border border-white/10 text-white text-xs placeholder-white/30 focus:outline-none focus:border-[#00C896] resize-none font-medium"
              />
            </div>

            <div className="pt-2 space-y-2.5">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-[#00C896] hover:bg-[#00b386] text-[#0D1B3E] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#00C896]/20 transition-all disabled:opacity-50"
              >
                <Send className="w-4 h-4 stroke-[2.5]" />
                <span>{isSubmitting ? 'A enviar...' : 'Enviar Pedido de Contacto'}</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="w-full py-3 rounded-xl bg-[#0D1B3E]/80 hover:bg-[#0D1B3E] text-[#00C896] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border border-white/10 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Conversar no WhatsApp em Tempo Real</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-white/60 pt-1 font-medium">
              <ShieldCheck className="w-3 h-3 text-[#00C896]" />
              <span>Resposta em menos de 2 horas úteis • Inhambane, Moçambique</span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
