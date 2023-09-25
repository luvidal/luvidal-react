import { Header, Body, GoTo } from './_common'

const Page = () =>

<div>
    <Header title='GitHub' subtitle='Code Examples' favicon='github.png' visit='https://github.com/luvidal'/> 
    <Body>
        As a way of saying thanks for some of the assistance I've had from other developers, I've just started uploading my code to this open repository. You can <GoTo text='download' url='https://github.com/luvidal' /> some of my code examples to see how I organize it, add comments, and create scalable software by reusing functionality.<br />
        <br />
        <GoTo text='GitHub' url='https://en.wikipedia.org/wiki/GitHub' /> is commonly used to host open source software development projects. As of June 2022, GitHub reported having over 83 million developers and more than 200 million repositories, including at least 28 million public repositories. It is the largest source code host as of November 2021.<br />
    </Body>
    <Header title='Upwork' subtitle='Work Reviews' favicon='upwork.png' visit='https://www.upwork.com/freelancers/~01a7f98bc0f8942450'/> 
    <Body>
        I made the decision to enter the professional world of freelancing in 2016 and began coding on this platform. I feel really fortunate to have succeeded there, as Upwork has over twelve million registered freelancers and five million registered clients. You can check out some reviews of <GoTo text='my clients' url='https://www.upwork.com/freelancers/~01a7f98bc0f8942450' /> there.<br />
        <br />
        <GoTo text='Upwork' url='https://en.wikipedia.org/wiki/Upwork' /> is an American freelancing platform headquartered in California. It was named to TIME's List of the 100 Most Influential Companies of the Year 2022.<br />
    </Body>
    <Header title='LinkedIn' subtitle='Contact Network' favicon='linkedin.png' visit='https://www.linkedin.com/in/luvidaldb/'/> 
    <Body>
        My LinkedIn contacts include individuals with whom I have worked, studied or built real-world teams.<br/>
        <br />
        <GoTo text='LinkedIn' url='https://en.wikipedia.org/wiki/LinkedIn' /> is used for professional networking and career development, and allows job seekers to post their CVs and employers to post jobs. It is now a subsidiary of Microsoft, with 830+ million registered members from over 200 countries and territories.<br />
    </Body>
</div>

export default Page;