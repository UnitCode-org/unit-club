import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Hero from "@/components/black-365/Hero";
import ScrollToDiscover from "@/components/black-365/ScrollToDiscover";
import Description from "@/components/black-365/Description";
import PhotoGallery from "@/components/black-365/PhotoGallery";
import Promotion from "@/components/black-365/Promotion";
import Membership from "@/components/black-365/Membership";
import WantToJoin from "@/components/black-365/WantToJoin";

function Unit365Page() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen w-screen bg-black text-white overflow-y-clip overflow-x-hidden">
      <Navbar />
      <Hero logo="/images/logo/365.mp4" page="365" />
      <ScrollToDiscover />
      <Description
        title="FOR GREATNESS"
        highlightedText="STEPPING STONE"
        description={`UC 365 is Where emerging talents come together, creating a vibrant community that thrives on collaboration and innovation. Connect with rising stars and gain access to exclusive events that foster growth and opportunity.<br/><br/>This structure for UC 365 emphasizes growth, ambition, and community. Positioning UC 365 as the ideal stepping stone for those on their way to UC Black.`}
      />
      <PhotoGallery
        title="A COMMUNITY OF EMERGING TALENTS"
        description="UC 365 is more than just a membership—it's a platform for those who are destined for greatness. Whether you're a rising entrepreneur, a creative visionary, or a future leader, UC 365 offers the support and connections you need to elevate your career."
      />
      <Promotion
        number="365"
        title="MEMBERS, BY INVITATION OR<br/>APPLICATION"
        description={`Join a community of 365 individuals who are on the fast track to success. UC 365 offers you the chance to network, learn, and grow alongside peers who are shaping the future.
`}
      />
      <Membership
        description={`To be part of UC 365, you must receive an invitation or be referred by a current member, along with holding a minimum of $1,000 worth of UNIT tokens via the Unit App.
`}
      />
      <WantToJoin description="Want To Play, Explore, Grow, Get Down Together?<br/>Want to Make The World Better, Laugh, Go Deep,<br/>Get Serious With Us? Then, Let's Do This!" />
      <Footer />
    </main>
  );
}

export default Unit365Page;
