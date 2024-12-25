import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { isUserLoggedIn, removeUser } from "services/auth.service";
import { toast } from "sonner";

const LazyBtn = () => {
  const router = useRouter();
  const userLoggedIn = isUserLoggedIn();

  const handleLogOut = () => {
    removeUser();
    router.refresh();
    toast.success("Logout Successful");
  };
  return (
    <div>
      {userLoggedIn ? (
        <Button onClick={handleLogOut} variant="contained" color="primary">
          Logout
        </Button>
      ) : (
        <Button
          LinkComponent={Link}
          href="/login"
          variant="contained"
          color="primary"
        >
          Login
        </Button>
      )}
    </div>
  );
};

export default LazyBtn;
