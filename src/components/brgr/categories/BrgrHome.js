
import Header from './header/Header'
import PopularMenuSection from "./PopularItemSections/PopularMenuSection";
import AllCategoriesPage from "./categories";
import HeroCarousel from './header/HeroCarousel';
import BRGRInfoBlock from './BRGRInfo/BRGRInfoBlock';
import Footer from './footer/Footer';

const BrgrHome = () => {

  return (
    <>
     <Header/>
     <HeroCarousel/>
     <PopularMenuSection/> 
     <AllCategoriesPage/>
     <BRGRInfoBlock/>
     <Footer/>
    </>
  );
};


export default BrgrHome;
