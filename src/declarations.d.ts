declare module "*.svg" {
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}

declare module "redux-persist/lib/storage" {
  import { WebStorage } from "redux-persist/es/types";
  const storage: WebStorage;
  export default storage;
}
