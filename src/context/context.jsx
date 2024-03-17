import AboutMe from "../components/AboutMe";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";
import Service from "../components/Service";
import { createContext, useCallback, useEffect, useReducer } from "react";
import dynamic from "next/dynamic";
import fetchData from "../utility/fetchData";
const Testimonials = dynamic(() => import("../components/Testimonials"), {
  ssr: false,
});

const type = {
  ANIMATION: "ANIMATION",
  MODAL: "MODAL",
  EXPERIENCEMODAL: "EXPERIENCEMODAL",
  SERVICEMODAL: "SERVICEMODAL",
  PORTFOLIOMODAL: "PORTFOLIOMODAL",
  BLOGMODAL: "BLOGMODAL",
  TESTIMONIALiTEMS: "TESTIMONIALiTEMS",
  ABOUTDATA: "ABOUTDATA",
  SERVICEDATA: "SERVICEDATA",
  SKILLDATA: "SKILLDATA",
  EDUCATIONDATA : "EDUCATIONDATA",
  EXPERIENCEDATA : "EXPERIENCEDATA",
  TESTIMONALDATA : 'TESTIMONALDATA',
  SOCIALDATA : 'SOCIALDATA',
  PROJECTDATA : 'PROJECTDATA'
};
const {
  MODAL,
  SERVICEMODAL,
  PORTFOLIOMODAL,
  BLOGMODAL,
  TESTIMONIALiTEMS,
  ABOUTDATA,
  SERVICEDATA,
  TESTIMONALDATA,
  SOCIALDATA,
  PROJECTDATA,
  SKILLDATA,
  EDUCATIONDATA,
  EXPERIENCEDATA
} = type;

const context = createContext();

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case MODAL:
      return {
        ...state,
        modal: payload,
      };
    case SERVICEMODAL:
      return {
        ...state,
        serviceModal: payload,
      };
    case PORTFOLIOMODAL:
      return {
        ...state,
        portfolioModal: payload,
      };
    case BLOGMODAL:
      return {
        ...state,
        blogModal: payload,
      };
    case TESTIMONIALiTEMS:
      return {
        ...state,
        testimonialItems: payload,
      };
    case ABOUTDATA:
      return {
        ...state,
        aboutData: payload,
      };
    case SERVICEDATA:
      return {
        ...state,
        serviceData: payload,
      };
    case SKILLDATA:
      return {
        ...state,
        skillData: payload,
      };
    case EDUCATIONDATA:
      return {
        ...state,
        educationData: payload,
      };
    case EXPERIENCEDATA:
      return {
        ...state,
        experienceData: payload,
      };
    case TESTIMONALDATA:
      return {
        ...state,
        testimonalData: payload,
      };
    case SOCIALDATA:
      return {
        ...state,
        socialData: payload,
      };
    case PROJECTDATA:
      return {
        ...state,
        projectData: payload,
      };
    default:
      return state;
  }
};

const state = (props) => {
  const initialState = {
    modal: false,
    serviceModal: null,
    portfolioModal: null,
    blogModal: null,
    testimonialItems: 2,
    pageContent: [
      { id: 1, sectionId: "about", component: <AboutMe /> },
      { id: 2, sectionId: "resume", component: <Resume /> },
      { id: 3, sectionId: "portfolio", component: <Portfolio /> },
      { id: 4, sectionId: "service", component: <Service /> },
      { id: 5, sectionId: "testimonials", component: <Testimonials /> },
      { id: 6, sectionId: "news", component: <Blog /> },
      { id: 7, sectionId: "contact", component: <Contact /> },
    ],
    menus: [
      { id: 0, href: "home", title: "Home", icon: "squares" },
      { id: 1, href: "about", title: "About Me", icon: "archive" },
      { id: 2, href: "resume", title: "Resume", icon: "contacs" },
      { id: 3, href: "portfolio", title: "Portfolio", icon: "briefcase" },
      { id: 4, href: "service", title: "Service", icon: "gear" },
      { id: 5, href: "testimonials", title: "Testimonial", icon: "message" },
      { id: 6, href: "news", title: "Blog", icon: "writing" },
      { id: 7, href: "contact", title: "Contact", icon: "letter" },
    ],
    aboutData: {
      name: "Jessica Parker",
      img: "/img/about/1.jpg",
      birthday: "April 22, 1990",
      nationality: "Bangladeshi",
      email: "hello@anderson.com",
      phone: "+123 456 7890",
      bio: "Hi! My name is Jessica Parker. I am UI/UX designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional graphic designer, I have acquired the skills and knowledge necessary to make your project a success.",
      address: "20, Bardeshi, Dhaka",
      title: "World leading UI/UX designer",
      subTitle:
        "A passionate UI/UX Designer and Web Developer based In NYC, USA",
      youtube : "7e90gBu4pas"
    },
    serviceData: [
      {
        id: 1,
        name: "Wireframing",
        icon: "squares",
        desc: "Web development is the building and maintenance of websites. it’s the work that...",
        img: "img/service/1.jpg",
      },
      {
        id: 2,
        name: "Prototype",
        icon: "physics",
        desc: "Web development is the building and maintenance of websites. it’s the work that...",
        img: "img/service/2.jpg",
      },
      {
        id: 3,
        name: "UI Design",
        icon: "web",
        desc: "Web development is the building and maintenance of websites. it’s the work that...",
        img: "img/service/3.jpg",
      },
      {
        id: 4,
        name: "Personal Creation",
        icon: "user",
        desc: "Web development is the building and maintenance of websites. it’s the work that...",
        img: "img/service/4.jpg",
      },
      {
        id: 5,
        name: "Case Study",
        icon: "briefcase",
        desc: "Web development is the building and maintenance of websites. it’s the work that...",
        img: "img/service/5.jpg",
      },
      {
        id: 6,
        name: "Experience Design",
        icon: "writing_2",
        desc: "Web development is the building and maintenance of websites. it’s the work that...",
        img: "img/service/6.jpg",
      },
    ],
    skillData: [
      { id: 1, title: "Time Management", value: "90" },
      { id: 2, title: "Effeciency", value: "70" },
      { id: 3, title: "Intigrity", value: "80" },
    ],
    experienceData: [
      {
        id: 1,
        designation: "UI/UX Designer",
        company: "Envato Market",
        desc: "Web Developers are build a website’s core structure using coding languages, while designers are more visually creative and user-focused.",
        date: "2018 - running",
      },
      {
        id: 2,
        designation: "Creative Designer",
        company: "Bahanno Digital",
        desc: "Web Developers are build a website’s core structure using coding languages, while designers are more visually creative and user-focused.",
        date: "2015 - 2017",
      },
    ],
    educationData : [
      {
        id: 1,
        subject: "Cognitive Sciences",
        university: "University of Maine",
        desc: "The goal of cognitive science is to understand the principles of intelligence with the hope that this will lead to better comprehension.",
        date: "2018 - 2020",
      },
      {
        id: 2,
        subject: "Civil Engineering",
        university: "University of Texas",
        desc: "Civil engineering is arguably the oldest engineering discipline. It deals with the built environment and can be dated to the first time someone placed a roof.",
        date: "2016 - 2017",
      },
      {
        id: 3,
        subject: "Bachelor of Science",
        university: "Univercity of Dhaka",
        desc: "This project is called a thesis and is usually presented in front of a group of people, including university professors who will evaluate it and let the student..",
        date: "2012 - 2015",
      },
    ],
    testimonalData : [
      {
        id : 1,
        review:
          "These people really know what they are doing! Great customer support availability and supperb kindness. I am very happy that I've purchased this liscense!!!",
          img : "/img/testimonials/1.jpg",
          name : "Jecob Oramson",
          position : "Designer"
      },
      {
        id : 2,
        review:
          "The design is elegant. The customer support on this product is also amazing. I would highly recommend you to purchase templates from the Marketify team!",
          img : "/img/testimonials/2.jpg",
          name : "Kerry Hudson",
          position : "IBO. Corp"
      },
      {
        id : 3,
        review:
          "Not only was customer support very fast, but the design is very professional. Will definitely be looking for new products in the future from this author.",
          img : "/img/testimonials/3.jpg",
          name : "Albert Walker",
          position : "Singer"
      },
      {
        id : 4,
        review:
          "The Author had done a great job, it's clean and easy to understand the code. Comment blocks made it really easy to read the code.",
          img : "/img/testimonials/4.jpg",
          name : "Arnold Hookins",
          position : "Photographer"
      },
      
      {
        id : 5,
        review:
          "I can't believe I got support and my problem resolved in minutes from posting my question. Simply amazing team and amazing theme! Thank you!",
          img : "/img/testimonials/5.jpg",
          name : "Aura Brooklyn",
          position : "Fashion Model"
      },
    ],
    socialData : [
      {
          id : 1,
          url : "#",
          image : "/img/svg/social/facebook.svg"
      },
      {
          id : 2,
          url : "#",
          image : "/img/svg/social/twitter.svg"
      },
      {
          id : 3,
          url : "#",
          image : "/img/svg/social/youtube.svg"
      },
      {
          id : 4,
          url : "#",
          image : "/img/svg/social/instagram.svg"
      },
  ],
  projectData : null
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const modalToggle = useCallback((value) => {
    dispatch({
      type: MODAL,
      payload: value,
    });
  }, []);

  const setServiceModal = useCallback((value) => {
    dispatch({
      type: SERVICEMODAL,
      payload: value,
    });
  }, []);
  const setPortfolioModal = useCallback((value) => {
    dispatch({
      type: PORTFOLIOMODAL,
      payload: value,
    });
  }, []);
  const setBlogModal = useCallback((value) => {
    dispatch({
      type: BLOGMODAL,
      payload: value,
    });
  }, []);

  const setTestimonialItems = useCallback((value) => {
    dispatch({
      type: TESTIMONIALiTEMS,
      payload: value,
    });
  }, []);

  const setAboutData = useCallback((value) => {
    let aboutData = {
      name: value && value.name ? value.name : state.aboutData.name,
      img: value && value.img ? value.img : state.aboutData.img,
      address: value && value.address ? value.address : state.aboutData.address,
      bio: value && value.bio ? value.bio : state.aboutData.bio,
      birthday:
        value && value.birthday ? value.birthday : state.aboutData.birthday,
      email: value && value.email ? value.email : state.aboutData.email,
      nationality:
        value && value.nationality
          ? value.nationality
          : state.aboutData.nationality,
      phone: value && value.phone ? value.phone : state.aboutData.phone,
      title: value && value.title ? value.title : state.aboutData.title,
      subTitle:
        value && value.subTitle ? value.subTitle : state.aboutData.title,
      youtube:
        value && value.youtube ? value.youtube : state.aboutData.youtube,
    };
    dispatch({
      type: ABOUTDATA,
      payload: value ? aboutData : state.aboutData,
    });
  }, []);

  const setServiceData = useCallback((value) => {
    dispatch({
      type: SERVICEDATA,
      payload: value ? value : state.serviceData,
    });
  }, []);

  const setSkillData = useCallback((value) => {
    dispatch({
      type: SKILLDATA,
      payload: value ? value : state.skillData,
    });
  }, []);
  
  const setEducationData = useCallback((value) => {
    dispatch({
      type: EDUCATIONDATA,
      payload: value ? value : state.educationData,
    });
  }, []);
  
  const setExperienceData = useCallback((value) => {
    dispatch({
      type: EXPERIENCEDATA,
      payload: value ? value : state.experienceData,
    });
  }, []);

  const setTestimonialData = useCallback((value) => {
    dispatch({
      type: TESTIMONALDATA,
      payload: value ? value : state.testimonalData,
    });
  }, []);
  
  const setSocialData = useCallback((value) => {
    dispatch({
      type: SOCIALDATA,
      payload: value ? value : state.socialData,
    });
  }, []);
  
  const setProjectData = useCallback((value) => {
    dispatch({
      type: PROJECTDATA,
      payload: value ? value : state.projectData,
    });
  }, []);

  
  const {
    modal,
    serviceModal,
    portfolioModal,
    blogModal,
    pageContent,
    testimonialItems,
    menus,
    aboutData,
    serviceData,
    skillData,
    educationData,
    experienceData,
    testimonalData,
    socialData,
    projectData
  } = state;

  useEffect(() => {
    fetchData("65b3a22c01d900e96c4219ae").then((value) => {

      // Setting About Data
      let user = value?.user;
      let aboutData = user?.about
        ? {
            name: user.about.name,
            img: user.about.avatar.url,
            address: user.about.address,
            bio: user.about.description,
            email: user.email,
            phone: user.about.phoneNumber,
            title: user.about.title,
            subTitle: user.about.subTitle,
            youtube: user?.youtube[0] ? user?.youtube[0].embedId : state.aboutData.youtube
          }
        : state.aboutData;
      setAboutData(aboutData);

      // Setting Service Data
      let serviceData = user?.services
        ? user.services.map((value) => {
            return { id: value._id, icon: "squares", name : value.name , desc : value.desc, image : value.image.url, charge : value.charge};
          })
        : state.serviceData;
      setServiceData(serviceData);

      // Setting Skill Data
      let skillData = user?.skills
        ? user.skills.map((value, index) => {
            return {
              id: index + 1,
              title: value.name,
              value: `${value.percentage.toString()}`,
            };
          })
        : state.skillData;
      setSkillData(skillData);

      // Setting Experience Data
      let experienceData = user?.timeline
        ? user.timeline.filter((value) => value.forEducation == false).map((value, index) => {
            let startDate = new Date(value.startDate).getUTCFullYear();
            let endDate = new Date(value.endDate).getUTCFullYear();
            return {
              id: value._id,
              designation: value.jobTitle,
              company: value.company_name,
              desc: value.summary ? value.summary : "",
              date: `${startDate}-${endDate}`,
            };
          })
        : state.experienceData;
        setExperienceData(experienceData);
      
        // Setting Education Data
      let educationData = user?.timeline
        ? user.timeline.filter((value) => value.forEducation == true).map((value, index) => {
            let startDate = new Date(value.startDate).getUTCFullYear();
            let endDate = new Date(value.endDate).getUTCFullYear();
            return {
              id: value._id,
              subject: value.jobTitle,
              university: value.company_name,
              desc: value.summary ? value.summary : "",
              date: `${startDate}-${endDate}`,
            };
          })
        : state.educationData;
        setEducationData(educationData);

        // Setting Testimonial Data
        let testimonalData = user?.testimonials ? user.testimonials.map((value) => {
          return {
            id : value._id,
            name : value.name,
            img : value.image.url,
            review : value.review,
            position : value.position
          }
        }) : state.testimonalData;
        setTestimonialData(testimonalData);

        // Setting Social Data
        let socialData = user?.social_handles ? user.social_handles.map((value) => {
          return  {
            id : value._id,
            url : value.url,
            image : value.image.url
          }
        }) : state.socialData;
        setSocialData(socialData);

        // Setting Project Data
        let projectData = user?.projects && user.projects.map((value) => {
          return {
            id : value._id,
            title : value.title,
            image : value.image.url,
            liveurl : value.liveurl,
            githuburl : value.githuburl
          }
        })
        setProjectData(projectData);       

    });
  }, []);

  return (
    <context.Provider
      value={{
        modal,
        modalToggle,
        serviceModal,
        setServiceModal,
        portfolioModal,
        setPortfolioModal,
        blogModal,
        setBlogModal,
        pageContent,
        setTestimonialItems,
        testimonialItems,
        menus,
        aboutData,
        serviceData,
        skillData,
        educationData,
        experienceData,
        testimonalData,
        socialData,
        projectData
      }}
    >
      {props.children}
    </context.Provider>
  );
};

export default state;

export { context };
