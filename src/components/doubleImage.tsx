import Image, { StaticImageData } from "next/image";

interface doubleImageProps {
  firstLeft: StaticImageData;
  firstRight: StaticImageData;
}

export default function DoubleImage({
  firstLeft,
  firstRight,
}: doubleImageProps) {
  return (
    <div className="flex flex-row">
      <div className="w-1/2">
        <Image src={firstLeft} alt="first left image" layout="responsive" />
      </div>
      <div className="w-1/2">
        <Image src={firstRight} alt="first right image" layout="responsive" />
      </div>
    </div>
  );
}
