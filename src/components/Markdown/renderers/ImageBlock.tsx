import { Github } from "../../../services/github";

export function ImageBlock(props: any) {
  return <img src={Github.getContentURL(props.src)} alt="" />;
}
