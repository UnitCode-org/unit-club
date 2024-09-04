import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Hero from "@/components/black-365/Hero";
import ScrollToDiscover from "@/components/black-365/ScrollToDiscover";
import Description from "@/components/black-365/Description";
import PhotoGallery from "@/components/black-365/PhotoGallery";
import Promotion from "@/components/black-365/Promotion";
import Membership from "@/components/black-365/Membership";
import WantToJoin from "@/components/black-365/WantToJoin";

function UnitBlackPage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen w-screen bg-black text-white overflow-y-clip overflow-x-hidden">
      <Navbar />
      <Hero logo="/images/logo/Black.mp4" page="Black" />
      <ScrollToDiscover />
      <Description
        title="OF EXCLUSIVITY."
        highlightedText="PINNACLE"
        description={`From global summits to private galas, UC Black members are always at the heart of the action.<br/><br/>Network and connect with the world's most influential individuals in intimate, invitation-only settings.`}
      />
      <PhotoGallery
        title="THE ULTIMATE ELITE CIRCLE"
        description="UC Black is more than a club; it's a community of 150 of the world's most influential leaders\nand innovators. Membership is exclusively by invitation, ensuring that only the most\ndistinguished individuals are part of this unparalleled circle."
      />
      <Promotion
        number="150"
        title="GLOBALLY RECOGNIZED<br/>MEMBERS, INVITATION ONLY"
        description={`Unlock Unparalleled Access To The World's Most<br />Prestigious Events, Private Gatherings, and a Network of Elite Peers.`}
      />
      <Membership
        description={`To be part of UC Black, you must receive an invitation or be referred by a current member, along with holding a minimum of $1,000 worth of UNIT tokens via the Unit App.`}
      />
      <WantToJoin description="Seeking extraordinary experiences and connections? If you're driven to succeed and want to be part of something truly exclusive, then UC Black is your next step. Let's do this together." />
      <Footer />
    </main>
  );
}

export default UnitBlackPage;
