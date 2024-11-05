import React from "react";
import { Button, CircularProgress } from "@mui/material";
import { fontSize, styled } from "@mui/system";

interface CustomButtonProps {
  text: string;
  onClick: () => void;
  variant?: "text" | "contained" | "outlined";
  loading?: boolean;
  icon?: React.ReactNode;
  disabled?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StyledButton = styled(Button)(({ theme, variant }: any) => ({
  ...(variant === "contained" && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: "12px",
    lineHeight: "14px",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  }),
  ...(variant === "outlined" && {
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.light,
    fontSize: "12px",
    lineHeight: "14px",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  }),
  ...(variant === "text" && {
    color: theme.palette.blue.main,
    fontSize: "16px",
    lineHeight: "18px",
    marginRight: "8px",
    "&:hover": {
      color: theme.palette.primary.light,
      backgroundColor: "transparent",
    },
  }),
  minHeight: "32px",
  padding: "8px 16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "20px",
  boxSizing: "border-box",

  textTransform: "capitalize",
  minWidth: "120px",
  "& .MuiSvgIcon-root": {
    marginRight: "8px",
    fontSize: "inherit",
  },
  "& .MuiCircularProgress-root": {
    marginRight: "8px",
    fontSize: "12px",
  },
}));

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  onClick,
  variant = "contained",
  loading = false,
  icon,
  disabled = false,
}) => {
  return (
    <StyledButton
      variant={variant}
      onClick={onClick}
      disabled={loading || disabled}
    >
      {variant === "text" ? (
        <>
          {text} {icon && <>{icon}</>}
        </>
      ) : (
        <>
          {loading ? (
            <CircularProgress size={14} color="inherit" />
          ) : (
            icon && <>{icon}</>
          )}
          {text}
        </>
      )}
    </StyledButton>
  );
};

export default CustomButton;
