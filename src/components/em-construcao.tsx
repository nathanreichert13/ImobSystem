import { Card, CardContent } from "@/components/ui/card";

export function EmConstrucao({ mensagem }: { mensagem: string }) {
  return (
    <Card className="border-dashed">
      <CardContent className="py-10 text-center text-sm text-muted-foreground">
        {mensagem}
      </CardContent>
    </Card>
  );
}
