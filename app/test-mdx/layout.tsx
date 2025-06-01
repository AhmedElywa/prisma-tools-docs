import MdxLayout from "../../components/mdx-layout";

export default function TestMDXLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MdxLayout>{children}</MdxLayout>;
}
