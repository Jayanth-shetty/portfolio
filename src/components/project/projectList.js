import Image from "next/image";
const projList = [
  {
    id: "p1",
    title: "TanStackEventify App",
    desc: "A modern Event Management Single Page Application (SPA) built with React, TanStack Query, and React Router. Eventify allows users to browse, create, edit, and manage events in real time with a smooth and responsive UI.",
    url: "https://github.com/Jayanth-shetty/TanStackEventifyApp",
    year: "2025",
    content: (
      <div>
        <Image
          src="/images/Eventify.png"
          alt="Tanstack app"
          height={500}
          width={500}
          loading="eager"
        />
      </div>
    ),
  },
  {
    id: "p2",
    title: "The Foodies App",
    desc: "full-stack web application built with Next.js and SQLite3, designed to simplify recipe sharing and food exploration.It offers users a smooth experience to browse, add, edit, and manage recipes while demonstrating modern full-stack concepts like routing, API integration, server actions, image storage, and dynamic metadata management.",
    url: "https://the-foodies-app-fuo4.vercel.app/",
    year: "2025",
    content: (
      <div>
        <Image
          src="/images/foodiesappi.png"
          alt="foodies app"
          height={500}
          width={500}
        />
      </div>
    ),
  },
  {
    id: "p3",
    title: "Next Meetup",
    desc: "NextMeetups is a full-stack meetup application built with Next.js and MongoDB, demonstrating Next.js features like static site generation (SSG) and dynamic routing. Users can browse meetups, view detailed meetup pages, and add new meetups.",
    url: "https://github.com/Jayanth-shetty/NextMeetups",
    year: "2025",
    content: (
      <div>
        <Image
          src="/images/NextMeetup.png"
          alt="foodies app"
          height={500}
          width={500}
        />
      </div>
    ),
  },
  {
    id: "p4",
    title: "React Quiz App",
    desc: "ReactQuizApp is a simple and interactive quiz web application built using React.js. The app allows users to take a multiple-choice quiz and gives feedback on their performance. It’s a lightweight React project that demonstrates use of state, components, and basic UI interaction in a real-world scenari",
    url: "https://github.com/Jayanth-shetty/ReactQuizApp",
    year: "2025",
    content: (
      <div>
        <Image
          src="/images/ReactQuiz.png"
          alt="foodies app"
          height={500}
          width={500}
        />
      </div>
    ),
  },
];
export default projList;
