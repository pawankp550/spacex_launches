import Modal from "react-modal";
import { ReactComponent as CrossIcon } from "../../icons/cross.svg";
import { Launch } from "../../types/launch";
import { ReactComponent as WikiIcon } from "../../icons/wikipedia.svg";
import { ReactComponent as YtIcon } from "../../icons/yt.svg";
import { formatDate } from "../../utils/launch";

interface LaunchDetailsModal {
  isOpen: boolean;
  onClose: () => void;
  data: Launch;
}

const getStatus = (upcoming: boolean, launch_success: boolean) => {
  if (upcoming) {
    return (
      <span className="bg-yellow-100 rounded-full px-4 py-1 text-yellow-800">
        {"Upcoming"}
      </span>
    );
  }

  if (launch_success) {
    return (
      <span className="bg-green-100 rounded-full px-4 py-1 text-green-800">
        {"Sucsess"}
      </span>
    );
  }

  return (
    <span className="bg-red-100 rounded-full px-4 py-1 text-red-800">
      {"Failed"}
    </span>
  );
};

export const LaunchDetailsModal: React.FC<LaunchDetailsModal> = ({
  isOpen,
  onClose,
  data,
}) => {
  const {
    links: { mission_patch_small, wikipedia, video_link },
    mission_name,
    rocket: {
      rocket_name,
      rocket_type,
      second_stage: { payloads },
    },
    upcoming,
    launch_success,
    details,
    flight_number,
    launch_date_utc,
    launch_site: { site_name },
  } = data;

  return (
    <Modal
      isOpen={isOpen}
      className="border-1 drop-shadow-md bg-white p-2 top-40 absolute w-3/4"
      overlayClassName="w-full h-full flex justify-center items-center"
      shouldCloseOnOverlayClick={true}
    >
      <div className="p-2">
        <span className="flex justify-end">
          <CrossIcon onClick={onClose} className="cursor-pointer h-2 w-2" />
        </span>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <img src={mission_patch_small} className="h-20 w-20" />
            <div className="flex flex-col gap-2 align-top">
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
            <div>{getStatus(upcoming, launch_success)}</div>
          </div>
          <div>
            <span>{details}.</span>
            <span>
              <a href={wikipedia} className="text-blue-800">
                {" "}
                Wikipedia{" "}
              </a>
            </span>
          </div>
        </div>
        <div className="pt-5">
          <div className="border-b border-gray-100 p-2">
            <span className="mr-20">Flight Number</span>
            {flight_number}
          </div>
          <div className="border-b border-gray-100 p-2">
            <span className="mr-20">Mission Name</span>
            {mission_name}
          </div>
          <div className="border-b border-gray-100 p-2">
            <span className="mr-20">Rocket Type</span>
            {rocket_type}
          </div>
          <div className="border-b border-gray-100 p-2">
            <span className="mr-20">Rocket Name</span>
            {rocket_name}
          </div>
          <div className="border-b border-gray-100 p-2">
            <span className="mr-20">Manufacturer</span>
            {payloads[0]?.manufacturer || "-"}
          </div>
          <div className="border-b border-gray-100 p-2">
            <span className="mr-20">Launch Date</span>
            {formatDate(launch_date_utc)}
          </div>
          <div className="border-b border-gray-100 p-2">
            <span className="mr-20">Payload Type</span>
            {payloads[0]?.payload_type || "-"}
          </div>
          <div className="border-b border-gray-100 p-2">
            <span className="mr-20">Orbit</span>
            {payloads[0]?.orbit || "-"}
          </div>
          <div className="p-2">
            <span className="mr-20">Launch Site</span>
            {site_name}
          </div>
        </div>
      </div>
    </Modal>
  );
};
