import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Hero from "@/components/black-365/Hero";
import ScrollToDiscover from "@/components/black-365/ScrollToDiscover";
import Description from "@/components/black-365/Description";
import PhotoGallery from "@/components/black-365/PhotoGallery";

function UnitBlackPage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen w-screen bg-black overflow-y-clip overflow-x-hidden">
      <Navbar />
      <Hero logo="/images/logo/Black.mp4" page="Black" />
      <ScrollToDiscover />
      <Description
        title="OF EXCLUSIVITY."
        highlightedText="PINNACLE"
        description={`From global summits to private galas, UC Black members are always at
      the heart of the action.<br /><br />Network and connect with the world's most influential individuals in intimate, invitation-only settings.`}
      />
      <PhotoGallery
        title="THE ULTIMATE ELITE CIRCLE"
        description="UC Black is more than a club; it's a community of 150 of the world's most influential leaders and innovators. Membership is exclusively by invitation, ensuring that only the most distinguished individuals are part of this unparalleled circle."
      />
      <Footer />
    </main>
  );
}

export default UnitBlackPage;
