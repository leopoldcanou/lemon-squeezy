import InteractiveFeatures from "@/components/interactiveFeatures";
import taxCompliance from "../../../public/tax-compliance.jpg";
import saasPayments from "../../../public/saas-payments.jpg";
import instantPayment from "../../../public/instant-payment.jpg";
import currency from "../../../public/currency.jpg";
import fraud from "../../../public/fraud.jpg";
import paymentRecovery from "../../../public/payment-recovery.jpg";
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

export default function Page() {
  return <InteractiveFeatures features={features} />;
}
