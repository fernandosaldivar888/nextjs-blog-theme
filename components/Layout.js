import classNames from 'classnames';
import { useEffect } from 'react';
import styles from './Layout.module.css';

export function GradientBackground({ variant, className }) {
  const classes = classNames(
    {
      [styles.colorBackground]: variant === 'large',
      [styles.colorBackgroundBottom]: variant === 'small',
    },
    className
  );

  return <div className={classes} />;
}

export default function Layout({ children }) {
  const setAppTheme = () => {
    const darkMode = localStorage.getItem('theme') === 'dark';
    const lightMode = localStorage.getItem('theme') === 'light';

    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else if (lightMode) {
      document.documentElement.classList.remove('dark');
    }
    return;
  };

  const handleSystemThemeChange = () => {
    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    darkQuery.onchange = (e) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    };
  };

  useEffect(() => {
    setAppTheme();
  }, []);

  useEffect(() => {
    handleSystemThemeChange();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050b1a] text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 -left-40 h-[28rem] w-[28rem] rounded-full bg-[#5b21b6] opacity-40 blur-3xl" />
        <div className="absolute -bottom-32 -right-20 h-[32rem] w-[32rem] rounded-full bg-[#2563eb] opacity-30 blur-[180px]" />
        <div className="absolute inset-x-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f97316] opacity-10 blur-[220px]" />
      </div>
      <div className="relative flex justify-center w-full px-4 py-12 sm:px-8 lg:px-12">
        <div className="w-full max-w-6xl">{children}</div>
      </div>
    </div>
  );
}
