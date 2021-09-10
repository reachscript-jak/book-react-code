export const ColoredMessage = (props) => {
  // Propsを分割代入
  const { color, children } = props;

  const contentStyle = {
    color,
    fontSize: "20px",
  };

  return <p style={contentStyle}>{children}</p>;
};
