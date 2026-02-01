import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="bg-linear-to-r from-secondary to-background min-h-[90vh]">
      <div className="w-11/12 mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center-safe justify-items-center-safe">
        {/* Left Content */}
        <div className="space-y-4 order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-14">
            Savor Every Bite,<br />
            <span className="text-chart-3">Delivered to Your Doorstep</span>
          </h1>

          <p className="mt-4 text-primary text-lg">
            Freshly prepared meals from Fooddy′s kitchen to your table in minutes
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href='/foods' className="btn btn-primary trns rounded-xl">
              Go to Cart
            </Link>

            <Link href='/register' className="btn btn-out trns rounded-xl">
              View Menu
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full mx-auto aspect-video relative order-1 md:order-2">
          <Image
            src={'/hero.png'}
            fill
            alt="Food delivery"
            className="object-contain"
          />
        </div>
      </div>
    </section>
    </main>
  );
}
