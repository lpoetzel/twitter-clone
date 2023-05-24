import Image from "next/image";

type ProfileImageProps = {
  src?: string | null;
  className?: string;
};

export function ProfileImage({ src, className = " " }: ProfileImageProps) {
  return (
    <>
      <div
        className={`e-12 relative h-12 overflow-hidden rounded-full ${className} `}
      >
        {src == null ? null : (
          <Image src={src} alt="Profile Image" quality={100} fill />
        )}
      </div>
    </>
  );
}
