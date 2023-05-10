import { Header, Body } from './_common'

const Page = () =>

<div>
    <Header title='Fullstack Engineer' subtitle='20+ yrs Leading Projects' favicon='wrench.jpg'/>
    <Body>
        <ul>
            <li>Fullstack Engineer with Client-Server Architecture expertise.</li>
			<li>Academic credentials as a Data Structures professor.</li>
			<li>Bilingual, English and Spanish.</li>
        </ul>
    </Body>
    <Header title='Backend' subtitle='Tuned, Swift, and Safe' favicon='cloud.png'/>
    <Body>
        <ul>
			<li>Object Oriented PHP, Laravel, Node.js, Next.js.</li>
			<li>Certified DB management and tuning: MS-SQL (T-SQL), MySQL, MariaDB.</li>
			<li>Infraestructure such as AWS, Google Cloud, Route 53, DigitalOcean, Azure.</li>
			<li>API Handling: Google Maps, Gmail, Stripe, Mailchimp, MS Graph.</li>
        </ul>
    </Body>
    <Header title='Frontend Web' subtitle='User Experience UX focused' favicon='frontend.png'/>
    <Body>
        <ul>
			<li>Single Page Application SPA paradigm.</li>
			<li>Mobile-First Responsive layouts with Flex.</li>
			<li>ECMAScript, TypeScript, JSX and React.</li>
			<li>HTML5, CSS3, jQuery and Bootstrap.</li>
        </ul>
    </Body>
    <Header title='Frontend Mobile' subtitle='User Experience UX focused' favicon='mobile.jpg'/>
    <Body>
        <ul>
			<li>React-Native (w/o Expo).</li>
			<li>iOS, Xcode, App Store / Android Studio, Google Play.</li>
			<li>In-App Purchases</li>
			<li>Sensitive Information: Location, Calendars, Contacts.</li>
			<li>Cordova a.k.a. PhoneGap.</li>
        </ul>
    </Body>
</div>

export default Page;