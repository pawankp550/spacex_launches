import Modal from "react-modal";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";
import { Launch } from "../../types/launch";
import { ReactComponent as WikiIcon } from "../../icons/wikipedia.svg";
import { ReactComponent as YtIcon } from "../../icons/yt.svg";

interface LaunchDetailsModal {
  isOpen: boolean;
  onClose: () => void;
  data: Launch;
}

export const LaunchDetailsModal: React.FC<LaunchDetailsModal> = ({
  isOpen,
  onClose,
  data,
}) => {
  const {
    links: { mission_patch_small, wikipedia, video_link },
    mission_name,
    rocket: { rocket_name },
  } = data;

  return (
    <Modal isOpen={isOpen}>
      <div className="p-2">
        <span className="flex justify-end">
          <CrossIcon onClick={onClose} className="cursor-pointer" />
        </span>
        <div className="flex gap-2">
          <img src={mission_patch_small} className="h-20 w-20" />
          <div className="flex flex-col gap-2">
            <span className="font-medium">{mission_name}</span>
            <span className="text-sm">{rocket_name}</span>
            <div className="flex gap-2">
              <a href={wikipedia} target="_blank">
                <WikiIcon className="h-3 w-3" />
              </a>
              <a href={video_link} target="_blank">
                <YtIcon className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
