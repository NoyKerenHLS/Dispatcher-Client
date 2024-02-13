export type ButtonStyleProp = {
  bgcolor: string;
  borderRadius: string;
  color: string;
  pl: string;
  pr: string;
  fontSize: string;
};

export type ButtonType = {
  primary: ButtonStyleProp;
  secondary: ButtonStyleProp;
  text: ButtonStyleProp;
};

export type AppButtons = "primary" | "secondary" | "text";
