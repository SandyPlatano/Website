import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ferm",
  description: "Learn about Fermin Andujar (Ferm), an aspiring go-to-market engineer focused on systems that let teams spend more time with customers. Formerly a personal trainer and massage therapist turned BDR.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

