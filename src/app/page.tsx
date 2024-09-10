import { Suspense } from "react";
import HomeContent from "./_components/HomeContent";

export default function Home() {
  <Suspense fallback={<div />}>
    <HomeContent />
  </Suspense>;
}
