import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Machina — Product Engineering Studio",
  description: "Machina builds elegant SaaS, EdTech, FinTech, and e-commerce products with senior product and engineering teams.",
  openGraph: {
    title: "Machina — Product Engineering Studio",
    description: "Senior product engineering for teams building what comes next.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
