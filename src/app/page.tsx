import taxCompliance from "../../public/tax-compliance.jpg";
import saasPayments from "../../public/saas-payments.jpg";
import instantPayment from "../../public/instant-payment.jpg";
import currency from "../../public/currency.jpg";
import fraud from "../../public/fraud.jpg";
import paymentRecovery from "../../public/payment-recovery.jpg";

import Header from "@/components/header";
import SimpleText from "@/components/simpleText";
import InteractiveFeatures from "@/components/interactiveFeatures";
import { Feature } from "@/components/interactiveFeatures";
import featuresData from "@/app/features.json";

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
    </>
  );
}
