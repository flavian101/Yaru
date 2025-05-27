
import Link from "next/link";
export default function Home() {
  return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(/hero.jpg)",
  }}
>
  <div className="hero-overlay bg-transparent"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold animate__animated animate__fadeInUp">Hello there</h1>
      <p className="mb-5 animate__animated animate__fadeInUp">
       Welcome to Yaru your personalized Project Task Manager
      </p>
      <Link
      href={'/login'}
       className="btn btn-primary">Get Started</Link>
    </div>
  </div>
</div>
  );
}
