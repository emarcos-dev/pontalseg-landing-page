import {useEffect, useState} from 'react';
import {
  Bell,
  CheckCircle2,
  ChevronRight,
  DoorOpen,
  MapPinned,
  Menu,
  Phone,
  Shield,
  Star,
  Users,
  Video,
  X,
} from 'lucide-react';
import logo from '../img/logo.jpeg';

const WHATSAPP_URL = 'https://wa.me/552498340551';
const PHONE_URL = 'tel:+552498340551';

const services = [
  {
    icon: Video,
    title: 'Cameras de Seguranca',
    description:
      'Instalacao de cameras IP e analogicas com visao noturna e acesso remoto seguro.',
  },
  {
    icon: Bell,
    title: 'Alarmes',
    description:
      'Sensores para portas, janelas e perimetro com configuracao adequada ao ambiente.',
  },
  {
    icon: Phone,
    title: 'Interfones',
    description:
      'Controle de acesso com audio e video para residencias, condominios e empresas.',
  },
  {
    icon: DoorOpen,
    title: 'Portoes Automaticos',
    description:
      'Instalacao e manutencao com acionamento por controle, app ou credenciais locais.',
  },
];

const differentials = [
  'Mais de 20 anos de experiencia em seguranca eletronica',
  'Projetos personalizados para residencia, comercio e condominio',
  'Suporte tecnico e manutencao preventiva',
  'Equipamentos de marcas reconhecidas no mercado',
];

const cities = [
  'Barra Mansa',
  'Resende',
  'Pinheiral',
  'Barra do Pirai',
  'Pirai',
  'Volta Redonda e regiao',
];

const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'Sindico',
    quote:
      'Excelente atendimento e instalacao impecavel das cameras no meu condominio.',
  },
  {
    name: 'Mariana Costa',
    role: 'Empresaria',
    quote:
      'Resolveram o problema do meu portao automatico no mesmo dia, com agilidade e clareza.',
  },
  {
    name: 'Roberto Almeida',
    role: 'Cliente residencial',
    quote:
      'O sistema de alarme ficou estavel e o acompanhamento durante a instalacao foi serio.',
  },
];

const navItems = [
  {href: '#sobre', label: 'Sobre'},
  {href: '#servicos', label: 'Servicos'},
  {href: '#diferenciais', label: 'Diferenciais'},
  {href: '#contato', label: 'Contato'},
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerCompact, setHeaderCompact] = useState(false);
  const [logoVisible, setLogoVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setHeaderCompact(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
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
            <span className="brand-text">PontalSeg</span>
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
              Solicitar orcamento
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Seguranca eletronica para residencias, empresas e condominios</p>
              <h1>Protecao confiavel para o que nao pode ficar exposto.</h1>
              <p className="hero-text">
                Instalacao profissional de cameras, alarmes, interfones e portoes
                automaticos com atendimento regional e foco em continuidade operacional.
              </p>
              <div className="hero-actions">
                <a
                  className="btn btn-primary"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer">
                  Solicitar orcamento
                </a>
                <a className="btn btn-secondary" href={PHONE_URL}>
                  Ligar agora
                </a>
              </div>
              <dl className="hero-stats" aria-label="Indicadores da empresa">
                <div>
                  <dt>20+</dt>
                  <dd>Anos de experiencia</dd>
                </div>
                <div>
                  <dt>1000+</dt>
                  <dd>Clientes atendidos</dd>
                </div>
                <div>
                  <dt>6</dt>
                  <dd>Cidades na rota principal</dd>
                </div>
              </dl>
            </div>

            <div className="hero-panel" aria-label="Resumo dos destaques da PontalSeg">
              <div className="panel-card panel-primary">
                <Shield size={28} />
                <h2>Projetos sob medida</h2>
                <p>Diagnostico tecnico, instalacao limpa e configuracao ajustada ao risco real.</p>
              </div>
              <div className="panel-list">
                <article>
                  <Users size={20} />
                  <div>
                    <h3>Equipe experiente</h3>
                    <p>Atendimento consultivo desde a vistoria ate a manutencao.</p>
                  </div>
                </article>
                <article>
                  <MapPinned size={20} />
                  <div>
                    <h3>Cobertura regional</h3>
                    <p>Barra Mansa, Resende, Volta Redonda e cidades proximas.</p>
                  </div>
                </article>
                <article>
                  <CheckCircle2 size={20} />
                  <div>
                    <h3>Marcas reconhecidas</h3>
                    <p>Intelbras, Hikvision, Dahua, Rossi, HDL e outros fabricantes.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="sobre">
          <div className="container two-column">
            <div>
              <p className="section-kicker">Sobre a empresa</p>
              <h2>PontalSeg atua desde 2001 com foco em operacao estavel e resposta rapida.</h2>
              <p>
                A PontalSeg Comercio e Servicos de Aparelhos Eletronicos LTDA atende
                projetos de seguranca eletronica com instalacao profissional e escolha
                adequada de equipamentos para cada ambiente.
              </p>
              <p>
                O objetivo aqui nao e vender excesso de tecnologia, e sim reduzir risco,
                ampliar visibilidade e manter o sistema funcionando com previsibilidade.
              </p>
            </div>
            <div className="trust-grid">
              <article>
                <Shield size={24} />
                <h3>Confiabilidade operacional</h3>
                <p>Sistemas configurados para uso pratico, manutencao e expansao futura.</p>
              </article>
              <article>
                <Users size={24} />
                <h3>Atendimento humano</h3>
                <p>Contato direto para vistoria, implantacao e suporte pos-instalacao.</p>
              </article>
              <article>
                <ChevronRight size={24} />
                <h3>Escopo claro</h3>
                <p>Recomendacao objetiva sobre cobertura, pontos cegos e controle de acesso.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="servicos">
          <div className="container">
            <p className="section-kicker">Servicos</p>
            <h2 className="section-title">Solucoes principais para protecao e controle de acesso.</h2>
            <div className="card-grid">
              {services.map(({icon: Icon, title, description}) => (
                <article className="service-card" key={title}>
                  <div className="icon-wrap">
                    <Icon size={24} />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark" id="diferenciais">
          <div className="container two-column section-dark-grid">
            <div>
              <p className="section-kicker section-kicker-dark">Diferenciais</p>
              <h2>Entrega com criterio tecnico e sem improviso.</h2>
            </div>
            <div className="check-list">
              {differentials.map((item) => (
                <div className="check-item" key={item}>
                  <CheckCircle2 size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container two-column">
            <div>
              <p className="section-kicker">Regiao de atendimento</p>
              <h2>Atendimento prioritario no Sul Fluminense.</h2>
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
                Equipe preparada para implantacoes, ajustes e manutencao em rota regional,
                reduzindo atraso de atendimento.
              </p>
            </aside>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="section-kicker">Depoimentos</p>
            <h2 className="section-title">Percepcao de quem ja contratou.</h2>
            <div className="card-grid testimonial-grid">
              {testimonials.map(({name, role, quote}) => (
                <article className="testimonial-card" key={name}>
                  <div className="stars" aria-hidden="true">
                    {Array.from({length: 5}).map((_, index) => (
                      <Star key={`${name}-${index}`} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p>{quote}</p>
                  <strong>{name}</strong>
                  <span>{role}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta-section">
          <div className="container cta-card">
            <div>
              <p className="section-kicker">Contato</p>
              <h2>Solicite uma avaliacao tecnica para definir a solucao adequada.</h2>
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

      <footer className="site-footer" id="contato">
        <div className="container footer-grid">
          <div>
            <h3>PontalSeg</h3>
            <p>Seguranca eletronica para proteger residencia, empresa e condominio.</p>
          </div>
          <div>
            <h3>Contato</h3>
            <p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                WhatsApp: (24) 98340-551
              </a>
            </p>
            <p>
              <a href={PHONE_URL}>Telefone: (24) 98340-551</a>
            </p>
            <p>contato@pontalseg.com.br</p>
          </div>
          <div>
            <h3>Cidades atendidas</h3>
            <p>{cities.join(', ')}.</p>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>{new Date().getFullYear()} PontalSeg Comercio e Servicos de Aparelhos Eletronicos LTDA.</p>
        </div>
      </footer>

      <a
        className="floating-cta"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a PontalSeg no WhatsApp">
        WhatsApp
      </a>
    </div>
  );
}
