import * as React from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements extends global.JSX.IntrinsicElements {}
  }
}

export {};
