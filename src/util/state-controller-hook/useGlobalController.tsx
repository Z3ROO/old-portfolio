import { useContext } from "react";
import { GlobalControllerContext } from "../../App";

export default function useGlobalController() {
  return useContext(GlobalControllerContext)
}