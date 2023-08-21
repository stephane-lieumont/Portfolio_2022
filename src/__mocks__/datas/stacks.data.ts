import { StackItem, StackType } from "~/interfaces/data.intf";

export const StackList: StackItem[] = [
  {
    toString: "3DSmax",
    type: StackType.max,
    iconClass: "icon-custom--3dsmax",
  },
  {
    toString: "Vray",
    type: StackType.vray,
    iconClass: "icon-custom--vray",
  },
  {
    toString: "Substance",
    type: StackType.substance,
    iconClass: "icon-custom--substance-painter",
  },
  {
    toString: "ZBrush",
    type: StackType.zbrush,
    iconClass: "icon-custom--zbrush",
  },
  {
    toString: "Illustrator",
    type: StackType.illustrator,
    iconClass: "icon-custom--illustrator",
  },
  {
    toString: "Photoshop",
    type: StackType.photoshop,
    iconClass: "icon-custom--photoshop",
  },
];
