import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeatureProducts from "./components/FeatureProducts";
function Home(){

    return(
        <>
            <HeroSection data={{name:"MJ Store"}} />
            <FeatureProducts />
            <Services/>
            <Trusted/>
        </>
            
    )
}

export default Home;