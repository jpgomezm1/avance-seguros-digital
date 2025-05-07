
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import InsuranceCategories from '@/components/home/InsuranceCategories';
import AboutUs from '@/components/home/AboutUs';
import QuoteForm from '@/components/home/QuoteForm';
import Testimonials from '@/components/home/Testimonials';
import InsurancePartners from '@/components/home/InsurancePartners';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <InsuranceCategories />
        <AboutUs />
        <Testimonials />
        <QuoteForm />
        <InsurancePartners />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
