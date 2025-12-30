import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/responsive.scss';
import './globals.css';
import Script from 'next/script';

export const metadata = {
     metadataBase: new URL('https://www.arcmeninterior.com'),
    title: 'Best Interior designers & decorators in chennai | Arcmen',
    description: ['With 25 years of experience and 2000 + happy clients, Arcmen Interiors is one of the Top interior designers & decorators company in chennai. Lets build dreams'],
    keywords: [
        'Interior designer',
        'Best Interior Designers in Chennai',
        'No.1 Interior Designers in Chennai',
        'Interior Decorators in Chennai',
        'Interior Design Packages in Chennai',
        'Best Interior Designers in Chennai With Price',
        'List of Interior Designers in Chennai',
        'Home Interior Designers in Chennai',
        'Interior Designers in Chennai for Flats',
        'Interior Designers near me',
        'interior designers chennai',
        'best interior designers chennai',
        'interiors in chennai',
        'best interiors in chennai',
        'top interior designers in chennai',
        'best home interiors in chennai',
        'best home interior designers in chennai',
        'home interiors in chennai',
        'interior decorators in chennai ',
        'best home interior decorators in chennai'
    ]
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <Script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-KM4FGMCH'); `}</Script>

                <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16699501737"></Script>

                <Script id="google-analytics">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-16699501737');
                    `}
                </Script>

                <Script id="clarity-script" type="text/javascript">
                    {`
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "qmef31ybn0");
    `}
                </Script>
                <meta name="google-site-verification" content="ZD66ucWU0I3F252vjV3PMyMHn4gLa3PvTRMNXJyGdcI" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link rel="icon" href="https://res.cloudinary.com/dpflidsbg/image/upload/v1735293696/arcmen/fav-icon.jpg" type="image/x-icon" sizes="any" />
                {/* <!-- Meta Pixel Code --> */}

                <script
                    dangerouslySetInnerHTML={{
                        __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1002700818509764');
fbq('track', 'PageView');


`
                    }}
                />
                <noscript>
                    <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=1002700818509764&ev=PageView&noscript=1" />
                </noscript>
            </head>
            <body>
                <noscript>
                    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KM4FGMCH" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
                </noscript>

                {/* <Header /> */}
                <div>{children}</div>
                {/* <Footer /> */}
            </body>
        </html>
    );
}
