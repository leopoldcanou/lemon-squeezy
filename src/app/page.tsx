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
      <TestimonialsGrid testimonials={testimonials} />
    </>
  );
}
