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
import { useEffect, useState } from "react";
import { getUserInfo } from "services/auth.service";

const SidebarOptions = () => {
  const pathName = usePathname();
  const [userRole, setUserRole] = useState<TUserRole | null>(null);

  useEffect(() => {
    const { role } = getUserInfo();
    setUserRole(role);
  }, []);

  return (
    <Box>
      {" "}
      <List>
        {generateDrawerItem(userRole as TUserRole).map(
          ({ href, label, icon: Icon }, idx) => {
            const linkPath = `/dashboard/${href}`;
            return (
              <Box key={idx} component={Link} href={linkPath} passHref>
                <ListItem
                  sx={{
                    ...(pathName === linkPath && {
                      borderRight: "4px solid #080f58",
                      color: "text.blue",
                      fontWeight: "600",
                      "& svg": {
                        color: "text.blue",
                      },
                    }),
                  }}
                  disablePadding
                >
                  <ListItemButton sx={{}}>
                    <ListItemIcon>
                      <Icon size="22px" />
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
