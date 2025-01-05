import { Grid2, Skeleton } from "@mui/material";

const SkeletonGrid = () => {
  // Define an array of items for demonstration (can be fetched data or anything)
  const skeletonItems = new Array(6).fill(null); // creates an array of 6 empty elements

  return (
    <Grid2 container spacing={2}>
      {skeletonItems.map((_, index) => (
        <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4 }}>
          <Skeleton variant="rectangular" width="100%" height={200} />
          <Skeleton variant="text" width="80%" height={20} />
          <Skeleton variant="text" width="60%" height={20} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default SkeletonGrid;
