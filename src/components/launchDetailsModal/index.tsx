import classNames from "classnames";
import Modal from "react-modal";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";

interface LaunchDetailsModal {
  isOpen: boolean;
}

export const LaunchDetailsModal: React.FC<LaunchDetailsModal> = ({
  isOpen,
}) => {
  return (
    <Modal isOpen={isOpen}>
      <div className="p-2">
        <span className="flex justify-end">
          <CrossIcon />
        </span>
      </div>
    </Modal>
  );
};
