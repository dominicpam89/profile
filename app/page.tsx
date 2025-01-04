import ChartRadial1 from "@/components/ui-custom/chart-radial-1"
import ColorTest from "@/components/ui-custom/color-test"

export default function Page() {
   return (
      <main className="px-12 flex flex-col gap-4 w-full min-h-screen justify-center bg-background text-foreground">
         <h2 className="heading-3">Heading</h2>
         <ColorTest color="primary" />
         <ColorTest color="secondary" />
         <ColorTest color="destructive" />
         <ColorTest color="accent" />
         <ColorTest color="muted" />
         <ColorTest color="info" />
         <ColorTest color="warning" />
         <ColorTest color="success" />
         <ChartRadial1 />
      </main>
   )
}
