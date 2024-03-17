import { context } from "../context/context";
import { useContext, useState } from "react";

const Portfolio = () => {
  const { setPortfolioModal, modalToggle, projectData } = useContext(context);
  const [active, setActive] = useState("all");
  const activeLi = (value) => (active == value ? "current" : "");
  const activeContent = (value) => {
    return active === "all" || active === value ? "show" : "hidden";
  };

  const handelClick = (value, e) => {
    e.preventDefault();
    // First, set the "active" state to hide all items
    setActive("none");
    // Then, after a brief delay, set it to show all items
    setTimeout(() => {
      setActive(value);
    }, 0);
  };

  return (
    <div className="iknow_tm_portfolio">
      <div className="iknow_tm_main_title">
        <span>Resume</span>
        <h3>My works that I did for clients</h3>
      </div>
      {projectData ?  (
        <>
          <div className="portfolio_filter">
            <ul>
              <li>
                <a
                  href="#"
                  className={activeLi("all")}
                  onClick={(e) => handelClick("all", e)}
                  data-filter="*"
                >
                  All
                </a>
              </li>
            </ul>
          </div>
          <div className="portfolio_list">
            <ul className="gallery_zoom">
              {
                projectData.map((value) => {
                  return <li className={`detail ${activeContent("detail")}`} key={value.id}>
                  <div className="list_inner">
                    <div className="image">
                      <img src="/img/thumbs/1-1.jpg" alt="image" />
                      <div className="main" data-img-url={value.image} />
                    </div>
                    <div className="overlay" />
                    <img className="svg" src="/img/svg/text.svg" alt="image" />
                    <div className="details">
                      <span>{value.title}</span>
                      <div style={{display:"flex",  justifyContent : "center", gap : '20px'}}>
                        <a href={value.githuburl}><button style={{padding:'10px 20px'}}>Github</button></a>
                        <a href={value.liveurl}><button style={{padding:'10px 20px'}}>Live</button></a>
                      </div>
                    </div>
                  </div>
                </li>
                })
              }
            </ul>
          </div>
        </>
      ) : <>
      <div className="portfolio_filter">
        <ul>
          <li>
            <a
              href="#"
              className={activeLi("all")}
              onClick={(e) => handelClick("all", e)}
              data-filter="*"
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeLi("vimeo")}
              onClick={(e) => handelClick("vimeo", e)}
              data-filter=".vimeo"
            >
              Vimeo
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeLi("youtube")}
              onClick={(e) => handelClick("youtube", e)}
              data-filter=".youtube"
            >
              Youtube
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeLi("soundcloud")}
              onClick={(e) => handelClick("soundcloud", e)}
              data-filter=".soundcloud"
            >
              Soundcloud
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeLi("detail")}
              onClick={(e) => handelClick("detail", e)}
              data-filter=".detail"
            >
              Detail
            </a>
          </li>
        </ul>
      </div>
      <div className="portfolio_list">
        <ul className="gallery_zoom">
          <li className={`vimeo ${activeContent("vimeo")}`}>
            <div className="list_inner">
              <div className="image">
                <img src="/img/thumbs/1-1.jpg" alt="image" />
                <div className="main" data-img-url="/img/portfolio/1.jpg" />
              </div>
              <div className="overlay" />
              <img
                className="svg"
                src="/img/svg/social/vimeo.svg"
                alt="image"
              />
              <div className="details">
                <span>Vimeo</span>
                <h3>Aumeo Audio</h3>
              </div>
              <a
                className="iknow_tm_full_link popup-vimeo"
                href="https://vimeo.com/337293658"
              />
            </div>
          </li>
          <li className={`youtube ${activeContent("youtube")}`}>
            <div className="list_inner">
              <div className="image">
                <img src="/img/thumbs/1-1.jpg" alt="image" />
                <div className="main" data-img-url="/img/portfolio/2.jpg" />
              </div>
              <div className="overlay" />
              <img
                className="svg"
                src="/img/svg/social/youtube-2.svg"
                alt="image"
              />
              <div className="details">
                <span>Youtube</span>
                <h3>Bicker &amp; Jenna</h3>
              </div>
              <a
                className="iknow_tm_full_link popup-youtube"
                href="https://www.youtube.com/watch?v=7e90gBu4pas"
              />
            </div>
          </li>
          <li className={`soundcloud ${activeContent("soundcloud")}`}>
            <div className="list_inner">
              <div className="image">
                <img src="/img/thumbs/1-1.jpg" alt="image" />
                <div className="main" data-img-url="/img/portfolio/3.jpg" />
              </div>
              <div className="overlay" />
              <img
                className="svg"
                src="/img/svg/social/soundcloud.svg"
                alt="image"
              />
              <div className="details">
                <span>Soundcloud</span>
                <h3>Botanical Escape</h3>
              </div>
              <a
                className="iknow_tm_full_link soundcloude_link mfp-iframe audio"
                href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              />
            </div>
          </li>
          <li className={`youtube ${activeContent("youtube")}`}>
            <div className="list_inner">
              <div className="image">
                <img src="/img/thumbs/1-1.jpg" alt="image" />
                <div className="main" data-img-url="/img/portfolio/6.jpg" />
              </div>
              <div className="overlay" />
              <img
                className="svg"
                src="/img/svg/social/youtube-2.svg"
                alt="image"
              />
              <div className="details">
                <span>Youtube</span>
                <h3>Model Car</h3>
              </div>
              <a
                className="iknow_tm_full_link popup-youtube"
                href="https://www.youtube.com/watch?v=l-epKcOA7RQ"
              />
            </div>
          </li>
          <li className={`vimeo ${activeContent("vimeo")}`}>
            <div className="list_inner">
              <div className="image">
                <img src="/img/thumbs/1-1.jpg" alt="image" />
                <div className="main" data-img-url="/img/portfolio/7.jpg" />
              </div>
              <div className="overlay" />
              <img
                className="svg"
                src="/img/svg/social/vimeo.svg"
                alt="image"
              />
              <div className="details">
                <span>Vimeo</span>
                <h3>Smart Watch</h3>
              </div>
              <a
                className="iknow_tm_full_link popup-vimeo"
                href="https://vimeo.com/337292310"
              />
            </div>
          </li>
          <li className={`detail ${activeContent("detail")}`}>
            <div className="list_inner">
              <div className="image">
                <img src="/img/thumbs/1-1.jpg" alt="image" />
                <div className="main" data-img-url="/img/portfolio/8.jpg" />
              </div>
              <div className="overlay" />
              <img className="svg" src="/img/svg/text.svg" alt="image" />
              <div className="details">
                <span>Detail</span>
                <h3>Teresa Melbig</h3>
              </div>
              <a
                className="iknow_tm_full_link portfolio_popup"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  modalToggle(true);
                  setPortfolioModal(true);
                }}
              />
            </div>
          </li>
        </ul>
      </div></>}
    </div>
  );
};
export default Portfolio;
