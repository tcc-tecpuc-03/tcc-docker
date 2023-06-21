import React, { useRef } from "react";
import { Button } from "../Button";

interface UploadImageProps {
  onUpload: (file: File) => void;
}

export function UploadImage({ onUpload }: UploadImageProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      onUpload(file);
    }
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        className="hidden"
        onChange={handleFileChange}
      />
      <Button
        buttonProps={{
          style: { width: "100%" },
          onClick: handleButtonClick,
        }}
      >
Selecionar foto
      </Button>
    </div>
  );
}
