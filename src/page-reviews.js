import { GoTo, threedee, color, portrait } from './_common'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const clients = 
[
    { client:'adam',   name:'Adam M. Levy',       city:'Austin, TX',      country:'us' },
    { client:'barry',  name:'Barry Krush',        city:'Asheville',       country:'us' },
    { client:'russ',   name:'Russ Dickerson',     city:'Spartanburg',     country:'us' },
    { client:'mili',   name:'Mili Ombasic',       city:'Vancouver',       country:'ca' },
    { client:'jerome', name:'Jerome Bourguignon', city:'Saint-Nazaire',   country:'fr' },
    { client:'cyt',    name:'C&T Associates',     city:'Los Angeles',     country:'us' },
    { client:'ibd',    name:'IBD Research',       city:'New Jersey',      country:'us' },
]

const shortrevs = shuffle(
[
    { date:'Oct 02, 2017', client:'adam',   job:'LoTops CRM, Post 2A', text:'Luis always does diligent, smart work. Very pleased.' },
    { date:'Jun 15, 2017', client:'adam',   job:'LoTops CRM', text:'Luis is smart, highly skilled, communicative and professional.' },
    { date:'Mar 10, 2018', client:'adam',   job:'LoTops CRM, Remaining Items 1', text:'Luis has done very high-quality work as usual.' },
    { date:'Jul 03, 2017', client:'adam',   job:'LoTops CRM, API integration', text:'Luis is knowledgeable, capable and professional. highly recommended.' },
    { date:'Jan 16, 2018', client:'adam',   job:'LoTops CRM, Email 2', text:'Luis does a great job identifying and overcoming technical hurdles. Highly recommended.' },
    { date:'Oct 16, 2017', client:'adam',   job:'LoTops CRM, Post 2B', text:'Luis is smart and creative and pays attention to details. Highly recommended as a developer.' },
    { date:'Apr 02, 2018', client:'jerome', job:'Work order Management Application', text:'I was thrilled that Luis could help me with my DHTMLX responsive application, and he did an outstanding job.' },
    { date:'Dec 05, 2017', client:'adam',   job:'LoTops CRM, Email', text:'Luis does smart, creative and valuable work. I look forward to continuing to collaborate with him.' },
    { date:'Jun 15, 2017', client:'adam',   job:'LoTops CRM', text:'We look forward to continuing to work with Luis and would highly recommend him to anybody looking for a developer.' },
])

const longrevs = shuffle(
[
    { date:'Aug 19, 2017', client:'adam',   job:'LoTops CRM, 8-16-17 A', text:'Luis is skilled, professional and communicative. A very positive experience on all projects. I highly recommend him.' },
    { date:'Mar 27, 2023', client:'ibd',    job:'Full Stack developer/engineer', text:'Luis is an expert who you can count on. He pays attention to both the big picture and the details. I have full faith in him.' },
    { date:'Oct 26, 2016', client:'barry',  job:'Legislative Agenda', text:'Luis not only did a superb job encoding the application, but more importantly, he made improvements to the design that radically sped it up and made it much more user-friendly.' },
    { date:'Apr 25, 2023', client:'cyt',    job:'Visual map for index', text:'I\'d previously worked with several developers, and when we came to Luis, we were desperate for a solution. He completed the project on schedule and even fixed several details that we were unaware of. We will surely seek his assistance in the future.' },
    { date:'Sep 02, 2016', client:'mili',   job:'Ovoli', text:'Luis has been tremendous for our project. After trying two different JS developers we came to Luis desperate for a solution. And he provided in a very timely manner, with excellent professionalism and he also did bonus work for us which we didn\'t even ask for. Luis is definitely a developer I would recommend to anyone. You can trust this guy.' },
    { date:'Nov 15, 2016', client:'barry',  job:'Legislative Agenda', text:'I rehired Luis because of the great work he did for me on another difficult task, and I might say this time he transcend himself. You can really trust this guy, he is a very honest developer, and he would make recommendations and give you assistance in every step of the project. He has also helped me giving support for a previous job I gave him, and he didn\'t even charge!' },
    { date:'Aug 22, 2016', client:'cyt',    job:'CRC32 C function to VBScript', text:'Awesome developer! I hired Luis to implement a small, but complex function to correct satellite positioning strings. He quickly caught the idea and delivered an elegant, simple and efficient. The communication was very easy, every time I sent him a message he would respond almost instantly. He\'s a real professional, he truly meets deadlines and I\'d definitely hire him again.' },
    { date:'Nov 06, 2016', client:'barry',  job:'Legislative Agenda', text:'Luis is a software engineer of extraordinary talents. He has worked with us on more than one occasion, and has always come through with some very keen observations, as well as code that is very well written, has great data integrity, and is lightning fast. We have worked with approximately 30 software developers over the course of the last 10 years, and Luis is clearly at the very top of the heap. We give him our highest recommendation!' }, 
    { date:'Sep 11, 2016', client:'barry',  job:'Legislative Agenda', text:'Wow, were we lucky to find Luis! We had a pretty complicated module to develop, and we came up with a set of specifications that we thought were pretty good. And they were pretty good. But they were not as good as they could be, and that\'s where Luis stepped in. He not only did a superb job encoding the application, but more importantly, he made improvements to the design that radically sped it up and made it much more user-friendly. In this respect, someone like Luis is absolutely invaluable to a project. Sure, there are programmers that can competently execute a task, and give you exactly what you are looking for, but how many can step in and improve your application and make it run twice as fast and be twice as user-friendly? And the answer there is, very very few. So, in short, we highly recommend Luis, who is not only a superb programmer, but an absolute joy to work with. We are going to be working with him again on several other modules. If you want more details, you can contact me at bkrusch@yahoo.com.' },
])

let leftrevs = [], rightrevs = [];
while (shortrevs.length || longrevs.length)
{
    if (longrevs.length)  leftrevs.push(longrevs.pop())
    if (longrevs.length)  rightrevs.push(longrevs.pop())
    if (shortrevs.length) rightrevs.push(shortrevs.pop())
    if (shortrevs.length) leftrevs.push(shortrevs.pop())
}

const PagePortrait = () =>
<>
    <div style={{ marginTop:'8%', marginBottom:'6%', }}>
        All of the following statements are supported in Upwork.com, please feel free to check them <GoTo text='here' url='https://www.upwork.com/freelancers/luvidal?viewMode=1'/>.
    </div>
    <div>
        { leftrevs.map((item, i)  => Review(item, i)) }
        { rightrevs.map((item, i) => Review(item, i)) }
    </div>
</>

const PageLandscape = () =>
<>
    <p>All of the following statements are supported in Upwork.com, please feel free to check them <GoTo text='here' url='https://www.upwork.com/freelancers/luvidal?viewMode=1'/>.</p>
    <br/>
    <div style={{ display:'flex', flexdirection:'row' }}>
        <div style={{ width:'46%', marginRight:'8%' }}>
            { leftrevs.map((item, i) => Review(item, i)) }
        </div>
        <div style={{ width:'46%' }}>
            { rightrevs.map((item, i) => Review(item, i)) }
        </div>
    </div>
</>

const Page = () => portrait(<PagePortrait/>, <PageLandscape/>)

export default Page;

const Review = (item, i) =>
{
    let client = clients.find(x => x.client === item.client)
    const hdraux = { display:'flex', justifyContent:'space-between', backgroundColor:color.A, padding:'2.5%' }

    return (
        <div key={ i } style={{ marginBottom:'10%' }}>
            <div style={{ ...threedee(), ...hdraux }}>
                <span style={{ fontSize:'88%' }}><FontAwesomeIcon icon={ solid('message') } style={{ marginRight:8, fontSize:'80%', color:'grey' }} />{ item.job }</span>
                <span style={{ fontSize:'58%', marginTop:-5, color:'lightgrey' }}>{ item.date }</span>
            </div>
            <div style={{ fontStyle:'italic', fontSize:'86%', margin:20 }}>
                "{ item.text }"
            </div>
            <div style={{ display:'flex', justifyContent:'flex-end', marginRight:20 }}>
                <Author name={ client.name } city={ client.city } country={ client.country } />
            </div>
        </div>)
}

const Author = ({ name, city, country }) =>
<div style={{ display:'flex' }}>
    <FontAwesomeIcon icon={ solid('circle-user') } style={{ marginRight:10, marginTop:3, fontSize:'130%', color:'grey' }} />
    <div style={{ fontSize:'74%' }}>
        { name }
        <div style={{ display:'flex', color:'lightgrey', fontSize:'100%' }}>
            { city }<img  alt={ city } src={ require('./assets/flags/' + country + '.svg') } style={{ width:15, height:15, marginLeft:6 }} />
        </div>
    </div>
</div>

function shuffle(array) 
{
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) // while there ia an element to shuffle.
    {
        randomIndex = Math.floor(Math.random() * currentIndex); // pick a remaining element.
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]; // And swap it with the current element.
    }
  
    return array;
}
