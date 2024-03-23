import { Metadata } from "next";

export const metadata: Metadata = {
   title: "About Chetra",
   description: "Everything about Chetra",
};

export default function AboutMeLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <>{children}</>
   );
}