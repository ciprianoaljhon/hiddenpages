import React from "react";
import { ImBooks } from "react-icons/im";
import FeatureItem from "../../components/FeatureItem";
function KeyFeatures() {
  return (
    <section className="flex items-center flex-col">
      <h1 className="responsive-text-600 mb-10">Why Choose Us:</h1>
      <ul className="feat-container flex gap-x-6 child:grow flex-wrap">
        <FeatureItem
          feature="Endless Choices"
          icon="📚 "
          description="Our diverse collection spans genres, ensuring there's a story for every reader. From timeless classics to emerging voices, we have something for everyone."
        ></FeatureItem>
        <FeatureItem
          feature="Virtual Exploration"
          icon="🌐"
          description="Dive into our virtual bookshelves from the comfort of your home. Discover new releases, hidden gems, and literary treasures with just a click."
        ></FeatureItem>
        <FeatureItem
          feature="Intuitive Site Navigation"
          icon="🗺️"
          description="Seamlessly explore our bookstore with an easy-to-use and intuitive website design."
        ></FeatureItem>
        <FeatureItem
          feature="Rent Options"
          icon="📚"
          description="Embark on a flexible and convenient journey with our diverse range of rent options tailored to suit your lifestyle."
        ></FeatureItem>
        {/* <FeatureItem feature=""></FeatureItem> */}
      </ul>
    </section>
  );
}

export default KeyFeatures;
