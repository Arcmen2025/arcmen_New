'use client';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../../style/interior.css';
import Link from 'next/link';
import AutoSlider from '@/components/slider/slider';
import PreLoader from '@/components/PreLoader';
// import { useParams } from 'next/navigation';
const interiorProjects = [
    {
        headingTitel: 'Mr Raja & Family',
        titleUrl: 'mr-raja-family',
        interiorType: '',
        sections: [
            'A simple thank you is definitely not adequate. In an era of flimsy ads and exaggerated advertisements, there’s a genuine and end to end interior designing solution provider. None other than our Arcmen interior designers, porur Mr.Balaraman sir and his highly skilled team. Our house is located in Tiruttani 80 kms from Chennai. When we first enquired about the interior designing options, many designers opted away citing the distance. But, at very first visit, Mr Balaraman sir patiently explained us the process, importance of early interior planning (during the construction) and latest innovations in the field, along with a clear road map of things to be done in an easily understandable manner at affordable cost.',
            'In subsequent meetings, He helped us to update/ modify the construction plan in such a way that our house becomes spacious, easily accessible, with proper ventilation and light. After 1st site visit, His skilled and customer friendly team made us a 3D planning and it has been revised and updated at least 5 times according to our preferences.',
            'Finally a well devised interior 3D plan has been made and we were called again to showroom for material selection. We took almost 2 weeks for material selection and an exact replica of our choices were made into a realistic 3D plan. The price quote was totally affordable and they always gave us multiple choices from leading brands at competitive market price. We highly recommend Arcmen interior designers. Thanks a lot Mr Balaraman sir and team.'
        ],
        sliderImages: [
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735290357/arcmen/mr%20raja%20family/raj-family-8.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735290317/arcmen/mr%20raja%20family/raj-family-7.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735290265/arcmen/mr%20raja%20family/raj-family-6.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735290225/arcmen/mr%20raja%20family/raj-family-5.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735290126/arcmen/mr%20raja%20family/raj-family-4.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735290091/arcmen/mr%20raja%20family/raj-3.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735289953/arcmen/mr%20raja%20family/raj-2.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735289899/arcmen/mr%20raja%20family/raj-1.jpg'
        ]
    },
    {
        headingTitel: 'Mr Baskaran & Family',
        titleUrl: 'mr-baskaran-family',
        interiorType: '',
        sections: [
            'Arcmen they’re the Best work doing interior designer in Chennai. 1st they are ask us for booking to start the design for my house, afterward they shared our designs through what’s up then I realized how my house was transforming and then got some corrections with him after finalizing the 3D Design and confirmed the drawing details along with 3D. Then they executed as same in the design.',
            'Really we appreciate the Arcmen interior Designer team for the sincere and perfection of work, further I would recommend our friends and family circle to beautify our dream home through Arcmen interior Designer, even without my presence they are coordinating with the construction team as well to finish. I am so much happy & pleased with work God blessed them bright future for sincere.'
        ],
        sliderImages: [
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735291032/arcmen/mr-baskaran-family/Baskaran-1.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735290991/arcmen/mr-baskaran-family/Baskaran-10.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735290950/arcmen/mr-baskaran-family/Baskaran-9.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735290897/arcmen/mr-baskaran-family/Baskaran-8.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735290857/arcmen/mr-baskaran-family/Baskaran-7.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735290798/arcmen/mr-baskaran-family/Baskaran-6.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735290746/arcmen/mr-baskaran-family/Baskaran-5.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735290696/arcmen/mr-baskaran-family/Baskaran-4.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735290647/arcmen/mr-baskaran-family/Baskaran-3.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735290607/arcmen/mr-baskaran-family/Baskaran-2.jpg'
        ]
    },
    {
        headingTitel: 'Mr Rama Elangovan',
        titleUrl: '3bhk-apartment-velacherry-interior',
        interiorType: '',
        sections: [
            ``
        ],
        sliderImages: [
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735367915/arcmen/Rama%20Elangovan/rama-elangovan-interior-14.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735367863/arcmen/Rama%20Elangovan/rama-elangovan-interior-13.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735367820/arcmen/Rama%20Elangovan/rama-elangovan-interior-12.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735367771/arcmen/Rama%20Elangovan/rama-elangovan-interior-11.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735367715/arcmen/Rama%20Elangovan/rama-elangovan-interior-10.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735367668/arcmen/Rama%20Elangovan/rama-elangovan-interior-09.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735367604/arcmen/Rama%20Elangovan/rama-elangovan-interior-08.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735367544/arcmen/Rama%20Elangovan/rama-elangovan-interior-07.jpg',
            
        ]
    },
    {
        headingTitel: 'Mr.Srinath Kanya',
        titleUrl: 'individual-house-kknagar-interior',
        interiorType: '',
        sections: [
            `Arcmen Modular Kitchens and Interiors, I am impressed with the professionalism they have displayed in their work. They completed the activity and delivered on time as promised. Quality of work looks impressive so far. I feel the costing is also comparitively nominal. The wardrobes and the modular kitchen after completion looks very similar to what they showcased with their 3D design. Overall I am satisfied with their customer friendly attitude and professional working style.

`
        ],
        sliderImages: [
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1738328589/arcmen/Mr.Srinath/srinath-kanya-01.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1738328589/arcmen/Mr.Srinath/srinath-kanya-02.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1738328589/arcmen/Mr.Srinath/srinath-kanya-03.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1738328589/arcmen/Mr.Srinath/srinath-kanya-04.jpg',
            
        ]
    },
    {
        headingTitel: 'Mr Raguraman & Family',
        titleUrl: 'mr-raguraman-family',
        interiorType: '',
        sections: [
            `Arcmen approach was very customer friendly, providing lot of good suggestions about the interior even if you don’t have any idea on the same. Their 3d design output was very helpful in realising the final output of our interior design which also helps us in making final changes accordingly. Importantly their workers are very dedicated and disciplined completing the work on time. Project manager Mr. Balaraman was very approachable and used to have frequent visits during site work and provides lot of suggestions. Overall I am completely satisfied with the work they have done. Thanks Arcmen!`
        ],
        sliderImages: [
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735300987/arcmen/mr-raguraman-family/raku-1.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735300696/arcmen/mr-raguraman-family/raku-2.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735300754/arcmen/mr-raguraman-family/raku-3.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735300818/arcmen/mr-raguraman-family/raku-4.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735301020/arcmen/mr-raguraman-family/raku-5.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735301057/arcmen/mr-raguraman-family/raku-6.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735301091/arcmen/mr-raguraman-family/raku-7.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735300866/arcmen/mr-raguraman-family/raku-8.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735300899/arcmen/mr-raguraman-family/raku-9.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735300957/arcmen/mr-raguraman-family/raku-10.png'
        ]
    },
    {
        headingTitel: 'Mr Arun Dev',
        titleUrl: 'individual-duplex-house-annanagar-interior',
        interiorType: '',
        sections: [
            'The team discussed a range of designs for the layout we had in the kitchen as well as bedrooms and came up with many options, following which they also guided on materials selection and fittings with a clear focus on optimising costs. Very satisfied with the work. Delivery – given the variety handled some delays ( few days ) must be accepted. Overall very happy with the fit and finish of the work. Work completed in May 2023.',
            
        ],
        sliderImages: [
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735371982/arcmen/Arundev/arundev-interior-01.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735371982/arcmen/Arundev/arundev-interior-02.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735371982/arcmen/Arundev/arundev-interior-03.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735371982/arcmen/Arundev/arundev-interior-04.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735371982/arcmen/Arundev/arundev-interior-05.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735371982/arcmen/Arundev/arundev-interior-06.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735371982/arcmen/Arundev/arundev-interior-07.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735371982/arcmen/Arundev/arundev-interior-08.jpg'
        ]
    },
    {
        headingTitel: 'Mrs.Porchelvi',
        titleUrl: 'individual-house-perambur-interior',
        interiorType: '',
        sections: [
            'Arcmen they’re the Best work doing interior designer in Chennai. 1st they are ask us for booking to start the design for my house, afterward they shared our designs through what’s up then irealized how my house was transforming and then got some corrections with him after finalizing the 3D Design and confirmed the drawing details along with 3D. Then they executed as same in the design. Really we appreciate the Arcmen interior Designer team for the sincere and perfection of work, further I would recommend our friends and family circle to beautify our dream home through Arcmen interior Designer, even without my presence they are coordinating with the construction team as well to finish. I am so much happy & pleased with her work God blessed them bright future for sincere.'
        ],
        sliderImages: [
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1738329646/arcmen/Porchelvi/porchelvi-01.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1738329646/arcmen/Porchelvi/porchelvi-02.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1738329646/arcmen/Porchelvi/porchelvi-03.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1738329646/arcmen/Porchelvi/porchelvi-04.jpg',
            
        ]
    },

    {
        headingTitel: 'Mr Mohan & Family',
        titleUrl: 'mr-mohan-family',
        interiorType: '',
        sections: [
            'A well-executed architectural interior design balances functionality, aesthetics, and practicality, while also incorporating innovative solutions and staying attuned to current trends. The integration of quality materials and thoughtful space utilization ensures a design that is not only beautiful but also liveable and enduring. If you have specific examples or projects in mind that you would like a more detailed review of, please provide additional details!'
        ],
        sliderImages: [
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735293950/arcmen/mr-mohan-family/mohan-1.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735293994/arcmen/mr-mohan-family/mohan-2.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735292613/arcmen/mr-mohan-family/mohan-13.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735292582/arcmen/mr-mohan-family/mohan-12.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735292547/arcmen/mr-mohan-family/mohan-11.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735292493/arcmen/mr-mohan-family/mohan-10.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735292454/arcmen/mr-mohan-family/mohan-9.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735292420/arcmen/mr-mohan-family/mohan-8.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735292377/arcmen/mr-mohan-family/mohan-7.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735292338/arcmen/mr-mohan-family/mohan-6.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735292293/arcmen/mr-mohan-family/mohan-5.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735292147/arcmen/mr-mohan-family/mohan-4.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735292247/arcmen/mr-mohan-family/mohan-3.jpg'
        ]
    },
    {
        headingTitel: 'Mr Manikandan & Family',
        titleUrl: 'mr-manikandan-family',
        interiorType: '',
        sections: [
            `Arcmen Interior design and decorator, porur, we have done interior work with this team for our house from the beginning they are ask us for booking to start the design for my house, afterward they shared our designs model.`,
            `Then I realized how my house was transforming and then got some corrections after finalizing the 3D design and confirmed they send the electrical drawing along with 3D design. Then they gave some idea’s to colour our house paint work. The colour selection was good and neat.`,
            `Outlook was neat and nice. They can executed as same in the design. Really we appreciate the team of “ARCMEN INTERIOR DESIGNER” for the sincere and perfection of work. I was able to see real looking 3D views of “MY HOME” upfront because of your design team.`
        ],
        sliderImages: [
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735295054/arcmen/Mr%20Manikandan%20Family/qxlqtrs6zpjl2ste5vlk.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735295081/arcmen/Mr%20Manikandan%20Family/cshhigzmzzzjxdtwdywi.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735295107/arcmen/Mr%20Manikandan%20Family/manikandan-3.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735294717/arcmen/Mr%20Manikandan%20Family/manikandan-4.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735294776/arcmen/Mr%20Manikandan%20Family/manikandan-5.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735294816/arcmen/Mr%20Manikandan%20Family/manikandan-6.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735294966/arcmen/Mr%20Manikandan%20Family/manikandan-7.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735294992/arcmen/Mr%20Manikandan%20Family/manikandan-8.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735295026/arcmen/Mr%20Manikandan%20Family/manikandan-9.jpg'
        ]
    },
    {
        headingTitel: 'Mr Dhanasekar & Family',
        titleUrl: 'mr-dhanasekar-family',
        interiorType: '',
        sections: [
            `Arcmen modular kitchen, porur, Chennai was my final choice after analysing around 15 interior designers to do interior design work for my flat @ ‘Radiance shine’, OMR. I was looking for someone who don’t charge for their brand and charge only for quality work and materials and craftsmanship; someone who can give genuine, transparent rough estimates at first site visit (some companies give less priced estimates to make you sign and finally blow up the estimates), someone who can speak like a person in our home to build my home, someone who can price reasonably despite using top class brands.`,
            `Someone who can generate world class 3d designs and can bring the same into reality inside my home and I found these experts called Arcmen in porur, though they are very far from my home. Their work, finish, genuinely, timing, quality, top class customer centric service, customer first notion everything make these designers stand out. It’s tough to see such commitment towards customer satisfaction nowadays. Thanks to all of their team.`
        ],
        sliderImages: [
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735295470/arcmen/mr-dhanasekar-family/New-Project.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735295498/arcmen/mr-dhanasekar-family/dhanasekar-family-2.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735295531/arcmen/mr-dhanasekar-family/dhanasekar-family-3.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735295651/arcmen/mr-dhanasekar-family/dhanasekar-family-4.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735295400/arcmen/mr-dhanasekar-family/dhanasekar-5.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735295436/arcmen/mr-dhanasekar-family/dhanasekar-family-6.jpg'
        ]
    },
    {
        headingTitel: 'Mr Harish & Family',
        titleUrl: 'mr-harish-family',
        interiorType: '',
        sections: [
            `I would like to thank the entire team of “Arcmen home interior designer & architect” for the amazing work they have been doing in shaping up my dream home. The process: – Review before reach out: Me and my wife did go over their work on Google and few other social platforms and were pretty impressed by their work`,
            `First conversation: Mr.Dhanasekar gave a rough idea about what to expect in terms of the phases, planning & costing right in our very first conversation. That gave a reasonable perspective for us to decide whether we would work together or not`,
            ` Design Team: I got the opportunity to interact with the chief designer & engineer, Mr. Balaraman He is very diligent, systematic, and thoughtful. The part that we liked about him the most was the fact that he is all ears to our opinions but does not shy away from clarifying/correcting our thoughts/ideas if we are headed in the wrong direction. It’s always a two way street with him, and that’s a great quality. He and his team were very prompt in delivering the 2D rendering followed by the 3D models of the interior work to be done in the apartment. That helped gain a clear picture of the final product much ahead of implementation. Having worked with them in tandem, while the apartment was still in construction was another major bonus, they did periodic evaluation and necessary corrections in the building electrical layout as and when needed. This also helped keep a check on the apartment’s progress.`,
            ` Implementation: We are nearly getting to this stage, more updates to follow once we are done with this. Overall experience so far: Very humble and an amazing team, completely satisfied, pocket friendly & would recommend these folks hands down.`
        ],
        sliderImages: [
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735299625/arcmen/mr-harish-family/hari-1.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735296038/arcmen/mr-harish-family/hari-2.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735296071/arcmen/mr-harish-family/hari-3.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735296112/arcmen/mr-harish-family/hari-4.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735296257/arcmen/mr-harish-family/hari-5.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735296289/arcmen/mr-harish-family/hari-6.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735299226/arcmen/mr-harish-family/hari-7.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735299274/arcmen/mr-harish-family/hari-8.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735299328/arcmen/mr-harish-family/hari-9.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735299378/arcmen/mr-harish-family/hari-10.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735299441/arcmen/mr-harish-family/hari-11.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735299480/arcmen/mr-harish-family/hari-12.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735299520/arcmen/mr-harish-family/hari-13.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735295995/arcmen/mr-harish-family/hari-14.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735299580/arcmen/mr-harish-family/hari-15.png'
        ]
    },
    {
        headingTitel: 'Mr Santhosh &Family',
        titleUrl: 'mr-santhosh-family',
        interiorType: '',
        sections: [
            `Arcmen Modular Kitchens and Interiors, I am impressed with the professionalism they have displayed in their work. They completed the activity and delivered on time as promised. Quality of work looks impressive so far. I feel the costing is also comparatively nominal. The wardrobes and the modular kitchen after completion looks very similar to what they showcased with their 3D design. Overall I am satisfied with their customer friendly attitude and professional working style.`
        ],
        sliderImages: [
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735300092/arcmen/mr-santhosh-family/santhosh-1.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735300203/arcmen/mr-santhosh-family/santhosh-2.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735300347/arcmen/mr-santhosh-family/santhosh-3.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735300373/arcmen/mr-santhosh-family/santhosh-4.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735300404/arcmen/mr-santhosh-family/santhosh-5.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735299827/arcmen/mr-santhosh-family/santhosh-6.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735299965/arcmen/mr-santhosh-family/santhosh-7.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735300054/arcmen/mr-santhosh-family/santhosh-8.png',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735300019/arcmen/mr-santhosh-family/New-Project-9-1.png'
        ]
    },
   
    {
        headingTitel: 'Mrs Mohan & Family',
        titleUrl: 'mrs-mohan',
        interiorType: '',
        sections: [
            `I highly recommend Arcmen interior design in Chennai for the quality modular kitchen and the entire interior work. They came up with the creative design as per our requirements and shown us in the 3D design which gave us an idea about how our home look after the design work is complete. The 3D design and the final work matched exactly. They finished the work within the promised time and used the quality materials. They made our home Iyyapanthangal very practical for every day and look beautiful.`
        ],
        sliderImages: [
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735301564/arcmen/mrs-mohan/mrs-mohan-2.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735301604/arcmen/mrs-mohan/mrs-mohan-3.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735301648/arcmen/mrs-mohan/mrs-mohan-4.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735301325/arcmen/mrs-mohan/mrs-mohan-5.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735301361/arcmen/mrs-mohan/mrs-mohan-6.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735301398/arcmen/mrs-mohan/mrs-mohan-7.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735301468/arcmen/mrs-mohan/mrs-mohan-8.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735301506/arcmen/mrs-mohan/mrs-mohan-9.jpg'
        ]
    },
    {
        headingTitel: 'Mr.Mukulrai Induvidul House',
        titleUrl: 'individual-house-parrys-interior',
        interiorType: 'Individual House Interior Design',
        sections: [
            `I saw this ad on Instagram and by google too. I was very much impressed on your design which was done earlier which was posted in the web page .it look so beautiful and it is arranged according to vaasthu.It look so pleasant and neat work. and I also saw your work in my friend home which was quiet impressive and i want such work at my home too.My friend suggested the cost is also reasonable .`
        ],
        sliderImages: [
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735302026/arcmen/Mr%20Mukulrai/mukulrai-01.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735301811/arcmen/Mr%20Mukulrai/mukulrai-02.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735301867/arcmen/Mr%20Mukulrai/mukulrai-03.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735301909/arcmen/Mr%20Mukulrai/mukulrai-04.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735301997/arcmen/Mr%20Mukulrai/mukulrai-05.jpg'
        ]
    },
    {
        headingTitel: 'ETA LILAC Appartment',
        titleUrl: '3bhk-appartment-interior-design',
        interiorType: '3BHK Appartment Interior Design',
        sections: [
            'Great Response and comfortable installation. Various models with user friendly technologies.Affordable cost and worth for it too.Ontime completion with customer satisfaction.Prefer Arcmen interiors to design your house as expected in dream'
        ],
        sliderImages: [
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735302217/arcmen/ETA%20LILAC%20APPARTMENT/eta-lilac-01.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735302291/arcmen/ETA%20LILAC%20APPARTMENT/eta-lilac-02.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735302320/arcmen/ETA%20LILAC%20APPARTMENT/eta-lilac-03.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735302132/arcmen/ETA%20LILAC%20APPARTMENT/eta-lilac-04.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735302184/arcmen/ETA%20LILAC%20APPARTMENT/eta-lilac-05.jpg'
        ]
    },
    {
        headingTitel: 'Mr.Mohan',
        titleUrl: '3bhk-appartment-interior-design',
        interiorType: '',
        sections: [''],
        sliderImages: ['']
    },
    {
        headingTitel: 'Mrs.Nithya Srinivasan',
        titleUrl: '3bhk-apartment-adayar-interior',
        interiorType: '3BHK Apartment Interior',
        sections: [''],
        sliderImages: [
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735304562/arcmen/Nithya%20Srinivasan/nithya-srinivasan-interior-1.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735304621/arcmen/Nithya%20Srinivasan/nithya-srinivasan-interior-02.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735304661/arcmen/Nithya%20Srinivasan/nithya-srinivasan-interior-03.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735304792/arcmen/Nithya%20Srinivasan/nithya-srinivasan-interior-04.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735302596/arcmen/Nithya%20Srinivasan/nithya-srinivasan-interior-05.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735302634/arcmen/Nithya%20Srinivasan/nithya-srinivasan-interior-06.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735302674/arcmen/Nithya%20Srinivasan/nithya-srinivasan-interior-07.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735302709/arcmen/Nithya%20Srinivasan/nithya-srinivasan-interior-08.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735302761/arcmen/Nithya%20Srinivasan/nithya-srinivasan-interior-09.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735302806/arcmen/Nithya%20Srinivasan/nithya-srinivasan-interior-10.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735302897/arcmen/Nithya%20Srinivasan/nithya-srinivasan-interior-11.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735302934/arcmen/Nithya%20Srinivasan/nithya-srinivasan-interior-12.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735302979/arcmen/Nithya%20Srinivasan/nithya-srinivasan-interior-13.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735304506/arcmen/Nithya%20Srinivasan/nithya-srinivasan-interior-14.jpg'
        ]
    },
    {
        headingTitel: 'Mr.Sampath kumar',
        titleUrl: '3bhk-appartment-iyyapanthangal-interior',
        interiorType: '3BHK Appartment Interior',
        sections: [''],
        sliderImages: [
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735304928/arcmen/sampath-kumar/sampath-kumar-interior-01.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735304977/arcmen/sampath-kumar/sampath-kumar-interior-02.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735305067/arcmen/sampath-kumar/sampath-kumar-interior-03.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735305119/arcmen/sampath-kumar/sampath-kumar-interior-04.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735305177/arcmen/sampath-kumar/sampath-kumar-interior-05.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735305210/arcmen/sampath-kumar/sampath-kumar-interior-06.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735361786/arcmen/sampath-kumar/sampath-kumar-interior-07.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735361557/arcmen/sampath-kumar/sampath-kumar-interior-08.jpg',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1735361425/arcmen/sampath-kumar/sampath-kumar-interior-09.jpg'
        ]
    },
    {
        headingTitel: 'Mr. Kandhan Family',
        titleUrl: 'mr-kandhan-family',
        interiorType: '',
        sections: [''],
        sliderImages: [
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1738393381/arcmen/kandhan/kandhan-family-4.webp',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1738393381/arcmen/kandhan/kandhan-family-3.webp',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1738393381/arcmen/kandhan/kandhan-family-2.webp',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1738393381/arcmen/kandhan/kandhan-family-1.webp',
            
        ]
    },
    {
        headingTitel: 'NBS Vijay Shankar & Family',
        titleUrl: 'nbs-vijay-shankar-family',
        interiorType: '',
        sections: [''],
        sliderImages: [
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1738393861/arcmen/vijay%20sankar/vijay-shankar-family-1.webp',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1738393861/arcmen/vijay%20sankar/vijay-shankar-family-2.webp',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1738393861/arcmen/vijay%20sankar/vijay-shankar-family-3.webp',
            'https://res.cloudinary.com/dpflidsbg/image/upload/v1738393861/arcmen/vijay%20sankar/vijay-shankar-family-4.webp',
            
        ]
    }
];

const InteriorPage = ({interiordesign}) => {
    // const { interiordesign } = useParams();
    const [mappedData, setMappedData] = useState(null);

    useEffect(() => {
        if (interiordesign) {
            const filteredData = interiorProjects.find((val) => val.titleUrl === interiordesign);
            setMappedData(filteredData);
        }
    }, [interiordesign]);

    if (!mappedData) {
        return <div><PreLoader/></div>; // or any loading indicator
    }

    return (
        <div>
            <section>
                <Container fluid className="head-inter align-content-center">
                    <Row>
                        <Col className="text-center p-0 m-0">
                            <h1 className="p-0 m-0">{mappedData.headingTitel}</h1>
                            <p className="p-0 m-0">
                                <Link href="/">HOME</Link> / <Link href="../interior-design-projects">INTERIOR DESIGN PROJECTS</Link> / {mappedData.headingTitel.toUpperCase()}
                            </p>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row className="Raja-text">
                        <Col>
                            <h2>{mappedData.headingTitel}</h2>
                            <h3>“Client Testimonials”</h3>
                            {mappedData.sections.map((Testimonialscontent, index) => (
                                <p key={index}>{Testimonialscontent}</p>
                            ))}
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col>
                            <AutoSlider sliderImages={mappedData.sliderImages} />
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row className="card-Projects">
                        <Col sm="12 text-center">
                            <h4>Our Other Projects</h4>
                        </Col>
                        <Col sm="12" md={4} className="image-container mb-3">
                            <div className='image-container-div'>
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735216439/arcmen/Gallery/interior-design-projects/arun-Highlights.jpg" alt="Mr Arun & Family" className="img-fluid w-100" loading="lazy" />
                                <div className="centered">
                                    <Link href="mr-arun-family/">Mr Arun & Family</Link>
                                </div>
                            </div>
                        </Col>
                        <Col sm="12" md={4} className="image-container mb-3">
                            <div className='image-container-div'>
                                <img
                                    src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735205477/arcmen/Architectural/muralidharan.jpg"
                                    alt="narayana-rao-individual-house interior designing company"
                                    className="img-fluid w-100"
                                    loading="lazy"
                                />
                                <div className="centered">
                                    <Link href="living-room-double-height-interior-design-architectural/">Mr.Muralidharan</Link>
                                    <p>Mayiladuthurai</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm="12" md={4} className="image-container mb-3">
                            <div className='image-container-div'>
                                <img
                                    src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735216896/arcmen/Gallery/interior-design-projects/mukulrai-induvidul-house.jpg"
                                    alt="narayana-rao-individual-house interior designing company"
                                    className="img-fluid w-100"
                                    loading="lazy"
                                />
                                <div className="centered">
                                    <Link href="individual-house-parrys-interior/">Mr.Mukulrai Induvidul House</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="Build-page">
                    <Container>
                        <Row className="align-items-center">
                            <Col sm="12" md="6" className="align-self-center build-header">
                                <h5>Design & Decor Your Home Interior Easy With Us</h5>
                                <p>Call Today for a Free Estimate !</p>
                            </Col>
                            <Col sm="12" md="6" className="align-self-center text-center text-lg-end">
                                    <Link href="/contact-us">
                                <button className="InteriorPage-button">
                                    <span className="btn-button"></span>
                                    GET A FREE QUOTES
                                </button>
                                    </Link>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </section>
        </div>
    );
};

export default InteriorPage;
