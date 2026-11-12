import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import landingCss from "../landing.css?url";
import {
  ArrowRight, Award, BookOpen, Check, ChevronDown, ChevronLeft,
  ChevronRight, FileCheck2, Headphones, MessageCircle, ShieldCheck,
  Sparkles, Video, BookMarked, ClipboardCheck, Layers3, TrendingUp, Instagram, Youtube
} from "lucide-react";
import jaquelinePhoto from "@/assets/testimonials/jaqueline.png.asset.json";
import sueliPhoto from "@/assets/testimonials/sueli.png.asset.json";
import jesleyPhoto from "@/assets/testimonials/jesley.png.asset.json";
import vivianePhoto from "@/assets/testimonials/viviane.png.asset.json";
import neidePhoto from "@/assets/testimonials/neide.png.asset.json";
import waldileidyPhoto from "@/assets/testimonials/waldileidy.png.asset.json";
import hevillaPhoto from "@/assets/testimonials/hevilla.png.asset.json";
import alynePhoto from "@/assets/testimonials/alyne.png.asset.json";
import gilsonPhoto from "@/assets/testimonials/gilson.png.asset.json";
import luizaPhoto from "@/assets/testimonials/luiza.png.asset.json";
import deboraPhoto from "@/assets/testimonials/debora.png.asset.json";
import luisPhoto from "@/assets/testimonials/luis.png.asset.json";
import isabelaPhoto from "@/assets/testimonials/isabela.png.asset.json";
import daviPhoto from "@/assets/testimonials/davi.png.asset.json";
import biancaPhoto from "@/assets/testimonials/bianca.png.asset.json";
import victorPhoto from "@/assets/testimonials/victor.png.asset.json";
import alunaAprovadaPhoto from "@/assets/testimonials/aluna-aprovada.jpeg.asset.json";
import sindkreiLogo from "@/assets/sindkrei-logotipo-branco.png.asset.json";
import heroPhoto from "@/assets/sindkrei-apresentacao.jpg.asset.json";
import professorPhoto from "@/assets/sindkrei-professor.jpg.asset.json";
import whatsappIcon from "@/assets/whatsapp-flutuante.png.asset.json";
import modulo00 from "@/assets/modules/modulo-00.png.asset.json";
import modulo01 from "@/assets/modules/modulo-01.png.asset.json";
import modulo02 from "@/assets/modules/modulo-02.png.asset.json";
import modulo03 from "@/assets/modules/modulo-03.png.asset.json";
import modulo04 from "@/assets/modules/modulo-04.png.asset.json";
import modulo05 from "@/assets/modules/modulo-05.png.asset.json";
import modulo06 from "@/assets/modules/modulo-06.webp.asset.json";
import modulo07 from "@/assets/modules/modulo-07.png.asset.json";
import modulo08 from "@/assets/modules/modulo-08.png.asset.json";
import modulo09 from "@/assets/modules/modulo-09.png.asset.json";
import modulo10 from "@/assets/modules/modulo-10.png.asset.json";
import modulo11 from "@/assets/modules/modulo-11.png.asset.json";
import modulo12 from "@/assets/modules/modulo-12.png.asset.json";
import modulo13 from "@/assets/modules/modulo-13.png.asset.json";
import modulo14 from "@/assets/modules/modulo-14.png.asset.json";

const whatsapp = "https://wa.me/556186194180?text=Ol%C3%A1%21%20Quero%20saber%20mais%20sobre%20a%20Mentoria%202%C2%AA%20Fase%20OAB%20-%20Direito%20do%20Trabalho";

const modules = [
  { n: "00", title: "Módulo Introdutório", detail: "Aula inaugural gratuita", free: true },
  { n: "01", title: "Reclamação Trabalhista", detail: "Estrutura, fundamentos e pedidos" },
  { n: "02", title: "Contestação c/c Reconvenção", detail: "Defesa estratégica na prática" },
  { n: "03", title: "Recurso Ordinário", detail: "Construção da peça recursal" },
  { n: "04", title: "Recurso de Revista", detail: "Técnica e requisitos" },
  { n: "05", title: "Contrarrazões", detail: "Resposta recursal com método" },
  { n: "06", title: "Agravo de Instrumento", detail: "Hipóteses e estrutura" },
  { n: "07", title: "Embargos à Execução e Impugnação à Liquidação", detail: "Atuação na fase executiva" },
  { n: "08", title: "Embargos de Terceiros", detail: "Proteção de bens e direitos" },
  { n: "09", title: "Agravo de Petição", detail: "Recursos na execução trabalhista" },
  { n: "10", title: "Ação de Consignação em Pagamento", detail: "Cabimento e elaboração" },
  { n: "11", title: "Inquérito para Apuração de Falta Grave", detail: "Procedimento e fundamentos" },
  { n: "12", title: "Mandado de Segurança", detail: "Medida constitucional na prática" },
  { n: "13", title: "Ação Rescisória", detail: "Hipóteses e requisitos" },
  { n: "14", title: "Recurso Adesivo", detail: "Estratégia recursal" },
];
const modulePhotos: Record<string, string> = {
  "00": modulo00.url,
  "01": modulo01.url,
  "02": modulo02.url,
  "03": modulo03.url,
  "04": modulo04.url,
  "05": modulo05.url,
  "06": modulo06.url,
  "07": modulo07.url,
  "08": modulo08.url,
  "09": modulo09.url,
  "10": modulo10.url,
  "11": modulo11.url,
  "12": modulo12.url,
  "13": modulo13.url,
  "14": modulo14.url,
};
const extras = ["Exceção de Pré-Executividade", "Habeas Corpus", "Ação Monitória", "Ação de Cumprimento", "Ação Anulatória"];
const testimonials = [["JAQUELINE","A minha experiência com o professor Sindkrei foi um divisor de águas na minha vida. Aulas dinâmicas e pontuais, sem inventar a roda. Sempre revisando conteúdo com pontos estratégicos. Material didático, atualizado, limpo e sucinto. Sindkrei + dedicação do aluno = aprovação na segunda fase."],["SUELI","Minha tão sonhada aprovação na OAB tem um significado ainda mais especial por ter contado com a mentoria do Professor Sindkrei, na 2ª fase em Direito do Trabalho! Sua dedicação, didática excepcional e orientações certeiras foram fundamentais nessa conquista. Mais do que ensinar o conteúdo, sua mentoria transmite confiança e segurança para enfrentar esse grande desafio. Minha eterna gratidão, professor! Você fez parte da realização de um dos maiores sonhos da minha vida profissional. Recomendo de olhos fechados!"],["JESLEY","Com a didática excepcional do Professor Sindkrei no curso de Direito do Trabalho, superei todas as minhas dificuldades e aprendi do zero a dominar as peças. Suas aulas detalhadas e focadas no que realmente importa foram fundamentais para a minha segurança na prova. Graças à sua dedicação e excelente método de ensino, conquistei a tão sonhada aprovação na OAB."],["VIVIANE","Professor, fui aprovada na OAB na segunda fase em Direito do Trabalho e quero agradecer por ter feito parte dessa conquista! Seus ensinamentos foram muito importantes na minha preparação e me ajudaram a chegar mais confiante à prova. Muito obrigada pela dedicação e por compartilhar seu conhecimento!"],["NEIDE","Meu nome é Neide Aparecida da C. Santos estudei com o professor Sindkrei no Curso Explicando Direito (Preparatório para OAB – 1ª e 2ª Fases). Eu e minhas irmãs, Georgina e Georgette, fomos aprovadas na OAB graças à sua dedicação e responsabilidade em sala de aula. Considero o professor uma grande referência no ensino do Direito do Trabalho, pois domina a CLT e transforma temas complexos em explicações claras e práticas. Sua Didática inspira os alunos a compreenderem a legislação com rigor técnico e senso crítico. Sem dúvida, é um mestre comprometido com a formação de profissionais éticos e bem preparados."],["WALDILEIDY","O professor Sindkey faz parte da minha história como advogada. Foi por meio de suas aulas que conquistei a tão sonhada aprovação na OAB. Com uma técnica imprescindível, ele é didático, objetivo e pedagógico, e ensina com muita clareza e afinco. Ele trabalha com o que gosta e, para ele, a nossa conquista também é sua. Estudei com ele na primeira e na segunda fase. Fui aprovada na segunda fase elaborando uma contestação trabalhista, peça que aprendi com ele. Só tenho a agradecer por ter contribuído para a profissional que sou hoje."],["HEVILLA","Minha experiência com o professor Sindkrei foi extremamente positiva! Sua didática, conhecimento técnico e comprometimento fizeram toda a diferença na minha preparação para a segunda fase da OAB em Direito do Trabalho. Foi uma experiência que contribuiu não apenas para minha preparação, mas também para minha confiança e segurança na prova. Recomendo seu trabalho a todos que buscam uma preparação consistente, direcionada e de qualidade!!!"],["ALYNE","Estudar com o professor Sindkrei foi uma experiência incrível! Além de aprender conteúdos que não tive a oportunidade de aprofundar nem mesmo durante a faculdade, as aulas são leves, dinâmicas e divertidas, o que torna todo o processo muito mais agradável. Ele transmite segurança, confiança e nos prepara não apenas com conhecimento, mas também com a tranquilidade necessária para enfrentar a segunda fase. Foi um privilégio contar com seu apoio e aprender com um professor tão dedicado. Recomendo de olhos fechados!"],["GILSON","O direito do trabalho se torna fácil com as aulas do Professor Sid, pude aprender e gostar da matéria, a explicação é passada com muita maestria, de forma prática e didática, sou muito grato pelos ensinamentos e pela amizade."],["LUIZA","Olá, professor Sidy! Muito obrigada por suas aulas excelentes! Sua didática dinâmica, clareza e domínio do conteúdo tornaram o aprendizado leve e prazeroso. Suas aulas contribuíram muito para minha aprovação na OAB. Minha gratidão por compartilhar seu conhecimento com tanta dedicação. Você faz a diferença!"],["DÉBORA","Professor Sindkrei, minha gratidão por todo o conhecimento compartilhado, pela dedicação, atenção e generosidade em ensinar. Sua didática, o material impecável e, sobretudo, sua preocupação genuína com o aprendizado dos alunos fizeram toda a diferença na minha trajetória. Foi um privilégio ter sido sua aluna e aprender com alguém que exerce a docência com tanto compromisso e amor. Muito obrigada por ter contribuído tanto para minha caminhada! Levo comigo não apenas seus ensinamentos, mas também minha admiração e carinho. Desejo-lhe muito sucesso e que continue inspirando tantos outros alunos. Um grande abraço!"],["LUIS","Fui aprovado de primeira na 2ª fase da OAB em Direito do Trabalho, no 46º Exame, após o curso do professor Sindkrei Oliveira! Antes, eu havia estudado em outro cursinho e não consegui passar. Com ele, a didática é muito boa e os simulados também são excelentes: aprendi a ir direto ao ponto e a montar as peças do jeito que a banca cobra. Recomendo muito!"],["ISABELA","Com certeza devo muito a esse professor, minha aprovação na segunda fase foi muito desafiadora mas valeu cada esforço, e estudar com o Sind me fez crescer muito, ótimos materiais de estudos que me fez ter muito confiança até minha aprovação. Veleu muito apena. Obrigada professor!!"],["DAVI","Ter estudado com o professor SINDKREI, foi um fator decisivo para conquista da minha aprovação no exame da OAB, pois possui uma didática excelente para aqueles que não conseguem estudar sozinho."],["BIANCA","Ser aprovado na 2ª fase da OAB exige técnica, preparo e confiança, e o auxílio do professor Sindkrei foi fundamental para a minha aprovação. Sua didática impecável, os feedbacks precisos na elaboração das peças e o suporte constante fizeram toda a diferença na minha trajetória. Essa monitoria oferece um direcionamento real e eficiente até a conquista da tão sonhada aprovação!"],["VICTOR","Passei na OAB! Depois de realizar o curso preparatório em Direito do Trabalho com o professor Sindkrei, nunca tive dúvidas de que essa seria a melhor escolha. Seu conhecimento e domínio da matéria me transmitiram toda a segurança de que eu precisava. Ele me proporcionou uma experiência completa."],["ALUNA APROVADA","O método, a didática e o carisma do professor Sindkrei me deram segurança para a prova. Sua dedicação foi essencial para minha aprovação na 2ª fase da OAB. Sou muito grata por tudo! ❤️"]];
const testimonialPhotos = [
  jaquelinePhoto.url, sueliPhoto.url, jesleyPhoto.url, vivianePhoto.url,
  neidePhoto.url, waldileidyPhoto.url, hevillaPhoto.url, alynePhoto.url,
  gilsonPhoto.url, luizaPhoto.url, deboraPhoto.url, luisPhoto.url,
  isabelaPhoto.url, daviPhoto.url, biancaPhoto.url, victorPhoto.url,
  alunaAprovadaPhoto.url,
];
const faqs = [
  ["Para qual área é a mentoria?", "A preparação é direcionada à 2ª fase do Exame da OAB na área de Direito do Trabalho."],
  ["O que está incluído na preparação?", "Você terá acesso à aula inaugural gratuita, 14 módulos de aulas, módulo extra com 5 aulas bônus, roteiros exclusivos, lives semanais, 3 simulados com correção individualizada e acervo de peças práticas e questões subjetivas."],
  ["Existe uma aula gratuita?", "Sim. O Módulo Introdutório é uma aula inaugural gratuita para você conhecer a proposta e começar sua preparação."],
  ["Como funcionam os simulados?", "São 3 simulados com correção individualizada das peças e respostas, com análise para ajudar você a alinhar a escrita ao espelho de correção da FGV."],
  ["Existem aulas ao vivo?", "Sim. A mentoria conta com lives semanais para aprofundamento, direcionamento e esclarecimento de dúvidas."],
  ["Qual é o investimento na mentoria?", "O valor é R$ 997,80, em até 6 parcelas de R$ 166,30 no cartão. Ex-alunos têm 30% de desconto e pagamentos à vista têm 20% de desconto. Consulte a equipe para confirmar as condições de pagamento."],
   ["Como faço minha inscrição?", "Acesse o botão de inscrição para conferir as condições e concluir sua matrícula na mentoria."],
  ["Como funciona a garantia de 7 dias?", "A oferta informa garantia de 7 dias. As condições e orientações aplicáveis são apresentadas no momento da contratação."],
];
const benefits = [
  { icon: BookOpen, title: "Conteúdo estruturado", text: "Uma sequência didática para compreender as peças e seus fundamentos." },
  { icon: Video, title: "Acompanhamento ao vivo", text: "Encontros para aprofundar temas, esclarecer dúvidas e manter o direcionamento." },
  { icon: ClipboardCheck, title: "Correção com orientação", text: "Feedback individual para identificar ajustes e evoluir na construção das respostas." },
  { icon: FileCheck2, title: "Prática direcionada", text: "Peças profissionais e questões discursivas para aplicar o conteúdo estudado." },
];

function SectionTitle({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return <div className={`section-title ${light ? "light" : ""}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const navLinks = [["A mentoria", "#mentoria"], ["Conteúdo", "#conteudo"], ["Diferenciais", "#diferenciais"], ["Avaliações", "#avaliacoes"], ["Garantia", "#garantia"]];

  return (
    <main className="site-shell">


      <section className="hero" id="inicio">
        <div className="container"><img className="hero-brand" src={sindkreiLogo.url} alt="Sindkrei" /></div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="hero-kicker"><i/> MENTORIA COMPLETA · 2ª FASE OAB</span>
            <h1>Sua aprovação começa com <em>estratégia, prática e direção.</em></h1>
            <p className="hero-sub"><strong>Direito do Trabalho com o Prof. Sindkrei.</strong> Domine a estrutura das peças, desenvolva respostas com clareza e treine com foco no padrão de correção da FGV.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#garantia">Quero me preparar com o Prof. Sindkrei <ArrowRight size={17}/></a>
              <a className="btn btn-outline" href="#mentoria">Conhecer a mentoria <ChevronRight size={17}/></a>
            </div>
            
          </div>
          <div className="hero-visual"><div className="hero-glow"/><img className="hero-art" src={heroPhoto.url} alt="Prof. Sindkrei, professor da Mentoria 2ª Fase OAB" fetchPriority="high" /></div>
        </div>
      </section>

      

      <section className="intro" id="mentoria"><div className="container intro-grid">
        <div className="intro-copy intro-copy-centered"><span className="eyebrow">O desafio da 2ª fase</span><h2>Na 2ª fase, não basta saber. É preciso saber construir a resposta.</h2><p className="challenge-lead">Prepare-se para transformar conhecimento jurídico em peças e respostas bem estruturadas, com técnica, clareza e estratégia.</p><div className="pain-list">
          {["Identificar corretamente a peça profissional e seu cabimento.","Organizar fundamentos, artigos e pedidos de forma estratégica.","Treinar a escrita jurídica com clareza e objetividade.","Compreender como alinhar sua resposta aos critérios do espelho de correção da FGV."] .map((t)=><div className="pain" key={t}><Check size={18}/>{t}</div>)}
        </div><a className="btn btn-primary" href="#garantia">Quero conhecer a preparação <ArrowRight size={16}/></a></div>
      </div></section>

      <section className="benefits" id="diferenciais"><div className="container">
        <SectionTitle eyebrow="Sua preparação por inteiro" title="Tudo o que você precisa para treinar com direção" text="Uma jornada organizada para sair da teoria, praticar as peças e desenvolver a escrita exigida na prova."/>
        <div className="benefit-grid">{benefits.map(({icon:Icon,title,text})=><article className="benefit-card" key={title}><span className="benefit-icon"><Icon size={22}/></span><h3>{title}</h3><p>{text}</p></article>)}</div><div className="section-cta"><a className="btn btn-dark" href="#garantia">Quero conhecer a mentoria <ArrowRight size={16}/></a></div>
      </div></section>

      <section className="curriculum" id="conteudo"><div className="container">
        <div className="carousel-head"><SectionTitle light eyebrow="Conteúdo programático" title="Um caminho completo pelas peças de Direito do Trabalho" text="Conheça os módulos da mentoria e veja tudo o que será trabalhado em sua preparação."/></div><div className="module-window"><div className="module-track">{[0,1].map((copy)=><div className="module-group" key={copy} aria-hidden={copy===1}>{modules.map((m)=>{const photo=modulePhotos[m.n];return photo?<article className="module-card module-card-photo" key={`${copy}-${m.n}`}><div className="module-photo-slot"><img className="module-photo" src={photo} alt={`Capa do módulo ${m.n}: ${m.title}`} loading="lazy" />{m.free&&<span className="free-label module-free-badge">Aula grátis</span>}</div></article>:<article className="module-card" key={`${copy}-${m.n}`}><div className="module-body"><div className="module-top"><span className="module-number">MÓDULO {m.n}</span>{m.free&&<span className="free-label">Aula grátis</span>}</div><div className="module-description"><h3>{m.title}</h3><p>{m.detail}</p></div></div></article>})}</div>)}</div></div>
        <div className="extra-box"><div className="extra-intro"><span className="eyebrow">CONTEÚDO ESPECIAL · 5 AULAS</span><h3>Um módulo extra para ampliar suas possibilidades de atuação</h3><p>Conheça medidas e ações complementares que enriquecem seu repertório jurídico e ampliam sua visão prática.</p><div className="extra-counter"><strong>05</strong><span>aulas complementares</span></div></div><div className="extra-lessons">{extras.map((x,i)=><article className="extra-lesson" key={x}><span className="extra-index">0{i+1}</span><div><strong>{x}</strong><small>Conteúdo complementar</small></div><ArrowRight size={16}/></article>)}</div></div><div className="section-cta"><a className="btn btn-dark" href="#garantia">Quero conhecer a mentoria <ArrowRight size={16}/></a></div>
      </div></section>

      <section className="method-section"><div className="container"><SectionTitle eyebrow="MÉTODO DE PREPARAÇÃO" title="Da leitura do enunciado à resposta pronta para a banca." text="Uma jornada prática, organizada em etapas que se conectam para desenvolver seu raciocínio, sua escrita e sua segurança na prova."/><div className="method-grid">
        {[["Identifique a peça","Aprenda a reconhecer a medida adequada a partir do enunciado."],["Entenda a estrutura","Organize endereçamento, fundamentos, pedidos e requisitos."],["Treine a escrita","Pratique peças e questões subjetivas com direcionamento."],["Receba correção","Entenda seus pontos de ajuste nos simulados individualizados."],["Evolua com estratégia","Aprimore sua preparação com conteúdo e acompanhamento."]].map(([t,d],i)=><article className="method-card" key={t}><span className="method-step-label">ETAPA {String(i+1).padStart(2,"0")}</span><h3>{t}</h3><p>{d}</p><span className="method-step-line"/></article>)}
<div className="section-cta"><a className="btn btn-dark" href="#garantia">Quero conhecer a mentoria <ArrowRight size={16}/></a></div>
      </div></div></section>

      <section className="deep"><div className="container"><SectionTitle eyebrow="Mais do que videoaulas" title="Uma preparação que vai além das aulas" text="Materiais, acompanhamento e ferramentas para transformar o estudo em uma rotina mais organizada, prática e consistente."/><div className="deep-grid">
        {[
          [BookMarked,"Material próprio e exclusivo","Roteiros de aula para acompanhar os conteúdos e organizar seus estudos."],
          [Layers3,"Mapas mentais e resumos","Materiais de apoio e súmulas trabalhistas indispensáveis para consulta e revisão."],
          [Headphones,"Suporte personalizado","Acompanhamento para orientar sua jornada e ajudar a esclarecer dúvidas."],
          [Video,"Lives semanais","Encontros ao vivo com direcionamento e resolução comentada de questões discursivas em aulas agendadas."]
        ].map(([Icon,title,desc])=>{const I=Icon as typeof BookMarked;return <article className="deep-card" key={title as string}><span className="benefit-icon"><I size={22}/></span><div><h3>{title as string}</h3><p>{desc as string}</p></div></article>})}
<div className="section-cta"><a className="btn btn-dark" href="#garantia">Quero conhecer a mentoria <ArrowRight size={16}/></a></div>
      </div></div></section>

      <section className="simulator"><div className="container"><div className="feedback-heading"><span className="eyebrow">PRÁTICA COM FEEDBACK</span><h2>Seu desempenho evolui quando você entende como melhorar.</h2><p>Você pratica, recebe uma análise individual e descobre exatamente onde ajustar a construção da sua resposta para se aproximar do padrão esperado pela FGV.</p></div><div className="feedback-flow"><article className="feedback-card"><span className="feedback-number">01</span><div className="feedback-icon"><FileCheck2 size={25}/></div><h3>Resolva o simulado</h3><p>Coloque em prática a identificação da peça, os fundamentos e os pedidos.</p><small>EXECUÇÃO</small></article><div className="feedback-connector"><ArrowRight size={22}/></div><article className="feedback-card featured"><span className="feedback-number">02</span><div className="feedback-icon"><ClipboardCheck size={25}/></div><h3>Receba a correção</h3><p>Sua resposta é analisada individualmente, com atenção à estrutura e à fundamentação.</p><small>ANÁLISE</small></article><div className="feedback-connector"><ArrowRight size={22}/></div><article className="feedback-card"><span className="feedback-number">03</span><div className="feedback-icon"><TrendingUp size={25}/></div><h3>Saiba como evoluir</h3><p>Entenda os ajustes necessários e leve os aprendizados para o próximo treino.</p><small>EVOLUÇÃO</small></article></div><div className="feedback-footer"><strong>3 simulados com correção individualizada</strong><a className="btn btn-primary" href="#garantia">Quero treinar com correção <ArrowRight size={16}/></a></div></div>
      </section>

      <section className="professor"><div className="container prof-grid"><div className="prof-photo-wrap"><img className="prof-photo" src={professorPhoto.url} alt="Prof. Sindkrei de terno e braços cruzados" loading="lazy" /></div><div className="prof-copy"><span className="eyebrow">Quem vai te acompanhar</span><h2>Aprenda com o Prof. Sindkrei</h2><p>Na mentoria, o Prof. Sindkrei organiza o estudo de Direito e Processo do Trabalho com foco na aplicação prática: identificação da peça, estrutura, fundamentos, pedidos e treino direcionado à 2ª fase da OAB.</p><p>O objetivo é transformar sua preparação em uma jornada mais clara, estratégica e eficiente — com conteúdo, treino e acompanhamento.</p><div className="prof-sign"><strong>Prof. Sindkrei</strong><span>Mentoria 2ª Fase OAB · Direito do Trabalho</span></div><div className="prof-socials"><a href="https://www.instagram.com/profsindkrei?rpxt=NHM2dGV5cXhucWwx" target="_blank" rel="noreferrer"><Instagram size={19}/> Instagram</a><a href="https://www.youtube.com/@ProfessorSindkrei" target="_blank" rel="noreferrer"><Youtube size={20}/> YouTube</a></div><div className="section-cta"><a className="btn btn-dark" href="#garantia">Quero conhecer a mentoria <ArrowRight size={16}/></a></div></div></div></section>

      <section className="reviews" id="avaliacoes"><div className="container">
        <SectionTitle eyebrow="Depoimentos reais" title="Histórias de quem trilhou esse caminho com o Prof. Sindkrei" text="Relatos enviados por alunos sobre suas experiências com as aulas e a preparação em Direito do Trabalho."/>
        <div className="testimonial-carousel"><div className="testimonial-track">{[0,1].map((copy)=><div className="testimonial-group" key={copy} aria-hidden={copy===1}>{testimonials.map(([name,review],i)=><article className="testimonial-card" key={`${copy}-${name}`}><div className="testimonial-stars">★★★★★</div><p className="testimonial-review">“{review}”</p><div className="testimonial-author"><div className="testimonial-photo-placeholder"><img className="testimonial-photo" src={testimonialPhotos[i]} alt={`Foto de ${name}`} loading="lazy" /></div><div className="testimonial-author-name"><strong>{name}</strong><small>Aluna da mentoria</small></div></div></article>)}</div>)}</div></div><div className="section-cta"><a className="btn btn-dark" href="#garantia">Quero conhecer a mentoria <ArrowRight size={16}/></a></div>
      </div></section>

      <section className="offer" id="garantia"><div className="container"><div className="offer-card"><div className="offer-head"><span className="eyebrow">Sua próxima etapa começa aqui</span><h2>Uma preparação completa para estudar com método, praticar e evoluir.</h2><p>Veja o que faz parte da Mentoria 2ª Fase OAB – Direito do Trabalho.</p></div><div className="pricing-panel"><div className="pricing-main"><span className="pricing-label">INVESTIMENTO NA MENTORIA</span><strong>R$ 997,80</strong><small>em até 6x de R$ 166,30 no cartão</small></div><div className="pricing-discounts"><div><span>Ex-aluno</span><strong>30% OFF</strong><small>R$ 698,46</small></div><div><span>Pagamento à vista</span><strong>20% OFF</strong><small>R$ 798,24</small></div></div></div><div className="offer-grid">
        {["Aula inaugural gratuita","14 módulos de aulas + módulo extra","5 aulas bônus no módulo extra","Roteiros de aula exclusivos","Lives semanais para dúvidas e direcionamento","3 simulados com correção individualizada","Acervo de peças práticas e questões subjetivas","Mapas mentais, resumos e súmulas trabalhistas","Suporte personalizado durante a preparação"].map(t=><div className="offer-line" key={t}><Check size={18}/>{t}</div>)}
      </div><div className="offer-bottom"><a className="btn btn-primary" href="#garantia">Quero entrar para a mentoria <ArrowRight size={17}/></a></div></div><div className="guarantee guarantee-outside"><ShieldCheck size={30}/><div><b>Garantia de 7 dias</b><small>A contratação conta com garantia de 7 dias. Consulte as condições e o procedimento para solicitação no momento da inscrição.</small></div></div></div></section>

      <section className="faq"><div className="container"><SectionTitle eyebrow="Tire suas dúvidas" title="Perguntas frequentes" text="Informações importantes para você conhecer a mentoria antes de dar o próximo passo."/><div className="faq-list">{faqs.map(([q,a],i)=><div className="faq-item" key={q}><button className="faq-question" aria-expanded={openFaq===i} onClick={()=>setOpenFaq(openFaq===i?null:i)}>{q}<ChevronDown size={19}/></button>{openFaq===i&&<div className="faq-answer">{a}</div>}</div>)}</div><div className="section-cta"><a className="btn btn-dark" href="#garantia">Quero conhecer a mentoria <ArrowRight size={16}/></a></div></div></section>

      <section className="final-cta"><div className="container"><span className="eyebrow">Dê o próximo passo</span><h2>Seu caminho até a 2ª fase pode começar hoje.</h2><p>Conheça a Mentoria 2ª Fase OAB – Direito do Trabalho e prepare-se com conteúdo estruturado, treino prático e acompanhamento direcionado.</p><a className="btn btn-primary" href="#garantia">Quero fazer minha inscrição <MessageCircle size={17}/></a></div></section>

      <footer><div className="container footer-inner"><div><a href="#inicio" aria-label="Voltar ao início"><img className="footer-brand" src={sindkreiLogo.url} alt="Sindkrei" loading="lazy" /></a><p className="footer-copy">Mentoria 2ª Fase OAB · Direito do Trabalho<br/>Preparação com estratégia, prática e direcionamento.</p></div><div className="footer-links">{navLinks.map(([l,h])=><a key={h} href={h}>{l}</a>)}</div></div></footer>
      <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Fale com a equipe pelo WhatsApp"><img src={whatsappIcon.url} alt="" /></a>
    </main>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mentoria 2ª Fase OAB | Direito do Trabalho — Prof. Sindkrei" },
      { name: "description", content: "Prepare-se para a 2ª fase da OAB em Direito do Trabalho com 14 módulos, aulas bônus, lives semanais e simulados com correção individualizada." },
      { property: "og:title", content: "Mentoria 2ª Fase OAB — Direito do Trabalho | Prof. Sindkrei" },
      { property: "og:description", content: "Estratégia, prática e direcionamento para sua preparação na 2ª fase da OAB." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://sindkrei.lovable.app/sindkrei-compartilhamento.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Sindkrei — Mentoria 2ª Fase OAB em Direito do Trabalho" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://sindkrei.lovable.app/sindkrei-compartilhamento.png" },
      { name: "twitter:image:alt", content: "Sindkrei — Mentoria 2ª Fase OAB em Direito do Trabalho" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap" },
      { rel: "stylesheet", href: landingCss },
    ],
  }),
  component: Index,
});

