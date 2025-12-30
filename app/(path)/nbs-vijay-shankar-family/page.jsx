import React from 'react';
import '../../../style/interior.css';
import InteriorPage from './InteriorPage';


const interiorProjects = [
    {
        headingTitle: 'Mr Raja & Family',
        titleUrl: 'mr-raja-family',
        interiorType: '',
        metaTitle: 'Luxury interior designer in porur',
        metaDescription: 'Luxury interior designer in porur, German brands & fitting, 27yr Exp, 45days handover',
        metaKeywords: 'Luxury interior designer in porur | Luxury interior designer | Luxury interior in porur | interior designers in porur | modern interiors porur',
    },
    {
        headingTitle: 'Mr Baskaran & Family',
        titleUrl: 'mr-baskaran-family',
        interiorType: '',
        metaTitle:'Premium interior designer in chennai',
        metaDescription:'Premium interior designer Chennai, Award winner, We Assure 100% Desing & work satisfy',
        metaKeywords:'Premium interior designer in chennai | Premium interior designer',
    },
    {
        headingTitle: 'Mr Arun & Family',
        titleUrl: 'mr-arun-family',
        interiorType: '',
        metaTitle:'',
        metaDescription:'',
        metaKeywords:'',
    },
    {
        headingTitle: 'Mr Mohan & Family',
        titleUrl: 'mr-mohan-family',
        interiorType: '',
        metaTitle:'Top interior designers in Chennai',
        metaDescription:'Top interior designers in Chennai ! Available free 3D virtual design to visualize your perfect space. Book your consultation now',
        metaKeywords:'Top interior designers in Chennai | Top interior designers | best interior designers | best interiors in chennai',
    },
    {
        headingTitle: 'Mr Manikandan & Family',
        titleUrl: 'mr-manikandan-family',
        interiorType: '',
        metaTitle:'Architects and interior designers in Chennai',
        metaDescription:'Top architects and interior designers in Chennai offering innovative design solutions for residential.Contact us today for personalized design services.',
        metaKeywords:'Architects and interior designers |  Top architects designers | interior designers',
    },
    {
        headingTitle: 'Mr Dhanasekar & Family',
        titleUrl: 'mr-dhanasekar-family',
        interiorType: '',
        metaTitle:'Best home interior designers in chennai',
        metaDescription:'Best home interior designer in Chennai. 45* days complete handover, Provide German brands & Fittings',
        metaKeywords:'Best home interior designers in chennai | Best home interior designers | home interior designers',
    },
    {
        headingTitle: 'Mr Harish & Family',
        titleUrl: 'mr-harish-family',
        interiorType: '',
        metaTitle:'Top interior decorators in Chennai',
        metaDescription:'Top interior decorators in Chennai, Expert Architect, we assure 100% Design & Work satisfy.',
        metaKeywords:'interior decorators | interior decoration | interior decorator | interior designers | interior decorator | interiors | interior designer | best interior decorators | interior decoration interior decors | furniture | interior decoration pictures interior designers | interior decorator home interior decorators | home decorators | interior decoration | interior decorators interior designing | home interior designers',
    },
    {
        headingTitle: 'Mr Santhosh &Family',
        titleUrl: 'mr-santhosh-family',
        interiorType: '',
        metaTitle:'Villa interior designers in Chennai',
        metaDescription:`Explore top villa interior designers in Chennai, specializing in luxury designs that elevate your home's aesthetics and functionality`,
        metaKeywords:'Villa interior designers in Chennai | Villa interior designers | villa interior design | luxury villa interior design | villa interior',
    },
    {
        headingTitle: 'Mr Raguraman & Family',
        titleUrl: 'mr-raguraman-family',
        interiorType: '',
        metaTitle:'Best Interior decorator in chennai',
        metaDescription:'Best interior decorators in Chennai, Expert Architect, we assure 100% Design & Work satisfy. 45*days complete handover',
        metaKeywords:'Best Interior decorator in chennai |  Best Interior decorator | Interior decorator',
    },
    {
        headingTitle: 'Mrs Mohan & Family',
        titleUrl: 'mrs-mohan',
        interiorType: '',
        metaTitle:'Top interior companies in Chennai',
        metaDescription:'Discover the top interior design companies in Chennai offering innovative home and office solutions. Transform your spaces with expert designers today',
        metaKeywords:'Top interior companies in Chennai | Top interior companies | interior companies',
    },
    {
        headingTitle: 'Mr.Mukulrai Induvidul House',
        titleUrl: 'individual-house-parrys-interior',
        interiorType: 'Individual House Interior Design',
        metaTitle:'',
        metaDescription:'',
        metaKeywords:'',
    },
    {
        headingTitle: 'ETA LILAC Appartment',
        titleUrl: '3bhk-appartment-interior-design',
        interiorType: '3BHK Appartment Interior Design',
        metaTitle:'',
        metaDescription:'',
        metaKeywords:'',
    },
    {
        headingTitle: 'Mr.Mohan',
        titleUrl: '3bhk-appartment-interior-design',
        interiorType: '',
        metaTitle:'',
        metaDescription:'',
        metaKeywords:'',
    },
    {
        headingTitle: 'Mrs.Nithya Srinivasan',
        titleUrl: '3bhk-apartment-adayar-interior',
        interiorType: '3BHK Apartment Interior',
        metaTitle:'3 bhk flat interior design in chennai',
        metaDescription:'Transform your 3 BHK flat with our impeccable interior design. Achieve a perfect balance of style and functionality for a stunning living experience.',
        metaKeywords:'3 bhk flat interior design in chennai | 3 bhk flat interior design | 3bhk interior design cost | 3bhk interior design',
    },
    {
        headingTitle: 'Mr.Sampath kumar',
        titleUrl: '3bhk-appartment-iyyapanthangal-interior',
        interiorType: '3BHK Appartment Interior',
        metaTitle:'',
        metaDescription:'',
        metaKeywords:'',
    },
    {
        headingTitle: 'Rama Elangovan',
        titleUrl: '3bhk-apartment-velacherry-interior',
        interiorType: '3BHK Apartment Interior',
        metaTitle:'',
        metaDescription:'',
        metaKeywords:'',
    },
    {
        headingTitle: 'Mr.Srinath Kanya',
        titleUrl: 'individual-house-kknagar-interior',
        interiorType: 'Individual House Interior design',
        metaTitle:'',
        metaDescription:'',
        metaKeywords:'',
    },
    {
        headingTitle: 'Mr.Arundev',
        titleUrl: 'individual-duplex-house-annanagar-interior',
        interiorType: 'Individual Duplex House Interior',
        metaTitle:'',
        metaDescription:'',
        metaKeywords:'',
    },
    {
        headingTitle: 'Mr. Kandhan Family',
        titleUrl: 'mr-kandhan-family',
        interiorType: 'Individual Duplex House Interior',
        metaTitle:'',
        metaDescription:'',
        metaKeywords:'',
    },
    {
        headingTitle: 'NBS Vijay Shankar & Family',
        titleUrl: 'nbs-vijay-shankar-family',
        interiorType: '',
        metaTitle:'',
        metaDescription:'',
        metaKeywords:'',
    }
];

export async function generateMetadata() {

    const project = interiorProjects.find((project) => project.titleUrl === "nbs-vijay-shankar-family");

    const metadata = {
        title: project ? project.metaTitle : 'Luxury interior designer in chennai | Luxury Interior Designer',
        description: project ? project.metaDescription : 'Luxury interior designer in Chennai, We provide affordable prices without sacrifice style, 27yr Exp, 45 days handover',
        keywords: project
            ? project.metaKeywords.split('|').map(keyword => keyword.trim())
            : ['Luxury interior designer in chennai', 'Luxury Interior Designer', 'luxury interior designers', 'high end interior designers', 'top luxury interior designers']
    };

    return metadata;
}

const Page = async() => {

    const project = interiorProjects.find((project) => project.titleUrl === "nbs-vijay-shankar-family");

    return (
        <div>
            <InteriorPage interiordesign={project.titleUrl} />
        </div>
    );
};

export default Page;
