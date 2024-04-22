import localFont from "next/font/local";
import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "800"],
});

const kefa = localFont({
  src: "../../public/fonts/Kefa-Bold.woff2",
  variable: "--font-kefa",
  display: "block",
});

export const metadata = {
  title: "Mosaic: Creating Cohesion Through Conversation",
  description:
    "A conversation toolkit empowering Aotearoa’s youth through courageous dialogues. Designed to improve social cohesion, inclusivity, and transformative change.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${kefa.variable} ${firaSans.className}`}>
      <body>
        <link rel="icon" href="/images/logos/favicon.png" sizes="any" />
        {children}
      </body>
    </html>
  );
}
