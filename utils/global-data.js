export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'FERFLIX Suscripciones';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Sistema de Renovación Automática de FERFLIX';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : '© 2025 FERFLIX. Todos los derechos reservados.';

  return {
    name,
    blogTitle,
    footerText,
  };
};
