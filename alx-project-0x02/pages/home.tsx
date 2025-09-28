import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card title="First Card" content="This is the first card." />
      <Card title="Second Card" content="This is the second card." />
    </div>
  );
}
