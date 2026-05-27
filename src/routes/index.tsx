import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AnG — Discord" },
      { name: "description", content: "AnG. Um servidor de Discord. Entre." },
      { property: "og:title", content: "AnG" },
      { property: "og:description", content: "Um servidor de Discord. Entre." },
    ],
  }),
  component: Index,
});

const DISCORD_URL = "https://discord.gg/g7WHh7ydPy";

function Index() {
  const [time, setTime] = useState("");
  const heroRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const hh = String(d.getUTCHours()).padStart(2, "0");
      const mm = String(d.getUTCMinutes()).padStart(2, "0");
      const ss = String(d.getUTCSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss} UTC`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = heroRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      setMouse({
        x: (e.clientX - r.left) / r.width,
        y: (e.clientY - r.top) / r.height,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-white selection:text-black">
      {/* grain */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='1'/></svg>\")",
        }}
      />

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-10 py-5 flex items-center justify-between text-xs uppercase tracking-[0.2em]">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse" />
          <span>AnG / Discord</span>
        </div>
        <nav className="hidden md:flex gap-8 text-white/60">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#manifesto" className="hover:text-white transition">Manifesto</a>
          <a href="#join" className="hover:text-white transition">Join</a>
        </nav>
        <div className="text-white/40 tabular-nums hidden sm:block">{time}</div>
      </header>

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-end px-6 md:px-10 pb-16 pt-32"
      >
        {/* radial cursor light */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(600px circle at ${mouse.x * 100}% ${mouse.y * 100}%, rgba(255,255,255,0.08), transparent 60%)`,
          }}
        />
        {/* grid lines */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-8">
            [ 001 ] — Estabelecido na escuridão
          </p>
          <h1 className="font-serif italic text-[22vw] md:text-[18vw] leading-[0.85] tracking-tighter">
            AnG
          </h1>
          <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <p className="max-w-md text-white/70 text-base md:text-lg leading-relaxed">
              Um espaço fechado. Conversas reais, gente real, sem ruído.
              <br />
              <span className="text-white/40">— um servidor de Discord.</span>
            </p>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 border border-white/20 hover:border-white px-6 py-4 uppercase tracking-[0.25em] text-xs transition-colors duration-300"
            >
              <span className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Entrar para AnG
              </span>
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-white/10 overflow-hidden py-6">
        <div className="flex gap-16 whitespace-nowrap animate-[marquee_30s_linear_infinite]">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="font-serif italic text-3xl md:text-5xl text-white/30"
            >
              AnG &nbsp;·&nbsp; AnG &nbsp;·&nbsp; AnG &nbsp;·&nbsp; AnG
            </span>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="px-6 md:px-10 py-32 md:py-48 grid md:grid-cols-12 gap-8"
      >
        <p className="md:col-span-3 text-xs uppercase tracking-[0.3em] text-white/50">
          [ 002 ] About
        </p>
        <div className="md:col-span-9">
          <h2 className="font-serif italic text-4xl md:text-7xl leading-[1.05] tracking-tight">
            Nem comunidade.<br />
            Nem clube. <span className="text-white/40">Apenas AnG.</span>
          </h2>
          <p className="mt-10 max-w-2xl text-white/60 text-base md:text-lg leading-relaxed">
            Um lugar onde a conversa importa mais do que a métrica.
            Sem cargo de cargo. Sem hype. Só pessoas que apareceram.
          </p>
        </div>
      </section>

      {/* MANIFESTO */}
      <section
        id="manifesto"
        className="px-6 md:px-10 py-32 md:py-48 border-t border-white/10"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-12">
          [ 003 ] Manifesto
        </p>
        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          {[
            { k: "01", t: "Silêncio", d: "Falar quando tiver algo a dizer." },
            { k: "02", t: "Presença", d: "Estar é mais raro do que parece." },
            { k: "03", t: "Direção", d: "AnG não é destino. É movimento." },
          ].map((item) => (
            <div
              key={item.k}
              className="border-t border-white/20 pt-6 group cursor-default"
            >
              <div className="flex items-baseline justify-between mb-8">
                <span className="text-xs tracking-[0.3em] text-white/40">
                  {item.k}
                </span>
                <span className="text-xs tracking-[0.3em] text-white/40 group-hover:text-white transition">
                  ●
                </span>
              </div>
              <h3 className="font-serif italic text-3xl md:text-4xl mb-4">
                {item.t}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JOIN CTA */}
      <section
        id="join"
        className="relative px-6 md:px-10 py-40 md:py-64 border-t border-white/10 text-center overflow-hidden"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-white/50 mb-10">
          [ 004 ] A porta
        </p>
        <h2 className="font-serif italic text-6xl md:text-[10rem] leading-[0.9] tracking-tighter">
          Entre.
        </h2>
        <div className="mt-16 flex justify-center">
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 border border-white px-10 py-6 uppercase tracking-[0.3em] text-sm"
          >
            <span className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">
              Entrar para AnG
            </span>
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">
              →
            </span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-10 py-10 border-t border-white/10 flex flex-col md:flex-row gap-4 justify-between text-xs uppercase tracking-[0.25em] text-white/40">
        <span>© AnG — {new Date().getFullYear()}</span>
        <span>Black & White. Nothing else.</span>
        <a href={DISCORD_URL} className="hover:text-white transition">
          discord.gg →
        </a>
      </footer>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
