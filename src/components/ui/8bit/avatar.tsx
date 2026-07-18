import type React from "react";
import { forwardRef, useState } from "react";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import "@/components/ui/8bit/styles/retro.css";

export const avatarVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: "retro",
    },
    variant: {
      default: "",
      retro: "",
      pixel: "",
    },
  },
  defaultVariants: {
    font: "retro",
    variant: "pixel",
  },
});

const PixelFrame = () => (
  <div
    className="absolute inset-0 w-full h-full pointer-events-none"
    style={{ zIndex: 10 }}
  >
    <div className="absolute top-0 left-[23%] right-[23%] h-[7%] bg-white"></div>
    <div className="absolute top-[6.25%] left-[17%] right-[17%] h-[7%] bg-white"></div>
    <div className="absolute top-[12.5%] left-[11%] h-[7%] bg-white w-[20%]"></div>
    <div className="absolute top-[12.5%] right-[11%] h-[7%] bg-white w-[20%]"></div>
    <div className="absolute top-[18.75%] left-[5%] w-[20%] h-[7%] bg-white"></div>
    <div className="absolute top-[18.75%] right-[5%] w-[20%] h-[7%] bg-white"></div>
    <div className="absolute top-[25%] left-0 w-[20%] h-[7%] bg-white"></div>
    <div className="absolute top-[25%] right-0 w-[20%] h-[7%] bg-white"></div>
    <div className="absolute top-[31.25%] left-0 w-[13.5%] h-[13%] bg-white"></div>
    <div className="absolute top-[31.25%] right-0 w-[13.5%] h-[13%] bg-white"></div>
    <div className="absolute top-[43.75%] left-0 w-[13.5%] h-[7%] bg-white"></div>
    <div className="absolute top-[43.75%] right-0 w-[13.5%] h-[7%] bg-white"></div>
    <div className="absolute top-[50%] left-0 w-[13.5%] h-[7%] bg-white"></div>
    <div className="absolute top-[50%] right-0 w-[13.5%] h-[7%] bg-white"></div>
    <div className="absolute top-[56.25%] left-0 w-[13.5%] h-[13%] bg-white"></div>
    <div className="absolute top-[56.25%] right-0 w-[13.5%] h-[13%] bg-white"></div>
    <div className="absolute top-[68.75%] left-0 w-[20%] h-[7%] bg-white"></div>
    <div className="absolute top-[68.75%] right-0 w-[20%] h-[7%] bg-white"></div>
    <div className="absolute top-[75%] left-[5%] w-[20%] h-[7%] bg-white"></div>
    <div className="absolute top-[75%] right-[5%] w-[20%] h-[7%] bg-white"></div>
    <div className="absolute top-[81.25%] left-[11%] h-[7%] bg-white w-[20%]"></div>
    <div className="absolute top-[81.25%] right-[11%] h-[7%] bg-white w-[20%]"></div>
    <div className="absolute top-[87.5%] left-[17%] right-[17%] h-[7%] bg-white"></div>
    <div className="absolute bottom-0 left-[23%] right-[23%] h-[7%] bg-white"></div>
  </div>
);

const Borders = () => (
  <>
    <div className="absolute top-0 left-0 w-full h-1.5 bg-foreground dark:bg-ring pointer-events-none" />
    <div className="absolute bottom-0 w-full h-1.5 bg-foreground dark:bg-ring pointer-events-none" />
    <div className="absolute top-1.5 -left-1.5 w-1.5 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
    <div className="absolute bottom-1.5 -left-1.5 w-1.5 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
    <div className="absolute top-1.5 -right-1.5 w-1.5 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
    <div className="absolute bottom-1.5 -right-1.5 w-1.5 h-1/2 bg-foreground dark:bg-ring pointer-events-none" />
  </>
);

const Avatar = forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & {
    font?: "normal" | "retro";
    variant?: "default" | "retro" | "pixel";
    flipImage?: string;
  }
>(
  (
    {
      className = "",
      font,
      variant = "pixel",
      flipImage = "/src/assets/avatar.png",
      children,
      ...props
    },
    ref,
  ) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const isPixel = variant === "pixel";
    const hasFlip = !!flipImage;

    const renderAvatarContent = (imageSrc?: string) => (
      <>
        {isPixel && <PixelFrame />}

        <AvatarPrimitive.Root
          ref={ref}
          data-slot="avatar"
          className={cn(
            "relative flex size-10 shrink-0 overflow-hidden text-xs",
            !isPixel && "rounded-none",
            isPixel && "rounded-full",
            font !== "normal" && "retro",
            variant === "retro" && "image-rendering-pixelated",
            className,
          )}
          {...props}
        >
          {imageSrc ? <AvatarImage src={imageSrc} alt="Avatar" /> : children}
        </AvatarPrimitive.Root>

        {!isPixel && <Borders />}
      </>
    );

    return (
      <div
        className={cn(
          "relative size-max",
          hasFlip && "flip-container cursor-pointer",
          hasFlip && isFlipped && "flipped",
          className,
        )}
        onClick={() => hasFlip && setIsFlipped(!isFlipped)}
      >
        {hasFlip ? (
          <div className="flipper">
            <div className="flip-front">{renderAvatarContent()}</div>
            <div className="flip-back">{renderAvatarContent(flipImage)}</div>
          </div>
        ) : (
          renderAvatarContent()
        )}
      </div>
    );
  },
);
Avatar.displayName = AvatarPrimitive.Root.displayName;

interface BitAvatarImageProps extends React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Image
> {
  font?: "normal" | "retro";
  variant?: "default" | "retro" | "pixel";
}

const AvatarImage = forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Image>,
  BitAvatarImageProps
>(({ className, font, ...props }, ref) => {
  return (
    <AvatarPrimitive.Image
      ref={ref}
      data-slot="avatar-image"
      className={cn(
        "aspect-square h-full w-full object-cover",
        font === "retro" && "retro",
        className,
      )}
      {...props}
    />
  );
});
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    data-slot="avatar-fallback"
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted text-foreground",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
