import Hero from "@/components/Home/Hero";
import Specialist from "@/components/Home/Specialist";
import TopDoctors from "@/components/Home/TopDoctors";
import WhyChooseUs from "@/components/Home/WhyChooseUs/WhyChooseUs";
import { serverSideDataFetch } from "@/utils/fetcher/serverSideDataFetch";
import { content } from "@helper/data/whyChoosUsContent";
import { Box } from "@mui/material";

const HomePage = async () => {
  const specialties = await serverSideDataFetch("specialties");
  const topDoctorsData = await serverSideDataFetch("doctor?page=1&limit=4");
  const chooseUsContent = [...content];

  return (
    <>
      <Hero />
      <Specialist specialistData={specialties?.data} />
      <TopDoctors topDoctors={topDoctorsData?.data} />
      <Box
        sx={{
          pt: 14,
        }}
      >
        <WhyChooseUs chooseUsContent={chooseUsContent} />
      </Box>
    </>
  );
};

export default HomePage;
