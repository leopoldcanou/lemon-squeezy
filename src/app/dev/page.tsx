import FeatureGrid, { FeatureGridInterface } from "@/components/featuresGrid";
import featuresGridData from "@/app/FeaturesGrid.json";

const features: FeatureGridInterface[] = featuresGridData;

export default function Page() {
  return <FeatureGrid idColor="#D50B3E" features={features} />;
}
