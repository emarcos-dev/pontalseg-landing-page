import {useEffect, useState} from 'react';
import {
  ArrowRight,
  Bell,
  CheckCircle2,
  DoorOpen,
  MapPinned,
  Menu,
  Phone,
  Shield,
  Users,
  Video,
  X,
} from 'lucide-react';
import logo from '../img/logo.jpeg';

const WHATSAPP_URL = 'https://wa.me/552498340551';
const PHONE_URL = 'tel:+552498340551';

const navItems = [
  {href: '#sobre', label: 'Sobre'},
  {href: '#servicos', label: 'Serviços'},
  {href: '#diferenciais', label: 'Diferenciais'},
  {href: '#contato', label: 'Contato'},
];

const serviceCards = [
  {
    icon: Video,
    title: 'Câmeras de Segurança',
    description:
      'Monitoramento com visualização remota, gravação contínua e cobertura dos pontos críticos.',
  },
  {
    icon: Bell,
    title: 'Alarmes Inteligentes',
    description:
      'Sensores para perímetro, portas e janelas com configuração conforme o fluxo do local.',
  },
  {
    icon: DoorOpen,
    title: 'Acesso e Portões',
    description:
      'Controle de entrada com interfones, motores, acionamento remoto e manutenção preventiva.',
  },
];

const featureHighlights = [
  {
    icon: Shield,
    title: 'Mais de 20 anos de operação',
    description: 'Experiência prática em projetos residenciais, comerciais e condominiais.',
  },
  {
    icon: Users,
    title: 'Equipe próxima do cliente',
    description: 'Vistoria, implantação e suporte com comunicação clara e sem improviso.',
  },
  {
    icon: CheckCircle2,
    title: 'Tecnologia confiável',
    description: 'Trabalhamos com fabricantes consolidados e configurações estáveis.',
  },
];

const partnerBrands = ['Intelbras', 'Hikvision', 'Dahua', 'HDL', 'Rossi', 'Garen', 'PPA'];

const metrics = [
  {value: '1000+', label: 'Clientes atendidos'},
  {value: '20+', label: 'Anos de experiência'},
  {value: '6', label: 'Cidades na rota principal'},
  {value: '100%', label: 'Foco em continuidade'},
];

const cities = [
  'Barra Mansa',
  'Resende',
  'Pinheiral',
  'Barra do Piraí',
  'Piraí',
  'Volta Redonda e região',
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerCompact, setHeaderCompact] = useState(false);
  const [logoVisible, setLogoVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setHeaderCompact(window.scrollY > 12);

    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="page-shell">
      <header className={`site-header${headerCompact ? ' is-compact' : ''}`}>
        <div className="container header-row">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="PontalSeg">
            {logoVisible ? (
              <img
                className="brand-logo"
                src={logo}
                alt="Logo da PontalSeg"
                onError={() => setLogoVisible(false)}
              />
            ) : null}
            <span className="brand-wordmark">PontalSeg</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav id="site-nav" className={`site-nav${menuOpen ? ' is-open' : ''}`}>
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={closeMenu}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              className="btn btn-primary nav-cta"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}>
              Solicitar orçamento
              <ArrowRight size={16} />
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero-panel-wrap">
          <div className="container hero-panel-shell">
            <section className="hero">
              <div className="hero-grid">
                <div className="hero-copy">
                  <p className="eyebrow">Segurança eletrônica para residências, empresas e condomínios</p>
                  <h1>
                    Proteção e controle
                    <span> com resposta rápida</span>
                  </h1>
                  <p className="hero-text">
                    Instalação profissional de câmeras, alarmes, interfones e portões automáticos
                    com atendimento regional, implantação limpa e operação estável.
                  </p>
                  <div className="hero-actions">
                    <a
                      className="btn btn-primary"
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer">
                      Solicitar orçamento
                    </a>
                    <a className="btn btn-secondary" href={PHONE_URL}>
                      <Phone size={16} />
                      Ligar agora
                    </a>
                  </div>
                </div>

                <div className="hero-visual" aria-hidden="true">
                  <div className="hero-screen">
                    <div className="hero-screen-top" />
                    <div className="hero-screen-body">
                      <div className="hero-screen-sidebar">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="hero-screen-content">
                        <div className="hero-chart hero-chart-primary" />
                        <div className="hero-chart hero-chart-soft" />
                        <div className="hero-grid-mini">
                          <span />
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hero-floating hero-floating-top">
                    <Shield size={18} />
                    <span>Sistema protegido</span>
                  </div>
                  <div className="hero-floating hero-floating-side">
                    <Video size={18} />
                    <span>Monitoramento ativo</span>
                  </div>
                  <div className="hero-operator">
                    <div className="hero-operator-head" />
                    <div className="hero-operator-body" />
                    <div className="hero-operator-tablet" />
                  </div>
                </div>
              </div>
              <div className="hero-dots" aria-hidden="true">
                <span className="is-active" />
                <span />
                <span />
              </div>
            </section>
          </div>
        </section>

        <section className="section clients-section">
          <div className="container">
            <div className="section-heading centered">
              <h2>Nossos parceiros de tecnologia</h2>
              <p>Trabalhamos com fabricantes consolidados para manter o sistema estável.</p>
            </div>
            <div className="brand-row" aria-label="Marcas parceiras">
              {partnerBrands.map((brand) => (
                <span className="brand-chip" key={brand}>
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section community-section" id="servicos">
          <div className="container">
            <div className="section-heading centered">
              <h2>Gerencie a segurança do imóvel em um sistema mais simples</h2>
              <p>Soluções centrais da PontalSeg para monitoramento, alerta e controle de acesso.</p>
            </div>
            <div className="service-grid">
              {serviceCards.map(({icon: Icon, title, description}) => (
                <article className="service-card" key={title}>
                  <div className="service-icon">
                    <Icon size={28} />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section feature-section" id="sobre">
          <div className="container feature-grid">
            <div className="feature-visual">
              <div className="feature-visual-card">
                <div className="feature-bars">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="feature-lockup">
                  <div className="feature-lockup-badge">
                    <CheckCircle2 size={18} />
                    <span>Projeto validado</span>
                  </div>
                  <p>
                    A PontalSeg atua desde 2001 combinando instalação técnica, revisão de risco e
                    atendimento regional.
                  </p>
                </div>
              </div>
            </div>
            <div className="feature-copy">
              <p className="section-kicker">Sobre a empresa</p>
              <h2>Estrutura técnica para manter proteção, visibilidade e rotina de acesso sob controle.</h2>
              <p>
                A PontalSeg Comércio e Serviços de Aparelhos Eletrônicos LTDA atende residências,
                comércios e condomínios com implantação cuidadosa, escolha adequada de equipamentos
                e manutenção preventiva.
              </p>
              <a
                className="text-link"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer">
                Falar com a equipe
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="section metrics-section" id="diferenciais">
          <div className="container metrics-grid">
            <div className="metrics-copy">
              <p className="section-kicker">Diferenciais</p>
              <h2>Crescimento sustentado por operação organizada e atendimento próximo.</h2>
              <p>
                Projetos personalizados, tecnologia confiável e acompanhamento técnico contínuo para
                reduzir falhas, pontos cegos e improvisos na operação diária.
              </p>
            </div>
            <div className="metrics-list">
              {metrics.map((metric) => (
                <article className="metric-card" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section highlights-section">
          <div className="container">
            <div className="highlight-grid">
              {featureHighlights.map(({icon: Icon, title, description}) => (
                <article className="highlight-card" key={title}>
                  <div className="highlight-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section coverage-section">
          <div className="container coverage-grid">
            <div>
              <p className="section-kicker">Região de atendimento</p>
              <h2>Atendimento prioritário no Sul Fluminense.</h2>
              <ul className="city-list">
                {cities.map((city) => (
                  <li key={city}>
                    <MapPinned size={18} />
                    <span>{city}</span>
                  </li>
                ))}
              </ul>
            </div>
            <aside className="coverage-card">
              <span className="coverage-badge">Cobertura ativa</span>
              <p>
                Equipe preparada para implantações, ajustes e manutenção em rota regional,
                reduzindo atraso de atendimento.
              </p>
            </aside>
          </div>
        </section>

        <section className="section cta-section">
          <div className="container cta-card" id="contato">
            <div>
              <p className="section-kicker">Contato</p>
              <h2>Solicite uma avaliação técnica para definir a solução adequada.</h2>
            </div>
            <div className="cta-actions">
              <a
                className="btn btn-primary"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
              <a className="btn btn-secondary" href={PHONE_URL}>
                (24) 98340-551
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-shell">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>PontalSeg</h3>
              <p>Segurança eletrônica para proteger residência, empresa e condomínio.</p>
              <p className="footer-note">
                Soluções em monitoramento, alarmes, controle de acesso e automação com atendimento regional.
              </p>
            </div>
            <div className="footer-column">
              <h3>Navegação</h3>
              <a href="#sobre">Sobre</a>
              <a href="#servicos">Serviços</a>
              <a href="#diferenciais">Diferenciais</a>
              <a href="#contato">Contato</a>
            </div>
            <div className="footer-column">
              <h3>Contato</h3>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                WhatsApp: (24) 98340-551
              </a>
              <a href={PHONE_URL}>Telefone: (24) 98340-551</a>
              <a href="mailto:contato@pontalseg.com.br">contato@pontalseg.com.br</a>
            </div>
            <div className="footer-column">
              <h3>Atendimento</h3>
              <span>Barra Mansa e região</span>
              <span>Resende e região</span>
              <span>Volta Redonda</span>
              <span>Demais cidades sob consulta</span>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{new Date().getFullYear()} PontalSeg Comércio e Serviços de Aparelhos Eletrônicos LTDA.</p>
            <p>{cities.join(', ')}.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
