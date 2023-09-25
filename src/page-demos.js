import { Header, Body, Skill } from './_common'

const Demos = () =>
<div>
    <Header title='InfoIndex - Trading' subtitle='Indices Trading Information Tool' favicon='infoindex.png' visit='https://infoindex.edictus.com'/> 
    <Body>
        This demonstration uses realtime information to update an interface that provides indices information to traders. Some of the features included are:<br/>
        <br/>
        <ul>
            <li>Doughnut, Line and Bar Charts.</li>
            <li>Interactive Maps.</li>
        </ul>
        <br/>
        <br/>
        <Skill txt='Laravel'/><Skill txt='Blade'/><Skill txt='Tailwind CSS'/><Skill txt='Chart.js'/><Skill txt='JSVectorMap'/>
    </Body>

    <Header title='IBD - Health' subtitle='Intestinal Bowel Disease' favicon='eii.png' visit='https://eii.edictus.com'/> 
    <Body>
        This is a replica that recreates the forms used for research in IBDs (Intestinal Bowel Desease). Some of the features include:<br/>
        <br/>
        <ul>
            <li>Retractile menu.</li>
            <li>Light / Dark mode.</li>
        </ul>
        <br/>
        <br/>
        <Skill txt='PHP'/><Skill txt='JQuery'/><Skill txt='Bootstrap'/>
    </Body>

    <Header title='CMS - Legislative Agenda' subtitle='District Nomination' favicon='legislative.png' visit='http://www.districtnomination.org'/> 
    <Body>
        This was the mock-up created by our team to demonstrate the features of this CMS (Content Management System) intended for the US Congress:<br/>
        <br/>
        <ul>
            <li>Multimedia content.</li>
            <li>Drap & Drop.</li>
            <li>UX focused.</li>
        </ul>
        <br/>
        <br/>
        <Skill txt='JQuery'/><Skill txt='GitHub'/><Skill txt='JSON'/><Skill txt='Software Architecture'/>
    </Body>

</div>

export default Demos;