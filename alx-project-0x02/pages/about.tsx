import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <div className="p-6 flex gap-4">
      <Button size="small" shape="rounded-sm">Small</Button>
      <Button size="medium" shape="rounded-md">Medium</Button>
      <Button size="large" shape="rounded-full">Large</Button>
    </div>
  );
}
