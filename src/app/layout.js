import Header from "@/components/header";
import "./globals.css";

export const metadata = {
  title: "Jayanth BB | Frontend Developer & React/Next.js Developer",
  description:
    "Portfolio of Jayanth BB – Frontend Developer specializing in React.js and Next.js. Explore projects, skills, and contact information.",
  keywords: [
    "Jayanth BB",
    "Jayanth portfolio",
    "frontend developer",
    "react developer",
    "nextjs developer",
    "web developer portfolio",
    "javascript developer",
  ],
  authors: [{ name: "Jayanth BB" }],
  creator: "Jayanth BB",
  metadataBase: new URL("https://your-portfolio-domain.com"),
  openGraph: {
    title: "Jayanth BB – Frontend Developer Portfolio",
    description:
      "Frontend Developer specializing in React.js and Next.js. View my projects and experience.",
    url: "https://your-portfolio-domain.com",
    siteName: "Jayanth Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jayanth BB Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayanth BB – Frontend Developer",
    description:
      "Personal portfolio of Jayanth BB, React and Next.js Frontend Developer.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
