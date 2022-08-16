import { StackType } from "~/interfaces/Data.intf"
import { StackList } from "~/__mock__/data/stacks.data"

export const getStack = (type: StackType) => {
  return StackList.find( stack => stack.type === type)
}