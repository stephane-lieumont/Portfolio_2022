import { StackList } from "~/datas/stacks.data";
import { StackType } from "~/interfaces/data.intf";

export const getStack = (type: StackType) => {
  return StackList.find((stack) => stack.type === type);
};
