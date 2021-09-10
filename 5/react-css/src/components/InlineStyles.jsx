export const InlineStyles = () => {
  const containerStyle = {
    width: "100%",
    padding: "16px",
  };
  const textStyle = {
    color: "blue",
    textAlign: "center"
  };

  return (
    <div style={containerStyle}>
      <p style={textStyle}>Hello World!!</p>{" "}
    </div>
  );
};
