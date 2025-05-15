import { Metadata } from "next";

// This metadata will only apply to this folder and its subpages
export const metadata: Metadata = {
  title: "VJC OVERSEAS",
  description: "Sign up & Get Free Assistance",
};

export default function GermanyOpportunityCardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Render the children of this layout (which will be the content of the page) */}
      {children}
    </>
  );
}
