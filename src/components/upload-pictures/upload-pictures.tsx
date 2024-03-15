"use client";
import { FileInput } from "@/components/ui/file-input";
import { Plus } from "lucide-react";
import { ChangeEvent, useRef, useState } from "react";
import UploadDialog from "./upload-dialog";
import { compressImage } from "@/lib/compressImage";

export default function UploadPicture() {
  const input = useRef<HTMLInputElement>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedPictures, setSelectedPictures] = useState<Blob[]>([]);
  function handleClick() {
    input?.current?.click();
  }
  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    if (input?.current?.files?.length) {
      const files = Array.from(input.current.files);
      let newSelectedPictures: Blob[] = [];
      files.map((file, index) => {
        compressImage(file, (compressedFile) => {
          newSelectedPictures.push(compressedFile);
          if (files.length === newSelectedPictures.length)
            setSelectedPictures(newSelectedPictures);
        });
      });
      input.current.value = "";
      setShowDialog(true);
    }
  }

  function handleDelete(index: number) {
    setSelectedPictures((prev) => {
      const newPictures = [...prev];
      newPictures.splice(index, 1);
      if (newPictures.length === 0) setShowDialog(false);
      return newPictures;
    });
  }

  function handleUpload() {
    setShowDialog(false);
  }
  return (
    <>
      <div className="fixed bottom-4 right-4 m-4">
        <FileInput
          name="pictures"
          className="hidden"
          onChange={handleInput}
          ref={input}
          accept="image/jpeg, image/png, image/webp, image/heic, image/heif"
        />
        <Plus
          className="h-10 w-10 cursor-pointer rounded-full bg-muted p-2 transition-all hover:scale-110 active:scale-90"
          onClick={handleClick}
        />
      </div>
      <UploadDialog
        open={showDialog}
        selectedPictures={selectedPictures}
        handleClose={() => setShowDialog(false)}
        handleDelete={handleDelete}
        handleUpload={handleUpload}
      />
    </>
  );
}
