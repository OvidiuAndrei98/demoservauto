import type { Metadata } from "next";
import "./globals.css";

import {
  Inter as FontSans,
  Noto_Sans,
  Poppins,
  Roboto_Condensed,
  Roboto_Flex,
  Roboto_Serif,
  Roboto_Slab,
} from "next/font/google";

const notto = Roboto_Flex({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "SafeHouse",
    template: `%s | SafeHouse`,
  },
  description: "SafeHouse MotorSport",
  // icons: [
  //   {
  //     url: '/CleanCode.svg',
  //     href: '/CleanCode.svg',
  //   }
  // ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${notto.className} select-none min-w-32`}>
        {children}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      </body>
    </html>
  );
}
