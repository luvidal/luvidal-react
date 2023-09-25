import { Header, Body, GoTo, Skill, portrait } from './_common'

const Page = () =>

<div>
    <Header title='Asistido' subtitle={ portrait('Product Manager', 'Lead Developer / Product Manager') } favicon='asistido.png' start='2020' end='2023'/>
    <Body>
        Using the GPS on your mobile device, <GoTo text='Asistido' url='https://asisti.do'/> optimizes your route/agenda. I created the entire <GoTo text='MVC' url={ url.apple }/> for the Web, <GoTo text='iPhone' url={ url.apple }/>, and <GoTo text='Android' url={ url.google }/> from the ground up. I also became the product manager as I oversaw its deployment in mobile stores.<br/>
        <ul>
            <li>Sensitive Information: The user’s position, the contacts, and the calendar are sensitive information on Google and Apple platforms. I showed them that user information was kept, sent, and handled safely by using best practices, secure protocols, and hack-proof servers.</li>
            <li>Optimized Communications: I came up with a server algorithm in which the mobile location was only requested when the distance and/or speed demanded it. This cut traffic communications by 87.21%.</li>
            <li>Battery Optimization: I devised another algorithm for the mobile in which the GPS remained dormant until it detects significant distance or speed (through the Haversine Formula). It's difficult to say with certainty, but the battery life nearly doubled after this improvement.</li>
            <li>Secure Communications: To ensure secure communication with the server, I signed the JWT keys with the HS256 algorithm and gave them extremely short lifespans to ensure frequent renewal.</li>
        </ul>
        <br/>
        <br/>
        <Skill txt='React-Native'/><Skill txt='TypeScript'/><Skill txt='React'/><Skill txt='Laravel'/><Skill txt='Maps API'/>
    </Body>

    <Header title='LoTops CRM' subtitle='Lead Developer' favicon='lotops.png' start='2017' end='2020'/>
    <Body>
        This is a <GoTo text='SPA' url={ url.spa } /> with lots of features designed to give the end user a swift and pleasant experience, and it was a significant boost to my developer's skills.<br/>
        <ul>
            <li>Server Security: Our integrations with Microsoft raised some concerns about how we handled that sensitive information security. So we hired <GoTo text='Ethical Hackers' url={ url.ceh }/> to test the security of all our infrastructure. Although some suggestions were made, we were to demonstrate the robustness of our architecture.</li>
            <li>Gmail API Tokens: When a user gives you access to his or her Gmail, you need to store a token on your servers and Google makes sure that you keep them safe. So I used <GoTo text='AWS KMS' url={ url.kms }/> to encrypt them. So they finally gave their approval.</li>
            <li>Mobile Wrapper: I didn't know how to develop for mobile platforms at the time, so after some thought and research, I came up with a simple and quick solution, wrapped it in a <GoTo text='Cordova' url='https://cordova.apache.org/'/> (aka Phonegap) app, and successfully deployed it in the mobile stores.</li>
        </ul>
        <br/>
        <br/>
        <Skill txt='Stripe API'/><Skill txt='Gmail API'/><Skill txt='MS Graph API'/><Skill txt='Mailchimp API'/><Skill txt='AWS'/><Skill txt='LAMP'/>
    </Body>

    <Header title='Legislative Agenda' subtitle='Lead Developer' favicon='legislative.png' start='2016' end='2017'/>
    <Body>
        This is a CMS for the United States Congress that assists citizens in prioritizing laws and candidates in their districts. I was initially assigned to the Front-End, but immediately realized that the original Back-End design might be improved. I successfully optimized the Candidate Module and then assisted other teams in doing the same.<br/>
        A working demo is still available <GoTo text='here' url={ url.distnom } />.
        <ul>
            <li>I was able to cut <GoTo text='LOC' url={ url.loc } /> by up to 64% using modularization.</li>
            <li>As the code became considerably lighter, we were able to fulfill deadlines with ease.</li>
        </ul>
        <br/>
        <br/>
        <Skill txt='JQuery'/><Skill txt='GitHub'/><Skill txt='JSON'/><Skill txt='Software Architecture'/>
    </Body>

    <Header title='Fintechs Period' subtitle='Chief Technology Officer' favicon='fintech.png' start='2000' end='2015'/>
    <Body>
        In my early career, I worked as a CTO on very similar fintech startups. I used to manage small teams of three to ten engineers, mathematicians, and developers. Nowadays, those projects are all leading companies in Latin America, and I am extremely proud to have played a role in their formation.<br/>
        <br/>
        Some of these startups include <GoTo text='Dow Jones LATixx' url={ url.latixx }/> (5 yrs), <GoTo text='LVAindices' url={ url.lva }/> (5 yrs), and <GoTo text='RiskAmerica' url={ url.ra }/> (2 yrs).<br/>
        <ul>
            <li>Leadership: On a daily basis, I lead my team members in a high-stress environment to develop new products for a demanding market such as the financial sector. But I managed to always meet the deadlines while keeping their spirits up.</li>
            <li>CPU Optimization: Bond Prices are computed using Kalman Filtering LQE, which consumes significant CPU resources, so in order to calculate them in real-time applications, I was able to encapsulate a highly fast but low-level algorithm in a DLL package.</li>
            <li>Interactive UI: Traders are accustomed to the Bloomberg platform's desktop application. Consequently, to advertise our web solution, I simulated this interface on a web-based platform with a high-end UI and charts created with <GoTo text='FusionCharts' url='https://fusioncharts.com/'/>.</li>
            <li>DB Tuning: Calculating indices for mortgage bonds is really hard, because they are all unique data structures that follow no set rules. This operation used to take 2.5 hours each day, but after optimizing and tuning the database, I was able to cut that time down to only 22 minutes! (6-7 times faster).</li>
            <li>Lean bandwidth: The enormous volumes of data involved in a financial index posed a problem for the bandwidths required by our applications. Traders require extremely precise real-time numbers, which I was able to reduce and give using lossless compression.</li>
        </ul>
        <br/>
        <br/>
        <Skill txt='MS-SQL'/><Skill txt='DB Tuning'/><Skill txt='jQuery'/><Skill txt='HTML5'/><Skill txt='CSS3'/><Skill txt='XML'/><Skill txt='Jira'/>
    </Body>

    <Header title='PortalInmobiliario' subtitle='Lead Developer' favicon='portalinmobiliario.png' start='2000' end='2002'/>
    <Body>
        This was my first job, developing and enhancing the most significant portal for the purchase and rental of real estate in Chile.
        <ul>
            <li>I was able to reduce up to 70% load time reduction through Front-End code optimization.</li>
            <li>SQL Server database tuning.</li>
            <li>Code injection prevention.</li>
            <li>Maintenance and monitoring of firewalls.</li>
        </ul>
        <br/>
        <br/>
        <Skill txt='MS-SQL'/><Skill txt='ASP'/><Skill txt='IIS'/><Skill txt='HTML'/><Skill txt='CSS'/><Skill txt='Javascript'/><Skill txt='Firewalls'/>
    </Body>

</div>

export default Page;

const url =
{
    apple    : 'https://apps.apple.com/us/app/asistido/id1569243870',
    google   : 'https://play.google.com/store/apps/details?id=com.edictus.asistido&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
    spa      : 'https://en.wikipedia.org/wiki/Single-page_application',
    ceh      : 'https://en.wikipedia.org/wiki/Certified_Ethical_Hacker',
    mvc      : 'https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller',
    lva      : 'https://lvaindices.com',
    ra       : 'https://riskamerica.com',
    portal   : 'https://portalinmobiliario.com',
    scandal  : 'https://www.nytimes.com/2018/04/04/us/politics/cambridge-analytica-scandal-fallout.html',
    kms      : 'https://aws.amazon.com/kms/',
    loc      : 'https://en.wikipedia.org/wiki/Source_lines_of_code',
    distnom  : 'http://www.districtnomination.org',
    latixx   : 'https://finance.yahoo.com/quote/%5EDJLSBUD',
}