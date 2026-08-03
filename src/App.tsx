import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Award,
  Barcode,
  Calendar,
  Check,
  Eye,
  Gift,
  Globe,
  GraduationCap,
  Layers,
  Link,
  MessageSquare,
  Package,
  Palette,
  RefreshCw,
  Settings,
  TrendingUp,
} from "lucide-react"

export default function App() {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  const openWhatsApp = (message: string) => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1C1C1C] font-sans antialiased">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-serif font-bold tracking-tight text-[#111827]">
              Facilzap<span className="text-[#059669]">.</span>
            </span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-[#4B5563]">
            <a href="#pilares" className="hover:text-[#111827] transition-colors">Diferenciais</a>
            <a href="#mapa" className="hover:text-[#111827] transition-colors">O Mapa</a>
            <a href="#setup" className="hover:text-[#111827] transition-colors">Setup Inicial</a>
            <a href="#planos" className="hover:text-[#111827] transition-colors">Planos</a>
            <a href="#motor" className="hover:text-[#111827] transition-colors">Motor de Lucro</a>
          </nav>
          <Button
            className="h-auto rounded-full bg-[#111827] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#059669]"
            onClick={() => openWhatsApp("Olá! Quero iniciar o setup da Facilzap.")}
          >
            Iniciar Setup
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-6 border-b border-[#E5E0D8] overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#059669]/10 text-[#059669] text-xs font-semibold uppercase tracking-widest">
            Praticidade e Tecnologia
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-tight tracking-tight text-[#111827]">
            Facilzap: Sua Loja Digital <span className="italic font-normal text-[#059669]">Completa</span>
          </h1>
          <p className="text-lg md:text-xl text-[#4B5563] max-w-2xl mx-auto font-light leading-relaxed">
            Transforme seu negócio com uma plataforma robusta, layout profissional e acompanhamento especializado.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="h-auto rounded-full bg-[#059669] px-8 py-4 text-base font-medium text-white shadow-lg hover:bg-[#047857] hover:shadow-xl"
              onClick={() => scrollToId("planos")}
            >
              Escolher Plano e Iniciar
            </Button>
            <Button
              variant="outline"
              className="h-auto rounded-full border-[#111827] px-8 py-4 text-base font-medium text-[#111827] hover:bg-[#111827] hover:text-white"
              onClick={() => scrollToId("mapa")}
            >
              Conhecer o Processo
            </Button>
          </div>
        </div>
      </section>

      {/* Pilares / Filosofia (Grid Estilo Editorial) */}
      <section id="pilares" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-[#E5E0D8] shadow-sm hover:border-[#059669] transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#F3F4F6] flex items-center justify-center text-[#059669] mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-medium mb-3 text-[#111827]">Clareza</h3>
            <p className="text-[#6B7280] leading-relaxed">
              Uma visão transparente e estruturada da sua operação de vendas.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#E5E0D8] shadow-sm hover:border-[#059669] transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#F3F4F6] flex items-center justify-center text-[#059669] mb-6">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-medium mb-3 text-[#111827]">Organização</h3>
            <p className="text-[#6B7280] leading-relaxed">
              Gestão de catálogo e processos logísticos unificados.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#E5E0D8] shadow-sm hover:border-[#059669] transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#F3F4F6] flex items-center justify-center text-[#059669] mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-medium mb-3 text-[#111827]">Resultados</h3>
            <p className="text-[#6B7280] leading-relaxed">
              Foco absoluto em conversão e crescimento escalável.
            </p>
          </div>
        </div>
      </section>

      {/* O Mapa da Parceria (Fases) */}
      <section id="mapa" className="py-20 px-6 bg-[#F3EFEA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-light text-[#111827] mb-4">
              O Mapa da Parceria
            </h2>
            <p className="text-[#6B7280]">
              Uma jornada clara em 3 etapas para impulsionar a sua operação.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Fase 1 */}
            <div className="bg-white p-8 rounded-2xl border border-[#E5E0D8] shadow-md relative">
              <span className="text-xs font-bold uppercase tracking-wider text-[#10B981] bg-[#10B981]/10 px-3 py-1 rounded-full">
                Fase 1
              </span>
              <h3 className="text-2xl font-serif font-medium text-[#111827] mt-4 mb-1">
                A Fundação
              </h3>
              <p className="text-xs text-[#059669] font-semibold mb-4">Setup Inicial</p>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                Construindo sua casa digital com tecnologia robusta e zero fricção técnica.
              </p>
            </div>

            {/* Fase 2 */}
            <div className="bg-white p-8 rounded-2xl border border-[#E5E0D8] shadow-md relative">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3B82F6] bg-[#3B82F6]/10 px-3 py-1 rounded-full">
                Fase 2
              </span>
              <h3 className="text-2xl font-serif font-medium text-[#111827] mt-4 mb-1">
                A Operação
              </h3>
              <p className="text-xs text-[#2563EB] font-semibold mb-4">Manutenção Mensal</p>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                Garantindo o fluxo de vendas diário com estabilidade e suporte contínuo.
              </p>
            </div>

            {/* Fase 3 */}
            <div className="bg-white p-8 rounded-2xl border border-[#E5E0D8] shadow-md relative">
              <span className="text-xs font-bold uppercase tracking-wider text-[#059669] bg-[#059669]/10 px-3 py-1 rounded-full">
                Fase 3
              </span>
              <h3 className="text-2xl font-serif font-medium text-[#111827] mt-4 mb-1">
                A Aceleração
              </h3>
              <p className="text-xs text-[#059669] font-semibold mb-4">Alta Performance</p>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                Estratégias agressivas de crescimento, retenção e campanhas exclusivas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Inicial (Investimento Único) */}
      <section id="setup" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="bg-[#111827] text-white rounded-3xl p-8 md:p-14 shadow-xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-gray-800 pb-10 mb-10">
            <div>
              <span className="text-[#059669] font-medium text-sm tracking-wider uppercase">Investimento Único</span>
              <h2 className="text-3xl md:text-5xl font-serif font-light mt-2">
                Setup Inicial
              </h2>
              <p className="text-gray-400 mt-2">
                O seu "pé direito" no mundo digital. Cuidamos da tecnologia, você foca em vender.
              </p>
            </div>
            <div className="text-left md:text-right">
              <span className="text-4xl md:text-5xl font-serif font-bold text-[#059669]">
                R$ 3.600,00
              </span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700/50">
              <Settings className="w-6 h-6 text-[#059669] mb-3" />
              <h4 className="font-medium text-white mb-1">Configuração Técnica</h4>
              <p className="text-xs text-gray-400">Criação de links e ativação completa do sistema.</p>
            </div>

            <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700/50">
              <Package className="w-6 h-6 text-[#059669] mb-3" />
              <h4 className="font-medium text-white mb-1">Gestão de Catálogo</h4>
              <p className="text-xs text-gray-400">Cadastro de produtos sem limite de quantidade.</p>
            </div>

            <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700/50">
              <Palette className="w-6 h-6 text-[#059669] mb-3" />
              <h4 className="font-medium text-white mb-1">Design Exclusivo</h4>
              <p className="text-xs text-gray-400">Banners personalizados para Desktop e Mobile.</p>
            </div>

            <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700/50">
              <Link className="w-6 h-6 text-[#059669] mb-3" />
              <h4 className="font-medium text-white mb-1">Integrações Totais</h4>
              <p className="text-xs text-gray-400">Pagamentos (Pix, Cartão), Envios e Domínios.</p>
            </div>

            <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700/50">
              <Globe className="w-6 h-6 text-[#059669] mb-3" />
              <h4 className="font-medium text-white mb-1">Domínio Próprio</h4>
              <p className="text-xs text-gray-400">Configuração de endereço personalizado (ex: sua-marca.com.br).</p>
            </div>

            <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700/50">
              <Barcode className="w-6 h-6 text-[#059669] mb-3" />
              <h4 className="font-medium text-white mb-1">Automação Logística</h4>
              <p className="text-xs text-gray-400">Configuração de impressoras de códigos de barras (sem taxa adicional).</p>
            </div>

            <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700/50">
              <GraduationCap className="w-6 h-6 text-[#059669] mb-3" />
              <h4 className="font-medium text-white mb-1">Treinamento</h4>
              <p className="text-xs text-gray-400">Sessão completa (Presencial, Produtos, pedidos, vendas).</p>
            </div>

            <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700/50">
              <MessageSquare className="w-6 h-6 text-[#059669] mb-3" />
              <h4 className="font-medium text-white mb-1">Acompanhamento VIP</h4>
              <p className="text-xs text-gray-400">Grupo exclusivo no WhatsApp por 60 dias.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Planos de Manutenção */}
      <section id="planos" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-light text-[#111827] mb-4">
            Planos de Manutenção Mensal
          </h2>
          <p className="text-[#6B7280]">
            Escolha a estrutura ideal para o seu momento atual e escale conforme sua necessidade.
          </p>
        </div>

        {/* Planos Standard */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Bronze */}
          <div className="bg-white p-8 rounded-2xl border border-[#E5E0D8] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-serif font-medium text-[#111827]">Bronze</h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold font-serif text-[#111827]">R$ 50,00</span>
                <span className="text-gray-500 text-sm">/mês</span>
              </div>
              <ul className="space-y-3 text-sm text-[#4B5563]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#059669]" /> Até 10 NFs/mês
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#059669]" /> Até 300 Produtos
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#059669]" /> Pedidos Ilimitados
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#059669]" /> Até 3 Administradores
                </li>
              </ul>
            </div>
            <Button
              variant="outline"
              className="mt-8 h-auto w-full rounded-full border-[#111827] py-3 font-medium hover:bg-[#111827] hover:text-white"
              onClick={() => openWhatsApp("Olá! Quero assinar o plano Bronze da Facilzap.")}
            >
              Assinar Bronze
            </Button>
          </div>

          {/* Prata */}
          <div className="bg-white p-8 rounded-2xl border border-[#059669] shadow-md flex flex-col justify-between relative">
            <div>
              <h3 className="text-xl font-serif font-medium text-[#111827]">Prata</h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold font-serif text-[#111827]">R$ 100,00</span>
                <span className="text-gray-500 text-sm">/mês</span>
              </div>
              <ul className="space-y-3 text-sm text-[#4B5563]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#059669]" /> Até 30 NFs/mês
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#059669]" /> Até 450 Produtos
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#059669]" /> Pedidos Ilimitados
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#059669]" /> Até 4 Administradores
                </li>
              </ul>
            </div>
            <Button
              className="mt-8 h-auto w-full rounded-full bg-[#059669] py-3 font-medium text-white hover:bg-[#047857]"
              onClick={() => openWhatsApp("Olá! Quero assinar o plano Prata da Facilzap.")}
            >
              Assinar Prata
            </Button>
          </div>

          {/* Ouro */}
          <div className="bg-white p-8 rounded-2xl border border-[#E5E0D8] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-serif font-medium text-[#111827]">Ouro</h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold font-serif text-[#111827]">R$ 150,00</span>
                <span className="text-gray-500 text-sm">/mês</span>
              </div>
              <ul className="space-y-3 text-sm text-[#4B5563]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#059669]" /> Notas Fiscais Ilimitadas
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#059669]" /> Produtos Ilimitados
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#059669]" /> Pedidos Ilimitados
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#059669]" /> Administradores Ilimitados
                </li>
              </ul>
            </div>
            <Button
              variant="outline"
              className="mt-8 h-auto w-full rounded-full border-[#111827] py-3 font-medium hover:bg-[#111827] hover:text-white"
              onClick={() => openWhatsApp("Olá! Quero assinar o plano Ouro da Facilzap.")}
            >
              Assinar Ouro
            </Button>
          </div>
        </div>

        {/* Planos Digitaliza Negócios (Alta Performance) */}
        <div className="bg-[#F3EFEA] p-8 md:p-12 rounded-3xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#059669] bg-[#059669]/10 px-3 py-1 rounded-full">
              Recomendado
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-light text-[#111827] mt-3">
              Planos Digitaliza Negócios (Alta Performance)
            </h3>
            <p className="text-sm text-[#6B7280] mt-2">
              Para empresas que exigem suporte prioritário e estratégias de crescimento acelerado.
              <br />
              <span className="font-semibold text-gray-700">Todos incluem:</span> Ilimitado para Notas/Produtos/Pedidos, Suporte WhatsApp e Grupo Exclusivo Ilimitado.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Digitaliza Negócios */}
            <div className="bg-white p-6 rounded-xl border border-[#E5E0D8]">
              <h4 className="font-serif font-bold text-[#111827]">Digitaliza Negócios</h4>
              <p className="text-2xl font-bold font-serif text-[#059669] my-2">
                R$ 231,00 <span className="text-xs text-gray-500 font-normal">/mês</span>
              </p>
              <ul className="text-xs space-y-2 text-[#4B5563] mt-4">
                <li>• Layout Padrão</li>
                <li>• Sem Campanhas</li>
                <li>• Sem Treinamentos</li>
              </ul>
            </div>

            {/* Digitaliza Ouro */}
            <div className="bg-white p-6 rounded-xl border border-[#059669] shadow-md relative">
              <h4 className="font-serif font-bold text-[#111827]">Digitaliza Ouro</h4>
              <p className="text-2xl font-bold font-serif text-[#059669] my-2">
                R$ 499,00 <span className="text-xs text-gray-500 font-normal">/mês</span>
              </p>
              <ul className="text-xs space-y-2 text-[#4B5563] mt-4">
                <li>• Layout Exclusivo</li>
                <li>• Sem Campanhas</li>
                <li>• Sem Treinamentos</li>
              </ul>
            </div>

            {/* Digitaliza Premium */}
            <div className="bg-white p-6 rounded-xl border border-[#111827]">
              <h4 className="font-serif font-bold text-[#111827]">Digitaliza Premium</h4>
              <p className="text-2xl font-bold font-serif text-[#059669] my-2">
                R$ 799,00 <span className="text-xs text-gray-500 font-normal">/mês</span>
              </p>
              <ul className="text-xs space-y-2 text-[#4B5563] mt-4">
                <li>• Layout Exclusivo</li>
                <li>• Estratégias e Campanhas Inclusas</li>
                <li>• Treinamentos Ilimitados</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* O Motor de Lucro */}
      <section id="motor" className="py-20 px-6 max-w-7xl mx-auto border-t border-[#E5E0D8]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#059669]">Diferencial Premium</span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-[#111827] mt-2 mb-6">
              O Motor de Lucro
            </h2>
            <p className="text-[#6B7280] leading-relaxed mb-8">
              Muito além da plataforma: uma agência de resultados integrada à sua loja para maximizar o seu lucro.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-[#059669]/10 rounded-lg text-[#059669]">
                  <Gift className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-[#111827]">Brindes Estratégicos</h4>
                  <p className="text-sm text-[#6B7280]">Engenharia de valor para aumentar o ticket médio por pedido.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2 bg-[#059669]/10 rounded-lg text-[#059669]">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-[#111827]">Promoções Sazonais</h4>
                  <p className="text-sm text-[#6B7280]">Campanhas personalizadas montadas para capturar demanda em datas-chave.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2 bg-[#059669]/10 rounded-lg text-[#059669]">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-[#111827]">Sistemas de Cashback</h4>
                  <p className="text-sm text-[#6B7280]">Retenção automática e estímulo à recompra constante.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2 bg-[#059669]/10 rounded-lg text-[#059669]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-[#111827]">Treinamentos Ilimitados</h4>
                  <p className="text-sm text-[#6B7280]">Capacitação contínua para transformar sua equipe em especialistas de vendas.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F3EFEA] p-12 rounded-3xl flex items-center justify-center border border-[#E5E0D8]">
            <div className="text-center space-y-4">
              <div className="w-32 h-32 mx-auto rounded-full bg-[#059669]/10 border-2 border-dashed border-[#059669] flex items-center justify-center text-[#059669]">
                <TrendingUp className="w-16 h-16" />
              </div>
              <p className="font-serif text-xl italic text-[#111827]">Vendas Escaláveis & Retenção</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-24 px-6 bg-[#111827] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-6xl font-serif font-light">
            Vamos digitalizar seu sucesso!
          </h2>
          <p className="text-gray-400 text-lg">
            Facilzap — Praticidade e Tecnologia para o seu Negócio. Escolha seu plano e inicie seu Setup hoje.
          </p>
          <div className="pt-4">
            <Button
              className="h-auto rounded-full bg-[#059669] px-8 py-4 text-lg font-medium text-white shadow-lg hover:bg-[#047857]"
              onClick={() => openWhatsApp("Olá! Quero falar com um consultor sobre a Facilzap.")}
            >
              Falar com Consultor Agora <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#E5E0D8] text-center text-xs text-[#6B7280]">
        <p>© {new Date().getFullYear()} Facilzap. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
