export interface CustomButtonProps {
    text: string;
    onClick?: () => void;
    variant?: "text" | "contained" | "outlined";
    loading?: boolean;
    icon?: React.ReactNode;
    disabled?: boolean;
  }