import {
  Grid,
  Stack,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  Button,
} from "@mui/material";
import BaseCard from "../../src/components/baseCard/BaseCard";
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";

const Forms = () => {
  return (
    <ThemeProvider theme={theme}>
    <FullLayout>
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="Account Details">
          <Stack spacing={3} direction="row" className="py-4" >
            <TextField
              id="first-name"
              label="First name"
              variant="outlined"
              defaultValue="Nirav Joshi"
            />
              <TextField
              id="last-name"
              label="Last name"
              variant="outlined"
              defaultValue="Nirav Joshi"
            />
            </Stack>
            <Stack spacing={3}>
            <TextField id="display-name" label="Display name" variant="outlined" />
            <TextField id="email-basic" label="Email" variant="outlined" />
              
          </Stack>
          <br />
         
        </BaseCard>
      </Grid>

      <Grid item xs={12} lg={12}>
        <BaseCard title="Password change">
          <Stack spacing={3} >
          <TextField
              id="current-password"
              label="Current password"
              type="password"
              variant="outlined"
            />
            <TextField
              id="new-password"
              label="New Password"
              type="password"
              variant="outlined"
            />
            <TextField
              id="confirm-new-password"
              label="Confirm new password"
              type="password"
              variant="outlined"
            />
            
          </Stack>
          <br/>
          <Button className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root  css-4075ia mt-2" type="button" >SAVE CHANGES<span className="MuiTouchRipple-root css-w0pj6f"></span></Button>
        </BaseCard>
      </Grid>
    </Grid>
    </FullLayout>
    </ThemeProvider>
  );
};

export default Forms;
