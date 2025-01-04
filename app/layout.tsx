import type { Metadata } from "next"
import "./globals.css"
import { Poppins, Figtree } from "next/font/google"
import GrainyBgComp from "@/components/ui-custom/grainy-bg"

const fontPrimary = Poppins({
   subsets: ["latin"],
   weight: ["900", "800", "700", "600", "500"],
   variable: "--font-primary",
})

const fontSecondary = Figtree({
   subsets: ["latin"],
   weight: ["300", "400", "500"],
   variable: "--font-secondary",
})

export const metadata: Metadata = {
   title: {
      template: "%s | DominicPam",
      default: "DominicPam",
   },
   description:
      "Dynamic entrepreneur with expertise in tech, music, and F&B industries. Multitalented, with strong analytical skills and resilience, adept at solving complex problems. Proven adaptability as a skilled developer with a focus on innovation and business growth.",
   authors: [{ name: "Dominic Pam", url: "dominicpam.netlify.com" }],
   keywords: [
      "Dominic Pam",
      "DominicPam",
      "Dominic",
      "Pam",
      "Dominic Pam Software Developer",
   ],
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <body
            className={`${fontPrimary.variable} ${fontSecondary.variable} antialiased`}
         >
            <GrainyBgComp />
            {children}
         </body>
      </html>
   )
}
