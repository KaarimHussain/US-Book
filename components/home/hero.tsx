export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source 
          src="https://res.cloudinary.com/db7b4ozrz/video/upload/q_auto/f_auto/v1776383352/download_1_xjf8bc.mp4" 
          type="video/mp4" 
        />
      </video>
    </section>
  );
}