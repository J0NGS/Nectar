import { SlOptionsVertical } from "react-icons/sl";
import { Dropdown } from "antd";
import { MenuProps } from "antd/lib";

export interface CustomActions {
  on: () => void;
  label?: string;
}

interface ActionMenuProps {
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onDisable?: () => void;
  onEnable?: () => void;
  actions?: CustomActions[];
}

export const ActionsMenu = ({
  onView,
  onEdit,
  onDelete,
  onDisable,
  onEnable,
  actions,
}: ActionMenuProps) => {
  const items: MenuProps["items"] = [];
  
  onView && items.push({ key: "view", onClick: onView, label: "Visualizar" });
  onEdit && items.push({ key: "edit", onClick: onEdit, label: "Editar" });
  onDisable &&
    items.push({ key: "disable", onClick: onDisable, label: "Desativar" });
  onEnable && items.push({ key: "enable", onClick: onEnable, label: "Ativar" });
  onDelete &&
    items.push({ key: "delete", onClick: onDelete, label: "Excluir" });

  actions &&
    actions.forEach((action, i) => {
      if (items.includes({ key: `custom-action-${i}` })) return;
      items.push({
        key: `custom-action-${i}`,
        onClick: action.on,
        label: action.label,
      });
    });

  return (
    <Dropdown menu={{ items }} placement="bottom">
      <div className="cursor-pointer flex justify-center items-center rounded-full p-2 max-w-min  text-black hover:bg-gray-200">
        <SlOptionsVertical />
      </div>
    </Dropdown>
  );
};
