import Companies from "../components/Landing/Companies";
import Everything from "../components/Landing/Everything";
import StudiaTechBusiness from "../components/Landing/StudiaTechBusiness";
import HeroBanner from "../components/Landing/HeroBanner";
import JoinStudiaTech from "../components/Landing/JoinStudiaTech";
import PopularServices from "../components/Landing/PopularServices";
import Services from "../components/Landing/Services";
import React from 'react'

function Index() {
  return (
    <div>
      <HeroBanner />
      <Companies />
      <PopularServices />
      <Everything />
      <Services />
      <StudiaTechBusiness />
      <JoinStudiaTech />
    </div>
  );
}

export default Index;