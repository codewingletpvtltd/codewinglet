import { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import TextField from "../components/TextField/TextField";

export const metadata: Metadata = {
  title: "Top Software Development Company India - Code Winglet Pvt. Ltd.",
  description:
    "Transform your business with innovative software solutions tailored to your needs. Discover how Code Winglet Pvt. Ltd. can help you streamline processes, increase efficiency, and drive growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-primary">
        <Link href="/technology/reactjs-development-company">React js</Link>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
