import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Gallary } from "../gallary/gallary";
import * as z from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

const MAX_FILE_SIZE = 10000000;
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
      `Max image size is 10MB.`,
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
  selectedPictures: Blob[];
  handleClose: () => void;
  handleUpload: () => void;
  handleDelete: (a: number) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="select-none">
        <DialogHeader>
          <DialogTitle>Selected Pictures</DialogTitle>
          <DialogDescription>
            Are you sure you want to upload these pictures?
          </DialogDescription>
        </DialogHeader>
        <Gallary
          className="max-h-[30rem] min-h-80 "
          pictures={selectedPictures}
          onClick={handleDelete}
        />
        <DialogFooter>
          <Button type="submit" onClick={handleUpload}>
            Upload
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
