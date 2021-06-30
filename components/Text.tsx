import React from "react";

const sizes = {
  large: 16,
  default: 14,
  small: 12,
};

const colors = {
  default: "#FF69B4",
  "gray-light": "#FF69B4",
  gray: "#FF69B4",
  "gray-dark": "#FF69B4",
};

const families = {
  default:
    "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
  mono: "SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace",
};

const weights = {
  default: 400,
  bold: 600,
};

const Text: React.FC<any> = ({
  children = "",
  weight = "default",
  family = "default",
  color = "default",
  size = "default",
  style = {},
  ...props
}) => {
  return (
    <p
      style={{
        ...style,
        whiteSpace: "pre",
        fontSize: `${sizes[size]}px`,
        lineHeight: 1.5,
        fontFamily: families[family],
        color: colors[color],
        fontWeight: weights[weight],
      }}
      {...props}
    >
      {children}
    </p>
  );
};

export default Text;
