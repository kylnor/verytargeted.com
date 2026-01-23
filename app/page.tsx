import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import WhatIsVeryTargeted from '@/components/WhatIsVeryTargeted'
import Solution from '@/components/Solution'
import SocialProof from '@/components/SocialProof'
import Pricing from '@/components/Pricing'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <WhatIsVeryTargeted />
      <Solution />
      <SocialProof />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  )
}
