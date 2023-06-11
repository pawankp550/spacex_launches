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
      className="border-1 drop-shadow-md bg-white p-2 top-40 absolute w-1/2"
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
          <table>
            <tr className="border-b border-gray-100">
              <td className="py-2 pr-10">Flight Number</td>
              <td>{flight_number}</td>
            </tr>
            <tr className="border-b border-gray-100 p-2">
              <td className="py-2 pr-10">Mission Name</td>
              <td>{mission_name}</td>
            </tr>
            <tr className="border-b border-gray-100 p-2">
              <td className="py-2 pr-10">Rocket Type</td>
              <td>{rocket_type}</td>
            </tr>
            <tr className="border-b border-gray-100 p-2">
              <td className="py-2 pr-10">Rocket Name</td>
              <td>{rocket_name}</td>
            </tr>
            <tr className="border-b border-gray-100 p-2">
              <td className="py-2 pr-10">Manufacturer</td>
              <td>{payloads[0]?.manufacturer || "-"}</td>
            </tr>
            <tr className="border-b border-gray-100 p-2">
              <td className="py-2 pr-10">Launch Date</td>
              <td>{formatDate(launch_date_utc)}</td>
            </tr>
            <tr className="border-b border-gray-100 p-2">
              <td className="py-2 pr-10">Payload Type</td>
              <td>{payloads[0]?.payload_type || "-"}</td>
            </tr>
            <tr className="border-b border-gray-100 p-2">
              <td className="py-2 pr-10">Orbit</td>
              <td>{payloads[0]?.orbit || "-"}</td>
            </tr>
            <tr className="p-2">
              <td className="py-2 pr-10">Launch Site</td>
              <td>{site_name}</td>
            </tr>
          </table>
        </div>
      </div>
    </Modal>
  );
};
