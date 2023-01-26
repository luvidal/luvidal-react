import { Header, Body, GoTo, Skill } from './_common'

const Page = () =>

<div>
    <Header title='Asistido' subtitle='Developer / Owner' favicon='asistido.png' start='2019' end=''/>
    <Body>
        <GoTo text='Asistido' url='https://asisti.do'/> is a React Native mobile app that optimizes your route to your next appointment based on your location. If you have an iPhone you can check Asistido in the <GoTo text='App Store' url={ url.apple }/>, or, if you have an Android device you can download it on <GoTo text='Google Play' url={ url.google }/>.<br/>
        <ul>
            <li>To ensure secure communication with the LAMP server, I signed the JWT keys with the HS256 algorithm and gave them extremely short lifespans to ensure frequent renewal.</li>
            <li>I created server and mobile algorithms to reduce battery consumption while using GPS. On the server side, I created a pull-request that only activates the mobile sensors when they are required. And, in the case of the device's position, the mobile only responds when there is something relevant to inform; this means that the mobile remains dormant until it detects significant movement (through the Haversine Formula).</li>
            <li>As users' privacy becomes more important, it gets harder to publish new apps in mobile stores. So, I need to figure out how to work with sensitive permissions on the Google and Apple platforms. To do this, I showed them that user information was kept, sent, and handled safely by using best practices, secure protocols, and hack-proof servers.</li>
        </ul>
        <br/>
        <Skill txt='React-Native'/><Skill txt='TypeScript'/><Skill txt='UI/UX Design'/>
    </Body>
    <Header title='LoTops CRM' subtitle='Lead Developer' favicon='lotops.png' start='2017' end='2019'/>
    <Body>
        LoTops is a CRM for the real estate industry. It has recently evolved into a Project Management Software<br/>
        <ul>
            <li>I was instructed to design the entire application, including the software architecture, the database structure and frontend user interface. At first, an MVP was needed, but the idea wasn't fully formed, so I helped the client design the interface with the help of mockups in Balsamiq.</li>
            <li>Many API integrations with Google and Microsoft, like Maps, Office, and Gmail, made them worried about security. I was able to put their minds at ease by hiring ethical hackers to prove that our infrastructure was safe.</li>
            <li>At the time, I didn't know how to develop for mobile platforms, so I had to think outside the box: After some research I was able wrap it in a Phonegap/Cordova app and successfully deploy the to the mobile stores.</li>
        </ul>
        <br/>
        <Skill txt='AWS'/><Skill txt='LAMP'/><Skill txt='Stripe'/><Skill txt='Maps API'/><Skill txt='Mailchimp API'/>
    </Body>
    <Header title='LVA Indices' subtitle='Lead Developer' favicon='lvaindices.png' start='2005' end='2015'/>
    <Body>
        LVA Indices is a fintech that summarizes large quantities of information as fixed income indexes. LVA is today a leading fintech company in Latin America, and it makes me extremely proud to have been a part of its founding. If you want to know more <GoTo text='follow this link' url='http://lvaindices.com'/>.
        <ul>
            <li>As some mortgage bonds are extremely complicated and do not adhere to a certain rule, storing and calculating them presents a formidable issue. I overcame this obstacle by rigorously optimizing its code and tuning the databases to maximize the performance of our servers.</li>
            <li>The enormous volumes of data involved in an index posed a problem for the bandwidths our applications required as well. Traders require extremely precise real-time numbers, which I was able to reduce and give using data lossless compression.</li>
        </ul>
        <br/>
        <Skill txt='MS-SQL'/><Skill txt='ASP'/><Skill txt='jQuery'/><Skill txt='HTML5'/><Skill txt='CSS3'/><Skill txt='Jira'/>
    </Body>
    <Header title='RiskAmerica' subtitle='Lead Developer' favicon='riskamerica.png' start='2003' end='2005'/>
    <Body>
        RiskAmerica is a financial technology company that calculates the pricing of fixed-income bonds in low-frequency transaction markets. It has been providing bond prices for the Chilean market daily for over two decades. For additional information, please visit <GoTo text='RiskAmerica' url='http://riskamerica.com'/>.
        <ul>
            <li>Bond Prices are computed using Kalman Filtering LQE, which consumes significant CPU resources, so in order to calculate them in real-time applications, I was able to encapsulate a highly fast but low-level algorithm in a DLL package.</li>
            <li>Traders are accustomed to the Bloomberg platform's desktop application. Consequently, to advertise our web solution, I simulated this interface on a web-based platform with a high-end UI and charts created with <GoTo text='FusionCharts' url='https://fusioncharts.com/'/>.</li>
        </ul>
    </Body>
    <Header title='Portalinmobiliario' subtitle='Lead Developer' favicon='portalinmobiliario.png' start='1999' end='2002'/>
    <Body>
        PortalInmobiliario is the premier real estate website for seeking a new home in Chile. In 2014, <GoTo text='MercadoLibre' url='http://mercadolibre.com' /> (a large Mexican corporation) acquired this website for $40 million. Visit <GoTo text='PortalInmobliario' url='http://portalinmobiliario.com'/> for more information.
        <ul>
            <li>The company initially contacted me because their security had been compromised. So, with the assistance of a coworker, an OpenBSD firewall and numerous other security measures were deployed.</li>
            <li>In the early 2000s, bandwidth was a significant concern for websites, thus they had to be lightweight. But the entire site was created with Microsoft FrontPage, and the pages generated by this application were extremely heavy, so I used my HTML and JS (CSS didn't exist) expertise to reduce their weight. Even now, when I need to send a lot of data over the network, I still use this knowledge and experience.</li>
        </ul>
    </Body>
</div>

export default Page;

const url =
{
    apple    : 'https://apps.apple.com/us/app/asistido/id1569243870',
    google   : 'https://play.google.com/store/apps/details?id=com.edictus.asistido&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
}