import CustomPlayer from "../components/player";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>JSON</h2>

      <CustomPlayer src="/Celebration.json" />
      <CustomPlayer src="/Error ice cream.json" />
      <CustomPlayer src="/Empty State.json" />
      <CustomPlayer src="/Newtest5.json" />
      <CustomPlayer src="/yoga.json" />
      <CustomPlayer src="/Surfing2.json" />
    </main>
  );
}
