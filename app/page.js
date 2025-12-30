import Header from '@/components/Header';
import Flipbox from '../components/home/Flipbox';
import Herosection from '../components/home/Herosection';
import '../style/homestyle.scss';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <div>
            <Header />
            <Herosection />

            {/* <AutoSlider/> */}

            <Flipbox />
            <Footer />
        </div>
    );
}
