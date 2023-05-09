import { Box, useTheme } from "@mui/material";
import Header from "../../component/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import Topbar from "../../component/Dashboard/Topbar";
import Sidebar from "../../component/Dashboard/Sidebar";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div className="app">
    <Sidebar />
      <main className='content'>
        <Topbar />
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">What is Network Security Monitoring System</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our Network Monitoring System allows users to keep track of their network's activity and ensure its security. It provides features such as  session time monitoring, and user management even key logging. These features enable individuals and businesses to have better control over their networks, limit the access of unwanted sites or users, and prevent unauthorized access to sensitive data.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">Is it crucial for buisness?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Network monitoring is very crucial for any business. Today, networks span globally, having multiple links established between geographically separated data centres, public and private clouds. This creates multifield challenges in network management. Network admins need to be more proactive and agile in monitoring network performance.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">Conclusion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In conclusion, a security monitoring system is an essential tool for protecting your organization's assets, data, and people. With its advanced technology and real-time monitoring capabilities, it can detect and prevent security threats before they cause any harm. By implementing a comprehensive security monitoring system, you can significantly enhance your organization's security posture and reduce the risk of security breaches.
Overall, a security monitoring system is a wise investment for any organization that values its security and wants to safeguard against potential threats.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">Some handpicked best features in this Project.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          User management, has his own workspace and even key logging. 
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
    </main>
    </div>
  );
};

export default FAQ;
