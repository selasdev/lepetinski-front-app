import { forwardRef } from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

export const Link = forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
>((props, ref): JSX.Element => {
  const { href, ...other } = props;
  return <RouterLink ref={ref} to={href} {...other} />;
});
