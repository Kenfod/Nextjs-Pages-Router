import CabinView from "@/components/CabinView";
import { getCabin } from "@/lib/data-service";
import Head from "next/head";
import { useRouter } from "next/router";

// SERVER SITE RENDERING (SSG) - Dynamically generated
export async function getServerSideProps({ params }) {
  const cabin = await getCabin(params.cabinId);
  return { props: { cabin } };
}

// An alternative to do SSG:
// getStaticPaths + getStaticProps

function Cabin({ cabin }) {
  // const router = useRouter();

  return (
    <>
      <Head>
        {/* <title>Cabin #{router.query.cabinId} | Nomad Lounge</title> */}
        <title>Cabin {cabin.name} | Nomad Lounge</title>
        <link rel="icon" href="logo.png" />
      </Head>

      <div className="max-w-6xl mx-auto mt-8">
        <CabinView cabin={cabin} />
      </div>
    </>
  );
}

export default Cabin;
