import "./globals.css";
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import ClientWrapper from "./ClientWrapper";

export const metadata = {
  title: "Khalid | Portfolio",
  description: "My name is Khalid, I'm a web developer.",
  author: "Mohammad Khalid",
  siteUrl: "",
  applicationName: "Khalid",
  keywords: ["Khalid", "portfolio"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>{children}</ClientWrapper>
        <Analytics />
      </body>
    </html>
  );
}
