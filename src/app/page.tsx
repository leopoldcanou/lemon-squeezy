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
import InteractiveFeatures, {
  FeatureInteractiveInterface,
} from "@/components/featuresInteractive";
import featuresInteractiveData from "@/app/featuresInteractive.json";
import FeatureGrid, { FeatureGridInterface } from "@/components/featuresGrid";
import featuresGridData from "@/app/FeaturesGrid.json";
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

const featuresInteractive: FeatureInteractiveInterface[] =
  featuresInteractiveData.map((feature) => ({
    ...feature,
    imageSrc: imageMapping[feature.imageSrc as keyof typeof imageMapping],
  }));

const featuresGrid: FeatureGridInterface[] = featuresGridData;

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
      />
      <DoubleImage firstLeft={firstLeft} firstRight={firstRight} />
      <FeatureGrid idColor="#D50B3E" features={featuresGrid} />
    </>
  );
}
