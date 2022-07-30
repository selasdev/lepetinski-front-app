import { LinkProps } from "@mui/material";
import { Link } from "../components/atoms/Link/index";

export const components = {
  components: {
    MuiLink: {
      defaultProps: {
        component: Link,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: Link,
      },
    },
  },
};
