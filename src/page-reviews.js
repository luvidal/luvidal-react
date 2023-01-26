import { RevHeader, Body, GoTo } from './_common'

const Page = () =>
<div>
{  shuffle(reviews).map((item, i) => Review(item, i)) }
</div>

export default Page;

const Review = (item, i) =>
{
    let client = clients.find(x => x.client === item.client)

    return (
        <div key={ i }>
            <RevHeader title={ client.name } subtitle={ client.city } flag={ client.country } onedate={ item.date }/>
            <Body>
                <div style={{ fontStyle:'italic', fontSize:'120%', marginBottom:'4%' }}>"{ item.text }"</div>
            </Body>
        </div>)
}

const clients = 
[
    { client:'adam',   name:'Adam M. Levy',       city:'Austin, TX',      country:'us', email:'adam@lotops.com' },
    { client:'barry',  name:'Barry Krush',        city:'Asheville, NC',   country:'us', email:'bkrusch@yahoo.com' },
    { client:'russ',   name:'Russ Dickerson',     city:'Spartanburg, SC', country:'us', email:'' },
    { client:'mili',   name:'Mili Ombasic',       city:'Ottawa',          country:'ca', email:'' },
    { client:'jerome', name:'Jerome Bourguignon', city:'Paris',           country:'fr', email:'' },
]

const reviews =
[
    { date:'Jan 17, 2018', client:'adam',   text:'Luis does a great job identifying and overcoming technical hurdles. Highly recommended.' },
    { date:'Dec 26, 2017', client:'adam',   text:'Luis does smart, creative and valuable work. I look forward to continuing to collaborate with him.' },
    { date:'Oct 17, 2017', client:'adam',   text:'Luis is smart and creative and pays attention to details. Highly recommended as a developer.' },
    { date:'Oct 12, 2017', client:'adam',   text:'Luis always does diligent, smart work. Very pleased.' },
    { date:'Aug 29, 2017', client:'adam',   text:'Luis is skilled, professional and communicative. A very positive experience on all projects.' },
    { date:'Jun 15, 2017', client:'adam',   text:'Luis is smart, highly skilled, communicative and professional.' },
    { date:'Jun 15, 2017', client:'adam',   text:'We look forward to continuing to work with Luis and would highly recommend him to anybody looking for a developer.' },
    { date:'Oct 30, 2016', client:'barry',  text:'Luis is a software engineer of extraordinary talents.' },
    { date:'Oct 30, 2016', client:'barry',  text:'Luis has worked with us on more than one occasion, and has always come through with some very keen observations.' },
    { date:'Oct 30, 2016', client:'barry',  text:'Luis delivers code that is very well written, has great data integrity, and is lightning fast.' },
    { date:'Oct 30, 2016', client:'barry',  text:'We have worked with approximately 30 software developers over the course of the last 10 years, and Luis is clearly at the very top of the heap.' },
    { date:'Oct 30, 2016', client:'barry',  text:'We give him our highest recommendation!.' },
    { date:'Oct 05, 2016', client:'russ',   text:'Luis is doing a great job with this application. He has taken my jumbled excel spreadsheet turning it into an online hosted application.' },
    { date:'Oct 05, 2016', client:'russ',   text:'I am excited to work with him on the next phase.' },
    { date:'Oct 26, 2016', client:'barry',  text:'Wow, were we lucky to find Luis!' },
    { date:'Oct 26, 2016', client:'barry',  text:'We had a pretty complicated module to develop, and we came up with a set of specifications that we thought were pretty good, but they were not as good as they could be, and that´s where Luis stepped in.' },
    { date:'Oct 26, 2016', client:'barry',  text:'Luis not only did a superb job encoding the application, but more importantly, he made improvements to the design that radically sped it up and made it much more user-friendly.' },
    { date:'Oct 26, 2016', client:'barry',  text:'Someone like Luis is absolutely invaluable to a project.' }, 
    { date:'Oct 26, 2016', client:'barry',  text:'There are programmers that can competently execute a task, and give you exactly what you are looking for, but how many can step in and improve your application and make it run twice as fast and be twice as user-friendly?' },
    { date:'Oct 26, 2016', client:'barry',  text:'We highly recommend Luis, who is not only a superb developer, but an absolute joy to work with. We are going to be working with him again on several other modules.' },
    { date:'Sep 02, 2016', client:'mili',   text:'Luis has been tremendous for our project.' },
    { date:'Sep 02, 2016', client:'mili',   text:'After trying two different JS developers we came to Luis desperate for a solution. And he provided in a very timely manner, with excellent professionalism and he also did bonus work for us which we didn´t even ask for.' },
    { date:'Sep 02, 2016', client:'mili',   text:'Luis is definitely a developer I would recommend to anyone. You can trust this guy.' },
    { date:'Apr 02, 2018', client:'jerome', text:'I was thrilled that Luis could help me with my DHTMLX responsive application, and he did an outstanding job.' },
]

function shuffle(array) 
{
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) // while there ia an element to shuffle.
    {
        randomIndex = Math.floor(Math.random() * currentIndex); // pick a remaining element.
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]; // And swap it with the current element.
    }
  
    return array;
}
