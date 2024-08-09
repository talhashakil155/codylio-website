import Banner from './components/Banner/index';
import Companies from './components/Technologies/Technologies';
import Services from './components/Services/Services';
import AboustUs from './components/AboustUs/AboustUs';
import Testimonials from './components/Testimonials/Testimonials';
import ContactUs from './components/ContactUs/ContactUs';


export default function Home() {
  return (
    <main>
      <Banner />
      <Services />
      <AboustUs />
      <Testimonials />
      <ContactUs />
    </main>
  )
}
