export function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: "#062a4d",
      height: 60,
      width: 60,
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
