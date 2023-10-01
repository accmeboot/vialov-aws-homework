import Products from "~/components/pages/PageProducts/components/Products";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function PageProducts() {
  return (
    <Box py={3}>
      <Typography fontSize={48} textAlign="center">
        SERVERLESS DEPLOYED
      </Typography>
      <Products />
    </Box>
  );
}
