import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-[665px]">
      <Image
        src="/home.jpg"
        alt="Hero Image"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
