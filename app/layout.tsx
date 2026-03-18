export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, background: "#111", color: "white" }}>
        {children}
      </body>
    </html>
  );
}
