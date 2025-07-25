'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Container,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Link,
  Divider,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Security as SecurityIcon,
  Assessment as AssessmentIcon,
  Policy as PolicyIcon,
  Report as ReportIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Shield as ShieldIcon,
  Warning as WarningIcon,
  AccountBalance as AccountBalanceIcon,
  Payment as PaymentIcon,
  PrivacyTip as PrivacyIcon,
  Language as LanguageIcon,
} from '@mui/icons-material';

const drawerWidth = 280;

const navigationItems = [
  { text: 'Overview', icon: <HomeIcon />, href: '#overview' },
  { text: 'Threat Catalog', icon: <SecurityIcon />, href: '#threats' },
  { text: 'NIST Controls', icon: <PolicyIcon />, href: '#nist' },
  { text: 'MITRE ATT&CK', icon: <AssessmentIcon />, href: '#mitre' },
  { text: 'Breach Reports', icon: <ReportIcon />, href: '#breaches' },
];

const filterAttributes = [
  { label: 'Internet-Facing', icon: <LanguageIcon />, value: 'internet-facing' },
  { label: 'Payment', icon: <PaymentIcon />, value: 'payment' },
  { label: 'SOX', icon: <AccountBalanceIcon />, value: 'sox' },
  { label: 'Privacy Data', icon: <PrivacyIcon />, value: 'privacy' },
];

const threatData = [
  {
    id: 1,
    title: 'SQL Injection',
    description: 'Malicious SQL code injection into application databases',
    icon: <WarningIcon />,
    attributes: ['internet-facing', 'payment', 'privacy'],
    nistControls: ['SI-10', 'SI-11', 'AC-3'],
    mitreAttack: ['T1190', 'T1059'],
    breachExamples: [
      'Equifax 2017 - SQL injection led to 147M records exposed',
      'TalkTalk 2015 - SQL injection compromised customer data'
    ]
  },
  {
    id: 2,
    title: 'Cross-Site Scripting (XSS)',
    description: 'Injection of malicious scripts into web applications',
    icon: <SecurityIcon />,
    attributes: ['internet-facing', 'privacy'],
    nistControls: ['SI-10', 'SI-15', 'AC-6'],
    mitreAttack: ['T1059', 'T1203'],
    breachExamples: [
      'British Airways 2018 - XSS attack on payment pages',
      'Magecart attacks - Persistent XSS on e-commerce sites'
    ]
  },
  {
    id: 3,
    title: 'Insider Threat',
    description: 'Malicious or negligent actions by authorized users',
    icon: <ShieldIcon />,
    attributes: ['sox', 'payment', 'privacy'],
    nistControls: ['AC-2', 'AU-6', 'PS-3'],
    mitreAttack: ['T1078', 'T1530'],
    breachExamples: [
      'Capital One 2019 - Former employee accessed customer data',
      'Tesla 2018 - Insider sabotage of manufacturing systems'
    ]
  },
];

const nistControlFamilies = [
  { family: 'AC', name: 'Access Control', description: 'Limit information system access to authorized users' },
  { family: 'AU', name: 'Audit and Accountability', description: 'Create, protect, and retain audit records' },
  { family: 'SI', name: 'System and Information Integrity', description: 'Identify, report, and correct flaws' },
  { family: 'PS', name: 'Personnel Security', description: 'Ensure trustworthiness of personnel' },
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleFilterToggle = (value: string) => {
    setSelectedFilters(prev => 
      prev.includes(value) 
        ? prev.filter(f => f !== value)
        : [...prev, value]
    );
  };

  const handleCardExpand = (cardId: number) => {
    setExpandedCards(prev =>
      prev.includes(cardId)
        ? prev.filter(id => id !== cardId)
        : [...prev, cardId]
    );
  };

  const filteredThreats = threatData.filter(threat => 
    selectedFilters.length === 0 || 
    selectedFilters.some(filter => threat.attributes.includes(filter))
  );

  const drawer = (
    <Box>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Navigation
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {navigationItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component="a" href={item.href}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Upshift Threat Intelligence Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        
        {/* Hero Section */}
        <Box id="overview" sx={{ mb: 6 }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography variant="h2" component="h1" gutterBottom>
                Threat Intelligence Dashboard
              </Typography>
              <Typography variant="h5" color="text.secondary" sx={{ mb: 3 }}>
                Comprehensive security threat analysis and mitigation guidance
              </Typography>
              <Box sx={{ 
                width: '100%', 
                height: 200, 
                bgcolor: 'primary.light', 
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 3
              }}>
                <Typography variant="h4" color="white">
                  🔗 Abstract Network Illustration
                </Typography>
              </Box>
              <Typography variant="body1" color="text.secondary">
                Monitor, analyze, and mitigate security threats with comprehensive intelligence 
                mapped to industry-standard frameworks including NIST controls and MITRE ATT&CK.
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* Filter Section */}
        <Box sx={{ mb: 4 }}>
          <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom>
              Filter Threats by Attributes
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {filterAttributes.map((attr) => (
                <Chip
                  key={attr.value}
                  icon={attr.icon}
                  label={attr.label}
                  clickable
                  color={selectedFilters.includes(attr.value) ? 'primary' : 'default'}
                  onClick={() => handleFilterToggle(attr.value)}
                  sx={{ mb: 1 }}
                />
              ))}
            </Stack>
          </Container>
        </Box>

        {/* Threat Catalog */}
        <Box id="threats" sx={{ mb: 6 }}>
          <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom>
              Threat Catalog
            </Typography>
            <Stack spacing={3}>
              {filteredThreats.map((threat) => (
                <Card key={threat.id}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      {threat.icon}
                      <Typography variant="h5" component="h3" sx={{ ml: 1 }}>
                        {threat.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {threat.description}
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                      {threat.attributes.map((attr) => (
                        <Chip key={attr} label={attr} size="small" variant="outlined" />
                      ))}
                    </Stack>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => handleCardExpand(threat.id)}
                      endIcon={expandedCards.includes(threat.id) ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    >
                      Details
                    </Button>
                  </CardActions>
                  <Collapse in={expandedCards.includes(threat.id)} timeout="auto" unmountOnExit>
                    <CardContent sx={{ pt: 0 }}>
                      <Typography variant="h6" gutterBottom>
                        NIST Control Families
                      </Typography>
                      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                        {threat.nistControls.map((control) => (
                          <Chip key={control} label={control} size="small" color="secondary" />
                        ))}
                      </Stack>
                      
                      <Typography variant="h6" gutterBottom>
                        MITRE ATT&CK Techniques
                      </Typography>
                      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                        {threat.mitreAttack.map((technique) => (
                          <Chip key={technique} label={technique} size="small" color="info" />
                        ))}
                      </Stack>
                      
                      <Typography variant="h6" gutterBottom>
                        Example Breach Reports
                      </Typography>
                      <Box component="ul" sx={{ pl: 2 }}>
                        {threat.breachExamples.map((example, index) => (
                          <Typography key={index} component="li" variant="body2" sx={{ mb: 1 }}>
                            {example}
                          </Typography>
                        ))}
                      </Box>
                    </CardContent>
                  </Collapse>
                </Card>
              ))}
            </Stack>
          </Container>
        </Box>

        {/* NIST Controls Section */}
        <Box id="nist" sx={{ mb: 6 }}>
          <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom>
              NIST Control Families Overview
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              The National Institute of Standards and Technology (NIST) provides a comprehensive 
              framework for managing cybersecurity risk through organized control families.
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Family</strong></TableCell>
                    <TableCell><strong>Name</strong></TableCell>
                    <TableCell><strong>Description</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {nistControlFamilies.map((family) => (
                    <TableRow key={family.family}>
                      <TableCell>{family.family}</TableCell>
                      <TableCell>{family.name}</TableCell>
                      <TableCell>{family.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        </Box>

        {/* MITRE ATT&CK Section */}
        <Box id="mitre" sx={{ mb: 6 }}>
          <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom>
              MITRE ATT&CK Framework
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              MITRE ATT&CK is a globally-accessible knowledge base of adversary tactics and techniques 
              based on real-world observations. It provides a common taxonomy for cybersecurity professionals.
            </Typography>
            <Link 
              href="https://attack.mitre.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              variant="body1"
            >
              Visit the official MITRE ATT&CK website →
            </Link>
          </Container>
        </Box>

        {/* Breach Reports Section */}
        <Box id="breaches" sx={{ mb: 6 }}>
          <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom>
              Why Track Breach Reports?
            </Typography>
            <Typography variant="body1">
              Analyzing real-world security breaches provides valuable insights into attack patterns, 
              common vulnerabilities, and effective mitigation strategies. By studying historical incidents, 
              organizations can better prepare their defenses and understand the evolving threat landscape.
            </Typography>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
