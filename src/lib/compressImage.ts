
export function compressImage(file: File, callback: (file: Blob) => void): void {
  const maxSizeKB = 50;
  const quality = 0.7; // Initial quality

  const reader = new FileReader();

  reader.onload = function (): void {
      const image = new Image();
      image.src = reader.result as string;

      image.onload = function (): void {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          if (!ctx) {
              console.error('Failed to create canvas context.');
              return;
          }

          // Calculate new dimensions while maintaining aspect ratio
          let width = image.width;
          let height = image.height;
          const maxDimension = Math.max(width, height);
          const scaleFactor = maxDimension / 1000; // scale factor for target file size

          if (maxDimension > 1000) {
              width /= scaleFactor;
              height /= scaleFactor;
          }

          canvas.width = width;
          canvas.height = height;

          // Draw image on canvas with new dimensions
          ctx.drawImage(image, 0, 0, width, height);

          // Convert canvas to Blob
          canvas.toBlob(blob => {
              if (!blob) {
                  console.error('Failed to compress image.');
                  return;
              }

              // Check file size, if it's larger than maxSizeKB, decrease quality and compress again
              if (blob.size / 1024 > maxSizeKB) {
                  const newQuality: number = quality * (maxSizeKB / (blob.size / 1024));
                  // Compress again with new quality
                  canvas.toBlob(newBlob => {
                      if (!newBlob) {
                          console.error('Failed to compress image.');
                          return;
                      }
                      callback(newBlob);
                  }, 'image/jpeg', newQuality);
              } else {
                  callback(blob);
              }
          }, 'image/jpeg', quality);
      };
  };

  reader.readAsDataURL(file);
}
