import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Números fixos por enquanto — viram consultas ao Supabase quando o banco existir.
const resumo = [
  { titulo: "Imóveis", valor: "—", descricao: "cadastrados" },
  { titulo: "Contratos ativos", valor: "—", descricao: "em vigor hoje" },
  { titulo: "Vencendo em breve", valor: "—", descricao: "nos próximos 60 dias" },
];

export default function PainelPage() {
  return (
    <>
      <PageHeader titulo="Painel" descricao="Visão geral dos imóveis e contratos" />

      <div className="grid gap-4 sm:grid-cols-3">
        {resumo.map((item) => (
          <Card key={item.titulo}>
            <CardHeader>
              <CardDescription>{item.titulo}</CardDescription>
              <CardTitle className="text-3xl tabular-nums">{item.valor}</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground">{item.descricao}</CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contratos vencendo em breve</CardTitle>
          <CardDescription>Contratos com término nos próximos 60 dias</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Nenhum contrato cadastrado ainda.
        </CardContent>
      </Card>
    </>
  );
}
