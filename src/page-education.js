import { Header, Body, GoTo, Separator } from './_common'

const Page = () =>
<div>
    <Header title='Master in Computer Science' subtitle='Pontificia Universidad Católica' favicon='puc.png' start='2000' end='2003' certificate='master.jpeg'/> 
    <Body>
        Under the guidance of <GoTo text='Prof. Nussbaum' url={ url.miguel }/>, my thesis focused on educational collaborative software. It was a multidisciplinary effort involving groups of psychologists, educators, and engineers.<br/>
        <br/>
        Using mobile devices such as <GoTo text='Pocket PCs' url={ url.pocket }/>, I was instructed to develop a math-learning game for children. We intended to use Bluetooth for their communications, but it was unreliable at the time, so Wi-Fi was used instead.<br/>
    </Body>

    <Header title='Computer Science Minor' subtitle='Pontificia Universidad Católica' favicon='puc.png' start='1994' end='2000' certificate='minorcomputersc.jpeg'/> 
    <Body>
        Technology have significantly piqued my interest since I was a little child, thus I minored in computer science. As a result of my academic excellence there, I was granted the honor and the privilege of serving as Head Assistant to eminent computer scientists like <GoTo text='Prof. Piquer' url={ url.piquer }/> and <GoTo text='Prof. Eterovic' url={ url.yadran }/>.<br/>
        <br/>
        Some of the most significant courses I tought as an Instructor include&nbsp;
        <GoTo text='Introduction to Computer Applications' url={ url.IIC1062 }/>,&nbsp;
        <GoTo text='Advanced Computer Programming' url={ url.IIC2233 }/>,&nbsp;
        <GoTo text='Operating Systems and Networks' url={ url.IIC2333 }/>, and&nbsp; 
        <GoTo text='Data Structures and Algorithms' url={ url.IIC2133 }/> among others.<br/>
        <br/>
        A couple of years later, after completing my Master's degree, I dictated <GoTo text='Data Structures and Algorithms' url={ url.IIC2133 }/> and <GoTo text='Software Development' url={ url.IIC3143 }/> <Sup>[*]</Sup>, as an Associate Professor.<br/>
        <br/>
        <br/>
        <div style={{ opacity:0.5 }}><Sup>[*]</Sup> <span style={{ fontSize:'80%' }}>Unfortunately, due to the pandemic, this course was canceled halfway through.</span></div>
    </Body>

    <Header title='Industrial Engineer' subtitle='Pontificia Universidad Católica' favicon='puc.png' start='1994' end='2000' certificate='engineer.jpeg'/> 
    <Body>
        As an Industrial Engineer, I have also studied Logistics, Marketing, and Economics at Pontificia Universidad Católica. This university <GoTo text='is ranked first' url={ url.topone }/> in Latin America as of 2022. Furthermore, six years of study were required for becoming an engineer at the time when I went there.
    </Body>

    <Header title='Bachelor in Science' subtitle='Pontificia Universidad Católica' favicon='puc.png' start='1994' end='1997' certificate=''/> 
    <Body>
        This bachelor's degree is part of my university's engineering program. It covers topics such as physics, chemistry, and advanced mathematics.
    </Body>

    <Separator/>

    <Header title='Database Administrator' subtitle='Sybase Corporation' favicon='sybase.png' start='2002' end='2002' certificate='sybadmin.jpeg'/>
    <Body>
        Sybase is MS-SQL Server's counterpart in Unix and has been a part of its core engine since its <GoTo text='initial release' url={ url.sybase }/> in 1989. Therefore, I studied and became certified to be an administrator DBMS in order to master MS-SQL Server.
    </Body>
    <Header title='Database Tuning' subtitle='Sybase Corporation' favicon='sybase.png' start='2002' end='2002' certificate='sybtuning.jpeg'/>
    <Body>
        After becoming a Sybase Administrator, the opportunity to learn to tune databases arose, so I continued to assist in these courses and completed my training in database administration.
    </Body>

    <Separator/>
    
    <Header title='Map-Process Seminar' subtitle='PhD Victor Silva Ballerini' favicon='process.jpg' start='2013' end='2013' certificate='processes.jpeg'/>
    <Body>
        Every business process is important, and an organization can only realize its full potential if every process is as efficient and effective as possible. That is why I attended this process improvement seminar.
    </Body>
    <Header title='Risk Management Seminar' subtitle='PhD Gonzalo Cortazar S.' favicon='dictuc.jpg' start='2003' end='2003' certificate='riskmanagement.jpeg'/>
    <Body>
        I have some experience working on fintechs, and I decided to attend this conference in order to better understand risk in the financial industry.
        In finance, "risk" refers to the degree of uncertainty and/or potential financial loss inherent in an investment decision. In general, as investment risks rise, investors seek higher returns to compensate themselves for taking such risks.<br/>
    </Body>
</div>

export default Page;

const url =
{
    miguel : 'https://www.ing.uc.cl/en/academicos-e-investigadores/miguel-nussbaum-voehl/',
    yadran : 'https://www.ing.uc.cl/en/academicos-e-investigadores/yadran-francisco-eterovic-solano/',
    piquer : 'https://www.uchile.cl/presentacion/senado-universitario/integrantes/periodo-2006-2010/prof-jose-miguel-piquer-gardner',

    sybase : 'https://en.wikipedia.org/wiki/Adaptive_Server_Enterprise',
    pocket : 'https://news.microsoft.com/2000/04/19/microsoft-releases-next-generation-pda-the-pocket-pc/',
    topone : 'https://www.topuniversities.com/university-rankings/latin-american-university-rankings/2022',

    IIC1062 : 'https://catalogo.uc.cl/index.php?tmpl=component&option=com_catalogo&view=programa&sigla=IIC1062', // introducción
    IIC2233 : 'https://catalogo.uc.cl/index.php?tmpl=component&option=com_catalogo&view=programa&sigla=IIC2233', // progrmación avanzada
    IIC2333 : 'https://catalogo.uc.cl/index.php?tmpl=component&option=com_catalogo&view=programa&sigla=IIC2333', // sistemas operativos
    IIC2133 : 'https://catalogo.uc.cl/index.php?tmpl=component&option=com_catalogo&view=programa&sigla=IIC2133', // estructuras de datos
    IIC3143 : 'https://catalogo.uc.cl/index.php?tmpl=component&option=com_catalogo&view=programa&sigla=IIC3143', // desarrollo de software
}

const Sup = ({ children }) =>
    <span style={{ fontSize:'90%' }}>{ children }</span>