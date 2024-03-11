import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { X } from "lucide-react";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const imageSchema = z.object({
  image: z
    .any()
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max image size is 5MB.`,
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported.",
    ),
});

const imagesSchema = z.array(imageSchema);

export default function UploadDialog({
  open,
  selectedPictures,
  handleClose,
  handleDelete,
  handleUpload,
}: {
  open: boolean;
  selectedPictures: File[];
  handleClose: () => void;
  handleUpload: () => void;
  handleDelete: (a: number) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Selected Pictures</DialogTitle>
          <DialogDescription>
            Are you sure you want to upload these pictures?
          </DialogDescription>
        </DialogHeader>
        <ul className="flex max-h-96 flex-col flex-wrap items-start justify-start overflow-y-auto">
          {selectedPictures.slice(0, 10)?.map((item: File, index) => {
            return (
              <div
                key={index}
                className="group relative w-1/4 p-1"
                onClick={() => handleDelete(index)}
              >
                <div className="overflow-hidden">
                  <Image
                    src={URL.createObjectURL(item)}
                    className="transition-all duration-300 group-hover:-rotate-3 group-hover:scale-75 group-hover:opacity-50"
                    width={100}
                    height={100}
                    alt=""
                  />
                </div>
                <span
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform 
                    opacity-0 transition-all group-hover:opacity-100"
                >
                  <X />
                </span>
              </div>
            );
          })}
        </ul>
        <DialogFooter>
          <Button type="submit" onClick={handleUpload}>
            Upload
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
