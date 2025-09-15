import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Grid,
  Card,
  CardContent,
  TextField,
  Divider,
  Chip,
  Paper,
  Link,
  Snackbar,
  Alert,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Brand palette (charcoal + electric blue)
const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1f2937", contrastText: "#ffffff" }, // charcoal
    secondary: { main: "#3b82f6" }, // electric blue
    background: { default: "#f7f9fc", paper: "#ffffff" },
  },
  shape: { borderRadius: 14 },
  components: {
    MuiButton: { styleOverrides: { root: { textTransform: "none", fontWeight: 700 } } },
    MuiCard: { styleOverrides: { root: { transition: "all .2s ease" } } },
    MuiAppBar: { styleOverrides: { root: { backdropFilter: "saturate(180%) blur(10px)" } } },
    MuiChip: { styleOverrides: { root: { fontWeight: 700 } } },
  },
});

const HERO_BG = `radial-gradient(1200px circle at 0% 0%, rgba(31,41,55,.22) 0%, rgba(31,41,55,0) 40%),
                 radial-gradient(1200px circle at 100% 0%, rgba(59,130,246,.22) 0%, rgba(59,130,246,0) 40%)`;

// Placeholder logo (inline SVG data URI)
const LOGO_URI = "data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'>\
  <defs>\
    <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>\
      <stop offset='0' stop-color='%233b82f6'/>\
      <stop offset='1' stop-color='%231f2937'/>\
    </linearGradient>\
  </defs>\
  <rect rx='14' ry='14' width='64' height='64' fill='%231f2937'/>\
  <rect x='2' y='2' rx='12' ry='12' width='60' height='60' fill='none' stroke='url(%23g)' stroke-width='4'/>\
  <text x='50%' y='52%' dominant-baseline='middle' text-anchor='middle' font-size='26' font-weight='700' fill='%23ffffff'>LC</text>\
</svg>";

export default function LegacyCleanningInc() {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [sent, setSent] = React.useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
        {/* Header */}
        <AppBar position="sticky" color="transparent" elevation={0} sx={{ borderBottom: 1, borderColor: "divider", bgcolor: "rgba(255,255,255,0.75)" }}>
          <Toolbar sx={{ gap: 2 }}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box component="img" src={LOGO_URI} alt="Legacy Cleanning Inc. logo" sx={{ width: 36, height: 36, borderRadius: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: 0.3, mr: 2, color: "primary.main" }}>
                Legacy Cleanning Inc.
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ ml: "auto" }}>
              <Button onClick={() => go("home")} size="small">Home</Button>
              <Button onClick={() => go("services")} size="small">Services</Button>
              <Button onClick={() => go("contact")} size="small" variant="contained" color="secondary">Contact</Button>
            </Stack>
          </Toolbar>
        </AppBar>

        {/* Hero */}
        <Box id="home" sx={{ py: { xs: 6, md: 10 }, backgroundImage: HERO_BG }}>
          <Container maxWidth="md">
            <Paper elevation={0} sx={{ p: { xs: 3, md: 5 }, borderRadius: 4, textAlign: "center", background: "linear-gradient(180deg, #ffffff 0%, rgba(31,41,55,.05) 100%)", border: 1, borderColor: "primary.light" }}>
              <Stack spacing={3} alignItems="center">
                <Box component="img" src={LOGO_URI} alt="logo" sx={{ width: 56, height: 56, borderRadius: 3, boxShadow: 1 }} />
                <Typography variant="h3" fontWeight={900}>
                  Hospital Cleaning Specialists
                </Typography>
                <Typography color="text.secondary">
                  We keep operating rooms, isolation rooms, and inpatient units spotless and compliant—so staff can focus on patients.
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button variant="contained" color="secondary" onClick={() => go("contact")}>Request a quote</Button>
                  <Button variant="outlined" color="primary" component={Link} href="mailto:erikaealuna@gmail.com">Email us</Button>
                </Stack>
                <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: "wrap", justifyContent: "center" }}>
                  <Chip label="Hospitals only" size="small" color="secondary" variant="filled" />
                  <Chip label="24/7 coverage" size="small" color="primary" variant="outlined" />
                  <Chip label="Checklist-driven" size="small" color="secondary" variant="outlined" />
                </Stack>
              </Stack>
            </Paper>
          </Container>
        </Box>

        {/* Accent Divider */}
        <Box sx={{ height: 4, background: "linear-gradient(90deg, #3b82f6, #1f2937)" }} />

        {/* Services */}
        <Box id="services" sx={{ py: { xs: 6, md: 8 } }}>
          <Container maxWidth="lg">
            <Typography variant="h4" fontWeight={900} gutterBottom color="primary.main">
              Services
            </Typography>
            <Grid container spacing={2}>
              {[
                { t: "Operating Rooms", d: "Turnovers and terminal cleans." },
                { t: "Isolation Rooms", d: "Contact, droplet, airborne workflows." },
                { t: "Inpatient Units", d: "Daily/discharge cleans and high‑touch disinfection." },
                { t: "ED & Procedure", d: "Rapid response and spill/biohazard support." },
                { t: "Clinics & Labs", d: "Benches, waiting areas, and shared equipment." },
                { t: "Day/Night Staffing", d: "Porters, supervisors, and QA." },
              ].map((s) => (
                <Grid item xs={12} sm={6} md={4} key={s.t}>
                  <Card variant="outlined" sx={{ borderColor: "secondary.light", '&:hover': { boxShadow: 4, transform: 'translateY(-2px)' } }}>
                    <CardContent>
                      <Typography fontWeight={800}>{s.t}</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                        {s.d}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Divider sx={{ my: 0 }} />

        {/* Contact */}
        <Box id="contact" sx={{ py: { xs: 6, md: 8 }, background: "linear-gradient(180deg, rgba(59,130,246,.06), rgba(31,41,55,.06))" }}>
          <Container maxWidth="sm">
            <Typography variant="h4" fontWeight={900} gutterBottom color="secondary.main">
              Contact
            </Typography>
            <Paper variant="outlined" sx={{ p: 2, borderColor: "secondary.light", background: "linear-gradient(180deg, #ffffff 0%, rgba(59,130,246,.05) 100%)" }}>
              <Box component="form" onSubmit={onSubmit}>
                <Stack spacing={2}>
                  <TextField name="name" label="Name" value={form.name} onChange={onChange} required fullWidth />
                  <TextField name="email" label="Email" type="email" value={form.email} onChange={onChange} required fullWidth />
                  <TextField name="message" label="How can we help?" value={form.message} onChange={onChange} multiline minRows={4} fullWidth />
                  <Button type="submit" variant="contained" color="primary">Submit</Button>
                </Stack>
              </Box>
            </Paper>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              Or call <Link href="tel:+19135632866" color="primary.main">(913) 563‑2866</Link> • Midwest service area
            </Typography>
          </Container>
        </Box>

        {/* Footer */}
        <Box component="footer" sx={{ borderTop: 1, borderColor: "divider", py: 3 }}>
          <Container>
            <Typography variant="caption" color="text.secondary">
              © {new Date().getFullYear()} Legacy Cleanning Inc. All rights reserved.
            </Typography>
          </Container>
        </Box>

        <Snackbar open={sent} onClose={() => setSent(false)} autoHideDuration={3500}>
          <Alert severity="success" variant="filled">Thanks! Your request was recorded locally.</Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
}
