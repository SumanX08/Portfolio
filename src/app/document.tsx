import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const setInitialTheme = `
    (function() {
      try {
        const saved = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = saved || (prefersDark ? 'dark' : 'light');
        document.documentElement.classList.add(theme);
      } catch (e) {}
    })();
  `;

  return (
    <Html lang="en">
      <Head />
      <body>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
