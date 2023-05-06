import { Header, Body, GoTo } from './_common'

const Page = () =>

<div>
    <Body>
        I included this section because, while work dictates what you must do, what you do in your spare time reveals more about who you really are. I consider myself fortunate to only require five hours of sleep per day, so, even when I'm swamped with work, I can find time to indulge in my hobbies and keep my mind sharp. It is a good practice to take a breath when you are overwhelmed and the tree is blocking your view of the forest.
    </Body>
    <Header title='Field 3D Archery' subtitle='Compound Bow' favicon='archery.jpg' start='2013' end='2018'/>
    <Body>
        3D archery consists of shooting at stationary foam targets set at varying distances, heights, and angles around a course. The course may be in a forest or on rough terrain. Each foam animal has scoring rings that denote different scores, and between one and three arrows may be shot at each target. Archery is unquestionably my favorite hobby because it combines many of my interests, including sports, handcrafting, tuning, and a variety of tools.<br />
        <br/>
        After hurting my left shoulder, I had to stop doing this beautiful sport, and I've never gone back to it since.<br/>
    </Body>
    <Header title='Karate-Do' subtitle='Okinawan Goju-Ryu' favicon='gojuryu.png' start='1990' end='2015'/>
    <Body>
        Let me begin by saying that I am not a fan of the sport of karate itself because it entails long tournaments, very technical sparring, and muscle elasticity, among other things. On the other hand, Karate-Do, which stands for "The Way of Karate," appeals to me because it is more than just cardio. It is more like a philosophy that entails repetition in order to achieve perfection. But, because perfection is a circle, when you think you're good, you realize the cycle has begun again... and again. The "Do" requires patience, determination, and endurance.<br/>
        <br/>
        Some workouts involve sparring drills, sweeps, or throwing a partner; thus, teamwork is crucial, and you must learn to rely on your partner.<br/>
    </Body>
    <Header title='Field Target' subtitle='Pre-Charged Pneumatic Air Rifle' favicon='fieldtarget.png' start='2018' end=''/>
    <Body>
        Field target is an outdoor airgun field shooting sport. Competitions are usually fired at self-indicating steel targets placed between 9 and 50 m (9.8 and 54.7 yd). I use a <GoTo text='Taipan Veteran' url='http://taipan-airguns.com/en/rifles/veteran-standard/' /> PCP rifle, which is a pretty powerful pre-charged pneumatic air gun. As previously stated, I enjoy aiming and shooting targets from a long distance because it requires forbearance and a lot of physics: measuring wind speed, measuring distance, and selecting the right tools are all necessary for success.
    </Body>
</div>

export default Page;