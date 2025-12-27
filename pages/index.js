import classNames from 'classnames';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { getGlobalData } from '../utils/global-data';

const navItems = [
  { label: 'Nueva Suscripción', active: true },
  { label: 'Gestionar Suscripción' },
  { label: 'Canjear Código' },
  { label: 'Panel Admin' },
];

const plans = [
  {
    title: 'Plan Básico',
    description: '1 pantalla • Calidad SD',
    price: '$4.99/mes',
  },
  {
    title: 'Plan Estándar',
    description: '2 pantallas • Calidad HD',
    price: '$7.99/mes',
  },
  {
    title: 'Plan Premium',
    description: '4 pantallas • Calidad 4K + HDR',
    price: '$12.99/mes',
    popular: true,
  },
];

const confirmationMethods = ['Email', 'SMS', 'WhatsApp'];

const paymentMethods = [
  {
    label: 'MP',
    title: 'MercadoPago',
    description: 'Auto-debito',
    active: true,
  },
  {
    label: 'PP',
    title: 'PayPal',
    description: 'Recurrente',
  },
];

export default function Index({ globalData }) {
  return (
    <Layout>
      <SEO
        title={globalData.name}
        description="Sistema de Renovación Automática de FERFLIX"
      />
      <div className="space-y-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 via-amber-300 to-orange-500 text-xl font-semibold text-slate-900 shadow-[0_18px_35px_-20px_rgba(249,115,22,0.7)]">
              F
            </span>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                Sistema FERFLIX
              </p>
              <h1 className="text-3xl font-semibold text-white sm:text-4xl">
                Suscripciones Automáticas
              </h1>
            </div>
          </div>
          <div className="flex w-full flex-col gap-3 rounded-3xl border border-slate-500/40 bg-white/10 px-6 py-5 text-left shadow-[0_20px_45px_-25px_rgba(14,165,233,0.75)] backdrop-blur lg:w-auto lg:min-w-[18rem]">
            <div className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.5em] text-sky-300">
              <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
              Tiempo Real
            </div>
            <p className="text-3xl font-mono font-semibold text-slate-100">
              00:00:00
            </p>
            <div className="text-sm leading-relaxed text-slate-300">
              <p>Viernes, 4 de Julio 2025</p>
              <p className="text-slate-500">Sistema de Renovación Automática</p>
            </div>
          </div>
        </div>

        <nav className="flex flex-wrap gap-3 rounded-3xl border border-white/10 bg-white/10 p-3 text-sm font-medium text-slate-300 shadow-[0_25px_60px_-35px_rgba(15,23,42,0.9)] backdrop-blur">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className={classNames(
                'flex-1 min-w-[12rem] rounded-2xl px-6 py-3 transition focus:outline-hidden focus:ring-2 focus:ring-sky-400/40',
                item.active
                  ? 'bg-gradient-to-r from-sky-500 via-indigo-500 to-orange-500 text-white shadow-[0_15px_45px_-20px_rgba(56,189,248,0.85)]'
                  : 'bg-white/0 text-slate-400 hover:bg-white/10'
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
          <section className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-[0_45px_80px_-50px_rgba(15,23,42,0.95)] backdrop-blur-xl">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.45em] text-slate-400">
                Suscripción Automática FERFLIX
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Plan de Suscripción
              </h2>
            </div>

            <div className="mt-6 space-y-4">
              {plans.map((plan) => (
                <div
                  key={plan.title}
                  className={classNames(
                    'flex flex-col gap-3 rounded-3xl border border-white/10 bg-slate-900/40 px-5 py-5 shadow-inner shadow-slate-950/40 transition lg:flex-row lg:items-center lg:justify-between',
                    plan.popular
                      ? 'border-amber-400/60 bg-amber-400/10 shadow-[0_0_35px_rgba(251,191,36,0.35)]'
                      : 'hover:border-slate-500/40 hover:bg-slate-900/55'
                  )}
                >
                  <div>
                    <p className="text-lg font-semibold text-white">
                      {plan.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      {plan.description}
                    </p>
                  </div>
                  <div className="text-left lg:text-right">
                    {plan.popular && (
                      <span className="mb-1 inline-flex items-center justify-center rounded-full border border-amber-300/70 bg-amber-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
                        Popular
                      </span>
                    )}
                    <p className="text-xl font-bold text-amber-200">
                      {plan.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-emerald-400/40 bg-emerald-500/10 p-6 text-sm text-emerald-100 shadow-[0_20px_45px_-30px_rgba(16,185,129,0.7)]">
              <p className="text-base font-semibold text-emerald-200">
                Renovación Automática Activada
              </p>
              <ul className="mt-4 space-y-2">
                {[`Se cobra automáticamente cada mes`,
                'Próximo cargo: 5 de Agosto 2025',
                'Puedes cancelar en cualquier momento'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
                Método de Entrega de Confirmación
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {confirmationMethods.map((method) => (
                  <button
                    key={method}
                    type="button"
                    className={classNames(
                      'rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3 text-sm font-medium text-slate-300 transition focus:outline-hidden focus:ring-2 focus:ring-sky-400/40',
                      method === 'Email'
                        ? 'border-sky-400/70 bg-sky-500/20 text-white shadow-[0_12px_30px_-18px_rgba(56,189,248,0.85)]'
                        : 'hover:border-slate-500/40 hover:bg-slate-900/55'
                    )}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <label
                className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300"
                htmlFor="billing-email"
              >
                Email de Facturación
              </label>
              <input
                id="billing-email"
                type="email"
                placeholder="tu@email.com"
                className="mt-3 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-hidden focus:ring-2 focus:ring-sky-400/40"
              />
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
                Método de Pago (Renovación Automática)
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {paymentMethods.map((method) => (
                  <button
                    key={method.label}
                    type="button"
                    className={classNames(
                      'flex flex-col gap-1 rounded-2xl border border-white/10 bg-slate-900/40 px-6 py-4 text-left transition focus:outline-hidden focus:ring-2 focus:ring-sky-400/40',
                      method.active
                        ? 'border-sky-400/70 bg-gradient-to-br from-sky-500/30 via-indigo-500/30 to-transparent text-white shadow-[0_18px_40px_-28px_rgba(59,130,246,0.85)]'
                        : 'text-slate-300 hover:border-slate-500/40 hover:bg-slate-900/55'
                    )}
                  >
                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
                      {method.label}
                    </span>
                    <span className="text-lg font-semibold text-white">
                      {method.title}
                    </span>
                    <span className="text-xs text-slate-400">{method.description}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-slate-900/40 p-5 text-sm text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Primer Cargo:</span>
                <span className="text-lg font-semibold text-amber-300">
                  $12.99
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Luego $12.99/mes automáticamente
              </p>
            </div>

            <button
              type="button"
              className="mt-8 w-full rounded-3xl bg-gradient-to-r from-yellow-400 via-amber-300 to-orange-500 px-6 py-4 text-lg font-semibold text-slate-900 shadow-[0_25px_55px_-25px_rgba(251,191,36,0.9)] transition-transform hover:scale-[1.01]"
            >
              Iniciar Suscripción FERFLIX
            </button>
          </section>

          <aside className="flex flex-col rounded-3xl border border-white/10 bg-white/5 p-8 text-slate-200 shadow-[0_35px_80px_-45px_rgba(15,23,42,0.95)] backdrop-blur-xl">
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Estado de Tu Suscripción
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                Completa tu suscripción para activar FERFLIX.
              </p>
            </div>
            <div className="mt-8 flex flex-1 items-center justify-center rounded-3xl border border-dashed border-slate-600/60 bg-slate-900/40 p-8 text-center text-sm text-slate-500">
              Aquí verás el estado en tiempo real una vez confirmes tu plan.
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();

  return { props: { globalData } };
}
