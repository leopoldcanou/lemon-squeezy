import Button from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";

interface TextPictureProps {
  title: string;
  text: string;
  buttonText: string;
  titleColor: string;
  backgroundColor: string;
  buttonPrimaryColor: string;
  buttonHoverColor: string;
  buttonSecondaryColor: string;
  image: StaticImageData;
  imageReverse?: boolean;
  darkMode?: boolean;
}

export default function TextPicture({
  title,
  text,
  buttonText,
  titleColor,
  backgroundColor,
  buttonPrimaryColor,
  buttonHoverColor,
  buttonSecondaryColor,
  image,
  imageReverse = false,
  darkMode,
}: TextPictureProps) {
  return (
    <div className="flex">
      {imageReverse === true ? (
        <div className="hidden w-1/2 flex-1 md:block">
          <Image
            src={image}
            alt="Image"
            className="h-full w-full object-cover"
          />
        </div>
      ) : null}
      <div className="w-1/2 flex-1">
        <div
          className="flex h-full flex-col justify-center p-8 md:p-24"
          style={{ backgroundColor }}
        >
          <p
            className="mb-4 font-inter text-sm font-medium"
            style={{ color: titleColor }}
          >
            {title}
          </p>
          <h2
            className="mb-8 font-circular-pro-book text-4xl leading-[1.22]"
            style={{ color: darkMode ? "#FFFFFF" : "#000000" }}
          >
            {text}
          </h2>
          <Button
            primaryColor={buttonPrimaryColor}
            hoverColor={buttonHoverColor}
            secondaryColor={buttonSecondaryColor}
          >
            {buttonText}
            <span className="ml-2">→</span>
          </Button>
        </div>
      </div>
      {imageReverse === false ? (
        <div className="hidden w-1/2 flex-1 md:block">
          <Image
            src={image}
            alt="Image"
            className="h-full w-full object-cover"
          />
        </div>
      ) : null}
    </div>
  );
}
