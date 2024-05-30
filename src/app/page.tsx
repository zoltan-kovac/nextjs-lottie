import CustomPlayer from "../components/player";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <CustomPlayer src="/Celebration.json" /> */}
      {/* <CustomPlayer src="/Error ice cream.json" /> */}
      {/* <CustomPlayer src="/Empty State.json" /> */}
      {/* <CustomPlayer src="/Newtest5.json" /> */}
      <h2>JSON lottie source</h2>
      <CustomPlayer src="/Test 2.json" />

      {/* <CustomPlayer src="/Test 2.lottie" /> */}
    </main>
  );
}
