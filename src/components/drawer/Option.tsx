import { type MenuOption } from "@/types/menu";

interface Props {
  option: MenuOption;
}
export default function Option({ option }: Props) {
  const Icon = option.icon;
  return (
    <div className="option">
      <div className="absolute left-2">
        <Icon />
      </div>
      <div> {option.text}</div>
    </div>
  );
}
