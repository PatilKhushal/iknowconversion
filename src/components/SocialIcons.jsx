import { context } from "../context/context";
import { useContext } from "react";

const SocialIcons = () => {
  const { socialData } = useContext(context)
  return (
    <div className="social">
      <ul>
        {
          socialData.map((value) => {
            return <li key={value.id}>
            <a href={value.url}>
              <img className="svg" src={`${value.image.toString()}`} alt="" />
            </a>
          </li>
          })
        }
      </ul>
    </div>
  );
};
export default SocialIcons;

export const SocialIcons2 = () => {
  return (
    <div className="social">
      <ul>
        <li>
          <a href="#">
            <img
              className="svg"
              src="/img/svg/social/facebook-2.svg"
              alt="image"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              className="svg"
              src="/img/svg/social/twitter-2.svg"
              alt="image"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              className="svg"
              src="/img/svg/social/linkedin-2.svg"
              alt="image"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img
              className="svg"
              src="/img/svg/social/youtube-3.svg"
              alt="image"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};
export const SocialIcons3 = () => {
  return (
    <div className="social_list">
      <ul>
        <li>
          <a href="#">
            <img className="svg" src="/img/svg/social/facebook-2.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img className="svg" src="/img/svg/social/twitter-2.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img className="svg" src="/img/svg/social/youtube-3.svg" alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};
