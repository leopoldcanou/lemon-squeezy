import taxCompliance from "../../public/tax-compliance.jpg";
import saasPayments from "../../public/saas-payments.jpg";
import instantPayment from "../../public/instant-payment.jpg";
import currency from "../../public/currency.jpg";
import fraud from "../../public/fraud.jpg";
import paymentRecovery from "../../public/payment-recovery.jpg";
import firstLeft from "../../public/firstLeft.jpg";
import firstRight from "../../public/firstRight.jpg";
import secondLeft from "../../public/secondLeft.jpg";
import secondRight from "../../public/secondRight.jpg";
import thirdLeft from "../../public/thirdLeft.jpg";
import thirdRight from "../../public/thirdRight.jpg";

import jackEllis from "../../public/jack-avatar.jpg";
import michaelRiddering from "../../public/michaal-riddering.jpg";
import rachelShillcock from "../../public/avatar-rachel.jpeg";
import erenT from "../../public/avatar-eren.jpeg";
import shahadatRahman from "../../public/avatar-shahadat.jpeg";
import jamesMcDonald from "../../public/jamesmcdonald.jpg";

import iconic from "../../public/iconic.png";
import figma from "../../public/figma.jpg";
import webhooks from "../../public/webhooks.png";
import api from "../../public/api.png";
import book from "../../public/book.jpg";
import book2 from "../../public/book2.jpg";
import tshirt from "../../public/tshirt.jpg";
import needHelp from "../../public/needHelp.jpg";

import Header from "@/components/header";
import SimpleText from "@/components/simpleText";
import InteractiveFeatures, {
  FeatureInteractiveInterface,
} from "@/components/featuresInteractive";
import featuresInteractiveData from "@/app/featuresInteractive.json";
import FeatureGrid, { FeatureGridInterface } from "@/components/featuresGrid";
import firstFeaturesGridData from "@/app/firstFeaturesGrid.json";
import secondFeaturesGridData from "@/app/secondFeaturesGrid.json";
import thirdFeaturesGridData from "@/app/thirdFeaturesGrid.json";
import DoubleText from "@/components/doubleText";
import DoubleImage from "@/components/doubleImage";
import TestimonialsGrid, {
  TestimonialInterface,
} from "@/components/testimonialGrid";
import testimonialsData from "@/app/testimonials.json";
import TextPicture from "@/components/textPicture";
import Footer from "@/components/footer";

const imageMapping = {
  taxCompliance,
  saasPayments,
  instantPayment,
  currency,
  fraud,
  paymentRecovery,
};

const testimonialsImageMapping = {
  jackEllis,
  michaelRiddering,
  rachelShillcock,
  erenT,
  shahadatRahman,
  jamesMcDonald,
};

const featuresInteractive: FeatureInteractiveInterface[] =
  featuresInteractiveData.map((feature) => ({
    ...feature,
    imageSrc: imageMapping[feature.imageSrc as keyof typeof imageMapping],
  }));

const firstFeaturesGrid: FeatureGridInterface[] = firstFeaturesGridData;
const secondFeaturesGrid: FeatureGridInterface[] = secondFeaturesGridData;
const thirdFeaturesGrid: FeatureGridInterface[] = thirdFeaturesGridData;

const testimonials: TestimonialInterface[] = testimonialsData.map(
  (testimonial) => ({
    ...testimonial,
    author: {
      ...testimonial.author,
      image:
        testimonialsImageMapping[
          testimonial.author.image as keyof typeof testimonialsImageMapping
        ],
    },
  }),
);

export default function Home() {
  return (
    <>
      <Header />
      <SimpleText
        titleColor="#7047eb"
        title="why lemon squeezy?"
        text="Lemon Squeezy is the all-in-one platform for running your SaaS business.
              Payments, subscriptions, global tax compliance, fraud prevention,
              multi-currency support, failed payment recovery, PayPal integration and
              more. We make running your software business easy peasy."
      />
      <InteractiveFeatures features={featuresInteractive} />
      <DoubleText
        titleColor="#D50B3E"
        title="ecommerce"
        text="Create the perfect buying experience for your customers"
        secondaryText="Launch your secure ecommerce website and start selling software, subscriptions and digital downloads anywhere in minutes. Utilize no-code checkout links without worrying about design, mobile optimization, or payment integrations. It really is easy-peasy."
        backgroundColor="#F7F7F8"
      />
      <DoubleImage leftImage={firstLeft} rightImage={firstRight} />
      <FeatureGrid
        idColor="#D50B3E"
        backgroundColor="#F7F7F8"
        hoverColor="#FFFFFF"
        features={firstFeaturesGrid}
      />
      <DoubleText
        titleColor="#0075AD"
        title="marketing"
        text="Grow your business with integrated marketing tools"
        secondaryText="Grow your audience, build long-lasting customer relationships, and make more sales with powerful, easy-to-use marketing tools. Whether you need to offer discount codes or you want to build your email list, you can do it all with Lemon Squeezy."
        backgroundColor="#FFFFFF"
      />
      <DoubleImage leftImage={secondLeft} rightImage={secondRight} />
      <FeatureGrid
        idColor="#0075AD"
        backgroundColor="#FFFFFF"
        hoverColor="#F7F7F8"
        features={secondFeaturesGrid}
      />
      <DoubleText
        titleColor="#1E874C"
        title="reporting"
        text="Understand your business and customers"
        secondaryText="Running a software company requires its own unique set of insights — free trial conversion rates, MRR, churn rate, and more. Get to know your customers so you can understand your business needs, up your marketing and take your business to new heights."
        backgroundColor="#F7F7F8"
      />
      <DoubleImage leftImage={thirdLeft} rightImage={thirdRight} />
      <FeatureGrid
        idColor="#1E874C"
        backgroundColor="#F7F7F8"
        hoverColor="#FFFFFF"
        features={thirdFeaturesGrid}
      />
      <DoubleText
        titleColor="#CF75FF"
        title="developers"
        text="Built for developers, by developers"
        secondaryText="Lemon Squeezy was born out of frustration with existing solutions on the market. As beautiful as it looks, the platform is just as flexible with you, the developer, in mind. We spend an unfathomable amount of time making the platform a joy to work with."
        backgroundColor="#000000"
        darkMode
      />
      <TextPicture
        title="D/1"
        text="Powerful, flexible API + Webhooks"
        buttonText="Explore the API"
        titleColor="#CF75FF"
        backgroundColor="#000000"
        buttonPrimaryColor="#CF75FF"
        buttonHoverColor="#CF75FF"
        buttonSecondaryColor="#CF75FF80"
        image={webhooks}
        imageReverse
        darkMode
      />
      <TextPicture
        title="D/1"
        text="Documentation so good you’ll cry"
        buttonText="Read the docs"
        titleColor="#CF75FF"
        backgroundColor="#000000"
        buttonPrimaryColor="#CF75FF"
        buttonHoverColor="#CF75FF"
        buttonSecondaryColor="#CF75FF80"
        image={api}
        darkMode
      />
      <DoubleText
        titleColor="#EB3A00"
        title="community"
        text="You’re in good company"
        secondaryText="Lemon Squeezy is the heartbeat for your business. Join thousands of successful startups, software companies, and digital creators using our platform. Become part of a growing community of innovative thinkers, makers, movers, and shakers — you're in good company here."
        backgroundColor="#F7F7F8"
      />
      <TestimonialsGrid testimonials={testimonials} />
      <TextPicture
        title="C/1"
        text="How Iconic uses Lemon Squeezy to power software licensing + subscriptions"
        buttonText="Read the case study"
        titleColor="#EB3A00"
        backgroundColor="#FFFFFF"
        buttonPrimaryColor="#FF571F"
        buttonHoverColor="#FF571F"
        buttonSecondaryColor="#FF571F26"
        image={iconic}
      />
      <TextPicture
        title="C/2"
        text="How Figma Academy used Lemon Squeezy to earn $300k with a Figma course"
        buttonText="Read the case study"
        titleColor="#EB3A00"
        backgroundColor="#FFFFFF"
        buttonPrimaryColor="#FF571F"
        buttonHoverColor="#FF571F"
        buttonSecondaryColor="#FF571F26"
        image={figma}
        imageReverse
      />
      <DoubleText
        titleColor="#DB0BB9"
        title="support"
        text="Whatever stage of your journey, we’re here to help"
        secondaryText="No matter the stage of your company, we stand behind our promise to provide exceptional customer support, from initial setups to massive migrations and everything in between. Invest in your business with peace of mind that we're here for you whether you need technical help or business advice."
        backgroundColor="#FEECFB"
      />
      <TextPicture
        title="S/1"
        text="Creator Guide"
        buttonText="Download"
        titleColor="#DB0BB9"
        backgroundColor="#FEECFB"
        buttonPrimaryColor="#FFFFFF"
        buttonHoverColor="#FFFFFF"
        buttonSecondaryColor="#FFFFFF"
        image={book}
        imageReverse
      />
      <TextPicture
        title="S/2"
        text="Merchant of Record Guide"
        buttonText="Download"
        titleColor="#DB0BB9"
        backgroundColor="#FEECFB"
        buttonPrimaryColor="#FFFFFF"
        buttonHoverColor="#FFFFFF"
        buttonSecondaryColor="#FFFFFF"
        image={book2}
        imageReverse
      />
      <TextPicture
        title="S/3"
        text="Want merch?"
        buttonText="Get on the list"
        titleColor="#DB0BB9"
        backgroundColor="#FEECFB"
        buttonPrimaryColor="#FFFFFF"
        buttonHoverColor="#FFFFFF"
        buttonSecondaryColor="#FFFFFF"
        image={tshirt}
        imageReverse
      />
      <TextPicture
        title="S/4"
        text="Need help?"
        buttonText="Help center"
        titleColor="#DB0BB9"
        backgroundColor="#FEECFB"
        buttonPrimaryColor="#FFFFFF"
        buttonHoverColor="#FFFFFF"
        buttonSecondaryColor="#FFFFFF"
        image={needHelp}
        imageReverse
      />
      <Footer
        title="ELEVATE YOUR BUSINESS"
        text="Take your business to the next level with Lemon Squeezy"
        buttonText="Get started for free"
        titleColor="#FFC233"
        backgroundColor="#5423E6"
        buttonPrimaryColor="#FFFFFF"
        buttonHoverColor="#FFC233"
        buttonSecondaryColor="#FFD266"
      />
    </>
  );
}
