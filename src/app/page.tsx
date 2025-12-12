"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import CookieBanner from "./components/CookieBanner.tsx";

const features = [
  {
    title: "Sécurité",
    desc: "Vivez une rencontre authentique, en vrai, en toute sécurité",
  },
  {
    title: "Établissements affiliés",
    desc: "Choisissez une activité dans un lieu partenaire vérifié.",
  },
  {
    title: "Rencontres",
    desc: "Rencontrez quelqu’un qui partage vos envies.",
  },
];

const steps = [
  {
    title: "1. Rencontrez des personnes qui partagent vos hobbies",
    desc: "Découvrez des passionnés comme vous et échangez autour de vos centres d'intérêt."
  },
  {
    title: "2. Choisissez une activité dans un lieu partenaire vérifié",
    desc: "Sélectionnez des activités dans des lieux fiables et proches de chez vous."
  },
  {
    title: "3. Vivez une rencontre authentique, en vrai, en toute sécurité",
    desc: "Profitez d’un moment convivial en toute confiance et créez des souvenirs vrais."
  },
];

const faqs = [
  {
    q: "Pourquoi des établissements partenaires ?",
    a: "Ils sont formés, visibles, et prêts à intervenir en cas d’alerte. Ils offrent un cadre clair et sûr pour la rencontre.",
  },
  {
    q: "Comment sont vérifiés les profils ?",
    a: "Pièce d’identité, selfie-liveness et validation email/téléphone. Les signaux faibles sont monitorés avant chaque mise en relation.",
  },
  {
    q: "Que se passe-t-il en cas d’alerte ?",
    a: "Nous contactons immédiatement l’établissement et appliquons des protocoles de désescalade. Le ou la partenaire peut être suspendu.",
  },
];

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage(null);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Erreur");
      }

      setStatus("success");
      setMessage(
        "Merci ! Vérifiez votre boîte mail pour rejoindre la communauté WhatsApp."
      );
      setEmail("");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Une erreur est survenue, merci de réessayer.");
    } finally {
      setStatus("idle");
    }
  };

  return (
      <div
      className="min-h-screen text-slate-900"
      style={{
      background: "linear-gradient(to bottom, #feebda, #fbc63f)"
    }}
    >
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-rose-300/30 via-amber-200/30 to-transparent blur-3xl" />
      <main className="relative mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24 pt-16 sm:px-10 lg:px-16">
        <header className="flex flex-col gap-10">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Trustly Logo"
              width={96}
              height={32}
              className="rounded-full"
            />
            <span className="text-xs text-slate-600">
              Rassurant • Bienveillance • Communauté • Ouvert • Dynamique
            </span>
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                Trustly, le premier pas vers des rencontres fiables et sécurisées
              </h1>
              <p className="text-lg text-slate-700 sm:text-xl">
                Marre des échanges qui ne mènent nulle part ? Envie de rencontrer quelqu’un dans un endroit sûr, où tout est pensé ?
                Trustly arrive bientôt, et vous pouvez faire partie des premiers à y accéder.
              </p>
              <div className="flex flex-col gap-3 rounded-2xl border border-rose-200 bg-white/70 p-5 shadow-xl backdrop-blur lg:max-w-xl">
                <p className="text-sm text-slate-700">
                  Laissez votre email pour accéder aux premières invitations
                  (beta privée) et participer aux itérations produit.
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre.email@email.com"
                    className="w-full rounded-xl border border-rose-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-400/40"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-lg transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-70"
                    style={{
                      backgroundColor: "#eb5850",
                      boxShadow: "0 10px 15px -3px rgba(235,88,85,0.4), 0 4px 6px -2px rgba(235,88,85,0.3)",
                      cursor: "pointer"
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#d94c73")}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#eb5850")}
                  >
                    {status === "loading" ? "Inscription..." : "Rejoindre Trustly"}
                  </button>
                </form>
                {message && (
                  <p
                    className={`text-xs ${
                      status === "success" ? "text-emerald-600" : "text-red-600"
                    }`}
                  >
                    {message}
                  </p>
                )}
                <p className="text-xs text-slate-500">
                  Un e-mail vous sera envoyé automatiquement pour rejoindre notre communauté WhatsApp.
                </p>
              </div>
            </div>
            <div className="rounded-3xl border border-rose-200 bg-white/70 p-6 shadow-2xl backdrop-blur">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Beta privée
                </span>
              </div>
              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3 rounded-2xl border border-rose-100 bg-white/70 p-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-3 w-3 rounded-full bg-rose-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Accès Beta Test
                    </p>
                    <p>Participez à la phase de test et profitez d’un environnement sécurisé pour vos premières rencontres.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-amber-100 bg-white/70 p-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-3 w-3 rounded-full bg-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                     Offres de réductions sur les premiers rendez-vous.
                    </p>
                    <p>Bénéficiez de promotions exclusives tout en garantissant la sécurité grâce à notre personnel formé et vigilant.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-sky-100 bg-white/70 p-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-3 w-3 rounded-full bg-amber-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Jeux concours</p>
                    <p>Participez au tirage au sort pour tenter de remporter des récompenses exclusives !</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="grid gap-6 rounded-3xl border border-rose-100 bg-white/80 p-8 backdrop-blur sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-3 rounded-2xl border border-rose-50 bg-rose-50/60 p-5"
            >
              <p className="text-sm font-semibold text-slate-900">
                {feature.title}
              </p>
              <p className="text-sm text-slate-700">{feature.desc}</p>
            </div>
          ))}
        </section>
        
        <section className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              Comment ça fonctionne ?
            </h2>

            <p className="text-slate-700">
              Nous combinons vérification d’identité et sélection de lieux sûrs pour que la première rencontre se fasse dans un
              cadre clair et rassurant.
            </p>

            <div className="mx-auto pt-2" style={{ width: "250px" }}>
              <video
                src="/video.mp4"
                className="w-full h-auto rounded-2xl shadow-lg"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {steps.map((step) => (
              <div
                key={step.title}
                className="flex flex-col gap-2 rounded-2xl border border-rose-100 bg-white/80 p-5 shadow-inner"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {step.title}
                </p>
                <p className="text-sm text-slate-700">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-rose-100 bg-white/85 p-8 backdrop-blur lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-slate-900">
              FAQ rapide (beta)
            </h3>
            <p className="text-sm text-slate-700">
              Notre priorité est la sécurité. La version beta évoluera avec vos
              retours pour affiner procédures et expérience.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-rose-50 bg-rose-50/70 p-5"
              >
                <p className="text-sm font-semibold text-slate-900">{item.q}</p>
                <p className="mt-2 text-sm text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4 rounded-3xl border border-rose-300/50 bg-gradient-to-r from-rose-200 via-amber-200 to-white px-8 py-10 shadow-2xl backdrop-blur">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h4 className="text-xl font-semibold text-slate-900">
                Établissement partenaire ?
              </h4>
              <p className="text-sm text-slate-700">
                Onboard en 48h avec un kit staff + process d’alerte.
              </p>
            </div>
           <a
              href="mailto:mymdsu@gmail.com?subject=Rejoindre%20le%20réseau%20affili%C3%A9"
              className="inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-lg transition"
              style={{
                backgroundColor: "#eb5850",
                boxShadow: "0 5px 10px -2px rgba(235,88,85,0.4)",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#d94c73")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#eb5850")}
            >
              Discuter affiliation
            </a>

          </div>
          <p className="text-xs text-slate-700">
            Nous recherchons des bars, restaurants, hôtels et tiers-lieux
            engagés. Formation express, charte sécurité, mise en avant aux
            membres.
          </p>
        </section>
        <CookieBanner />
      </main>
    </div>
  );
}
