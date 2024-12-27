import taxCompliance from "../../public/tax-compliance.jpg";
import saasPayments from "../../public/saas-payments.jpg";
import instantPayment from "../../public/instant-payment.jpg";
import currency from "../../public/currency.jpg";
import fraud from "../../public/fraud.jpg";
import paymentRecovery from "../../public/payment-recovery.jpg";
import firstLeft from "../../public/firstLeft.jpg";
import firstRight from "../../public/firstRight.jpg";

import Header from "@/components/header";
import SimpleText from "@/components/simpleText";
import InteractiveFeatures from "@/components/interactiveFeatures";
import { Feature } from "@/components/interactiveFeatures";
import featuresData from "@/app/features.json";
import DoubleText from "@/components/doubleText";
import DoubleImage from "@/components/doubleImage";

const imageMapping = {
  taxCompliance,
  saasPayments,
  instantPayment,
  currency,
  fraud,
  paymentRecovery,
};

const features: Feature[] = featuresData.map((feature) => ({
  ...feature,
  imageSrc: imageMapping[feature.imageSrc as keyof typeof imageMapping],
}));

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
      <InteractiveFeatures features={features} />
      <DoubleText
        titleColor="#D50B3E"
        title="ecommerce"
        text="Create the perfect buying experience for your customers"
        secondaryText="Launch your secure ecommerce website and start selling software, subscriptions and digital downloads anywhere in minutes. Utilize no-code checkout links without worrying about design, mobile optimization, or payment integrations. It really is easy-peasy."
      />
      <DoubleImage firstLeft={firstLeft} firstRight={firstRight} />
    </>
  );
}
