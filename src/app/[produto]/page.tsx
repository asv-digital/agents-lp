import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AvisoMobile } from "@/components/lp/AvisoMobile";
import { ComoUsar } from "@/components/lp/ComoUsar";
import { Conteudo } from "@/components/lp/Conteudo";
import { DownloadCTA } from "@/components/lp/DownloadCTA";
import { FAQ } from "@/components/lp/FAQ";
import { Footer } from "@/components/lp/Footer";
import { Hero } from "@/components/lp/Hero";
import { getProdutoPorSlug, PRODUTOS } from "@/data/produtos";

export function generateStaticParams() {
  return PRODUTOS.map((p) => ({ produto: p.slug }));
}

interface Props {
  params: Promise<{ produto: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { produto } = await params;
  const p = getProdutoPorSlug(produto);
  if (!p) return { title: "Não encontrado" };
  return {
    title: `${p.nome} — Bravy`,
    description: p.hero.subheadline,
    openGraph: {
      title: `${p.nome} — Bravy`,
      description: p.hero.subheadline,
      type: "website",
    },
  };
}

export default async function ProdutoPage({ params }: Props) {
  const { produto } = await params;
  const p = getProdutoPorSlug(produto);
  if (!p) notFound();

  return (
    <>
      <main className="flex-1">
        <Hero produto={p} />
        <Conteudo itens={p.conteudo} />
        <ComoUsar passos={p.como_usar} />
        <AvisoMobile />
        <DownloadCTA produto={p} />
        <FAQ perguntas={p.faq} />
      </main>
      <Footer />
    </>
  );
}
