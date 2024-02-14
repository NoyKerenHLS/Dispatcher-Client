interface Props {
  iconImage: string;
  style?: React.CSSProperties;
}

const Icon = ({ iconImage, style }: Props) => {
  return <img style={style} src={iconImage} />;
};

export default Icon;
