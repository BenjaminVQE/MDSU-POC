const features = [
  {
    title: "Vérification renforcée",
    desc: "Identité et profil validés avant toute mise en relation.",
  },
  {
    title: "Établissements affiliés",
    desc: "Bars, restaurants et hôtels partenaires formés à la sécurité.",
  },
  {
    title: "Suivi discret",
    desc: "Check-in/check-out et bouton d’alerte partagé si besoin.",
  },
];

const steps = [
  {
    title: "1. Inscription et vérification",
    desc: "On valide identité et intentions pour limiter les faux profils.",
  },
  {
    title: "2. Match et choix du lieu",
    desc: "On propose des lieux partenaires sécurisés proches de vous.",
  },
  {
    title: "3. Date sereine",
    desc: "Support discret en cas de besoin, avec présence du staff formé.",
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
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-amber-50 to-white text-slate-900">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-rose-300/30 via-amber-200/30 to-transparent blur-3xl" />
      <main className="relative mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24 pt-16 sm:px-10 lg:px-16">
        <header className="flex flex-col gap-10">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-rose-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-rose-700 ring-1 ring-rose-500/30">
              Sécurité d’abord
            </span>
            <span className="text-xs text-slate-600">
              Établissements affiliés • Vérification renforcée • Support discret
            </span>
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                Rencontres sereines dans des lieux partenaires conçus pour la
                sécurité.
              </h1>
              <p className="text-lg text-slate-700 sm:text-xl">
                MDSU connecte des personnes vérifiées et leur propose des dates
                dans des établissements affiliés (bars, restaurants, hôtels)
                formés à la prévention et prêts à intervenir si besoin.
              </p>
              <div className="flex flex-col gap-3 rounded-2xl border border-rose-200 bg-white/70 p-5 shadow-xl backdrop-blur lg:max-w-xl">
                <p className="text-sm text-slate-700">
                  Laissez votre email pour accéder aux premières invitations
                  (beta privée) et participer aux itérations produit.
                </p>
                <form className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    required
                    placeholder="votre.email@email.com"
                    className="w-full rounded-xl border border-rose-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-400/40"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-xl bg-rose-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-500/40 transition hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400"
                  >
                    Rejoindre la beta
                  </button>
                </form>
                <p className="text-xs text-slate-500">
                  Pas de spam. Vous recevrez un questionnaire court pour valider
                  votre profil et vos attentes.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-slate-700">
                <div className="flex items-center gap-2 rounded-full border border-rose-100 bg-white/70 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  Vérification identité & selfie-liveness
                </div>
                <div className="flex items-center gap-2 rounded-full border border-amber-100 bg-white/70 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  Check-in/check-out avec code unique
                </div>
                <div className="flex items-center gap-2 rounded-full border border-sky-100 bg-white/70 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
                  Staff formé + bouton d’alerte partagé
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-rose-200 bg-white/70 p-6 shadow-2xl backdrop-blur">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Prochaine cohorte</p>
                  <p className="text-lg font-semibold text-slate-900">Janvier</p>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Beta privée
                </span>
              </div>
              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3 rounded-2xl border border-rose-100 bg-white/70 p-4">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <div>
                    <p className="font-semibold text-slate-900">
                      Établissements affiliés
                    </p>
                    <p>9 lieux partenaires prêts à accueillir les premiers RDV.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-amber-100 bg-white/70 p-4">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-400" />
                  <div>
                    <p className="font-semibold text-slate-900">
                      Procédures anti-harcèlement
                    </p>
                    <p>Brèves formations staff + protocole d’escalade discret.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-sky-100 bg-white/70 p-4">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <div>
                    <p className="font-semibold text-slate-900">Assistance live</p>
                    <p>Check-in, alertes partagées, et suivi temps réel.</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600">
                  Vous êtes un établissement ? Écrivez-nous pour rejoindre le
                  réseau affilié (onboard en 48h).
                </p>
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

        <section className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              Comment ça marche
            </h2>
            <p className="text-slate-700">
              Nous combinons vérification d’identité, sélection de lieux sûrs et
              support réactif pour que la première rencontre se fasse dans un
              cadre clair et rassurant.
            </p>
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
              href="mailto:contact@mdsu.app?subject=Rejoindre%20le%20réseau%20affili%C3%A9"
              className="inline-flex items-center justify-center rounded-xl bg-rose-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-500/40 transition hover:translate-y-[-1px] hover:bg-rose-400"
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
      </main>
    </div>
  );
}
