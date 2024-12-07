import Hero from "@/components/Home/Hero";
import Specialist from "@/components/Home/Specialist";
import TopDoctors from "@/components/Home/TopDoctors";
import { serverSideDataFetch } from "@/utils/fetcher/serverSideDataFetch";

const HomePage = async () => {
  const specialties = await serverSideDataFetch("specialties");
  const topDoctorsData = await serverSideDataFetch("doctor?page=1&limit=4");
  console.log("🚀 ~ topDoctorsData", topDoctorsData);

  return (
    <>
      <Hero />
      <Specialist specialistData={specialties?.data} />
      <TopDoctors topDoctors={topDoctorsData?.data} />
    </>
  );
};

export default HomePage;
