export default function DomeDouzePrototype() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-black to-zinc-950"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-28 lg:py-40">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-sm tracking-widest uppercase text-blue-300">
              Gestion d'artistes émergents
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none">
              DÔME
              <span className="text-blue-400"> DOUZE</span>
            </h1>

            <p className="text-2xl md:text-3xl text-zinc-200 leading-snug max-w-3xl font-semibold">
              On aide les artistes à structurer leur carrière, clarifier leur image et atteindre leur prochain niveau.
            </p>

            <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
              Management, stratégie, développement artistique, sorties musicales, positionnement, réseau et accompagnement humain.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-500 hover:bg-blue-400 transition px-7 py-4 rounded-2xl text-lg font-semibold shadow-2xl shadow-blue-500/20">
                Soumettre un projet
              </button>

              <button className="border border-zinc-700 hover:border-blue-400 hover:text-blue-300 transition px-7 py-4 rounded-2xl text-lg font-semibold bg-zinc-900/40">
                Voir nos services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
        <div className="space-y-6">
          <div className="text-blue-400 uppercase tracking-[0.3em] text-sm">
            Notre rôle
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Un partenaire de gestion pour artistes en développement.
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed">
            Dôme Douze accompagne les artistes qui ont déjà une vision, du potentiel et une volonté réelle de bâtir. Notre rôle est de transformer l'énergie créative en plan d'action concret.
          </p>

          <p className="text-zinc-500 leading-relaxed">
            On commence simple : identifier les priorités, organiser les prochaines sorties, bâtir l'image, créer une stratégie de croissance et connecter l'artiste aux bonnes ressources.
          </p>
        </div>

        <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8 md:p-10 space-y-6">
          <h3 className="text-2xl font-bold">Pour qui ?</h3>

          <div className="space-y-4 text-zinc-300">
            <div className="border border-zinc-800 rounded-2xl p-5 bg-black/40">
              Artistes émergents avec chansons déjà prêtes ou en développement.
            </div>
            <div className="border border-zinc-800 rounded-2xl p-5 bg-black/40">
              Projets musicaux qui cherchent une direction claire et professionnelle.
            </div>
            <div className="border border-zinc-800 rounded-2xl p-5 bg-black/40">
              Talents qui veulent passer du potentiel à une vraie structure de carrière.
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="mb-14 max-w-3xl">
            <div className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-3">
              Services
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Une gestion pensée pour les débuts sérieux.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Stratégie de carrière',
                text: 'Objectifs, priorités, calendrier de sorties, étapes de croissance et positionnement global.',
              },
              {
                title: 'Développement artistique',
                text: 'Direction créative, choix des chansons, cohérence de l'image et construction de l'univers.',
              },
              {
                title: 'Promotion & visibilité',
                text: 'Plan de lancement, contenu social, plateformes, médias locaux, radio et opportunités ciblées.',
              },
              {
                title: 'Gestion de projet',
                text: 'Organisation des tâches, échéanciers, budget, collaborateurs et suivi des livrables.',
              },
              {
                title: 'Branding d'artiste',
                text: 'Nom, identité visuelle, ton, photos, biographie, présentation et matériel professionnel.',
              },
              {
                title: 'Réseau & partenariats',
                text: 'Mise en relation avec producteurs, vidéastes, photographes, médias et partenaires pertinents.',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-zinc-800 bg-black p-8 hover:border-blue-500/40 transition"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-14 max-w-3xl">
          <div className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-3">
            Méthode
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Un accompagnement simple, progressif et concret.
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            ['01', 'Diagnostic', 'On évalue le projet, les forces, les blocages et les priorités.'],
            ['02', 'Plan', 'On bâtit une feuille de route claire pour les prochaines semaines.'],
            ['03', 'Action', 'On coordonne les sorties, contenus, contacts et démarches.'],
            ['04', 'Croissance', 'On mesure les résultats et on ajuste la stratégie.'],
          ].map(([number, title, text]) => (
            <div key={number} className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7">
              <div className="text-blue-400 font-black text-3xl mb-6">{number}</div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-zinc-400 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ARTISTS */}
      <section className="border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-center justify-between mb-14 flex-wrap gap-6">
            <div>
              <div className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-3">
                Projets accompagnés
              </div>

              <h2 className="text-4xl font-bold">
                Artistes en développement
              </h2>
            </div>

            <button className="border border-zinc-700 hover:border-blue-400 transition px-6 py-3 rounded-2xl">
              Voir les projets
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'CÉSAR SCHMIDT',
                vibe: 'Pop alternative / chanson moderne',
                status: 'Développement stratégique',
              },
              {
                name: 'NOUVEL ACTE',
                vibe: 'Rap mélodique / atmosphérique',
                status: 'Image & lancement',
              },
              {
                name: 'À VENIR',
                vibe: 'Nouveaux talents sélectionnés',
                status: 'Soumissions ouvertes',
              },
            ].map((artist) => (
              <div
                key={artist.name}
                className="group rounded-3xl overflow-hidden border border-zinc-800 bg-black hover:border-blue-500/40 transition"
              >
                <div className="h-72 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black flex items-center justify-center text-zinc-700 text-6xl font-black">
                  DD
                </div>

                <div className="p-7 space-y-3">
                  <div className="text-blue-400 text-sm uppercase tracking-widest">{artist.status}</div>
                  <h3 className="text-2xl font-bold group-hover:text-blue-400 transition">
                    {artist.name}
                  </h3>

                  <p className="text-zinc-400">{artist.vibe}</p>

                  <button className="pt-3 text-blue-400 font-medium">
                    En savoir plus →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-28 text-center">
        <div className="rounded-[2rem] border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-zinc-900 p-14 md:p-20">
          <div className="space-y-8">
            <div className="text-blue-300 uppercase tracking-[0.3em] text-sm">
              Soumission d'artiste
            </div>

            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Vous avez du talent. On vous aide à le structurer.
            </h2>

            <p className="text-zinc-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Envoyez votre musique, votre univers et vos objectifs. Si le potentiel et l'alignement sont là, on bâtit la suite ensemble.
            </p>

            <button className="bg-blue-500 hover:bg-blue-400 transition text-black px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl shadow-blue-500/20">
              Soumettre ma musique
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 py-10 px-6 text-zinc-500 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div>
            © 2026 Dôme Douze — Gestion d'artistes
          </div>

          <div className="flex gap-6">
            <span>Instagram</span>
            <span>TikTok</span>
            <span>Contact</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
