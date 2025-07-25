'use client';

import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  IconButton,
  Fab,
  Stack,
} from '@mui/material';
import {
  Home as HomeIcon,
  Settings as SettingsIcon,
  Add as AddIcon,
  GitHub as GitHubIcon,
  Launch as LaunchIcon,
} from '@mui/icons-material';

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{ mr: 2 }}
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Devin Threat
          </Typography>
          <IconButton size="large" color="inherit">
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Devin Threat
          </Typography>
          <Typography variant="h5" component="h2" color="text.secondary" gutterBottom>
            A modern single page application built with Next.js and Material UI
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            This application demonstrates the integration of Material UI components
            with Next.js, featuring a responsive design and modern styling.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<LaunchIcon />}
              href="https://vercel.com/new"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deploy to Vercel
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<GitHubIcon />}
              href="https://github.com/justinjsmith/devinthreat"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </Button>
          </Box>
        </Box>

        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={4}
          sx={{ width: '100%' }}
        >
          <Box sx={{ flex: 1 }}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  Material UI
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Beautiful and accessible React components that implement Google&apos;s Material Design.
                  Featuring a comprehensive set of UI tools to help you ship new features faster.
                </Typography>
              </CardContent>
            </Card>
          </Box>
          
          <Box sx={{ flex: 1 }}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  Next.js
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The React framework for production. Next.js gives you the best developer experience
                  with all the features you need for production: hybrid static & server rendering.
                </Typography>
              </CardContent>
            </Card>
          </Box>
          
          <Box sx={{ flex: 1 }}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  Vercel Ready
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Optimized for Vercel deployment with automatic builds, previews, and edge functions.
                  Deploy with zero configuration and scale globally.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Stack>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Get Started
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Edit <code>src/app/page.tsx</code> and save to see your changes instantly.
          </Typography>
        </Box>
      </Container>

      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
        }}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
}
