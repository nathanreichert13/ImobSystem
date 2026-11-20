"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, FileText, House, LayoutDashboard, Users } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

const itens = [
  { titulo: "Painel", href: "/", icone: LayoutDashboard },
  { titulo: "Imóveis", href: "/imoveis", icone: Building2 },
  { titulo: "Pessoas", href: "/pessoas", icone: Users },
  { titulo: "Contratos", href: "/contratos", icone: FileText },
];

export function AppSidebar() {
  const pathname = usePathname();

  const estaAtivo = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<Link href="/" />}>
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <House className="size-4" />
              </div>
              <span className="font-semibold">ImobSystem</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {itens.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    isActive={estaAtivo(item.href)}
                    tooltip={item.titulo}
                    render={<Link href={item.href} />}
                  >
                    <item.icone />
                    <span>{item.titulo}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
