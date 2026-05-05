"use client"
import { useState } from 'react';
import parse from 'html-react-parser';
import Image from 'next/image';

const techData = {
    "Front-End": [
        { name: "Angular", icon: "/assets/images/technologies/angularImage.svg" },
        { name: "ReactJS", icon: "/assets/images/technologies/reactImage.svg" },
        { name: "Vue.js", icon: "/assets/images/technologies/vuejsImage.svg" },
        { name: "Javascript", icon: "/assets/images/technologies/javascriptImage.svg" },
        { name: "TypeScript", icon: "/assets/images/technologies/typescriptImage.svg" },
        { name: "NextJS", icon: "/assets/images/technologies/nextjsImage.svg" },
        { name: "NuxtJS", icon: "/assets/images/technologies/nuxtjsImage.svg" },
        { name: "Tailwind CSS", icon: "/assets/images/technologies/tailwindcssImage.svg" },
        { name: "CSS3", icon: "/assets/images/technologies/css3Image.svg" },
        { name: "JQuery", icon: "/assets/images/technologies/jqueryImage.svg" },
        { name: "Bootstrap", icon: "/assets/images/technologies/bootstrapImage.svg" },
        { name: "Ionic", icon: "/assets/images/technologies/ionicImage.svg" },
    ],
    "Back-End": [
        { name: "Node.js", icon: "/assets/images/technologies/nodejsImage.svg" },
        { name: "Python", icon: "/assets/images/technologies/pythonImage.svg" },
        { name: "Java", icon: "/assets/images/technologies/javaImage.svg" },
        { name: ".NET", icon: "/assets/images/technologies/netImage.svg" },
    ],
    "Mobile": [
        { name: "React Native", icon: "/assets/images/technologies/reactImage.svg" },
        { name: "Ionic", icon: "/assets/images/technologies/ionicImage.svg" },
    ],
    "Database": [
        { name: "MySQL", icon: "/assets/images/technologies/mySqlImage.svg" },
        { name: "PostgreSQL", icon: "/assets/images/technologies/postgresqlImage.svg" },
        { name: "MongoDB", icon: "/assets/images/technologies/mongodbImage.svg" },
        { name: "Oracle", icon: "/assets/images/technologies/oracleImage.svg" },
        { name: "SQLite", icon: "/assets/images/technologies/sqlliteImage.svg" },
        { name: "SQL Server", icon: "/assets/images/technologies/sqlserverImage.svg" },
        { name: "DynamoDB", icon: "/assets/images/technologies/dynamodbImage.svg" },
    ],
    "Devops/Cloud": [
        { name: "AWS", icon: "/assets/images/technologies/awsImage.svg" },
        { name: "Azure", icon: "/assets/images/technologies/azureImage.svg" },
        { name: "Google Cloud", icon: "/assets/images/technologies/googlecloudImage.svg" },
        { name: "DigitalOcean", icon: "/assets/images/technologies/digitaloceanImage.svg" },
    ],
    "UI/UX": [
        { name: "Figma", icon: "/assets/images/technologies/figmaImage.svg" },
        { name: "Adobe XD", icon: "/assets/images/technologies/adobe-xdImage.svg" },
        { name: "Canva", icon: "/assets/images/technologies/canvaImage.svg" },
    ],
};

const Technologies = (
    {
        SubTitle = "Technology",
        Title = "We build on proven, <br /> <span> modern platforms </span>",
        Content = "We choose the stack that fits your needs — not the one we're most comfortable with."
    }) => {
    const tabs = Object.keys(techData);
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div className="technologies-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="section-title text-center">
                            <h5 className="section-sub-title">{SubTitle}</h5>
                            <h1 className="section-main-title">{parse(Title)}</h1>
                            <p className="section-title-descr">{Content}</p>
                        </div>
                    </div>
                </div>

                <div className="tech-tabs-wrapper">
                    <ul className="tech-tabs-nav">
                        {tabs.map((tab) => (
                            <li key={tab}>
                                <button
                                    className={`tech-tab-btn${activeTab === tab ? ' active' : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="tech-tab-content">
                        <div className="row g-3">
                            {techData[activeTab].map((tech) => (
                                <div key={tech.name} className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="tech-card">
                                        <div className="tech-icon-box card p-2">
                                            <Image
                                                src={tech.icon}
                                                alt={tech.name}
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <span className="tech-card-name">{tech.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technologies;
