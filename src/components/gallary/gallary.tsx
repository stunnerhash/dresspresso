import Image from "next/image";
import { Picture } from "@prisma/client";
import { cn } from "@/lib/utils";

export function Gallary({
  className,
  pictures,
  onClick = () => {},
  children,
}: {
  className?: string;
  pictures: File[] | Picture[];
  onClick?: (a: number) => void;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "no-scrollbar container max-h-[30rem] select-none columns-4 gap-0 overflow-x-auto	",
        className,
      )}
    >
      {pictures.map((item, index) => (
        <div
          key={index}
          className="group relative p-1"
          onClick={() => onClick(index)}
        >
          <div className="overflow-hidden">
            <Image
              src={item instanceof File ? URL.createObjectURL(item) : item.url}
              className="transition-all duration-300 group-hover:-rotate-3 group-hover:scale-75 group-hover:opacity-50"
              width={100}
              height={100}
              alt=""
            />
          </div>
          {children}
        </div>
      ))}
    </div>
  );
}
