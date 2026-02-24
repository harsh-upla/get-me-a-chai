import { FallingLines } from "react-loader-spinner";

const loading = () => {
  return (
      <div className="w-full h-[88.2vh] flex items-center justify-center ">
        <FallingLines
          color="#051a49d6"
          width="200"
          visible={true}
          ariaLabel="falling-circles-loading"
        />
      </div>
  );
};

export default loading;
