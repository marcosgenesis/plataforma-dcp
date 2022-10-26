import { styled } from "@mui/material";

export const FormRoot = styled("div")(() => ({
  width: "100%",
  height: "768px",
}));

export const FormMain = styled("div")(({ theme }) => ({
  width: "100%",
  height: "20%",
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(3),
  backgroundColor: "#c9c9c9",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
}));

export const FormOff = styled("div")(({ theme }) => ({
  width: "100%",
  height: "90%",
  padding: theme.spacing(3),
  backgroundColor: "#c2c2",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
}));

export const TitleWaitlist = styled("h1")(({ theme }) => ({
  margin: 0,
  fontWeight: 700,
  color: "#14141F",
  fontSize: theme.spacing(4),
  lineHeight: "49px",
  fontFamily: "Nunito",
  [theme.breakpoints.down("md")]: {
    fontSize: theme.spacing(3),
  },
}));

export const Label = styled("label")(({ theme }) => ({
  fontWeight: 700,
  lineHeight: "22px",
  fontStyle: "normal",
  fontFamily: "Nunito",
  fontSize: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    fontSize: theme.spacing(1.5),
  },
}));

export const FormContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));

export const FormContainerV2 = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: 'space-between',
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));

export const FormItem = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("lg")]: {
    marginBottom: theme.spacing(3),
  },
}));

export const FormInput = styled("input")(() => ({
  gap: "10px",
  height: "48px",
  display: "flex",
  flexDirection: "row",
  padding: "13px 16px",
  boxSizing: "border-box",
  alignItems: "flex-start",
  border: "1px solid rgba(20,20,31,0.12)",
}));

export const FormSelect = styled("select")(() => ({
  gap: "10px",
  height: "48px",
  display: "flex",
  flexDirection: "row",
  padding: "13px 16px",
  boxSizing: "border-box",
  alignItems: "flex-start",
  border: "1px solid rgba(20,20,31,0.12)",
}));

export const SubmitButton = styled("button")(() => ({
  gap: "4px",
  height: "48px",
  display: "flex",
  borderRadius: "8px",
  flexDirection: "row",
  alignItems: "center",
  padding: "13px 16px",
  justifyContent: "center",
  backgroundColor: "#179ecf",
}));
