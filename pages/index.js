import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  const tarotCards = [
    { title: 'La Luna', subtitle: 'Intuición & misterios' },
    { title: 'La Estrella', subtitle: 'Esperanza & guía' },
    { title: 'El Sol', subtitle: 'Claridad & abundancia' },
    { title: 'El Mago', subtitle: 'Manifestación & poder' },
    { title: 'La Sacerdotisa', subtitle: 'Protección & visión' },
  ];

  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full space-y-16">
        <section className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/90 px-6 py-10 shadow-2xl ring-1 ring-amber-200/10 backdrop-blur-lg md:px-10 lg:px-16">
          <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.25),transparent_60%)] blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,240,199,0.2),transparent_60%)] blur-3xl" />
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-amber-200/40 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-amber-100 shadow-inner shadow-amber-200/30">
                Protección · Abundancia · Claridad
              </p>
              <h1 className="text-3xl leading-tight text-amber-50 md:text-4xl lg:text-5xl">
                {globalData.blogTitle}
              </h1>
              <p className="max-w-2xl text-lg text-amber-100/80 lg:text-xl">
                Sesiones guiadas por la energía de las cartas y rituales de luz.
                Inspirado en el altar del Profeta Emmanuel Saldivar para que tu
                consulta se sienta íntima, mística y acogedora.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/posts/[slug]"
                  as={`/posts/${posts[0]?.filePath?.replace(/\.mdx?$/, '') || ''}`}
                  className="rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-neutral-950 shadow-lg shadow-amber-400/30 transition hover:-translate-y-0.5 hover:bg-amber-300 focus:outline-hidden focus:ring-4 focus:ring-amber-200"
                >
                  Reserva tu lectura
                </Link>
                <Link
                  href="#posts"
                  className="rounded-full border border-amber-200/50 px-5 py-3 text-sm font-semibold text-amber-50 transition hover:-translate-y-0.5 hover:border-amber-200 focus:outline-hidden focus:ring-4 focus:ring-amber-200/50"
                >
                  Explorar guías y rituales
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-amber-100/80">
                <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 shadow-inner shadow-amber-200/20">
                  <span className="h-2 w-2 rounded-full bg-amber-300" />
                  Aromas de protección y abundancia
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 shadow-inner shadow-amber-200/20">
                  <span className="h-2 w-2 rounded-full bg-amber-300" />
                  Lecturas presenciales & online
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-100/10 via-amber-200/5 to-transparent blur-3xl" />
              <div className="relative grid gap-4 rounded-3xl border border-amber-200/30 bg-black/60 p-6 shadow-2xl shadow-amber-200/30">
                <div className="flex items-center justify-between rounded-2xl border border-amber-200/30 bg-gradient-to-r from-black via-neutral-900 to-black px-4 py-3 text-amber-100 shadow-inner shadow-amber-200/10">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-amber-200/80">
                      Velas de intención
                    </p>
                    <p className="text-lg font-semibold text-amber-50">
                      Protección & Abundancia
                    </p>
                  </div>
                  <div className="h-14 w-14 rounded-full border border-amber-200/40 bg-[radial-gradient(circle_at_50%_30%,rgba(251,191,36,0.5),rgba(0,0,0,0.2))] shadow-inner shadow-amber-200/30" />
                </div>
                <div className="grid grid-cols-2 gap-3 text-amber-50 sm:grid-cols-3">
                  {tarotCards.map((card) => (
                    <div
                      key={card.title}
                      className="flex flex-col justify-between rounded-xl border border-amber-200/30 bg-gradient-to-b from-neutral-900 to-black px-4 py-5 shadow-xl shadow-amber-200/15"
                    >
                      <div className="mb-4 flex items-center justify-center rounded-full border border-amber-200/30 bg-black/60 p-2 text-amber-200/90">
                        <span className="text-lg">✶</span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs uppercase tracking-[0.25em] text-amber-200/70">
                          Arcano
                        </p>
                        <p className="text-lg font-semibold">{card.title}</p>
                        <p className="text-sm text-amber-100/70">{card.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3" aria-label="Servicios espirituales">
          {[ 
            {
              title: 'Lecturas profundas',
              description:
                'Interpretación detallada de arcanos mayores y menores para aclarar decisiones clave.',
            },
            {
              title: 'Rituales guiados',
              description:
                'Velas y oraciones de protección, apertura de caminos y abundancia personal.',
            },
            {
              title: 'Acompañamiento',
              description:
                'Seguimiento personalizado para integrar los mensajes recibidos en tu día a día.',
            },
          ].map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-amber-200/20 bg-white/5 p-6 text-amber-50 shadow-lg shadow-amber-200/10 backdrop-blur"
            >
              <div className="mb-3 h-10 w-10 rounded-full border border-amber-200/30 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.3),rgba(0,0,0,0.4))]" />
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <p className="mt-2 text-amber-100/80">{service.description}</p>
            </div>
          ))}
        </section>

        <section id="posts" className="w-full space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200/80">
              Últimas notas
            </p>
            <h2 className="text-2xl text-amber-50 md:text-3xl">
              Mensajes y rituales recientes
            </h2>
          </div>
          <ul className="w-full">
            {posts.map((post) => (
              <li
                key={post.filePath}
                className="transition border border-b-0 bg-white/10 border-amber-200/15 md:first:rounded-t-2xl md:last:rounded-b-2xl backdrop-blur-lg dark:bg-black/40 hover:bg-white/15 dark:hover:bg-black/60 last:border-b"
                data-sb-object-id={`posts/${post.filePath}`}
              >
                <Link
                  as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                  href={`/posts/[slug]`}
                  className="block px-6 py-6 lg:py-10 lg:px-16 focus:outline-hidden focus:ring-4 focus:ring-amber-200/50"
                >
                  {post.data.date && (
                    <p
                      className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80"
                      data-sb-field-path="date"
                    >
                      {post.data.date}
                    </p>
                  )}
                  <h3
                    className="text-2xl md:text-3xl text-amber-50"
                    data-sb-field-path="title"
                  >
                    {post.data.title}
                  </h3>
                  {post.data.description && (
                    <p
                      className="mt-3 text-lg text-amber-100/80"
                      data-sb-field-path="description"
                    >
                      {post.data.description}
                    </p>
                  )}
                  <ArrowIcon className="mt-4 text-amber-200" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
