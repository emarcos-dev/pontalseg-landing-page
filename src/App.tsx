import {useEffect, useState} from 'react';
import {
  ArrowRight,
  Bell,
  CheckCircle2,
  DoorOpen,
  Fence,
  MapPinned,
  Menu,
  Moon,
  Phone,
  Shield,
  Sun,
  Users,
  Video,
  X,
} from 'lucide-react';
import logo from '../img/logo_red.png';

const WHATSAPP_URL = 'https://wa.me/5524998340551';
const PHONE_URL = 'tel:+5524998340551';
const THEME_STORAGE_KEY = 'pontalseg-theme';

const navItems = [
  {href: '#servicos', label: 'Serviços'},
  {href: '#sobre', label: 'Sobre'},
  {href: '#diferenciais', label: 'Diferenciais'},
  {href: '#parceiros', label: 'Parceiros'},
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
  {
    icon: Fence,
    title: 'Serralharia',
    description:
      'Fabricação e instalação de grades e portões com execução cuidadosa e acabamento alinhado ao projeto.',
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

type ThemeMode = 'system' | 'light' | 'dark';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerCompact, setHeaderCompact] = useState(false);
  const [logoVisible, setLogoVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('#servicos');
  const [scrollY, setScrollY] = useState(0);
  const [compactMotion, setCompactMotion] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false,
  );
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') {
      return 'system';
    }

    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'system'
      ? savedTheme
      : 'system';
  });

  useEffect(() => {
    const onScroll = () => {
      setHeaderCompact(window.scrollY > 12);
      setScrollY(window.scrollY);

      const header = document.querySelector<HTMLElement>('.site-header');
      const headerOffset = header ? header.offsetHeight + 28 : 112;
      const currentScroll = window.scrollY + headerOffset;

      const sections = navItems
        .map((item) => {
          const element = document.querySelector<HTMLElement>(item.href);
          return element
            ? {
                href: item.href,
                top: element.offsetTop,
              }
            : null;
        })
        .filter((section): section is {href: string; top: number} => Boolean(section))
        .sort((a, b) => a.top - b.top);

      if (!sections.length) {
        return;
      }

      let nextActive = sections[0].href;

      for (const section of sections) {
        if (currentScroll >= section.top) {
          nextActive = section.href;
        } else {
          break;
        }
      }

      setActiveSection(nextActive);
    };

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

  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = () => {
      const isDark = themeMode === 'dark' || (themeMode === 'system' && mediaQuery.matches);
      root.classList.toggle('theme-dark', isDark);
      root.dataset.theme = themeMode;
      root.style.colorScheme = isDark ? 'dark' : 'light';
    };

    applyTheme();

    if (themeMode === 'system') {
      const handleChange = () => applyTheme();
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    return undefined;
  }, [themeMode]);

  useEffect(() => {
    const onResize = () => {
      setCompactMotion(window.innerWidth <= 768);
    };

    onResize();
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const isDarkTheme =
    themeMode === 'dark' ||
    (themeMode === 'system' &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);
  const toggleTheme = () => {
    const nextTheme: ThemeMode = isDarkTheme ? 'light' : 'dark';
    setThemeMode(nextTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  };
  const createParallaxStyle = (speed: number) => ({
    transform: compactMotion ? 'none' : `translate3d(0, ${Math.round(scrollY * speed)}px, 0)`,
  });

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
                  <a
                    className={activeSection === item.href ? 'is-active' : ''}
                    href={item.href}
                    onClick={closeMenu}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              className="theme-toggle"
              type="button"
              aria-label={isDarkTheme ? 'Ativar modo claro' : 'Ativar modo escuro'}
              title={isDarkTheme ? 'Ativar modo claro' : 'Ativar modo escuro'}
              onClick={toggleTheme}>
              {isDarkTheme ? <Sun size={16} /> : <Moon size={16} />}
            </button>
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
                  <div className="hero-screen" style={createParallaxStyle(-0.05)}>
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
                  <div className="hero-floating hero-floating-top" style={createParallaxStyle(-0.08)}>
                    <Shield size={18} />
                    <span>Sistema protegido</span>
                  </div>
                  <div className="hero-floating hero-floating-side" style={createParallaxStyle(0.03)}>
                    <Video size={18} />
                    <span>Monitoramento ativo</span>
                  </div>
                  <div className="hero-operator" style={createParallaxStyle(0.06)}>
                    <div className="hero-operator-head" />
                    <div className="hero-operator-body" />
                    <div className="hero-operator-tablet" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="section community-section section-band section-band-white" id="servicos">
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

        <section className="section feature-section section-band section-band-mint" id="sobre">
          <div className="container feature-grid">
            <div className="feature-visual">
              <div className="feature-visual-card" style={createParallaxStyle(0.02)}>
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

        <section className="section metrics-section section-band section-band-slate" id="diferenciais">
          <div className="container metrics-grid">
            <div className="metrics-copy">
              <p className="section-kicker">Diferenciais</p>
              <h2>Crescimento sustentado por operação organizada e atendimento próximo.</h2>
              <p>
                Projetos personalizados, tecnologia confiável e acompanhamento técnico contínuo para
                reduzir falhas, pontos cegos e improvisos na operação diária.
              </p>
            </div>
            <div className="metrics-list" style={createParallaxStyle(0.015)}>
              {metrics.map((metric) => (
                <article className="metric-card" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section highlights-section section-band section-band-white">
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

        <section className="section coverage-section section-band section-band-soft">
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
            <aside className="coverage-card" style={createParallaxStyle(0.018)}>
              <span className="coverage-badge">Cobertura ativa</span>
              <p>
                Equipe preparada para implantações, ajustes e manutenção em rota regional,
                reduzindo atraso de atendimento.
              </p>
            </aside>
          </div>
        </section>

        <section className="section clients-section section-band section-band-cool" id="parceiros">
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

        <section className="section cta-section section-band section-band-mint" id="contato">
          <div className="container cta-card">
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
                (24) 99834-0551
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-shell">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-brand-lockup">
                {logoVisible ? (
                  <img
                    className="footer-brand-logo"
                    src={logo}
                    alt="Logo da PontalSeg"
                    onError={() => setLogoVisible(false)}
                  />
                ) : null}
                <h3>PontalSeg</h3>
              </div>
              <p>Segurança eletrônica para proteger residência, empresa e condomínio.</p>
              <p className="footer-note">
                Soluções em monitoramento, alarmes, controle de acesso e automação com atendimento regional.
              </p>
            </div>
            <div className="footer-column">
              <h3>Navegação</h3>
              {navItems.map((item) => (
                <a
                  className={activeSection === item.href ? 'is-active' : ''}
                  href={item.href}
                  key={item.href}>
                  {item.label}
                </a>
              ))}
              <a href="/termos-de-servico.html">Termos de Serviço</a>
              <a href="/politica-de-privacidade.html">Política de Privacidade</a>
            </div>
            <div className="footer-column">
              <h3>Contato</h3>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                WhatsApp: (24) 99834-0551
              </a>
              <a href={PHONE_URL}>Telefone: (24) 99834-0551</a>
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
