import * as React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  Calendar,
  Check,
  Globe,
  Link,
  MessageSquare,
  RefreshCw,
} from "lucide-react"

type Segmento =
  | ""
  | "Moda Feminina"
  | "Moda Masculina"
  | "Moda Infantil"
  | "Jeanswear"
  | "Moda Praia/Fitness"
  | "Outros"

type Migracao = "" | "Sim, quero migrar" | "Não, será o primeiro site"

function formatTelefoneBR(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11)
  if (digits.length === 0) return ""
  if (digits.length < 3) return `(${digits}`
  if (digits.length < 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length < 11) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

function openWhatsApp(message: string) {
  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`
  window.open(url, "_blank", "noopener,noreferrer")
}

export default function App() {
  const [responsavel, setResponsavel] = React.useState("")
  const [marca, setMarca] = React.useState("")
  const [whatsapp, setWhatsapp] = React.useState("")
  const [instagram, setInstagram] = React.useState("")
  const [segmento, setSegmento] = React.useState<Segmento>("")
  const [migracao, setMigracao] = React.useState<Migracao>("")
  const [observacoes, setObservacoes] = React.useState("")
  const [formError, setFormError] = React.useState<string | null>(null)
  const [formSuccess, setFormSuccess] = React.useState(false)

  const submit = (event: React.FormEvent) => {
    event.preventDefault()
    setFormSuccess(false)

    if (!responsavel || !marca || !whatsapp || !segmento || !migracao) {
      setFormError("Preencha os campos obrigatórios para enviar.")
      return
    }

    setFormError(null)

    const text = [
      "Solicitação de demonstração — Site B2B/Atacado em 7 dias",
      "",
      `Nome do responsável: ${responsavel}`,
      `Marca/Confecção: ${marca}`,
      `WhatsApp/Telefone: ${whatsapp}`,
      `Instagram: ${instagram || "-"}`,
      `Segmento: ${segmento}`,
      `Já possui sistema ou site atual?: ${migracao}`,
      `Observações: ${observacoes || "-"}`,
    ].join("\n")

    openWhatsApp(text)
    setFormSuccess(true)
  }

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-2">
            <div className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm">
              <Globe className="size-4" />
            </div>
            <div className="leading-tight">
              <div className="font-heading text-base font-bold tracking-tight">
                Representante Fácilzap
              </div>
              <div className="text-xs text-muted-foreground">Nordeste</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a className="hover:text-foreground" href="#parceria">
              Parceria
            </a>
            <a className="hover:text-foreground" href="#beneficios">
              Benefícios
            </a>
            <a className="hover:text-foreground" href="#prova-social">
              Prova social
            </a>
            <a className="hover:text-foreground" href="#como-funciona">
              Como funciona
            </a>
          </nav>

          <Button
            className="h-auto rounded-full px-4 py-2"
            onClick={() => {
              document.getElementById("lead-form")?.scrollIntoView({
                behavior: "smooth",
              })
            }}
          >
            Quero Meu Site em 7 Dias <ArrowRight className="ml-1 size-4" />
          </Button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-24 top-10 size-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -right-24 bottom-10 size-72 rounded-full bg-primary/10 blur-3xl" />
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <Badge className="w-fit bg-primary/10 text-primary" variant="outline">
                ⚡ Especialista em Marcas de Atacado no Ramo da Moda
              </Badge>

              <h1 className="font-heading text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
                Faça seu próprio site de vendas em apenas{" "}
                <span className="text-primary">7 dias</span>
              </h1>

              <p className="text-lg text-muted-foreground">
                Transforme seu atendimento pelo WhatsApp em uma operação digital
                completa. Migre seu catálogo, garanta seus dados e venda no
                atacado com a plataforma líder do mercado.
              </p>

              <div className="rounded-xl border bg-card p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 grid size-9 place-items-center rounded-lg bg-secondary text-secondary-foreground">
                    <Link className="size-4" />
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">
                      Representante Oficial Fácilzap no Nordeste
                    </div>
                    <div className="text-muted-foreground">
                      O sistema de catálogo e vendas mais moderno do mercado.
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="h-auto rounded-full px-7 py-3.5 text-base"
                  onClick={() => {
                    document.getElementById("lead-form")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }}
                >
                  Quero Meu Site em 7 Dias <ArrowRight className="ml-1 size-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-auto rounded-full px-7 py-3.5 text-base"
                  onClick={() =>
                    openWhatsApp(
                      "Olá! Quero entender como funciona a implantação do site B2B/atacado em 7 dias."
                    )
                  }
                >
                  Falar no WhatsApp
                </Button>
              </div>

              <div className="grid grid-cols-1 gap-2 text-sm text-muted-foreground sm:grid-cols-3">
                <div className="flex items-center gap-2">
                  <span className="grid size-6 place-items-center rounded-full bg-emerald-500/15 text-emerald-600">
                    🟢
                  </span>
                  +100 Clientes Ativos
                </div>
                <div className="flex items-center gap-2">
                  <span className="grid size-6 place-items-center rounded-full bg-primary/10 text-primary">
                    ⚡
                  </span>
                  Implantação em 1 Semana
                </div>
                <div className="flex items-center gap-2">
                  <span className="grid size-6 place-items-center rounded-full bg-secondary text-secondary-foreground">
                    🔒
                  </span>
                  Migração Segura de Dados
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="font-heading">
                    Visão do catálogo (mockup)
                  </CardTitle>
                  <CardDescription>
                    Catálogo visual, rápido e feito para pedidos de atacado.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg border bg-background p-3">
                      <div className="h-3 w-16 rounded bg-muted" />
                      <div className="mt-2 h-5 w-24 rounded bg-muted" />
                      <div className="mt-3 h-20 rounded-lg bg-muted/60" />
                    </div>
                    <div className="rounded-lg border bg-background p-3">
                      <div className="h-3 w-16 rounded bg-muted" />
                      <div className="mt-2 h-5 w-24 rounded bg-muted" />
                      <div className="mt-3 h-20 rounded-lg bg-muted/60" />
                    </div>
                    <div className="col-span-2 rounded-lg border bg-background p-3">
                      <div className="flex items-center justify-between">
                        <div className="h-3 w-20 rounded bg-muted" />
                        <Badge variant="secondary">Pedido mínimo</Badge>
                      </div>
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        <div className="h-14 rounded-lg bg-muted/60" />
                        <div className="h-14 rounded-lg bg-muted/60" />
                        <div className="h-14 rounded-lg bg-muted/60" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border bg-secondary/50 p-4 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm">
                        <MessageSquare className="size-4" />
                      </div>
                      <div>
                        <div className="font-semibold">
                          Atendimento vira pedido organizado
                        </div>
                        <div className="text-muted-foreground">
                          WhatsApp + site B2B = menos retrabalho e mais escala.
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="parceria" className="border-t py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
                A tecnologia do Fácilzap com a implementação especializada no
                Nordeste.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Unimos a melhor ferramenta de catálogo digital e checkout do
                Brasil ao acompanhamento técnico de quem entende a rotina e as
                particularidades do polo têxtil e do atacado de moda.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-base">
                    Sua Marca
                  </CardTitle>
                  <CardDescription>
                    Identidade, público, preço e estratégia.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Layout e catálogo com o rosto da sua confecção, pronto para
                  revendedores comprarem.
                </CardContent>
              </Card>

              <Card className="border-primary/40">
                <CardHeader>
                  <CardTitle className="font-heading text-base">Fácilzap</CardTitle>
                  <CardDescription>Catálogo + checkout para atacado.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Controle de produtos, variações, estoque e pedidos com uma
                  experiência moderna para o comprador.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between gap-3">
                    <CardTitle className="font-heading text-base">
                      Representante Oficial
                    </CardTitle>
                    <Badge variant="secondary">Nordeste</Badge>
                  </div>
                  <CardDescription>Implantação e acompanhamento.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Setup guiado, migração segura e treinamento do time comercial
                  para operar a rotina de pedidos sem travar vendas.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="beneficios" className="border-t py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
                Benefícios e diferenciais competitivos
              </h2>
              <p className="mt-4 text-muted-foreground">
                Tudo pensado para atacado de moda: velocidade, segurança e
                operação no dia a dia.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
                      <RefreshCw className="size-5" />
                    </div>
                    <div>
                      <CardTitle className="font-heading">
                        Migração Expressa
                      </CardTitle>
                      <CardDescription>
                        Transferência rápida de sistema.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Importamos seu catálogo atual garantindo controle de estoque,
                  códigos de barras e tabela de preços sem interrupção nas
                  vendas.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Check className="size-5" />
                    </div>
                    <div>
                      <CardTitle className="font-heading">
                        Foco em Moda Têxtil
                      </CardTitle>
                      <CardDescription>Especialização em atacado.</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Estrutura otimizada para grades de cores, tamanhos, pedidos
                  mínimos e condições diferenciadas para revendedores.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
                      <MessageSquare className="size-5" />
                    </div>
                    <div>
                      <CardTitle className="font-heading">Suporte Ativo</CardTitle>
                      <CardDescription>
                        Acompanhamento de ponta a ponta.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Treinamento prático da sua equipe e suporte dedicado do
                  primeiro clique até a implantação final do site.
                </CardContent>
              </Card>

              <Card className="border-primary/40">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground">
                      <Calendar className="size-5" />
                    </div>
                    <div>
                      <CardTitle className="font-heading">Agilidade Real</CardTitle>
                      <CardDescription>Pronto em 7 dias.</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Metodologia de configuração acelerada para colocarmos sua loja
                  no ar em apenas uma semana.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="prova-social" className="border-t py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
              <div className="space-y-4">
                <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
                  Escolhido por quem move o atacado de moda.
                </h2>
                <p className="text-muted-foreground">
                  +100 marcas e confecções ativas vendendo diariamente com nossa
                  solução.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="font-heading text-3xl">
                        +100
                      </CardTitle>
                      <CardDescription>Clientes ativos</CardDescription>
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="font-heading text-3xl">
                        7 dias
                      </CardTitle>
                      <CardDescription>Implantação</CardDescription>
                    </CardHeader>
                  </Card>
                </div>

                <div className="rounded-xl border bg-secondary/50 p-4 text-sm text-muted-foreground">
                  Carrossel de marcas e depoimentos pode ser conectado aqui
                  depois (logotipos reais e vídeos curtos).
                </div>
              </div>

              <div className="grid gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading text-base">
                      “A migração foi rápida e o pedido ficou mais organizado.”
                    </CardTitle>
                    <CardDescription>Marca de moda feminina (CE)</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading text-base">
                      “Parou o retrabalho no WhatsApp e ganhamos tempo no
                      fechamento.”
                    </CardTitle>
                    <CardDescription>Confecção jeanswear (PE)</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading text-base">
                      “O catálogo visual ajudou muito os revendedores.”
                    </CardTitle>
                    <CardDescription>Moda infantil (RN)</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="border-t py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
                Como funciona a implantação (passo a passo)
              </h2>
              <p className="mt-4 text-muted-foreground">
                Processo direto, com acompanhamento, para colocar sua operação
                no ar com segurança.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-base">
                    1. Diagnóstico & envio de dados
                  </CardTitle>
                  <CardDescription>
                    Mapeamos catálogo, estoque e tabela de preços atual.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-primary/40">
                <CardHeader>
                  <CardTitle className="font-heading text-base">
                    2. Migração & configuração
                  </CardTitle>
                  <CardDescription>
                    Transferimos estoque e ajustamos a identidade em até 7 dias.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-base">
                    3. Treinamento da equipe
                  </CardTitle>
                  <CardDescription>
                    Capacitamos o time comercial para operar pedidos com
                    facilidade.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-base">
                    4. Lançamento oficial
                  </CardTitle>
                  <CardDescription>
                    Site no ar, pronto para pedidos B2B, com suporte contínuo.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section className="border-t py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
              <div className="space-y-4">
                <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
                  Solicite uma Demonstração e Garanta seu Site em 7 Dias
                </h2>
                <p className="text-muted-foreground">
                  Preencha os dados da sua confecção ou marca para falarmos com
                  um especialista em atacado de moda.
                </p>
                <div className="rounded-xl border bg-secondary/50 p-4 text-sm text-muted-foreground">
                  Seus dados estão seguros. Entraremos em contato via WhatsApp
                  em até 2 horas úteis.
                </div>
              </div>

              <Card id="lead-form">
                <CardHeader>
                  <CardTitle className="font-heading">Formulário</CardTitle>
                  <CardDescription>
                    Campos marcados com * são obrigatórios.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={submit}>
                    <div className="space-y-2">
                      <Label htmlFor="responsavel">Nome do Responsável *</Label>
                      <Input
                        id="responsavel"
                        value={responsavel}
                        onChange={(e) => setResponsavel(e.target.value)}
                        placeholder="Seu nome"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="marca">Nome da Marca / Confecção *</Label>
                      <Input
                        id="marca"
                        value={marca}
                        onChange={(e) => setMarca(e.target.value)}
                        placeholder="Ex: Confecções Silva"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="whatsapp">WhatsApp / Telefone *</Label>
                      <Input
                        id="whatsapp"
                        inputMode="tel"
                        value={whatsapp}
                        onChange={(e) =>
                          setWhatsapp(formatTelefoneBR(e.target.value))
                        }
                        placeholder="(00) 00000-0000"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="instagram">Instagram da Marca</Label>
                      <Input
                        id="instagram"
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                        placeholder="@sua_marca"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="segmento">Segmento Principal *</Label>
                      <Select
                        id="segmento"
                        value={segmento}
                        onChange={(e) =>
                          setSegmento(e.target.value as Segmento)
                        }
                      >
                        <option value="">Selecione</option>
                        <option value="Moda Feminina">Moda Feminina</option>
                        <option value="Moda Masculina">Moda Masculina</option>
                        <option value="Moda Infantil">Moda Infantil</option>
                        <option value="Jeanswear">Jeanswear</option>
                        <option value="Moda Praia/Fitness">
                          Moda Praia/Fitness
                        </option>
                        <option value="Outros">Outros</option>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Já possui sistema ou site atual? *</Label>
                      <div className="grid gap-2">
                        <label className="flex items-start gap-3 rounded-lg border bg-background p-3 text-sm">
                          <input
                            type="radio"
                            name="migracao"
                            className="mt-1"
                            checked={migracao === "Sim, quero migrar"}
                            onChange={() => setMigracao("Sim, quero migrar")}
                          />
                          <span>Sim, quero migrar</span>
                        </label>
                        <label className="flex items-start gap-3 rounded-lg border bg-background p-3 text-sm">
                          <input
                            type="radio"
                            name="migracao"
                            className="mt-1"
                            checked={migracao === "Não, será o primeiro site"}
                            onChange={() =>
                              setMigracao("Não, será o primeiro site")
                            }
                          />
                          <span>Não, será o primeiro site</span>
                        </label>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="observacoes">Observações</Label>
                      <Textarea
                        id="observacoes"
                        value={observacoes}
                        onChange={(e) => setObservacoes(e.target.value)}
                        placeholder="Ex: grade por tamanho, pedido mínimo, condições para revendedor..."
                      />
                    </div>

                    {formError ? (
                      <div className="rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
                        {formError}
                      </div>
                    ) : null}

                    {formSuccess ? (
                      <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-700 dark:text-emerald-300">
                        Enviado. Abrimos o WhatsApp para você confirmar a
                        mensagem.
                      </div>
                    ) : null}

                    <Button
                      size="lg"
                      className="h-auto w-full rounded-full py-3.5 text-base"
                      type="submit"
                    >
                      QUERO MEU SITE EM 7 DIAS
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
          <div className="space-y-2">
            <div className="font-heading text-base font-bold">
              Representante Autorizado Fácilzap no Nordeste
            </div>
            <div className="text-sm text-muted-foreground">
              Razão Social: Sua Empresa LTDA
              <br />
              CNPJ: 00.000.000/0001-00
              <br />
              Cidade/UF: Fortaleza/CE
            </div>
          </div>

          <div className="space-y-2">
            <div className="font-semibold">Links rápidos</div>
            <div className="flex flex-col items-start gap-2 text-sm">
              <Button
                variant="link"
                className="h-auto p-0 text-muted-foreground"
                onClick={() => openWhatsApp("Olá! Quero suporte via WhatsApp.")}
              >
                Suporte via WhatsApp
              </Button>
              <a className="text-muted-foreground hover:text-foreground" href="#">
                Política de Privacidade
              </a>
              <a className="text-muted-foreground hover:text-foreground" href="#">
                Termos de Uso
              </a>
            </div>
          </div>

          <div className="space-y-2">
            <div className="font-semibold">Atalho</div>
            <Button
              variant="outline"
              className="h-auto w-fit rounded-full px-5 py-2.5"
              onClick={() => {
                document.getElementById("lead-form")?.scrollIntoView({
                  behavior: "smooth",
                })
              }}
            >
              Solicitar demonstração <ArrowRight className="ml-1 size-4" />
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-6xl px-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} — Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}
