import React from "react";
import BlogItem from "./BlogItem";

const blogs = [
  {
    _id: "001",
    title: "Fault Tolerance for Humanity",
    text: "By decentralizing control over data and applications among a network of individual operators, ensures that no single point of failure can disrupt the functioning of the digital world. It is fortifying the foundations of the internet, making it more resilient to challenges and safeguarding the collective intelligence that fuels progress, delivering fault tolerance for humanity in the digital age.",
    url: "/",
    src: "img/preview/blog1.jpg",
    day: "01",
    month: "October",
    author: "Deep Thought 42",
    comments: "2",
  },
  {
    _id: "002",
    title: "Authentic Intelligence for Ai",
    text: "Imagine if your data, was stored in a super-secure digital fortress that only you control. With a decentralized cloud, it is possible, and it is like having your very own safe space on the internet. Now, think of the internet as a giant puzzle, where each piece is essential. In a decentralized cloud, instead of one big piece holding everything together, it is spread across many smaller pieces. This makes the internet much stronger and reliable, like a phone that never drops calls. But here is the best part – we call it Authentic Intelligence. It learns from your experiences, becoming like a personal tutor that knows everything about the world and your life, helping you make better decisions. It is not just AI; it is an Authentic version of you that truly understands and helps you in a smarter way.",
    url: "/",
    src: "img/preview/blog2.jpg",
    day: "02",
    month: "October",
    author: "Deep Thought 42",
    comments: "12",
  },
  {
    _id: "003",
    title: "Leap from Web 3 to Web 5.",
    text: "Leap from the sidelines of Web 3.0 to the forefront of a secure, rewarding Web 5.0 with NNN, where your stake in the infrastructure means monetizing every byte of your digital life. NNN transforms participation into profit, valuing your unique contributions in a decentralized data economy that rewards as much as it protects with cutting-edge cryptography. Be more than a cog in the machine; become a valued architect in a collective intelligence, backed by precious metals, where your data and insights fuel a fairer digital ecosystem. Own a piece of the future where the internet transcends being a mere platform to become a realm where every interaction is an investment, and every contribution enriches your digital legacy.",
    url: "/",
    src: "img/preview/blog3.jpg",
    day: "03",
    month: "October",
    author: "Deep Thought 42",
    comments: "15",
  },
  {
    _id: "004",
    title: "The Power of a global Coalition",
    text: "The Node Nexus Network (NNN) stands as a testament to the power of global unity in technology, where a coalition of Managed Service Providers (MSPs) across sixteen diverse regions orchestrate a symphony of secure data harmony. Within this network, a deterministic concurrent process is the maestro, guiding consensus groups to meticulously weave together JSON files, creating not just a decentralized data repository, but a veritable citadel of digital information. This globally-spanning endeavor is more than a series of data vaults; it is a lighthouse of trust in a sea of digital uncertainty, fortified by the unbreakable cryptographic armor of BLS 12-381. In this ecosystem, each MSP contributes to a larger vision, ensuring that the integrity of data is not just maintained but enshrined, offering a unique bulwark against the entropy of the digital world.",
    url: "/",
    src: "img/preview/blog3.jpg",
    day: "04",
    month: "October",
    author: "Deep Thought 42",
    comments: "33",
  },
  {
    _id: "005",
    title: "React Multipurpose One page template",
    text: "Lorem to error earum minima quidem adipisci. Ullam eius provident amet nulla quam dicta dolorum harum perspiciatis odio repudiandae fugit recusandae dolor, expedita voluptatibus in ab consequatur ratione facere porro",
    url: "/",
    src: "img/preview/blog5.jpg",
    day: "05",
    month: "October",
    author: "Deep Thought 42",
    comments: "22",
  },
  {
    _id: "006",
    title: "A Decentralized Cloud centralized around you.",
    text: " In the revolutionary landscape of the NNN Decentralized Cloud, the focus shifts from abstract digital entities to you, the net citizen, placing you at the epicenter of a groundbreaking digital evolution. This is a realm where your interactions, data, and contributions are not mere digital footprints but valuable assets, seamlessly integrated into a global network that prioritizes your security, autonomy, and potential for growth. Imagine a digital ecosystem where every keystroke and shared experience contributes to a collective intelligence that not only safeguards your data with ironclad cryptographic security but also rewards you for your unique input. Here, you are not just a user; you are a pivotal architect of a decentralized future, where the Cloud orbits around your needs and aspirations, turning participation into profit and data into dividends in an equitable digital economy designed around you.",
    url: "/",
    src: "img/preview/blog5.jpg",
    day: "04",
    month: "Mar",
    author: "Tom",
    comments: "7",
  },
];

function Blogs2() {
  return (
    <>
      <section id="blog" className="single-bg">
        <div className="section-block-title">
          <div className="bg-dark"></div>

          <div className="container">
            <div className="section-sub-title center">
              <article className="section-title-body white">
                <h1 className="head-title">
                  Last <span>News</span> from Anema
                </h1>
              </article>
            </div>
          </div>
          <div className="container">
            <div className="row">
              {blogs.map((blog) => (
                <div className="col-md-6 col-xl-4" key={blog._id}>
                  <BlogItem
                    title={blog.title}
                    text={blog.text}
                    url={blog.url}
                    src={blog.src}
                    day={blog.day}
                    month={blog.month}
                    author={blog.author}
                    comments={blog.comments}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="h50"></div>
        </div>
      </section>
    </>
  );
}

export default Blogs2;
