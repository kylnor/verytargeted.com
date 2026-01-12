import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import WhatIsVeryTargeted from '@/components/WhatIsVeryTargeted'
import Solution from '@/components/Solution'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import SocialProof from '@/components/SocialProof'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Problem />
      <WhatIsVeryTargeted />
      <Solution />
      <HowItWorks />
      <Pricing />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </main>
  )
}
