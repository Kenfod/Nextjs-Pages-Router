import CabinList from "@/components/CabinList";
import { getCabins } from "@/lib/data-service";
import Head from "next/head";

// STATIC SITE GENERATION (SSG) - statically generated
export async function getStaticProps() {
  const cabins = await getCabins();
  return { props: { cabins } };
}

function Cabins({ cabins }) {
  console.log(cabins);

  return (
    <>
      <Head>
        <title>Cabins | Nomad Lounge</title>
      </Head>

      <div>
        {/* {" "} */}
        <h1 className="text-4xl mb-5 text-accent-400 font-medium">
          Our Deluxe Cabins
        </h1>
        <p className="text-primary-200 text-lg mb-10">
          Nestled in the heart of exclusive, serene woodlands, the Nomad Lounge
          cabins offer the ultimate luxury mountain escape. Designed for
          relaxation and rejuvenation, these deluxe sanctuaries feature private
          hot tubs, spacious elegant interiors, and breathtaking panoramic views
          of the surrounding forest and peaks. Each cabin combines rustic
          natural charm with modern premium amenities, making it a perfect,
          tranquil haven for guests seeking a peaceful slice of nirvana.
        </p>

        <CabinList cabins={cabins} />
      </div>
    </>
  );
}

export default Cabins;
