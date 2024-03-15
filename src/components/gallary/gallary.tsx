import Image from "next/image";
import { Picture } from "@prisma/client";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export function Gallary({
  className,
  pictures,
  onClick = () => {},
}: {
  pictures: (Blob | Picture)[];
  className?: string;
  onClick?: (a: number) => void;
}) {
  return (
    <div
      className={cn(
        "no-scrollbar select-none columns-4 gap-0 overflow-x-auto",
        className,
      )}
    >
      {pictures.map((picture, index) => (
        <GallaryPicture
          key={index}
          picture={picture}
          onClick={() => onClick(index)}
          className="active:scale-0"
        />
      ))}
    </div>
  );
}

function GallaryPicture({
  picture,
  onClick = () => {},
  className,
}: {
  picture: Blob | Picture;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <div onClick={onClick}>
      <div
        className={cn(
          className,
          "group relative overflow-hidden p-1 transition-all",
        )}
      >
        <Image
          src={
            picture instanceof Blob ? URL.createObjectURL(picture) : picture.url
          }
          className="transition-all duration-300 group-hover:-rotate-3 group-hover:scale-75 group-hover:opacity-50"
          width={100}
          height={100}
          alt={"uploaded picture"}
        />
        <X className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 transform transition-all group-hover:scale-100" />
      </div>
    </div>
  );
}
