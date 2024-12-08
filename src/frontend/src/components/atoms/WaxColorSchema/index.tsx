import { Radio } from "antd";

export const WaxColorSchema = () => {
  return (
    <Radio.Group
      defaultValue="a"
      className="flex space-x-1"
      buttonStyle="solid"
      id="waxColorSchema"
    >
      <Radio.Button
        value="a"
        style={{
          width: "2rem",
          height: "2rem",
          backgroundColor: "#F59E0B", // Amarelo-500
          border: "2px solid transparent",
          borderRadius: "0.375rem", // rounded-md
        }}
        className="focus:outline-none"
      />
      <Radio.Button
        value="b"
        style={{
          width: "2rem",
          height: "2rem",
          backgroundColor: "#F59E0B", // Amarelo-500
          border: "2px solid transparent",
          borderRadius: "0.375rem", // rounded-md
        }}
        className="focus:outline-none"
      />
      <Radio.Button
        value="c"
        style={{
          width: "2rem",
          height: "2rem",
          backgroundColor: "#F59E0B", // Amarelo-500
          border: "2px solid transparent",
          borderRadius: "0.375rem", // rounded-md
        }}
        className="focus:outline-none"
      />
      <Radio.Button
        value="d"
        style={{
          width: "2rem",
          height: "2rem",
          backgroundColor: "#F59E0B", // Amarelo-500
          border: "2px solid transparent",
          borderRadius: "0.375rem", // rounded-md
        }}
        className="focus:outline-none"
      />
    </Radio.Group>
  );
};
