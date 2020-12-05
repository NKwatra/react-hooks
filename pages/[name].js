import { Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import Navigation from "../components/Navigation";

export default function HookPage(props) {
  const router = useRouter();
  const { name } = router.query;
  return (
    <>
      <Navigation active={name} />
      <Typography>{name}</Typography>
    </>
  );
}
