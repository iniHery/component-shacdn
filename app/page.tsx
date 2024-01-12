import Image from "next/image";
import { TableShacdn } from "./TableShacdn";
import { ScrollAreaShacdn } from "./ScrollAreaShacdn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      {/* <TableShacdn /> */}
      <ScrollAreaShacdn />
    </main>
  );
}
