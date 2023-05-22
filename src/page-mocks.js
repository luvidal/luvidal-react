import { Header, Body, Skill } from './_common'

const Mocks = () =>
<div>
    <Header title='InfoIndex - Trading' subtitle='Indices Trading Information Tool' favicon='infoindex.png' visit='https://infoindex.edictus.com'/> 
    <Body>
        This is a mock of a tool that uses realtime information to update an interface that provides indices information to traders. Some of the features included are:<br/>
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
        This is a demo that recreates the forms used for research in IBDs (Intestinal Bowel Desease). Some of the features include:<br/>
        <br/>
        <ul>
            <li>Retractile menu.</li>
            <li>Light / Dark mode.</li>
        </ul>
        <br/>
        <br/>
        <Skill txt='PHP'/><Skill txt='JQuery'/><Skill txt='Bootstrap'/>
    </Body>
    <Body>
        <br/>
        <br/>
        <div style={{ opacity:0.3 }}>... and many more coming soon.</div>
    </Body>

</div>

export default Mocks;
