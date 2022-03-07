import { extendTheme } from "@chakra-ui/react";
import {colors} from '@/chakra-base-branding'
import { Button } from "./components";

const components = {
  Button
}

export default extendTheme({colors, components})
