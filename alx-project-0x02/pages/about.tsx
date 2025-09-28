import Button from "@/components/common/Button";
import Header from "@/components/layout/Header"; // 👈 import Header

export default function About() {
  return (
    <div>
      {/* 👇 Place Header at the top */}
      <Header />

      <main className="p-6 space-x-4">
        <Button size="small" shape="rounded-sm">Small</Button>
        <Button size="medium" shape="rounded-md">Medium</Button>
        <Button size="large" shape="rounded-full">Large</Button>
      </main>
    </div>
  );
}
