import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  Calendar,
  MapPin,
  ChevronDown,
  Plus,
  ArrowRight,
  Search,
  Ticket,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

import heroImg from "@/assets/hero-carolina.png";
import author1 from "@/assets/itamar-vieira-jr.png";
import author2 from "@/assets/tom-farias.png";
import author3 from "@/assets/vera-eunice.png";
import author4 from "@/assets/sergio-vaz.png";
import author5 from "@/assets/amara-moira.png";
import curatorImg from "@/assets/reynaldo-bessa.png";
import carolinaWriting from "@/assets/carolina-teal.png";
import stageImg from "@/assets/abertura.png";
import dirceImg from "@/assets/dirce-thomaz.png";
import bititaImg from "@/assets/bitita-photo.png";
import rodaConversaImg from "@/assets/roda-conversa.png";
import pauloLinsImg from "@/assets/paulo-lins.png";
import patriciaMenezesImg from "@/assets/patricia-menezes.png";
import reginaldoNasserImg from "@/assets/reginaldo-nasser.png";
import jeraPotyImg from "@/assets/jera-poty.png";
import joFreitasImg from "@/assets/jo-freitas.png";
import sambaImg from "@/assets/samba-group.png";
import logoQuilombhojeImg from "@/assets/logo-quilombhoje.png";
import logoLetraSelvagemImg from "@/assets/logo-letra-selvagem.png";
import logoMyreImg from "@/assets/logo-myre.png";
import catadora1Img from "@/assets/catadora-1.png";
import catadora2Img from "@/assets/catadora-2.png";
import catadora3Img from "@/assets/catadora-3.png";
import catadora4Img from "@/assets/catadora-4.png";
import carolina23Img from "@/assets/carolina23.png";
import marcilioEquipeImg from "@/assets/marcilio-duarte.png";
import deborahEquipeImg from "@/assets/deborah-izola.png";
import fernandaEquipeImg from "@/assets/fernanda-ferreira.png";
import giulliaEquipeImg from "@/assets/giulia-schwartz.png";
import edemilsonEquipeImg from "@/assets/edemilson-tavares.png";
import hectorEquipeImg from "@/assets/hector-boss.png";
import formaCertaLogo from "@/assets/forma-certa.png";
import sinespLogo from "@/assets/sinesp.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const nav = [
  "Início",
  "Sobre",
  "Convidados",
  "Curadoria",
  "Programação",
  "Equipe",
];

const convidados = [
  { name: "Itamar Vieira Jr.", img: author1 },
  { name: "Tom Farias", img: author2 },
  { name: "Vera Eunice de Jesus", img: author3 },
  { name: "Sérgio Vaz", img: author4 },
  { name: "Amara Moira", img: author5 },
];

const mesas = [
  {
    time: "10:00",
    label: "Abertura",
    title: "Abertura Oficial",
    desc: "Solenidade de abertura",
    img: stageImg,
    wide: true,
  },
  {
    time: "10:40",
    label: "Mesa 1",
    title: "Tom Farias",
    desc: "Carolina Maria de Jesus: a escrita como insurgência e os desafios da reconstrução biográfica.",
    img: author2,
  },
  {
    time: "12:45",
    label: "Monólogo",
    title: "Dirce Thomaz",
    desc: "Eu e ela: Visita a Carolina Maria de Jesus",
    img: dirceImg,
  },
  {
    time: "13:10",
    label: "Mesa 2",
    title: "Vera Eunice de Jesus",
    desc: "Legado e afeto: Carolina em primeira pessoa.",
    img: author3,
  },
  {
    time: "16:50",
    label: "Mesa 4",
    title: "Itamar Vieira Jr.",
    desc: "A terra que nos sustenta: memória, territórios e vozes na literatura",
    img: author1,
  },
  {
    time: "19:00",
    label: "Mesa 5",
    title: "Sérgio Vaz",
    desc: "A sala de aula como território de criação: poesia, resistência e educação",
    img: author4,
  },
];

const mesa3 = [
  { name: "Paulo Lins", img: pauloLinsImg },
  { name: "Patrícia de Menezes", img: patriciaMenezesImg },
  { name: "Reginaldo Nasser", img: reginaldoNasserImg },
];

const mesa6 = [
  { name: "Amara Moira", img: author5 },
  { name: "Jerá Poty Mirim", img: jeraPotyImg },
  { name: "Jô Freitas", img: joFreitasImg },
];

const bitita = [
  { time: "11:35", title: "Roda de conversa 1" },
  { time: "14:05", title: "Roda de conversa 2" },
  { time: "16:40", title: "Roda de conversa 3" },
  { time: "17:35", title: "Roda de conversa 4" },
];

const catadora = [
  {
    time: "11:35",
    title: "Contação de história",
    who: "Kelly Orasi",
    img: catadora1Img,
  },
  {
    time: "14:05",
    title: "O cordel: a palavra rimada",
    who: "Moreira de Acopiara",
    img: catadora2Img,
  },
  {
    time: "16:10",
    title: "Batalha de poesia",
    who: "Slam da Guilhermina",
    img: catadora3Img,
  },
  {
    time: "17:50",
    title: "A música de Carolina",
    who: "Luana Bayô",
    img: catadora4Img,
  },
];

const livrarias = [
  {
    name: "Quilombhoje / Cadernos Negros",
    logo: logoQuilombhojeImg,
  },
  {
    name: "Livraria Letra Selvagem",
    logo: logoLetraSelvagemImg,
  },
  {
    name: "Livraria Myre",
    logo: logoMyreImg,
  },
];

const autografos = [
  { time: "11:35", local: "Sala de Autógrafos", autor: "Tom Farias" },
  { time: "12:20", local: "Espaço Catadora", autor: "Kelly Orasi" },
  {
    time: "14:05",
    local: "Sala de Autógrafos",
    autor: "Vera Eunice de Jesus",
  },
  {
    time: "14:50",
    local: "Espaço Catadora",
    autor: "Moreira de Acopiara",
  },
  {
    time: "16:10",
    local: "Quintal das Letras",
    autor: "Moreira de Acopiara",
  },
  {
    time: "17:50",
    local: "Sala de Autógrafos",
    autor: "Itamar Vieira Jr.",
  },
  {
    time: "18:35",
    local: "Quintal das Letras",
    autor: "Autores do SINESP",
  },
  {
    time: "19:55",
    local: "Sala de Autógrafos",
    autor: "Sérgio Vaz",
  },
  {
    time: "19:55",
    local: "Sala de Autógrafos",
    autor: "Participantes",
  },
];

const equipe = [
  {
    name: "Reynaldo Bessa",
    role: "Curador",
    img: curatorImg,
  },
  {
    name: "Marcílio Duarte",
    role: "Produção Executiva e Comunicação",
    img: marcilioEquipeImg,
  },
  {
    name: "Deborah Izola",
    role: "Assistente Curatorial",
    img: deborahEquipeImg,
  },
  {
    name: "Fernanda Ferreira",
    role: "Apresentadora",
    img: fernandaEquipeImg,
  },
  {
    name: "Giullia Schwartz",
    role: "Assistente de Produção",
    img: giulliaEquipeImg,
  },
  {
    name: "Edemilson Tavares",
    role: "Assistente de Produção",
    img: edemilsonEquipeImg,
  },
  {
    name: "Hector Boss",
    role: "Web Dev",
    img: hectorEquipeImg,
  },
];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-white">
      <Nav />
      <Hero />
      <Convidados />
      <Curadoria />
      <Mesas />
      <Bitita />
      <Livrarias />
      <Catadora />
      <Autografos />
      <Equipe />
      <Footer />
      <Copyright />
    </div>
  );
}

function Nav() {
  return (
    <header
      className="fixed inset-x-0 top-0 z-50 backdrop-blur-md"
      style={{
        background:
          "linear-gradient(90deg, rgba(194,112,75,0.68), rgba(139,87,139,0.66), rgba(40,73,110,0.72))",
      }}
    >
      <div className="mx-auto flex h-[100px] max-w-[1280px] items-center px-8">
        <nav className="hidden items-center gap-14 text-[18px] font-light text-white lg:flex">
          {nav.map((n) => (
            <a
              key={n}
              href={`#${n.toLowerCase()}`}
              className="transition hover:text-white/70"
            >
              {n.toUpperCase()}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden w-[305px] items-center rounded-full bg-white px-5 py-3 lg:flex">
          <Search className="h-4 w-4 shrink-0 text-neutral-500" />

          <input
            aria-label="Buscar"
            className="ml-3 w-full bg-transparent text-sm text-neutral-700 outline-none placeholder:text-neutral-400"
          />
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="início" className="relative isolate min-h-screen overflow-hidden pt-20">
      <img
        src={heroImg}
        alt="Retrato ilustrado de Carolina Maria de Jesus com pinceladas coloridas"
        width={1600}
        height={1000}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-[1.1fr_1fr] lg:px-10">
        <div className="order-2 lg:order-1">
          <p
            className="font-script text-6xl leading-none text-[oklch(0.55_0.22_25)] drop-shadow-[0_4px_0_rgba(0,0,0,0.35)] sm:text-7xl md:text-8xl"
          >
            Carolina
          </p>
          <p className="mt-1 font-script text-3xl text-[oklch(0.55_0.22_255)] drop-shadow-[0_2px_0_rgba(0,0,0,0.35)] sm:text-4xl">
            além do quarto
          </p>
        </div>

        <div className="order-1 space-y-6 lg:order-2 lg:justify-self-end">
          <div className="max-w-md rounded-md border-2 border-white/90 bg-black/10 p-6 text-white backdrop-blur-sm">
            <BookOpen className="mb-3 h-10 w-10" strokeWidth={1.5} />
            <h1 className="font-sans text-4xl font-black leading-[0.95] tracking-wide sm:text-5xl">
              ENCONTRO
              <br />
              LITERÁRIO
              <br />
              <span className="text-3xl sm:text-4xl">2026</span>
            </h1>
          </div>

          <div className="flex max-w-md items-center gap-3 text-white">
            <Calendar className="h-6 w-6 shrink-0" strokeWidth={1.5} />
            <p className="text-xl font-bold tracking-wide">08 DE AGOSTO</p>
          </div>

          <div className="flex max-w-md items-start gap-3 text-white">
            <MapPin className="h-6 w-6 shrink-0" strokeWidth={1.5} />
            <div>
              <p className="font-bold tracking-wide">ESPAÇO DE EVENTOS HAKKA</p>
              <p className="text-sm text-white/80">Rua São Joaquim, 460 · Liberdade · SP</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#sobre"
              className="rounded-full border-2 border-white px-8 py-3 text-sm font-bold tracking-[0.2em] text-white transition hover:bg-white hover:text-ink"
            >
              SAIBA MAIS
            </a>
            <a
              href="#programação"
              className="rounded-full border-2 border-white px-8 py-3 text-sm font-bold tracking-[0.2em] text-white transition hover:bg-white hover:text-ink"
            >
              PROGRAMAÇÃO
            </a>
          </div>
        </div>
      </div>
      <ChevronDown className="absolute bottom-8 left-1/2 h-8 w-8 -translate-x-1/2 animate-bounce text-white/80" />
    </section>
  );
}

function SectionHead({ title }: { title: string }) {
  return (
    <div className="bg-ink py-8">
      <h2 className="section-title">{title}</h2>
    </div>
  );
}

function SideLabel({ children }: { children: string }) {
  return (
    <div className="pointer-events-none absolute left-2 top-8 hidden sm:block">
      <span className="side-label">{children}</span>
    </div>
  );
}

function Convidados() {
  return (
    <section id="convidados">
      <SectionHead title="Convidados" />
      <div className="relative bg-orange-band py-16">
        <SideLabel>CONVIDADOS</SideLabel>
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {convidados.map((c) => (
              <figure key={c.name} className="w-[240px] shrink-0 snap-start sm:w-[280px]">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)]">
                  <img src={c.img} alt={c.name} width={512} height={768} loading="lazy" className="aspect-[3/4] w-full object-cover" />
                </div>
                <figcaption className="mt-4 text-center text-base font-black tracking-widest text-white">
                  {c.name.toUpperCase()}
                </figcaption>
              </figure>
            ))}
            <div className="flex w-[240px] shrink-0 items-center justify-center sm:w-[280px]">
              <button className="grid h-14 w-14 place-items-center rounded-full border-2 border-white text-white transition hover:bg-white hover:text-orange-band">
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className={`h-1 w-8 rounded-full ${i === 0 ? "bg-white" : "bg-white/40"}`} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <button className="rounded-full border-2 border-white px-10 py-3 text-sm font-bold tracking-[0.25em] text-white transition hover:bg-white hover:text-orange-band">
              VER TUDO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Curadoria() {
  return (
    <section id="curadoria">
      <SectionHead title="Curadoria" />
      <div className="relative overflow-hidden bg-teal-band py-16">
        <SideLabel>CURADORIA</SideLabel>
        <img
          src={carolinaWriting}
          alt=""
          aria-hidden
          loading="lazy"
          className="pointer-events-none absolute right-0 top-0 h-full w-1/2 object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[auto_1fr_1fr] lg:items-start lg:px-16">
          <figure className="max-w-xs">
            <div className="relative overflow-hidden rounded-xl">
              <img src={curatorImg} alt="Reynaldo Bessa" width={700} height={900} loading="lazy" className="aspect-[3/4] w-full object-cover" />
            </div>
            <figcaption className="mt-4 text-lg font-black tracking-widest text-white">REYNALDO BESSA</figcaption>
          </figure>

          <div className="max-w-md text-[15px] leading-relaxed text-white/95">
            <p>
              O Sinesp e a curadoria idealizaram este projeto como um espaço dinâmico de formação continuada e reflexão coletiva.
              Acima de tudo, prezando pela diversidade e procurando estabelecer um diálogo direto com educadores, pesquisadores,
              escritores, estudantes, leitores, editores, livreiros e admiradores da literatura em geral.
            </p>
            <p className="mt-4">
              Com essa configuração, o Sinesp reafirma seu papel na promoção do acesso democrático à educação e à cultura de
              qualidades, transformando o espaço urbano em um ponto de encontro essencial para a divulgação e a valorização de
              uma das vozes mais autênticas da nossa literatura.
            </p>
            <button className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/80 px-6 py-3 text-xs font-bold tracking-[0.25em] text-white transition hover:bg-white hover:text-teal-band">
              LEIA A CARTA NA ÍNTEGRA <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <blockquote className="relative border-l border-white/30 pl-6 font-display text-2xl leading-snug text-white sm:text-3xl">
            <span className="absolute -left-2 -top-6 font-display text-6xl text-white/40">“</span>
            Carolina Maria de Jesus: além do quarto lança luz sobre as múltiplas vertentes artísticas da autora mineira que
            tendem a permanecer em segundo plano.
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function Mesas() {
  return (
    <section id="programação">
      <SectionHead title="Mesas" />
      <div className="relative bg-red-band py-16">
        <SideLabel>MESAS</SideLabel>
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-16">
          {mesas.slice(0, 3).map((m) => (
            <MesaCard key={m.time} {...m} />
          ))}

          <div className="rounded-md bg-black/25 p-2 sm:col-span-2 lg:col-span-1">
            <MesaHeader time="13:10" label="Mesa 2" />
            <SpeakerRow speakers={[{ name: "Vera Eunice de Jesus", img: author3 }]} desc="Legado e afeto: Carolina em primeira pessoa." />
          </div>

          <div className="rounded-md bg-black/25 p-2 sm:col-span-2">
            <MesaHeader time="15:15" label="Mesa 3" />
            <SpeakerRow
              speakers={mesa3}
              desc="O quarto de despejo do mundo: moradia, identidade, direitos humanos e Palestina."
            />
          </div>

          {mesas.slice(4).map((m) => (
            <MesaCard key={m.time} {...m} />
          ))}

          <div className="rounded-md bg-black/25 p-2 sm:col-span-2">
            <MesaHeader time="20:00" label="Mesa 6" />
            <SpeakerRow
              speakers={mesa6}
              desc="Escrevivências de fronteira: corpo, ancestralidade e literatura como território de resistência."
            />
          </div>

          <MesaCard
            time="20:55"
            label="Encerramento"
            title="Grupo de Roda de Samba"
            desc="Celebração musical de encerramento, com samba de raiz e homenagem à obra de Carolina."
            img={sambaImg}
            wide
          />
        </div>
      </div>
    </section>
  );
}

function MesaHeader({ time, label }: { time: string; label: string }) {
  return (
    <div className="mb-3 flex items-baseline gap-3 px-2 pt-2 text-white">
      <span className="text-2xl font-black">{time}</span>
      <span className="text-white/60">|</span>
      <span className="text-sm uppercase tracking-[0.25em] text-white/90">{label}</span>
    </div>
  );
}

function MesaCard({
  time,
  label,
  title,
  desc,
  img,
  wide,
}: {
  time: string;
  label: string;
  title: string;
  desc: string;
  img: string;
  wide?: boolean;
}) {
  return (
    <article className="rounded-md bg-black/25 p-2">
      <MesaHeader time={time} label={label} />
      <div className="overflow-hidden rounded-md">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className={`w-full bg-black/10 object-contain ${wide ? "aspect-[16/9]" : "aspect-[4/3]"}`}
        />
      </div>
      <div className="p-4">
        <p className="text-sm font-black tracking-widest text-white">{title.toUpperCase()}</p>
        <p className="mt-2 text-sm leading-relaxed text-white/90">{desc}</p>
        <div className="mt-4 flex justify-end">
          <button className="grid h-8 w-8 place-items-center rounded-full border border-white/70 text-white transition hover:bg-white hover:text-red-band">
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}

function SpeakerRow({ speakers, desc }: { speakers: { name: string; img: string }[]; desc: string }) {
  return (
    <div>
      <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${speakers.length}, minmax(0,1fr))` }}>
        {speakers.map((s) => (
          <div key={s.name} className="overflow-hidden rounded-md">
            <img src={s.img} alt={s.name} loading="lazy" className="aspect-[4/3] w-full bg-black/10 object-contain" />
          </div>
        ))}
      </div>
      <div className="p-4">
        <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${speakers.length}, minmax(0,1fr))` }}>
          {speakers.map((s) => (
            <p key={s.name} className="text-xs font-black tracking-widest text-white">
              {s.name.toUpperCase()}
            </p>
          ))}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-white/90">{desc}</p>
        <div className="mt-4 flex justify-end">
          <button className="grid h-8 w-8 place-items-center rounded-full border border-white/70 text-white transition hover:bg-white hover:text-red-band">
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Bitita() {
  return (
    <section className="bg-ink py-8">
      <div className="mx-auto grid max-w-[1500px] gap-0 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch lg:px-10">
        <div className="rounded-l-2xl bg-purple-band p-8 sm:p-12 lg:p-14">
          <h3 className="font-sans text-4xl font-light uppercase tracking-normal text-white sm:text-5xl lg:text-6xl">
            Espaço Bitita
          </h3>

          <div className="mt-12 space-y-4">
            {bitita.map((b, i) => (
              <div
                key={i}
                className="grid min-h-[96px] grid-cols-[82px_118px_1fr_48px] items-center gap-4 rounded-xl border border-white/40 px-4 py-2"
              >
                <span className="text-3xl font-light text-white">
                  {b.time}
                </span>

                <img
                  src={rodaConversaImg}
                  alt=""
                  loading="lazy"
                  className="h-[84px] w-[118px] rounded-lg object-cover"
                />

                <div className="min-w-0">
                  <p className="text-sm font-bold text-white">
                    {b.title.toUpperCase()}
                  </p>
                  <p className="mt-2 text-xs leading-snug text-white/90">
                    Autores filiados ao SINESP falam de suas obras e de seu
                    processo criativo
                  </p>
                </div>

                <button className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-white text-white transition hover:bg-white hover:text-purple-band">
                  <Plus className="h-6 w-6" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-r-2xl">
          <img
            src={bititaImg}
            alt="Homenagem em preto e branco"
            loading="lazy"
            className="h-full min-h-[700px] w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

function Livrarias() {
  return (
    <section className="bg-ink py-10">
      <div className="mx-auto grid max-w-[1240px] px-6 lg:grid-cols-[520px_1fr] lg:px-0">
        {/* Coluna esquerda */}
        <div className="flex flex-col">
          <div className="min-h-[450px] rounded-2xl bg-blue-band px-7 py-8 sm:px-10">
            <h3 className="font-sans text-[48px] font-light uppercase leading-none text-white">
              Livrarias
            </h3>

            <div className="mt-10 space-y-3">
              {livrarias.map((l) => (
                <div
                  key={l.name}
                  className="grid min-h-[88px] grid-cols-[156px_1fr] gap-2"
                >
                  <div className="flex items-center justify-center overflow-hidden rounded-lg bg-white p-3">
                    <img
                      src={l.logo}
                      alt={l.name}
                      loading="lazy"
                      className="max-h-[72px] w-full object-contain"
                    />
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-white/40 px-5 text-white">
                    <span className="max-w-[180px] text-[15px] font-bold uppercase leading-tight">
                      {l.name}
                    </span>

                    <button
                      type="button"
                      aria-label={`Ver detalhes de ${l.name}`}
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-white"
                    >
                      <Plus className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <blockquote className="flex min-h-[270px] items-center justify-center gap-7 px-5 text-white/40">
            <span className="font-serif text-[145px] leading-none text-white/35">
              “
            </span>

            <p className="max-w-[290px] text-center font-script text-[47px] leading-[0.88]">
              Quem inventou
              <br />
              a fome
              <br />
              são os que
              <br />
              comem.
            </p>
          </blockquote>
        </div>

        {/* Imagem direita */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src={carolina23Img}
            alt="Carolina escrevendo"
            loading="lazy"
            className="h-full min-h-[720px] w-full object-cover object-center grayscale"
          />
        </div>
      </div>
    </section>
  );
}

function Catadora() {
  return (
    <section className="bg-ink py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <h3 className="text-center font-display text-3xl uppercase tracking-[0.28em] text-white sm:text-4xl">
          Espaço Catadora de Palavras
        </h3>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {catadora.map((c) => (
            <article
              key={c.time}
              className="group relative h-[540px] overflow-hidden rounded-lg"
            >
              <img
                src={c.img}
                alt={c.who}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="relative min-h-[380px]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink px-6 pb-10 lg:px-16">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/25 p-8 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[auto_1fr_1.2fr_auto_auto] lg:items-start">
          <div className="flex flex-col items-center gap-2 text-center text-white">
            <div className="grid h-24 w-24 place-items-center rounded-full border-2 border-white">
              <BookOpen className="h-10 w-10" strokeWidth={1.4} />
            </div>

            <p className="mt-2 text-xs font-black tracking-[0.25em]">
              ENCONTRO
            </p>
            <p className="text-xs font-black tracking-[0.25em]">
              LITERÁRIO
            </p>
            <p className="text-xs font-black tracking-[0.25em]">2026</p>
          </div>

          <div className="text-sm text-white/80">
            <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-white/60">
              NAVEGAÇÃO
            </p>

            <ul className="space-y-2">
              {nav.map((n) => (
                <li key={n}>
                  <a
                    href={`#${n.toLowerCase()}`}
                    className="transition hover:text-white"
                  >
                    {n}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-sm text-white/80">
            <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-white/60">
              INFORMAÇÕES
            </p>

            <p>Encontro Literário do SINESP 2026</p>
            <p>08 de agosto de 2026</p>
            <p>Espaço de Eventos Hakka</p>
            <p>Rua São Joaquim, 460</p>
            <p>Liberdade — São Paulo (SP)</p>
            <p>01508-000</p>
          </div>

          <div className="text-center">
            <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-white/60">
              REALIZAÇÃO
            </p>

            <div className="flex min-h-24 items-center justify-center">
              <img
                src={formaCertaLogo}
                alt="Forma Certa"
                loading="lazy"
                className="h-24 w-28 object-contain"
              />
            </div>
          </div>

          <div className="text-center">
            <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-white/60">
              APOIO
            </p>

            <div className="flex min-h-24 items-center justify-center">
              <img
                src={sinespLogo}
                alt="SINESP"
                loading="lazy"
                className="h-20 w-28 object-contain"
              />
            </div>

            <div className="mt-4 flex justify-center gap-3 text-white/80">
              <a
                href="#"
                aria-label="Instagram"
                className="transition hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="transition hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="transition hover:text-white"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Autografos() {
  return (
    <section className="bg-ink py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <h3 className="mb-10 text-center font-sans text-[58px] font-light uppercase text-white">
  Sessões de Autógrafo
</h3>
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto]">
          <div className="relative">
            <span className="side-label absolute -left-2 top-0 hidden sm:block">AUTÓGRAFOS</span>
            <div className="grid grid-cols-[auto_1fr_1fr_auto] gap-x-4 gap-y-3 px-2 pl-10 text-white sm:gap-x-6">
              <div className="text-xs font-black tracking-[0.25em] text-white/80">HORÁRIO</div>
              <div className="text-xs font-black tracking-[0.25em] text-white/80">LOCAL</div>
              <div className="text-xs font-black tracking-[0.25em] text-white/80">AUTOR/A</div>
              <div className="text-xs font-black tracking-[0.25em] text-white/80">TETO</div>
              {autografos.map((a, i) => (
                <div key={i} className="contents">
                  <div className="flex items-center rounded-full border border-white/40 bg-white/[0.03] px-4 py-2 text-sm font-bold">{a.time}</div>
                  <div className="flex items-center rounded-full border border-white/40 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-widest text-white/80">{a.local}</div>
                  <div className="flex items-center rounded-full border border-white/40 bg-white/[0.03] px-4 py-2 text-sm font-black tracking-widest">{a.autor.toUpperCase()}</div>
                  <div className="flex items-center rounded-full border border-white/40 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-widest text-white/80">20 min.</div>
                </div>
              ))}
            </div>
          </div>
          <aside className="flex w-full max-w-xs flex-col items-center gap-4 rounded-2xl bg-red-band p-8 text-center text-white lg:w-64">
            <Ticket className="h-10 w-10" strokeWidth={1.5} />
            <p className="text-sm font-black tracking-[0.3em]">REGRAS</p>
            <p className="text-sm leading-relaxed text-white/90">
              Serão distribuídas 30 senhas 30 minutos antes de cada sessão, no local indicado.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Equipe() {
  return (
    <section id="equipe" className="bg-ink pb-12 pt-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <h3 className="section-title mb-12">Equipe</h3>

        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {equipe.map((p) => (
            <figure key={p.name} className="min-w-0 text-white">
              <div className="aspect-[4/5] overflow-hidden rounded-md bg-[#2d2928]">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className={`h-full w-full object-cover ${
                    p.name === "Reynaldo Bessa"
                      ? "object-[50%_18%]"
                      : "object-center"
                  }`}
                />
              </div>

              <figcaption className="mt-3">
                <p className="text-sm font-bold leading-tight">{p.name}</p>
                <p className="mt-1 text-xs leading-snug text-white/70">
                  {p.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Copyright() {
  return (
    <div className="border-t border-white/10 bg-ink py-5 text-center text-xs text-white/70">
      © 2026. Desenvolvido por <strong className="text-white">Marcílio Duarte</strong> para o Encontro Literário 2026. Todos os direitos reservados.
    </div>
  );
}
