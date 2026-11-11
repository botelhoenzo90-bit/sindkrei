import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
const testimonials = [["JAQUELINE","A minha experiência com o professor Sindkrei foi um divisor de águas na minha vida. Aulas dinâmicas e pontuais, sem inventar a roda. Sempre revisando conteúdo com pontos estratégicos. Material didático, atualizado, limpo e sucinto. Sindkrei + dedicação do aluno = aprovação na segunda fase."],["SUELI","Minha tão sonhada aprovação na OAB tem um significado ainda mais especial por ter contado com a mentoria do Professor Sindkrei, na 2ª fase em Direito do Trabalho! Sua dedicação, didática excepcional e orientações certeiras foram fundamentais nessa conquista. Mais do que ensinar o conteúdo, sua mentoria transmite confiança e segurança para enfrentar esse grande desafio. Minha eterna gratidão, professor! Você fez parte da realização de um dos maiores sonhos da minha vida profissional. Recomendo de olhos fechados!"],["JESLEY","Com a didática excepcional do Professor Sindkrei no curso de Direito do Trabalho, superei todas as minhas dificuldades e aprendi do zero a dominar as peças. Suas aulas detalhadas e focadas no que realmente importa foram fundamentais para a minha segurança na prova. Graças à sua dedicação e excelente método de ensino, conquistei a tão sonhada aprovação na OAB."],["VIVIANE","Professor, fui aprovada na OAB na segunda fase em Direito do Trabalho e quero agradecer por ter feito parte dessa conquista! Seus ensinamentos foram muito importantes na minha preparação e me ajudaram a chegar mais confiante à prova. Muito obrigada pela dedicação e por compartilhar seu conhecimento!"],["NEIDE","Meu nome é Neide Aparecida da C. Santos estudei com o professor Sindkrei no Curso Explicando Direito (Preparatório para OAB – 1ª e 2ª Fases). Eu e minhas irmãs, Georgina e Georgette, fomos aprovadas na OAB graças à sua dedicação e responsabilidade em sala de aula. Considero o professor uma grande referência no ensino do Direito do Trabalho, pois domina a CLT e transforma temas complexos em explicações claras e práticas. Sua Didática inspira os alunos a compreenderem a legislação com rigor técnico e senso crítico. Sem dúvida, é um mestre comprometido com a formação de profissionais éticos e bem preparados."],["WALDILEIDY","O professor Sindkey faz parte da minha história como advogada. Foi por meio de suas aulas que conquistei a tão sonhada aprovação na OAB. Com uma técnica imprescindível, ele é didático, objetivo e pedagógico, e ensina com muita clareza e afinco. Ele trabalha com o que gosta e, para ele, a nossa conquista também é sua. Estudei com ele na primeira e na segunda fase. Fui aprovada na segunda fase elaborando uma contestação trabalhista, peça que aprendi com ele. Só tenho a agradecer por ter contribuído para a profissional que sou hoje."],["HEVILLA","Minha experiência com o professor Sindkrei foi extremamente positiva! Sua didática, conhecimento técnico e comprometimento fizeram toda a diferença na minha preparação para a segunda fase da OAB em Direito do Trabalho. Foi uma experiência que contribuiu não apenas para minha preparação, mas também para minha confiança e segurança na prova. Recomendo seu trabalho a todos que buscam uma preparação consistente, direcionada e de qualidade!!!"],["ALYNE","Estudar com o professor Sindkrei foi uma experiência incrível! Além de aprender conteúdos que não tive a oportunidade de aprofundar nem mesmo durante a faculdade, as aulas são leves, dinâmicas e divertidas, o que torna todo o processo muito mais agradável. Ele transmite segurança, confiança e nos prepara não apenas com conhecimento, mas também com a tranquilidade necessária para enfrentar a segunda fase. Foi um privilégio contar com seu apoio e aprender com um professor tão dedicado. Recomendo de olhos fechados!"],["GILSON","O direito do trabalho se torna fácil com as aulas do Professor Sid, pude aprender e gostar da matéria, a explicação é passada com muita maestria, de forma prática e didática, sou muito grato pelos ensinamentos e pela amizade."],["LUIZA","Olá, professor Sidy! Muito obrigada por suas aulas excelentes! Sua didática dinâmica, clareza e domínio do conteúdo tornaram o aprendizado leve e prazeroso. Suas aulas contribuíram muito para minha aprovação na OAB. Minha gratidão por compartilhar seu conhecimento com tanta dedicação. Você faz a diferença!"],["DÉBORA","Professor Sindkrei, minha gratidão por todo o conhecimento compartilhado, pela dedicação, atenção e generosidade em ensinar. Sua didática, o material impecável e, sobretudo, sua preocupação genuína com o aprendizado dos alunos fizeram toda a diferença na minha trajetória. Foi um privilégio ter sido sua aluna e aprender com alguém que exerce a docência com tanto compromisso e amor. Muito obrigada por ter contribuído tanto para minha caminhada! Levo comigo não apenas seus ensinamentos, mas também minha admiração e carinho. Desejo-lhe muito sucesso e que continue inspirando tantos outros alunos. Um grande abraço!"],["LUIS","Fui aprovado de primeira na 2ª fase da OAB em Direito do Trabalho, no 46º Exame, após o curso do professor Sindkrei Oliveira! Antes, eu havia estudado em outro cursinho e não consegui passar. Com ele, a didática é muito boa e os simulados também são excelentes: aprendi a ir direto ao ponto e a montar as peças do jeito que a banca cobra. Recomendo muito!"],["ISABELA","Com certeza devo muito a esse professor, minha aprovação na segunda fase foi muito desafiadora mas valeu cada esforço, e estudar com o Sind me fez crescer muito, ótimos materiais de estudos que me fez ter muito confiança até minha aprovação. Veleu muito apena. Obrigada professor!!"],["DAVI","Ter estudado com o professor SINDKREI, foi um fator decisivo para conquista da minha aprovação no exame da OAB, pois possui uma didática excelente para aqueles que não conseguem estudar sozinho."],["BIANCA","Ser aprovado na 2ª fase da OAB exige técnica, preparo e confiança, e o auxílio do professor Sindkrei foi fundamental para a minha aprovação. Sua didática impecável, os feedbacks precisos na elaboração das peças e o suporte constante fizeram toda a diferença na minha trajetória. Essa monitoria oferece um direcionamento real e eficiente até a conquista da tão sonhada aprovação!"],["VICTOR","Passei na OAB! Depois de realizar o curso preparatório em Direito do Trabalho com o professor Sindkrei, nunca tive dúvidas de que essa seria a melhor escolha. Seu conhecimento e domínio da matéria me transmitiram toda a segurança de que eu precisava. Ele me proporcionou uma experiência completa."]];
const testimonialPhotos = [
  jaquelinePhoto.url, sueliPhoto.url, jesleyPhoto.url, vivianePhoto.url,
  neidePhoto.url, waldileidyPhoto.url, hevillaPhoto.url, alynePhoto.url,
  gilsonPhoto.url, luizaPhoto.url, deboraPhoto.url, luisPhoto.url,
  isabelaPhoto.url, daviPhoto.url, biancaPhoto.url, victorPhoto.url,
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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap');
        :root{--navy:#07172d;--navy2:#102844;--wine:#65143b;--wine2:#7b1d49;--accent:#c6a16b;--accent-soft:#eadbc5;--ink:#18263a;--muted:#64748b;--paper:#f5f7fa}
        *{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:88px}body{margin:0;font-family:'DM Sans',sans-serif;color:var(--ink)}a{text-decoration:none}
        .site-shell{overflow:hidden;background:#fff}.container{width:min(1160px,calc(100% - 44px));margin:0 auto}
        .topbar{height:78px;display:flex;align-items:center;position:sticky;top:0;z-index:50;background:rgba(7,23,45,.96);backdrop-filter:blur(16px);border-bottom:1px solid rgba(255,255,255,.09)}
        .nav-inner{display:flex;align-items:center;justify-content:space-between;gap:24px}.brand{display:flex;align-items:center;gap:11px;color:white;font-family:Manrope,sans-serif;font-weight:800;letter-spacing:.12em;font-size:19px}.brand-mark{width:38px;height:38px;border:1px solid rgba(255,255,255,.55);border-radius:50%;display:grid;place-items:center;color:#fff}.brand small{display:block;font-size:9px;letter-spacing:.22em;color:#a9b5c6;font-weight:600;margin-top:1px}
        .nav-links{display:flex;align-items:center;gap:26px}.nav-links a{font-size:13px;color:#d9e0ea;font-weight:600;transition:.2s}.nav-links a:hover{color:#d8b98b}
        .btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;border-radius:999px;padding:15px 23px;font-weight:800;font-size:14px;transition:transform .2s,box-shadow .2s,background .2s;border:0;cursor:pointer}.btn:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(0,0,0,.18)}.btn-primary{background:linear-gradient(120deg,#8a3157,#65143b);color:#fff}.btn-outline{border:1px solid rgba(255,255,255,.36);color:#fff;background:rgba(255,255,255,.05)}.btn-dark{background:var(--navy);color:#fff}.btn-white{background:#fff;color:var(--navy)}
        .mobile-toggle{display:none;background:transparent;color:#fff;border:0;padding:8px}
        .hero{position:relative;background:radial-gradient(circle at 76% 40%,rgba(117,25,68,.8),transparent 36%),linear-gradient(115deg,#06162c 0%,#101b35 48%,#4e1234 100%);color:#fff;padding:86px 0 90px;min-height:670px}
        .hero:before{content:"";position:absolute;inset:0;background:radial-gradient(ellipse at 5% 100%,rgba(41,91,131,.24),transparent 35%);pointer-events:none}.hero-grid{position:relative;display:grid;grid-template-columns:1.08fr .92fr;align-items:center;gap:38px}.hero-copy{max-width:660px}.hero-kicker{display:inline-flex;align-items:center;gap:9px;padding:9px 14px;border:1px solid rgba(255,255,255,.2);border-radius:999px;background:rgba(255,255,255,.08);font-size:11px;font-weight:800;letter-spacing:.16em;color:#dce7f4}.hero-kicker i{width:7px;height:7px;border-radius:50%;background:#c6a16b;box-shadow:0 0 0 5px rgba(198,161,107,.16)}
        .hero h1{font-family:Manrope,sans-serif;font-size:clamp(42px,5.4vw,68px);line-height:1.04;letter-spacing:-.055em;margin:25px 0 20px;font-weight:800}.hero h1 em{font-style:normal;color:#dfc19a}.hero-sub{font-size:18px;line-height:1.75;color:#d5dce8;max-width:590px;margin:0 0 29px}.hero-sub strong{color:#fff}.hero-actions{display:flex;flex-wrap:wrap;gap:12px}.hero-proof{display:flex;flex-wrap:wrap;gap:18px;margin-top:34px;color:#d6deea;font-size:12px}.hero-proof span{display:flex;align-items:center;gap:7px}.hero-proof svg{color:#d8b98b}
        .hero-visual{position:relative;display:flex;justify-content:center;align-items:center;min-height:475px}.hero-glow{position:absolute;width:390px;height:390px;border-radius:50%;background:rgba(134,33,78,.36);filter:blur(48px)}.hero-art{position:relative;width:min(100%,490px);aspect-ratio:1/1;object-fit:cover;border-radius:30px;box-shadow:0 35px 85px rgba(0,0,0,.35);border:1px solid rgba(255,255,255,.18)}.hero-portrait{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:15px;background:radial-gradient(circle at 50% 36%,rgba(198,161,107,.16),transparent 35%),linear-gradient(145deg,#081a31,#521435);color:#fff;padding:30px}.portrait-emblem{width:155px;height:155px;border:1px solid rgba(255,255,255,.28);border-radius:50%;display:grid;place-items:center;color:#d8b98b;margin-bottom:10px}.portrait-kicker{font-size:11px;letter-spacing:.24em;color:#e0c9aa;font-weight:800}.hero-portrait strong{font:800 clamp(25px,3vw,37px) Manrope,sans-serif;letter-spacing:.12em}.hero-portrait small{font-size:11px;letter-spacing:.16em;color:#d7dfeb}.portrait-rule{width:80px;height:3px;border-radius:5px;background:#c6a16b;margin-top:8px}.floating-tag{position:absolute;bottom:20px;left:-18px;padding:15px 19px;background:#fff;color:var(--navy);border-radius:16px;box-shadow:0 16px 40px rgba(0,0,0,.22);font-weight:800;font-size:13px;display:flex;align-items:center;gap:10px}.floating-tag svg{color:#8a3157}
        .trust-strip{background:#fff;position:relative;margin-top:-1px}.trust-grid{display:grid;grid-template-columns:repeat(4,1fr);border-radius:18px;box-shadow:0 18px 55px rgba(8,27,51,.1);background:#fff;transform:translateY(-28px);overflow:hidden}.trust-item{padding:23px 22px;display:flex;gap:13px;align-items:center;border-right:1px solid #edf0f4}.trust-item:last-child{border:0}.trust-icon{width:42px;height:42px;flex:0 0 42px;border-radius:13px;background:#f4edf0;color:#7b3153;display:grid;place-items:center}.trust-item b{display:block;font-size:14px;color:#18263a}.trust-item small{display:block;font-size:11px;color:#748196;margin-top:4px;line-height:1.4}
        section{padding:96px 0}.section-title{text-align:center;max-width:760px;margin:0 auto 48px}.eyebrow{display:inline-block;color:#8a3157;font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;margin-bottom:14px}.section-title h2{font-family:Manrope,sans-serif;font-size:clamp(30px,4vw,46px);letter-spacing:-.045em;line-height:1.12;margin:0;color:#14243a}.section-title p{font-size:16px;line-height:1.75;color:#6b7788;margin:17px auto 0;max-width:660px}.section-title.light h2{color:#fff}.section-title.light p{color:#c6d0df}.section-title.light .eyebrow{color:#d8b98b}
        .intro{padding-top:50px}.intro-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:70px;align-items:center}.intro-visual{background:linear-gradient(145deg,#eaf0f6,#f7f8fb);border-radius:28px;min-height:390px;position:relative;overflow:hidden;padding:36px;display:flex;align-items:flex-end}.intro-visual:before{content:"";position:absolute;width:320px;height:320px;border-radius:50%;background:linear-gradient(135deg,#eadbc5,#f5e7ed);top:-80px;right:-70px}.intro-quote{position:relative;z-index:1;background:#fff;padding:26px;border-radius:20px;box-shadow:0 18px 40px rgba(19,41,65,.1);max-width:330px}.intro-quote svg{color:#8a3157}.intro-quote p{font-family:Manrope,sans-serif;font-size:22px;line-height:1.35;font-weight:800;color:#182a42;margin:12px 0}.intro-quote small{color:#758196}.intro-copy h2{font:800 clamp(30px,3.5vw,42px)/1.12 Manrope,sans-serif;letter-spacing:-.04em;color:#14243a;margin:0 0 18px}.intro-copy>p{color:#667487;line-height:1.8;font-size:15px}.pain-list{display:grid;gap:13px;margin:25px 0}.pain{display:flex;gap:12px;align-items:flex-start;color:#34445a;font-size:14px;line-height:1.55}.pain svg{color:#8a3157;flex:0 0 19px;margin-top:2px}
        .benefits{background:var(--paper)}.benefit-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}.benefit-card{background:#fff;border:1px solid #e8edf2;border-radius:20px;padding:27px 23px;transition:.25s}.benefit-card:hover{transform:translateY(-5px);box-shadow:0 18px 38px rgba(20,40,65,.08)}.benefit-icon{width:48px;height:48px;border-radius:15px;background:#f4edf0;color:#7b3153;display:grid;place-items:center;margin-bottom:21px}.benefit-card h3{font:800 17px Manrope,sans-serif;margin:0 0 10px;color:#1b2b41}.benefit-card p{font-size:13px;line-height:1.7;color:#718095;margin:0}
        .curriculum{background:linear-gradient(135deg,#07172d,#102742 60%,#32132f);color:#fff;position:relative}.curriculum:after{content:"";position:absolute;width:440px;height:440px;border:1px solid rgba(255,255,255,.06);border-radius:50%;right:-150px;top:5%}.curriculum .container{position:relative;z-index:1}.carousel-head{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;margin-bottom:28px}.carousel-head .section-title{text-align:left;margin:0;max-width:720px}.carousel-head .section-title p{margin-left:0}.carousel-controls{display:flex;gap:9px;flex:0 0 auto}.circle-btn{width:45px;height:45px;border:1px solid rgba(255,255,255,.28);border-radius:50%;background:rgba(255,255,255,.07);color:#fff;display:grid;place-items:center;cursor:pointer;transition:.2s}.circle-btn:hover{background:#8a3157;border-color:#8a3157}.module-window{overflow:hidden;border-radius:22px}.module-track{display:flex;gap:0;transition:transform .45s ease}.module-card{flex:0 0 100%;min-height:205px;padding:25px;background:rgba(255,255,255,.075);border:1px solid rgba(255,255,255,.12);border-radius:20px;display:flex;flex-direction:column;justify-content:space-between;transition:.25s}.module-card:hover{background:rgba(255,255,255,.12);border-color:rgba(198,161,107,.5)}.module-top{display:flex;justify-content:space-between;align-items:center}.module-number{font:800 14px Manrope,sans-serif;color:#d8b98b;letter-spacing:.1em}.free-label{font-size:10px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#13243a;background:#e5d2b8;padding:6px 9px;border-radius:99px}.module-card h3{font:800 18px/1.3 Manrope,sans-serif;margin:20px 0 8px;color:#fff}.module-card p{font-size:12px;color:#b8c5d4;margin:0;line-height:1.5}.module-dots{display:flex;justify-content:center;gap:7px;margin:23px 0 0}.dot{width:7px;height:7px;border:0;border-radius:20px;background:rgba(255,255,255,.28);padding:0;cursor:pointer}.dot.active{width:25px;background:#c6a16b}.extra-box{margin-top:30px;padding:27px 30px;border-radius:22px;background:linear-gradient(110deg,rgba(198,161,107,.16),rgba(255,255,255,.07));border:1px solid rgba(198,161,107,.3);display:grid;grid-template-columns:.7fr 1.3fr;gap:30px;align-items:center}.extra-box h3{font:800 23px Manrope,sans-serif;margin:0 0 7px}.extra-box p{margin:0;color:#c4d0dd;font-size:13px;line-height:1.6}.extra-list{display:flex;flex-wrap:wrap;gap:9px}.extra-chip{font-size:12px;color:#f0e4d2;border:1px solid rgba(198,161,107,.3);background:rgba(6,24,37,.3);padding:9px 12px;border-radius:999px}
        .method-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:13px;counter-reset:step}.method-card{padding:23px 18px;border:1px solid #e7edf2;border-radius:18px;background:#fff;position:relative}.method-card:before{counter-increment:step;content:"0" counter(step);font:800 24px Manrope,sans-serif;color:#eadde3;display:block;margin-bottom:24px}.method-card h3{font:800 15px Manrope,sans-serif;color:#1c2b40;margin:0 0 9px}.method-card p{font-size:12px;line-height:1.65;color:#758195;margin:0}
        .deep{background:#f5f7fa}.deep-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}.deep-card{background:#fff;border:1px solid #e8edf2;border-radius:22px;padding:30px;display:flex;gap:18px}.deep-card .benefit-icon{flex:0 0 48px;margin:0}.deep-card h3{font:800 18px Manrope,sans-serif;margin:2px 0 9px}.deep-card p{color:#718095;font-size:13px;line-height:1.7;margin:0}
        .simulator{background:linear-gradient(120deg,#f4edf0,#f4f6f8);padding:82px 0}.sim-grid{display:grid;grid-template-columns:1fr 1fr;gap:55px;align-items:center}.sim-copy h2{font:800 clamp(30px,4vw,44px)/1.1 Manrope,sans-serif;letter-spacing:-.04em;color:#14243a;margin:0 0 17px}.sim-copy>p{font-size:15px;line-height:1.8;color:#657487}.sim-points{display:grid;gap:13px;margin:24px 0}.sim-point{display:flex;gap:11px;align-items:center;color:#31435a;font-size:14px}.sim-point svg{color:#8a3157}.sim-panel{background:#fff;border-radius:28px;padding:34px;box-shadow:0 24px 55px rgba(26,55,76,.1);position:relative}.sim-panel:before{content:"";position:absolute;inset:13px;border:1px solid #e9eef2;border-radius:20px;pointer-events:none}.sim-panel>*{position:relative}.sim-panel-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:27px}.sim-panel-top span{font-size:11px;font-weight:800;letter-spacing:.14em;color:#8a3157}.sim-panel-top svg{color:#8a3157}.sim-number{font:800 76px/.9 Manrope,sans-serif;color:#102a43;letter-spacing:-.07em}.sim-number small{font-size:20px;color:#a66b86;letter-spacing:0}.sim-panel h3{font:800 21px Manrope,sans-serif;color:#192d44;margin:17px 0 8px}.sim-panel p{font-size:13px;color:#718095;line-height:1.7;margin:0}.sim-tags{display:flex;gap:8px;flex-wrap:wrap;margin-top:23px}.sim-tags span{background:#f4edf0;color:#7b3153;font-size:11px;font-weight:700;padding:8px 11px;border-radius:99px}
        .professor{background:#fff}.prof-grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:65px;align-items:center}.prof-photo-wrap{position:relative;background:linear-gradient(140deg,#0a1a31,#63163b);padding:15px;border-radius:28px}.prof-photo{width:100%;display:flex;min-height:360px;flex-direction:column;align-items:center;justify-content:center;gap:16px;border-radius:18px;color:#fff;background:radial-gradient(circle at 50% 35%,rgba(198,161,107,.18),transparent 30%),linear-gradient(145deg,#091a31,#6b173d)}.prof-identity svg{color:#e0c9aa}.prof-identity strong{font:800 34px Manrope,sans-serif;letter-spacing:.18em}.prof-identity span{font-size:11px;letter-spacing:.2em;color:#d5deea}.prof-copy h2{font:800 clamp(30px,3.5vw,43px)/1.12 Manrope,sans-serif;letter-spacing:-.04em;margin:0 0 16px;color:#14243a}.prof-copy p{font-size:15px;line-height:1.8;color:#69788b}.prof-sign{margin-top:24px;padding-top:20px;border-top:1px solid #e8edf2}.prof-sign strong{display:block;font:800 19px Manrope,sans-serif;color:#1a2b41}.prof-sign span{font-size:12px;color:#6f7f91}
        .logo-slot{width:230px;height:76px;margin:0 auto 28px;border:1px dashed rgba(224,201,170,.65);border-radius:14px;display:grid;place-items:center;color:#e0c9aa;font-size:10px;font-weight:800;letter-spacing:.15em;background:rgba(255,255,255,.035)}.reviews{background:#f5f7fa}.testimonial-carousel{max-width:900px;margin:0 auto}.testimonial-card{display:grid;grid-template-columns:210px 1fr;gap:30px;align-items:center;background:#fff;border:1px solid #e7e1e5;border-radius:26px;padding:32px;min-height:300px;box-shadow:0 18px 50px rgba(28,25,38,.07);animation:reviewFade .35s ease}.testimonial-photo-placeholder{width:190px;height:190px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(145deg,#f4edf0,#e7dbe1);border:7px solid #f4edf0;box-shadow:0 0 0 1px #e7dbe1;flex:0 0 190px;color:#7b3153;font:800 54px Manrope,sans-serif;letter-spacing:-.05em}.testimonial-stars{color:#c6a16b;letter-spacing:4px;font-size:19px;margin-bottom:14px}.testimonial-content p{font-size:15px;line-height:1.8;color:#526174;margin:0 0 18px}.testimonial-content strong{display:block;font:800 17px Manrope,sans-serif;color:#17283e}.testimonial-content small{display:block;color:#8792a1;font-size:11px;margin-top:4px}.testimonial-controls{display:flex;justify-content:center;align-items:center;gap:22px;margin-top:22px;color:#748196;font-size:12px;font-weight:800}.testimonial-arrow{width:42px;height:42px;border:1px solid #dce2e8;background:#fff;color:#7b3153;border-radius:50%;display:grid;place-items:center;cursor:pointer}.testimonial-arrow:hover{background:#7b3153;color:#fff}.testimonial-dots{display:flex;justify-content:center;gap:6px;margin-top:16px}.testimonial-dots button{width:7px;height:7px;border:0;border-radius:20px;background:#cbd3dc;padding:0;cursor:pointer}.testimonial-dots button.active{width:22px;background:#8a3157}@keyframes reviewFade{from{opacity:.3;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}.offer{background:linear-gradient(135deg,#07172d,#102742 55%,#4e1234);color:#fff;position:relative}.offer-card{max-width:940px;margin:0 auto;background:#fff;color:#17283e;border-radius:30px;padding:42px;box-shadow:0 30px 85px rgba(0,0,0,.25)}.offer-head{text-align:center;margin-bottom:32px}.offer-head .eyebrow{color:#8a3157}.offer-head h2{font:800 clamp(30px,4vw,43px)/1.1 Manrope,sans-serif;letter-spacing:-.045em;margin:0 0 12px}.offer-head p{color:#728095;font-size:14px;margin:0}.offer-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px 28px}.offer-line{display:flex;align-items:flex-start;gap:10px;color:#35465b;font-size:13px;line-height:1.55}.offer-line svg{color:#8a3157;flex:0 0 18px;margin-top:1px}.pricing-panel{margin-top:30px;padding:26px;border:1px solid #eadde3;border-radius:22px;background:linear-gradient(135deg,#fbf8fa,#fff)}.pricing-main{text-align:center;padding-bottom:22px;border-bottom:1px solid #eadde3}.pricing-label{display:block;color:#8a3157;font-size:10px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;margin-bottom:8px}.pricing-main strong{display:block;font:800 clamp(38px,5vw,54px)/1.05 Manrope,sans-serif;color:#17283e;letter-spacing:-.05em}.pricing-main small{display:block;color:#748195;font-size:13px;margin-top:7px}.pricing-discounts{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:20px}.pricing-discounts>div{background:#fff;border:1px solid #e8edf2;border-radius:15px;padding:16px;text-align:center}.pricing-discounts span{display:block;color:#64748b;font-size:12px;font-weight:700}.pricing-discounts strong{display:block;color:#7b3153;font:800 24px Manrope,sans-serif;margin:6px 0 3px}.pricing-discounts small{color:#17283e;font-size:14px;font-weight:800}.pricing-footnote{text-align:center;color:#8993a1;font-size:10px;line-height:1.5;margin:15px 0 0}.offer-bottom{margin-top:30px;padding-top:28px;border-top:1px solid #e8edf2;display:flex;align-items:center;justify-content:space-between;gap:25px}.offer-bottom strong{display:block;font:800 19px Manrope,sans-serif;color:#17283e}.offer-bottom span{display:block;color:#748195;font-size:12px;margin-top:5px}.guarantee{display:flex;align-items:center;gap:14px;background:#f7f0f3;border:1px solid #ead7e0;padding:16px 19px;border-radius:17px;margin-top:24px}.guarantee svg{color:#8a3157;flex:0 0 30px}.guarantee b{display:block;color:#5b2840;font:800 15px Manrope,sans-serif}.guarantee small{display:block;color:#78616f;font-size:11px;margin-top:4px}
        .faq{background:#fff}.faq-list{max-width:850px;margin:0 auto;display:grid;gap:10px}.faq-item{border:1px solid #e6ebf0;border-radius:15px;overflow:hidden;background:#fff}.faq-question{width:100%;display:flex;align-items:center;justify-content:space-between;gap:20px;padding:19px 22px;border:0;background:#fff;text-align:left;color:#1b2b40;font:700 14px Manrope,sans-serif;cursor:pointer}.faq-question svg{color:#8a3157;transition:transform .2s;flex:0 0 18px}.faq-question[aria-expanded=true] svg{transform:rotate(180deg)}.faq-answer{padding:0 22px 20px;color:#6f7e91;font-size:13px;line-height:1.75}
        .final-cta{background:linear-gradient(110deg,#6a163e,#351530 65%,#0b1d35);color:#fff;text-align:center;padding:82px 0}.final-cta h2{font:800 clamp(32px,4.5vw,50px)/1.1 Manrope,sans-serif;letter-spacing:-.045em;max-width:780px;margin:0 auto 16px}.final-cta p{color:#e0d5df;font-size:15px;line-height:1.7;max-width:630px;margin:0 auto 27px}
        footer{background:#061326;color:#fff;padding:34px 0}.footer-inner{display:flex;justify-content:space-between;align-items:center;gap:20px}.footer-copy{color:#9aa9bb;font-size:11px;line-height:1.7}.footer-links{display:flex;gap:18px;flex-wrap:wrap}.footer-links a{color:#c9d2dd;font-size:11px}.whatsapp-float{position:fixed;right:22px;bottom:22px;z-index:60;width:60px;height:60px;border-radius:50%;background:#20c66a;color:#fff;display:grid;place-items:center;box-shadow:0 10px 30px rgba(9,83,48,.35);transition:.2s}.whatsapp-float:hover{transform:translateY(-4px) scale(1.03)}.whatsapp-float svg{width:29px;height:29px}
        @media(max-width:900px){.nav-links{gap:14px}.nav-links a{font-size:12px}.nav-cta{padding:12px 15px;font-size:12px}.hero-grid{grid-template-columns:1fr .8fr;gap:15px}.hero{padding:70px 0}.hero-visual{min-height:360px}.hero-art{border-radius:22px}.trust-grid{grid-template-columns:repeat(2,1fr)}.trust-item:nth-child(2){border-right:0}.trust-item:nth-child(-n+2){border-bottom:1px solid #edf0f4}.benefit-grid{grid-template-columns:repeat(2,1fr)}.method-grid{grid-template-columns:repeat(3,1fr)}.intro-grid,.prof-grid{gap:35px}.module-track{display:flex}.extra-box{grid-template-columns:1fr}.sim-grid{gap:30px}}
        @media(max-width:680px){.container{width:min(100% - 34px,540px)}.logo-slot{width:190px;height:62px;margin-bottom:22px}.testimonial-card{grid-template-columns:1fr;justify-items:center;text-align:center;padding:25px 20px;gap:18px}.testimonial-photo-placeholder{width:120px;height:120px;font-size:30px}.testimonial-content p{font-size:13px}.hero{padding:52px 0 62px}.hero-grid{grid-template-columns:1fr;gap:26px}.hero h1{font-size:43px;max-width:520px}.hero-sub{font-size:15px;line-height:1.7}.hero-actions{display:grid}.hero-actions .btn{width:100%}.hero-proof{gap:11px 16px;font-size:11px}.hero-visual{min-height:0;padding:0 10px 10px}.hero-art{width:min(100%,390px);border-radius:20px}.floating-tag{left:0;bottom:0;padding:12px 14px;font-size:11px}.trust-grid{transform:translateY(-17px);grid-template-columns:1fr 1fr}.trust-item{padding:16px 12px;gap:9px}.trust-icon{width:35px;height:35px;flex-basis:35px}.trust-item b{font-size:11px}.trust-item small{font-size:10px}.trust-item:nth-child(2){border-right:0}.trust-item:nth-child(3){border-bottom:0}.trust-item:nth-child(4){border-bottom:0}
          section{padding:70px 0}.intro{padding-top:28px}.intro-grid,.prof-grid,.sim-grid{grid-template-columns:1fr;gap:30px}.intro-visual{min-height:280px;padding:22px}.intro-quote{padding:20px}.intro-quote p{font-size:19px}.intro-copy h2,.sim-copy h2,.prof-copy h2{font-size:32px}.benefit-grid{grid-template-columns:1fr 1fr;gap:10px}.benefit-card{padding:20px 16px}.benefit-card h3{font-size:14px}.benefit-card p{font-size:11px}.benefit-icon{width:41px;height:41px;margin-bottom:16px}.carousel-head{align-items:flex-end}.carousel-head .section-title{margin:0}.carousel-head .section-title h2{font-size:30px}.carousel-controls{gap:6px}.circle-btn{width:38px;height:38px}.module-track{display:flex}.module-card{min-height:175px}.extra-box{padding:22px}.extra-box h3{font-size:20px}.extra-chip{font-size:10px}.method-grid{grid-template-columns:1fr 1fr}.method-card{padding:18px 15px}.method-card:before{margin-bottom:15px}.method-card h3{font-size:13px}.method-card p{font-size:11px}.deep-grid{grid-template-columns:1fr}.deep-card{padding:22px;gap:13px}.simulator{padding:68px 0}.sim-panel{padding:27px 22px}.sim-number{font-size:65px}.prof-photo-wrap{max-width:420px;margin:0 auto}.review-card{padding:26px 20px;min-height:0;align-items:flex-start}.review-card h3{font-size:17px}.offer-card{padding:27px 20px;border-radius:22px}.pricing-panel{padding:19px 14px}.pricing-discounts{gap:9px}.pricing-discounts>div{padding:13px 8px}.pricing-discounts strong{font-size:21px}.offer-grid{grid-template-columns:1fr;gap:13px}.offer-bottom{align-items:stretch;flex-direction:column}.offer-bottom .btn{width:100%}.guarantee{padding:14px}.final-cta{padding:70px 0}.final-cta h2{font-size:34px}.footer-inner{align-items:flex-start;flex-direction:column}.whatsapp-float{width:55px;height:55px;right:15px;bottom:15px}}
        /* AJUSTE GLOBAL: alinhamento, espaçamentos e identidade dos botões */
        .site-shell{width:100%;overflow:hidden;background:#fff;color:var(--ink)}
        .site-shell section{width:100%;padding:88px 0}
        .site-shell .container{width:min(1120px,calc(100% - 48px));margin-left:auto;margin-right:auto}
        .site-shell .section-title{width:100%;max-width:760px;margin:0 auto 42px;text-align:center}
        .site-shell .section-title h2{margin-left:auto;margin-right:auto}
        .site-shell .section-title p{margin:16px auto 0}
        .site-shell .hero{padding:82px 0 88px}
        .site-shell .hero-grid{display:grid;grid-template-columns:1fr;justify-items:center;gap:28px;max-width:900px;margin:0 auto;text-align:center}
        .site-shell .hero-copy{width:100%;max-width:820px;margin:0 auto;text-align:center}
        .site-shell .hero-kicker{margin-left:auto;margin-right:auto}
        .site-shell .hero h1{max-width:850px;margin:22px auto 18px}
        .site-shell .hero-sub{max-width:700px;margin:0 auto 26px}
        .site-shell .hero-actions,.site-shell .hero-proof{justify-content:center}
        .site-shell .hero-visual{width:100%;min-height:0;margin:6px auto 0;justify-content:center}
        .site-shell .hero-art{width:min(100%,390px);max-width:390px}
        .site-shell .floating-tag{left:calc(50% - 215px)}
        .site-shell .trust-grid{width:100%;margin-left:auto;margin-right:auto}
        .site-shell .intro-grid,.site-shell .prof-grid,.site-shell .sim-grid{display:grid;grid-template-columns:1fr;justify-items:center;gap:34px;max-width:900px;margin:0 auto;text-align:center}
        .site-shell .intro-visual,.site-shell .prof-photo-wrap,.site-shell .sim-panel{width:100%;max-width:620px;margin-left:auto;margin-right:auto}
        .site-shell .intro-copy,.site-shell .prof-copy,.site-shell .sim-copy{width:100%;max-width:780px;margin:0 auto;text-align:center}
        .site-shell .intro-copy h2,.site-shell .prof-copy h2,.site-shell .sim-copy h2{max-width:760px;margin:0 auto 18px}
        .site-shell .intro-copy>p,.site-shell .prof-copy>p,.site-shell .sim-copy>p{max-width:740px;margin:0 auto 15px}
        .site-shell .pain-list,.site-shell .sim-points{width:min(100%,650px);margin:24px auto;text-align:left}
        .site-shell .benefit-grid{width:100%;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}
        .site-shell .benefit-card,.site-shell .method-card{height:100%;text-align:center}
        .site-shell .benefit-icon{margin-left:auto;margin-right:auto}
        .site-shell .curriculum .carousel-head{display:block;margin:0 auto 30px;text-align:center}
        .site-shell .carousel-head .section-title{max-width:780px;margin:0 auto;text-align:center}
        .site-shell .carousel-head .section-title p{margin:16px auto 0}
        .site-shell .module-window{width:100vw;max-width:none;margin-left:calc(50% - 50vw);overflow:hidden;border-radius:0;padding:2px 0}
        .site-shell .module-track{display:flex;width:max-content;gap:0;animation:moduleMarquee 48s linear infinite;transition:none}
        .site-shell .module-window:hover .module-track{animation-play-state:paused}
        .site-shell .module-card{box-sizing:border-box;flex:0 0 300px;width:300px;min-height:195px;margin:0 10px;text-align:center}
        .site-shell .module-top{justify-content:center;gap:12px}
        @keyframes moduleMarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .site-shell .extra-box{width:100%;max-width:1000px;margin:30px auto 0;text-align:center}
        .site-shell .extra-list{justify-content:center}
        .site-shell .method-grid{width:100%;grid-template-columns:repeat(5,minmax(0,1fr));gap:14px}
        .site-shell .deep-grid{width:100%;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}
        .site-shell .deep-card{height:100%;align-items:flex-start;text-align:left}
        .site-shell .deep-card .benefit-icon{margin:0;flex:0 0 48px}
        .site-shell .sim-panel{text-align:center}
        .site-shell .sim-tags{justify-content:center}
        .site-shell .prof-photo-wrap{max-width:470px}
        .site-shell .prof-copy{max-width:780px}
        .site-shell .reviews .section-title{max-width:780px}
        .site-shell .testimonial-carousel{width:100vw;max-width:none;margin:0 0 0 calc(50% - 50vw);overflow:hidden;padding:10px 0 24px}
        .site-shell .testimonial-track{display:flex;align-items:stretch;gap:22px;width:max-content;animation:reviewMarquee 105s linear infinite}
        .site-shell .testimonial-carousel:hover .testimonial-track{animation-play-state:paused}
        .site-shell .testimonial-card{box-sizing:border-box;flex:0 0 520px;width:520px;min-height:280px;margin:0;padding:25px;grid-template-columns:112px minmax(0,1fr);gap:22px;text-align:left}
        .site-shell .testimonial-photo-placeholder{width:104px;height:104px;flex-basis:104px;font-size:34px}
        @keyframes reviewMarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .site-shell .section-cta{display:flex;justify-content:center;align-items:center;width:100%;margin:30px auto 0}
        .site-shell .offer-card{width:100%;max-width:820px;margin:0 auto;padding:34px}
        .site-shell .offer-head{max-width:680px;margin:0 auto 28px;text-align:center}
        .site-shell .offer-head h2{font-size:clamp(27px,3vw,36px)}
        .site-shell .offer-grid{max-width:700px;margin:0 auto;gap:12px 24px;text-align:left}
        .site-shell .pricing-panel{width:100%;max-width:620px;margin:26px auto 0;padding:22px}
        .site-shell .pricing-main strong{font-size:clamp(34px,4vw,46px)}
        .site-shell .pricing-discounts{margin-top:16px}
        .site-shell .offer-bottom{justify-content:center;flex-wrap:wrap;text-align:center;margin-top:22px;padding-top:22px}
        .site-shell .offer-bottom>div{width:100%}
        .site-shell .guarantee-outside{display:flex;width:100%;max-width:820px;margin:18px auto 0;padding:18px 22px;background:rgba(255,255,255,.09);border:1px solid rgba(234,219,197,.35);text-align:left}
        .site-shell .guarantee-outside b{color:#f4dfc3}
        .site-shell .guarantee-outside small{color:#e0d5df}
        .site-shell .faq-list{width:100%;max-width:820px;margin:0 auto;text-align:left}
        .site-shell .final-cta .container{text-align:center}
        .site-shell footer .footer-inner{width:100%;align-items:center}
        /* Paleta única dos botões: vinho, azul-marinho e branco */
        .site-shell .btn{min-height:48px;padding:14px 23px;border:1px solid transparent;border-radius:999px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:800;line-height:1.2;letter-spacing:0;box-shadow:none}
        .site-shell .btn-primary{background:#65143b!important;color:#fff!important;border-color:#65143b!important}
        .site-shell .btn-primary:hover{background:#7b1d49!important;border-color:#7b1d49!important;box-shadow:0 9px 22px rgba(101,20,59,.22)}
        .site-shell .btn-dark{background:#07172d!important;color:#fff!important;border-color:#07172d!important}
        .site-shell .btn-dark:hover{background:#102844!important;border-color:#102844!important;box-shadow:0 9px 22px rgba(7,23,45,.2)}
        .site-shell .btn-outline{background:rgba(255,255,255,.06)!important;color:#fff!important;border:1px solid rgba(255,255,255,.55)!important}
        .site-shell .btn-outline:hover{background:rgba(255,255,255,.14)!important;border-color:#eadbc5!important}
        .site-shell .btn-white{background:#fff!important;color:#07172d!important;border:1px solid #fff!important}
        .site-shell .btn-white:hover{background:#f5f7fa!important}
        .site-shell .circle-btn,.site-shell .testimonial-arrow{background:#102844;color:#fff;border-color:#102844}
        .site-shell .circle-btn:hover,.site-shell .testimonial-arrow:hover{background:#65143b;color:#fff;border-color:#65143b}
        .site-shell .whatsapp-float{background:#20c66a!important;color:#fff!important}
        @media(max-width:900px){
          .site-shell section{padding:76px 0}
          .site-shell .container{width:calc(100% - 40px)}
          .site-shell .benefit-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
          .site-shell .method-grid{grid-template-columns:repeat(3,minmax(0,1fr))}
          .site-shell .deep-grid{grid-template-columns:1fr}
          .site-shell .hero-grid{grid-template-columns:1fr}
        }
        @media(max-width:680px){
          .site-shell section{padding:66px 0}
          .site-shell .container{width:calc(100% - 32px)}
          .site-shell .hero{padding:52px 0 62px}
          .site-shell .hero h1{font-size:clamp(36px,10vw,44px)}
          .site-shell .hero-actions{display:grid;width:100%;max-width:420px;margin:0 auto}
          .site-shell .hero-actions .btn{width:100%}
          .site-shell .hero-proof{gap:11px 16px}
          .site-shell .floating-tag{left:0;bottom:0}
          .site-shell .trust-grid{grid-template-columns:1fr 1fr}
          .site-shell .intro-grid,.site-shell .prof-grid,.site-shell .sim-grid{grid-template-columns:1fr;gap:28px}
          .site-shell .intro-visual{min-height:280px;padding:22px}
          .site-shell .benefit-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
          .site-shell .benefit-card{padding:20px 14px}
          .site-shell .carousel-head .section-title h2{font-size:30px}
          .site-shell .module-card{flex-basis:260px;width:260px;min-height:180px;padding:20px}
          .site-shell .testimonial-track{animation-duration:125s}
          .site-shell .testimonial-card{flex-basis:310px;width:310px;grid-template-columns:1fr;justify-items:center;text-align:center;padding:22px 18px;min-height:350px}
          .site-shell .testimonial-photo-placeholder{width:88px;height:88px;flex-basis:88px;font-size:28px}
          .site-shell .method-grid{grid-template-columns:1fr 1fr}
          .site-shell .deep-grid{grid-template-columns:1fr}
          .site-shell .deep-card{padding:22px;gap:13px}
          .site-shell .offer-card{padding:24px 17px}
          .site-shell .offer-grid{grid-template-columns:1fr;gap:12px}
          .site-shell .pricing-panel{padding:19px 14px}
          .site-shell .pricing-discounts{gap:8px}
          .site-shell .pricing-discounts>div{padding:12px 7px}
          .site-shell .pricing-discounts strong{font-size:20px}
          .site-shell .offer-bottom{align-items:stretch;flex-direction:column}
          .site-shell .offer-bottom .btn{width:100%}
          .site-shell .guarantee-outside{padding:14px}
          .site-shell .footer-inner{align-items:flex-start;flex-direction:column}
          .site-shell .section-cta .btn{width:min(100%,420px)}
        }
        @media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*:before,*:after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}

        /* FOTOS, LOGOMARCA E CARROSSÉIS CONTÍNUOS */
        .site-shell .hero{padding:38px 0 82px}
        .site-shell .hero-brand{display:block;width:min(290px,72vw);height:auto;margin:0 0 34px;object-fit:contain}
        .site-shell .hero-grid{grid-template-columns:minmax(0,1.08fr) minmax(340px,.92fr);justify-items:stretch;gap:48px;max-width:1120px;text-align:left}
        .site-shell .hero-copy{max-width:650px;margin:0;text-align:left;align-self:center}
        .site-shell .hero-kicker{margin:0}
        .site-shell .hero h1{max-width:650px;margin:22px 0 18px;font-size:clamp(42px,4.8vw,62px)}
        .site-shell .hero-sub{max-width:610px;margin:0 0 28px}
        .site-shell .hero-actions{justify-content:center}
        .site-shell .hero-visual{width:100%;max-width:450px;min-height:520px;margin:0 0 0 auto;align-self:center}
        .site-shell .hero-art{display:block;width:100%;max-width:450px;aspect-ratio:4/5;object-fit:cover;object-position:50% 24%;border-radius:28px}
        .site-shell .prof-photo{display:block;width:100%;min-height:0;aspect-ratio:4/5;object-fit:cover;object-position:50% 22%;border-radius:18px}
        .site-shell .footer-brand{display:inline-block;width:230px;max-width:100%;height:auto;margin-bottom:14px}
        .site-shell .whatsapp-float{padding:0;overflow:hidden;background:transparent!important;box-shadow:0 10px 30px rgba(9,83,48,.28)}
        .site-shell .whatsapp-float img{display:block;width:100%;height:100%;object-fit:contain}
        .site-shell .intro-copy>.btn,.site-shell .extra-intro>.btn,.site-shell .final-cta .btn{display:flex;width:fit-content;margin-left:auto;margin-right:auto}
        .site-shell .module-window,.site-shell .testimonial-carousel{width:100vw;max-width:none;margin-left:calc(50% - 50vw);margin-right:0;overflow:hidden}
        .site-shell .module-track{gap:0;animation:moduleMarquee 46s linear infinite}
        .site-shell .module-group{display:flex;flex:none;gap:18px;padding-right:18px}
        .site-shell .module-group .module-card{margin:0}
        .site-shell .testimonial-track{gap:0;animation:reviewMarquee 90s linear infinite}
        .site-shell .testimonial-group{display:flex;flex:none;align-items:stretch;gap:18px;padding-right:18px}
        .site-shell .module-window:hover .module-track,.site-shell .testimonial-carousel:hover .testimonial-track{animation-play-state:running}
        @media(max-width:900px){
          .site-shell .hero-grid{grid-template-columns:minmax(0,1fr) minmax(290px,.8fr);gap:28px}
          .site-shell .hero h1{font-size:clamp(38px,5.5vw,50px)}
          .site-shell .hero-visual{min-height:440px}
        }
        @media(max-width:680px){
          .site-shell .hero{padding:30px 0 62px}
          .site-shell .hero-brand{width:230px;margin:0 auto 30px}
          .site-shell .hero-grid{display:grid;grid-template-columns:1fr;gap:28px;text-align:center}
          .site-shell .hero-copy{display:block;text-align:center}
          .site-shell .hero-kicker{margin:0 auto}
          .site-shell .hero h1{margin:18px auto 16px;font-size:clamp(36px,10vw,44px)}
          .site-shell .hero-sub{margin:0 auto 24px}
          .site-shell .hero-visual{grid-row:auto;width:100%;max-width:360px;min-height:0;margin:0 auto}
          .site-shell .hero-art{width:100%;max-width:360px;aspect-ratio:4/4.6;object-position:50% 20%}
          .site-shell .hero-actions{display:grid;width:100%;max-width:420px;margin:0 auto}
          .site-shell .prof-photo-wrap{max-width:380px}
          .site-shell .footer-brand{width:205px}
        }

        /* AJUSTES DE LAYOUT E DIREÇÃO VISUAL */
        .site-shell .btn,.site-shell a.btn,.site-shell button.btn{background:#65143b!important;border:1px solid #65143b!important;color:#fff!important;box-shadow:0 8px 22px rgba(101,20,59,.16)!important}
        .site-shell .btn:hover,.site-shell a.btn:hover,.site-shell button.btn:hover{background:#7b1d49!important;border-color:#7b1d49!important;color:#fff!important}
        .site-shell .faq-question{color:#65143b}.site-shell .faq-question[aria-expanded="true"]{background:#f8eff3;color:#65143b}
        .site-shell .intro-copy-centered .pain-list{grid-template-columns:repeat(2,minmax(0,1fr));max-width:920px;margin:34px auto 28px;gap:16px}
        .site-shell .intro-copy-centered .pain{min-height:94px;display:flex;align-items:center;justify-content:flex-start;text-align:left;padding:22px 25px;border-radius:17px;background:#fff;border:1px solid #eadfe5;box-shadow:0 12px 30px rgba(34,22,31,.055);font-size:14px;line-height:1.6}
        .site-shell .intro-copy-centered .pain svg{flex:0 0 22px;color:#65143b}
        .site-shell .module-track{gap:18px;width:max-content;animation:moduleMarquee 68s linear infinite}
        .site-shell .module-card{display:block;flex:0 0 310px;width:310px;min-height:385px;padding:0;overflow:hidden;border-radius:20px;background:#fff;border:1px solid #e6e8ed;box-shadow:0 16px 36px rgba(0,0,0,.18);color:#17283e}
        .site-shell .module-card:hover{background:#fff;transform:translateY(-5px)}
        .site-shell .module-photo-slot{height:190px;width:100%;background:linear-gradient(145deg,#e9edf2 0%,#f7f8fa 48%,#e4e8ee 100%);border-bottom:1px solid #e5e8ee;position:relative;overflow:hidden}
        .site-shell .module-photo-slot:after{content:"";position:absolute;inset:18px;border:1px solid rgba(255,255,255,.65);border-radius:12px}
        .site-shell .module-body{padding:20px 22px 24px;min-height:190px;display:flex;flex-direction:column;gap:15px}
        .site-shell .module-top{display:flex;align-items:center;justify-content:space-between;gap:8px}
        .site-shell .module-number{font-size:10px;font-weight:800;letter-spacing:.13em;color:#8a3157}
        .site-shell .free-label{background:#f7eaf0;color:#65143b}
        .site-shell .module-description h3{font:800 18px/1.3 Manrope,sans-serif;color:#17283e;margin:0 0 9px}
        .site-shell .module-description p{font-size:13px;line-height:1.65;color:#68778a;margin:0}
        @keyframes moduleMarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .site-shell .extra-box{margin-top:36px;display:grid;grid-template-columns:.85fr 1.15fr;gap:38px;align-items:center;padding:38px;border-radius:26px;background:linear-gradient(125deg,#07172d 0%,#182b43 55%,#65143b 100%);border:1px solid rgba(226,196,164,.35);box-shadow:0 24px 55px rgba(0,0,0,.22)}
        .site-shell .extra-intro .eyebrow{color:#e5c49b}.site-shell .extra-intro h3{font:800 30px/1.15 Manrope,sans-serif;color:#fff;margin:12px 0 14px}
        .site-shell .extra-intro p{font-size:14px;line-height:1.8;color:#d1d9e3;margin:0 0 23px}.site-shell .extra-counter{display:flex;align-items:center;gap:12px;margin-top:25px;padding-top:20px;border-top:1px solid rgba(255,255,255,.16);color:#d8e0e9}
        .site-shell .extra-counter strong{font:800 38px Manrope;color:#e5c49b}.site-shell .extra-counter span{font-size:12px;letter-spacing:.06em;text-transform:uppercase}
        .site-shell .extra-lessons{display:grid;gap:10px}.site-shell .extra-lesson{display:grid;grid-template-columns:44px 1fr 20px;align-items:center;gap:13px;padding:15px 17px;background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.15);border-radius:15px;color:#fff;transition:transform .2s,background .2s}
        .site-shell .extra-lesson:hover{transform:translateX(4px);background:rgba(255,255,255,.14)}
        .site-shell .extra-index{width:42px;height:42px;display:grid;place-items:center;border-radius:12px;background:#f1dfc8;color:#65143b;font:800 13px Manrope}
        .site-shell .extra-lesson strong{font-size:14px;line-height:1.35}.site-shell .extra-lesson small{display:block;margin-top:4px;font-size:10px;color:#c8d2df}
        .site-shell .extra-lesson>svg{color:#e5c49b}
        .site-shell .method-section{position:relative;overflow:hidden;padding:110px 0;background:radial-gradient(ellipse at 12% 15%,rgba(198,161,107,.2),transparent 30%),linear-gradient(130deg,#07172d,#172c46 58%,#42132f)}
        .site-shell .method-section:before{content:"";position:absolute;width:520px;height:520px;border:1px solid rgba(255,255,255,.07);border-radius:50%;right:-180px;top:-240px;box-shadow:0 0 0 45px rgba(255,255,255,.025),0 0 0 90px rgba(255,255,255,.02)}
        .site-shell .method-section .container{position:relative}.site-shell .method-section .section-title h2{color:#fff;font-size:clamp(34px,4.5vw,50px);max-width:800px}
        .site-shell .method-section .section-title p{color:#d1d9e3;max-width:700px}.site-shell .method-section .section-title .eyebrow{color:#e5c49b}
        .site-shell .method-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:13px;align-items:stretch;margin-top:45px}
        .site-shell .method-card{position:relative;min-height:260px;padding:26px 20px 30px;background:rgba(255,255,255,.075);border:1px solid rgba(255,255,255,.17);border-radius:19px;overflow:hidden;transition:transform .25s,background .25s}
        .site-shell .method-card:hover{transform:translateY(-8px);background:rgba(255,255,255,.13)}
        .site-shell .method-card:before{content:none}.site-shell .method-step-label{display:inline-flex;padding:7px 10px;border-radius:99px;background:rgba(226,196,164,.14);color:#e5c49b;font-size:9px;font-weight:800;letter-spacing:.14em}
        .site-shell .method-card h3{font:800 18px/1.3 Manrope,sans-serif;color:#fff;margin:28px 0 12px}
        .site-shell .method-card p{font-size:13px;line-height:1.75;color:#d0d9e5;margin:0}
        .site-shell .method-step-line{position:absolute;left:20px;right:20px;bottom:19px;height:3px;border-radius:5px;background:linear-gradient(90deg,#c6a16b,rgba(198,161,107,.08))}
        .site-shell .method-grid .section-cta{grid-column:1/-1;text-align:center;margin-top:20px}
        .site-shell .deep{padding:100px 0;background:linear-gradient(135deg,#eaf0f6 0%,#dfe8f1 50%,#f4e9ef 100%);position:relative}
        .site-shell .deep .section-title h2{color:#102844}.site-shell .deep .section-title p{color:#5c6c80}.site-shell .deep .section-title .eyebrow{color:#7b3153}
        .site-shell .deep-card{background:rgba(255,255,255,.88);border:1px solid rgba(255,255,255,.9);box-shadow:0 16px 35px rgba(24,45,69,.08);border-radius:20px;padding:29px}
        .site-shell .deep-card h3{color:#17283e}.site-shell .deep-card p{color:#62738a}.site-shell .deep-card .benefit-icon{background:#f3e7ed;color:#65143b;border-radius:14px}
        .site-shell .simulator{padding:100px 0;background:linear-gradient(135deg,#f8f3f6,#fff 48%,#f1e8ed)}
        .site-shell .feedback-heading{max-width:790px;margin:0 auto 48px;text-align:center}.site-shell .feedback-heading .eyebrow{color:#8b3156}
        .site-shell .feedback-heading h2{font:800 clamp(32px,4.5vw,49px)/1.12 Manrope,sans-serif;letter-spacing:-.04em;color:#17283e;margin:13px auto 16px}
        .site-shell .feedback-heading p{max-width:710px;margin:0 auto;color:#657487;font-size:15px;line-height:1.8}
        .site-shell .feedback-flow{display:grid;grid-template-columns:1fr 36px 1fr 36px 1fr;align-items:center;gap:12px;max-width:1060px;margin:0 auto}
        .site-shell .feedback-card{position:relative;min-height:300px;padding:28px 25px;background:#fff;border:1px solid #eadfe5;border-radius:22px;box-shadow:0 16px 36px rgba(48,24,40,.07);overflow:hidden}
        .site-shell .feedback-card.featured{background:linear-gradient(145deg,#65143b,#35142c);border-color:#65143b;transform:translateY(-12px)}
        .site-shell .feedback-number{position:absolute;right:18px;top:14px;font:800 35px Manrope;color:rgba(101,20,59,.12)}
        .site-shell .feedback-card.featured .feedback-number{color:rgba(255,255,255,.16)}
        .site-shell .feedback-icon{width:54px;height:54px;display:grid;place-items:center;border-radius:16px;background:#f5eaf0;color:#65143b;margin:12px 0 25px}
        .site-shell .feedback-card.featured .feedback-icon{background:rgba(255,255,255,.13);color:#f0d5df}
        .site-shell .feedback-card h3{font:800 19px Manrope;color:#17283e;margin:0 0 12px}.site-shell .feedback-card.featured h3{color:#fff}
        .site-shell .feedback-card p{font-size:13px;line-height:1.75;color:#68778a;margin:0 0 25px}.site-shell .feedback-card.featured p{color:#eadde4}
        .site-shell .feedback-card small{position:absolute;bottom:23px;left:25px;color:#9a7184;font-size:9px;font-weight:800;letter-spacing:.14em}
        .site-shell .feedback-footer{display:flex;justify-content:center;align-items:center;gap:30px;margin:44px auto 0;flex-wrap:wrap}
        .site-shell .feedback-footer strong{font:800 16px Manrope;color:#17283e}
        .site-shell .testimonial-carousel{max-width:1000px;margin:0 auto}.site-shell .testimonial-track{gap:18px;animation-duration:150s}
        .site-shell .testimonial-card{flex:0 0 330px;width:330px;min-height:250px;height:260px;display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:0;padding:19px 20px;background:#fff;border:1px solid #e9e2e7;border-radius:17px;box-shadow:0 10px 26px rgba(32,24,34,.06);overflow:hidden}
        .site-shell .testimonial-stars{order:0;text-align:left;color:#d3a65e;font-size:16px;letter-spacing:3px;margin:0 0 11px}
        .site-shell .testimonial-review{order:1;flex:1;font-size:12px;line-height:1.6;color:#566477;margin:0 0 14px;display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical;overflow:hidden}
        .site-shell .testimonial-author{order:2;display:flex;align-items:center;gap:11px;border-top:1px solid #edf0f3;padding-top:12px}
        .site-shell .testimonial-photo-placeholder{width:46px;height:46px;flex:0 0 46px;border:2px solid #f2e8ed;background:linear-gradient(145deg,#f3e9ee,#e4d4de);font-size:18px;box-shadow:none;overflow:hidden}
        .site-shell .testimonial-photo{width:100%;height:100%;display:block;object-fit:cover;border-radius:50%}
        .site-shell .testimonial-author-name{display:flex;flex-direction:column;align-items:flex-start;text-align:left;gap:3px}
        .site-shell .testimonial-author-name strong{font:800 14px Manrope;color:#17283e}.site-shell .testimonial-author-name small{font-size:10px;color:#8993a1}
        .site-shell .offer-bottom{justify-content:center;padding-top:24px}.site-shell .pricing-footnote{display:none}
        @media(max-width:1000px){.site-shell .method-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.site-shell .feedback-flow{grid-template-columns:1fr;max-width:620px}.site-shell .feedback-connector{display:none}.site-shell .feedback-card{min-height:235px}.site-shell .feedback-card.featured{transform:none}}
        @media(max-width:680px){
          .site-shell .hero-grid{display:grid;grid-template-columns:1fr;gap:0}.site-shell .hero-copy{display:contents}
          .site-shell .hero-kicker{grid-row:1;justify-self:start}.site-shell .hero h1{grid-row:2;font-size:clamp(36px,9vw,44px);margin:10px 0 15px}
          .site-shell .hero-sub{grid-row:3;font-size:15px;margin-bottom:8px}.site-shell .hero-visual{grid-row:4;min-height:0;margin:12px auto 20px;width:100%;max-width:400px}
          .site-shell .hero-art{width:100%;max-width:400px;aspect-ratio:4/3}.site-shell .hero-actions{grid-row:5;display:grid;width:100%;max-width:none;margin:0}
          .site-shell .intro-copy-centered .pain-list{grid-template-columns:1fr}.site-shell .extra-box{grid-template-columns:1fr;padding:25px 20px}
          .site-shell .method-grid{grid-template-columns:1fr 1fr}.site-shell .method-card{min-height:225px;padding:22px 16px}
          .site-shell .feedback-flow{grid-template-columns:1fr}.site-shell .feedback-card{min-height:220px}
          .site-shell .testimonial-card{flex-basis:280px;width:280px;height:250px;min-height:250px;padding:17px 16px}.site-shell .offer-bottom{align-items:center}
        }

        /* Ajustes finais: estes valores têm prioridade sobre os estilos anteriores. */
        .site-shell .module-track{gap:0;animation:moduleMarquee 46s linear infinite}
        .site-shell .testimonial-carousel{width:100vw;max-width:none;margin:0 0 0 calc(50% - 50vw)}
        .site-shell .testimonial-track{gap:0;animation:reviewMarquee 90s linear infinite}
        .site-shell .module-window:hover .module-track,.site-shell .testimonial-carousel:hover .testimonial-track{animation-play-state:running}
        .site-shell .feedback-footer{flex-direction:column;gap:18px;text-align:center}
        .site-shell footer .footer-inner{width:min(1120px,calc(100% - 48px));margin-left:auto;margin-right:auto}
        @media(max-width:680px){
          .site-shell .hero-grid{grid-template-columns:1fr;gap:28px;text-align:center}
          .site-shell .hero-copy{display:block;text-align:center}
          .site-shell .hero-kicker{grid-row:auto;justify-self:center;margin:0 auto}
          .site-shell .hero h1{grid-row:auto;margin:18px auto 16px}
          .site-shell .hero-sub{grid-row:auto;margin:0 auto 24px}
          .site-shell .hero-visual{grid-row:auto;width:100%;max-width:360px;min-height:0;margin:0 auto}
          .site-shell .hero-art{width:100%;max-width:360px;aspect-ratio:4/4.6;object-position:50% 20%}
          .site-shell .hero-actions{grid-row:auto;margin:0 auto}
        }

        /* Capas dos módulos: as imagens enviadas ocupam o topo do cartão. */
        .site-shell .module-photo-slot{height:230px;padding:0;background:#f2f4f7}
        .site-shell .module-photo-slot:has(.module-photo):after{display:none}
        .site-shell .module-photo{width:100%;height:100%;display:block;object-fit:cover;object-position:50% 0}

        /* Capas soltas: só a imagem, sem o cartão de texto embaixo. */
        .site-shell .module-group{gap:22px;padding-right:22px}
        .site-shell .module-card{flex:0 0 300px;width:300px;min-height:0;padding:0;background:transparent;border:0;border-radius:0;box-shadow:none;overflow:visible}
        .site-shell .module-card:hover{background:transparent;transform:translateY(-6px)}
        .site-shell .module-card-photo .module-photo-slot{height:300px;background:transparent;border:0;border-radius:20px;box-shadow:0 22px 46px rgba(0,0,0,.34)}
        .site-shell .module-card-photo .module-photo{border-radius:20px}
        .site-shell .module-free-badge{position:absolute;top:14px;left:14px;z-index:2}
        .site-shell .module-card:not(.module-card-photo){min-height:300px;background:#fff;border:1px solid #e6e8ed;border-radius:20px;box-shadow:0 16px 36px rgba(0,0,0,.18)}
        @media(max-width:680px){.site-shell .module-card{flex:0 0 252px;width:252px}.site-shell .module-card-photo .module-photo-slot{height:252px}}

        /* Leitura confortável e depoimentos completos, sem limite de linhas. */
        .site-shell .nav-links a{font-size:14px}
        .site-shell .hero-kicker,.site-shell .eyebrow{font-size:12px}
        .site-shell .hero-sub{font-size:19px}
        .site-shell .trust-item b{font-size:15px}.site-shell .trust-item small{font-size:12px}
        .site-shell .section-title p{font-size:17px}
        .site-shell .intro-copy>p,.site-shell .prof-copy>p{font-size:16px}
        .site-shell .intro-copy-centered .pain{font-size:15px}
        .site-shell .benefit-card h3{font-size:18px}.site-shell .benefit-card p{font-size:14px}
        .site-shell .method-step-label{font-size:10px}.site-shell .method-card p{font-size:14px}
        .site-shell .deep-card p,.site-shell .feedback-card p{font-size:14px}
        .site-shell .feedback-card small{font-size:10px}
        .site-shell .prof-sign span{font-size:13px}
        .site-shell .offer-line,.site-shell .faq-answer{font-size:14px}
        .site-shell .faq-question{font-size:15px}.site-shell .guarantee small{font-size:12px}
        .site-shell .footer-copy,.site-shell .footer-links a{font-size:12px}
        .site-shell .extra-lesson small{font-size:11px}
        .site-shell .testimonial-track,.site-shell .testimonial-group{align-items:flex-start}
        .site-shell .testimonial-card{align-self:flex-start;flex:0 0 400px;width:400px;height:auto;min-height:0;overflow:visible}
        .site-shell .testimonial-review{display:block;flex:0 0 auto;font-size:14px;line-height:1.75;margin:0 0 18px;overflow:visible;-webkit-line-clamp:unset;-webkit-box-orient:initial}
        .site-shell .testimonial-author-name small{font-size:12px}
        @media(max-width:680px){
          .site-shell .hero-grid{display:grid;grid-template-columns:1fr;gap:0;text-align:center}
          .site-shell .hero-copy{display:contents}
          .site-shell .hero-kicker{grid-row:1;justify-self:center;margin:0 auto}
          .site-shell .hero h1{grid-row:2;margin:18px auto 16px}
          .site-shell .hero-sub{grid-row:3;font-size:16px;margin:0 auto 20px}
          .site-shell .hero-visual{grid-row:4;width:100%;max-width:360px;min-height:0;margin:0 auto 24px}
          .site-shell .hero-actions{grid-row:5;display:grid;width:100%;max-width:420px;margin:0 auto}
          .site-shell .section-title p{font-size:16px}
          .site-shell .trust-item b{font-size:12px}.site-shell .trust-item small{font-size:11px}
          .site-shell .benefit-card h3{font-size:15px}.site-shell .benefit-card p{font-size:13px}
          .site-shell .method-card p{font-size:13px}
          .site-shell .testimonial-card{flex-basis:320px;width:320px;height:auto;min-height:0;padding:20px 18px}
          .site-shell .testimonial-review{font-size:14px;line-height:1.7}
        }

/* Refinos de layout, avaliações, redes sociais e investimento */
.site-shell .intro-copy-centered .pain-list{grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;max-width:1160px}
.site-shell .intro-copy-centered .pain{min-height:132px;flex-direction:column;align-items:flex-start;justify-content:center;gap:12px;padding:20px 18px;background:linear-gradient(145deg,#fff,#f7eef2);border:1px solid #ead5df;box-shadow:0 12px 28px rgba(101,20,59,.08)}
.site-shell .intro-copy-centered .pain:nth-child(2){background:linear-gradient(145deg,#f3f6fb,#e8eef6);border-color:#dce5ef}
.site-shell .intro-copy-centered .pain:nth-child(3){background:linear-gradient(145deg,#fbf7ef,#f3e8d8);border-color:#eadbc5}
.site-shell .intro-copy-centered .pain:nth-child(4){background:linear-gradient(145deg,#f2f6f4,#e5efea);border-color:#d8e7df}
.site-shell .intro-copy-centered .pain svg{margin:0}
.site-shell .method-grid{position:relative;grid-template-columns:repeat(5,minmax(0,1fr));gap:18px;align-items:start}
.site-shell .method-grid:before{content:"";position:absolute;z-index:0;left:8%;right:8%;top:50%;height:2px;background:linear-gradient(90deg,rgba(229,196,155,.18),#e5c49b,rgba(229,196,155,.18));box-shadow:0 0 15px rgba(229,196,155,.25)}
.site-shell .method-card{z-index:1;min-height:250px;background:linear-gradient(155deg,rgba(255,255,255,.13),rgba(255,255,255,.055));backdrop-filter:blur(5px)}
.site-shell .method-card:nth-child(even){margin-top:42px}.site-shell .method-card:nth-child(odd){margin-bottom:42px}
.site-shell .method-card:after{content:"";position:absolute;left:50%;bottom:-23px;width:9px;height:9px;border-radius:50%;background:#e5c49b;box-shadow:0 0 0 5px rgba(229,196,155,.15);transform:translateX(-50%)}
.site-shell .method-card:nth-child(even):after{top:-23px;bottom:auto}
.site-shell .method-grid .section-cta{position:relative;z-index:2}
.site-shell .simulator{background:linear-gradient(135deg,#e8eef7 0%,#e9e2ec 52%,#f4e8ee 100%)}
.site-shell .feedback-card{border-color:#d9e1ed;box-shadow:0 18px 42px rgba(27,47,76,.09)}
.site-shell .testimonial-group{align-items:stretch}
.site-shell .testimonial-card{height:270px;min-height:270px;flex:0 0 330px;width:330px;display:flex;flex-direction:column;align-items:stretch;padding:20px 21px}
.site-shell .testimonial-stars{width:100%;text-align:center;color:#f0b323;font-size:19px;letter-spacing:4px;margin:0 0 13px;line-height:1.2}
.site-shell .testimonial-review{flex:1;display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical;overflow:hidden;font-size:12px;line-height:1.65;margin:0 0 12px}
.site-shell .testimonial-author{margin-top:auto;min-height:58px}
.site-shell .prof-socials{display:flex;gap:12px;flex-wrap:wrap;margin-top:22px}
.site-shell .prof-socials a{display:inline-flex;align-items:center;gap:9px;padding:11px 16px;border-radius:999px;background:#f4edf0;border:1px solid #eadbe3;color:#65143b;font-size:13px;font-weight:800;transition:.2s}
.site-shell .prof-socials a:hover{background:#65143b;color:#fff;transform:translateY(-2px)}
.site-shell .pricing-panel{background:linear-gradient(135deg,#fff8ef 0%,#f8edf2 52%,#f0f4fa 100%);border:2px solid #e5c49b;box-shadow:0 18px 42px rgba(101,20,59,.1);padding:30px}
.site-shell .pricing-main{text-align:center;padding:24px 20px 26px;border:0;border-radius:18px;background:linear-gradient(120deg,#07172d,#18334e 65%,#65143b);color:#fff;box-shadow:0 14px 28px rgba(7,23,45,.18)}
.site-shell .pricing-label{color:#e9c99f;font-size:11px;letter-spacing:.2em}
.site-shell .pricing-main strong{color:#fff;font-size:clamp(44px,5vw,60px)}
.site-shell .pricing-main small{color:#e1e7ef;font-size:14px}
.site-shell .pricing-discounts>div{background:#fff;border:1px solid #ead6df;box-shadow:0 8px 20px rgba(101,20,59,.06);padding:20px 14px}
.site-shell .pricing-discounts>div:first-child{background:linear-gradient(145deg,#f8eaf0,#fff);border-color:#d9b5c5}
.site-shell .pricing-discounts>div:last-child{background:linear-gradient(145deg,#f7f0e4,#fff);border-color:#e5d2b4}
.site-shell .pricing-discounts span{display:block;color:#66758a;font-size:12px;font-weight:800;margin-bottom:7px}
.site-shell .pricing-discounts strong{display:block;color:#65143b;font:800 25px Manrope,sans-serif}
.site-shell .pricing-discounts small{display:block;color:#17283e;font:800 18px Manrope,sans-serif;margin-top:7px}
@media(max-width:1000px){
.site-shell .intro-copy-centered .pain-list{grid-template-columns:repeat(2,minmax(0,1fr))}
.site-shell .method-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.site-shell .method-grid:before{display:none}
.site-shell .method-card:nth-child(even),.site-shell .method-card:nth-child(odd){margin:0}.site-shell .method-card:after{display:none}
}
@media(max-width:680px){
.site-shell .intro-copy-centered .pain-list{grid-template-columns:1fr}
.site-shell .intro-copy-centered .pain{min-height:0;flex-direction:row;align-items:center}
.site-shell .method-grid{grid-template-columns:1fr 1fr;gap:12px}.site-shell .method-card{min-height:220px}
.site-shell .testimonial-card{height:260px;min-height:260px;flex-basis:280px;width:280px;padding:17px 16px}
.site-shell .pricing-panel{padding:18px 13px}.site-shell .pricing-main{padding:22px 12px}
.site-shell .pricing-discounts>div{padding:14px 8px}.site-shell .pricing-discounts strong{font-size:20px}
}


/* Ajustes solicitados nesta revisão */
.site-shell .intro-copy-centered .pain-list{display:flex;flex-direction:column;max-width:900px;margin:32px auto;gap:13px}
.site-shell .intro-copy-centered .pain{width:100%;min-height:86px;display:flex;flex-direction:row;align-items:center;justify-content:flex-start;gap:18px;padding:22px 28px;background:#65143b!important;border:1px solid #7b3153!important;border-radius:16px;color:#fff!important;box-shadow:0 9px 22px rgba(70,12,39,.12);font-size:15px;line-height:1.55}
.site-shell .intro-copy-centered .pain svg{flex:0 0 22px;color:#eadbc5!important}
.site-shell .method-grid{grid-template-columns:repeat(5,minmax(0,1fr));align-items:stretch;gap:16px;position:relative}
.site-shell .method-grid:before{left:9%;right:9%;top:35px;height:2px}
.site-shell .method-card{margin:0!important;min-height:245px;position:relative;z-index:1}
.site-shell .method-card:after{display:none}
.site-shell .simulator{background:#eef1f5!important}
.site-shell .feedback-heading h2{color:#17283e}
.site-shell .feedback-heading p{color:#5c6878}
.site-shell .prof-socials{justify-content:center;width:100%}
.site-shell .prof-copy{text-align:center}
.site-shell .prof-sign{justify-content:center}
.site-shell .btn{min-height:58px;padding:17px 30px;font-size:15px}
.site-shell .section-cta,.site-shell .hero-actions,.site-shell .feedback-footer,.site-shell .offer-bottom{justify-content:center;text-align:center}
.site-shell .section-cta{display:flex;width:100%}
.site-shell .pricing-main{background:#e7e9ed!important;color:#17283e!important;box-shadow:none!important;border:1px solid #d2d7df!important}
.site-shell .pricing-label{color:#657184!important}
.site-shell .pricing-main strong{color:#17283e!important}
.site-shell .pricing-main small{color:#4c596b!important}
.site-shell .pricing-discounts>div,.site-shell .pricing-discounts>div:first-child,.site-shell .pricing-discounts>div:last-child{background:#8b2349!important;border:1px solid #8b2349!important;box-shadow:none!important}
.site-shell .pricing-discounts span,.site-shell .pricing-discounts strong,.site-shell .pricing-discounts small{color:#fff!important}
@media(min-width:681px){
 .site-shell .method-grid{grid-template-columns:repeat(5,minmax(0,1fr))}
}
@media(max-width:1000px) and (min-width:681px){
 .site-shell .method-grid{grid-template-columns:repeat(3,minmax(0,1fr))}
 .site-shell .method-grid:before{display:none}
}
@media(max-width:680px){
 .site-shell .intro-copy-centered .pain-list{max-width:100%;gap:11px}
 .site-shell .intro-copy-centered .pain{min-height:82px;padding:17px 18px;font-size:13px}
 .site-shell .method-grid{display:flex;flex-direction:column;gap:16px;padding:4px 0;align-items:stretch}
 .site-shell .method-grid:before{display:block;content:"";position:absolute;z-index:0;left:50%;right:auto;top:28px;bottom:90px;width:2px;height:auto;background:#c6a16b;transform:translateX(-50%);opacity:.8}
 .site-shell .method-card{width:84%;min-height:0;padding:20px 18px;margin:0!important}
 .site-shell .method-card:nth-child(odd){align-self:flex-start;margin-right:auto!important}
 .site-shell .method-card:nth-child(even){align-self:flex-end;margin-left:auto!important}
 .site-shell .method-card:after{display:block;content:"";position:absolute;top:27px;bottom:auto;left:auto;right:-11%;width:9px;height:9px;border-radius:50%;background:#c6a16b;box-shadow:0 0 0 4px rgba(198,161,107,.16)}
 .site-shell .method-card:nth-child(even):after{left:-11%;right:auto}
 .site-shell .method-grid .section-cta{width:100%;align-self:center}
 .site-shell .prof-socials{justify-content:center}
 .site-shell .btn{width:min(100%,440px);min-height:56px;padding:16px 20px}
 .site-shell .hero-actions{align-items:center}
}


/* Ajustes finais solicitados */
.site-shell .method-grid{
  display:flex!important;
  flex-direction:column!important;
  align-items:center!important;
  gap:18px!important;
}
.site-shell .method-grid:before{display:none!important;content:none!important}
.site-shell .method-card{
  width:100%!important;
  max-width:860px!important;
  min-height:0!important;
  margin:0 auto!important;
}
.site-shell .method-card:after{display:none!important;content:none!important}
.site-shell .pricing-main{
  background-color:#e7e9ed!important;
  background-image:none!important;
  color:#17283e!important;
  border:1px solid #d2d7df!important;
  box-shadow:none!important;
}
.site-shell .pricing-main .pricing-label{color:#657184!important}
.site-shell .pricing-main strong{color:#17283e!important}
.site-shell .pricing-main small{color:#4c596b!important}
.site-shell .final-cta .eyebrow{color:#f0c66e!important}
.site-shell footer .footer-inner{
  display:flex!important;
  flex-direction:column!important;
  align-items:center!important;
  justify-content:center!important;
  text-align:center!important;
  gap:22px!important;
}
.site-shell footer .footer-inner>div:first-child{width:100%;text-align:center!important}
.site-shell footer .footer-inner>div:first-child>a{display:inline-flex;justify-content:center;align-items:center}
.site-shell footer .footer-brand{display:block;margin:0 auto!important}
.site-shell footer .footer-copy{text-align:center!important}
.site-shell footer .footer-links{justify-content:center!important}
@media(max-width:680px){
  .site-shell .method-grid{gap:14px!important}
  .site-shell .method-card{width:100%!important;max-width:100%!important}
}

      `}
      </style>


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
  }),
  component: Index,
});
