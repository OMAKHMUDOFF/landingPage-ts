interface IButtonProps {
  title?: string;
  fontSize?: number;
  fontWeight?: number;
  padding?: string;
  variant?: string;
  raduis?: string;
  action?: () => void;
  icon?: string;
  width?: string;
  bgCol?: string;
  textCol?: string;
}

function ButtonUI({
  title,
  fontSize,
  fontWeight,
  padding,
  raduis,
  variant,
  action,
  icon,
  width,
  bgCol,
  textCol,
}: IButtonProps) {
  return (
    <button
      onClick={action}
      style={{
        width: `${width}`,
        padding: `${padding}`,
        fontWeight: `${fontWeight}`,
        fontSize: `${fontSize}px`,
        borderRadius: `${raduis}`,
        background: `${
          variant === "selected"
            ? "rgba(241, 114, 40, 0.10)"
            : variant === "notSelected"
            ? ""
            : bgCol
        }`,
        color: `${
          variant === "selected"
            ? "#F17228"
            : variant === "notSelected"
            ? "#757575"
            : textCol
        }`,
      }}
    >
      <img src={icon} alt="" />
      {title}
    </button>
  );
}

export default ButtonUI;
