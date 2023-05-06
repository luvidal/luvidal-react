import { Header, Body, Skill } from './_common'

const Portfolio = () =>
<div>
    <Header title='InfoIndex - Trading' subtitle='Indices Trading Information Tool' favicon='infoindex.png' checkout='https://infoindex.edictus.com'/> 
    <Body>
        This is a demo of a tool that uses realtime information to update an interface that provides indices information to traders. Some of the features included are:<br/>
        <br/>
        <ul>
            <li>Doughnut, Line and Bar Charts.</li>
            <li>Interactive Maps.</li>
        </ul>
        <br/>
        <br/>
        <Skill txt='Laravel'/><Skill txt='Blade'/><Skill txt='Tailwind CSS'/><Skill txt='Chart.js'/><Skill txt='JSVectorMap'/>
    </Body>

    <Header title='IBD - Health' subtitle='Intestinal Bowel Disease' favicon='eii.png' checkout='https://eii.edictus.com'/> 
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


</div>

export default Portfolio;
