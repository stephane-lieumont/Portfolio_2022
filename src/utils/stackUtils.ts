import { StackType } from "~/interfaces/data.intf"
import { StackList } from "~/datas/stacks.data"

export const getStack = (type: StackType) => {
  return StackList.find( stack => stack.type === type)
}