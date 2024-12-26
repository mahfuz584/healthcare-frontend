import { TUserRole } from "@/types/common";
import { generateDrawerItem } from "@/utils/generateDrawerItem";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarOptions = () => {
  const pathName = usePathname();

  return (
    <Box>
      {" "}
      <List>
        {generateDrawerItem("doctor" as TUserRole).map(
          ({ href, label, icon: Icon }, idx) => {
            const linkPath = `/dashboard/${href}`;
            return (
              <Box key={idx} component={Link} href={linkPath} passHref>
                <ListItem
                  sx={{
                    borderRight:
                      pathName === linkPath ? "4px solid #3f51b5" : "none",
                  }}
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={label} />
                  </ListItemButton>
                </ListItem>
              </Box>
            );
          }
        )}
      </List>
    </Box>
  );
};

export default SidebarOptions;
