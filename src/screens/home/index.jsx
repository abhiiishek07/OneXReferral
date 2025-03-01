import React from "react";

/*IMAGES*/
import Underline from "/public/images/elements/curved_underline.svg";
import Image from "next/image";

const HomeScreen = () => {
  return (
    <section className="py-5 lg:py-10 xl:py-10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="col-span-1">
            {" "}
            <h1 className="font-primary text-9xl font-bold pt-5">
              Your Dream Job,
            </h1>
            <h1 className="font-primary text-9xl font-bold">
              <span className="text-primary"> One Referral</span> Away.
            </h1>
            <p className="pt-5 lg:pt-10 font-secondary font-semibold text-3xl text-greyText">
              {" "}
              Get referred by employees at top companies and unlock new career
              opportunities. Join the waitlist today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeScreen;
