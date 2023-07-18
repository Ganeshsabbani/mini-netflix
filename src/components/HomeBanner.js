import React from "react";
import "../styles/HomeBanner.scss";

const HomeBanner = () => {
  return (
    <div className="home-banner">
      <div className="our-story">
        <h1 className="our-story-card-title">
          Unlimited movies, TV shows and more.
        </h1>
        <h2 className="our-story-card-subtitle">
          Watch anywhere. Cancel anytime.
        </h2>
        <p className="email-form-title">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="input-group">
          <input type="email" placeholder="Email address" />
          <button>Get Started <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-mirrorinrtl="true" class="default-ltr-cache-0 e1mhci4z1" data-name="ChevronRight" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path></svg></button>
        </div>
      </div>     
      <div className="shadow"></div>
      <img
        className="concord-img vlv-creative"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="background-shadow"
      ></img>
    </div>
  );
};

export default HomeBanner;
