import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[50vh] bg-red-100 relative">
      <Image className="object-contain" fill={true} src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=" alt="" />
    </div>
  );
}
