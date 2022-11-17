import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { Box, Button, Container, Divider, Grid, Stack, Tab, Tabs, Typography } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import bgImage from '../../static/img/hero-secondary-background.png';
import heroImage from '../../static/img/hero-secondary-graphic.png';
import SumoLogicDocsLogo from '../../static/img/sumo-logic-docs.svg'
import { Feature } from '../components/Feature';
import { features } from '../helper/features';

export const Home = () => {
  const [tab, setTab] = useState('0');

  return (
    <Layout
      description='Sumo Logic docs - real-time alerting, security, dashboards, and machine-learning-powered analytics for all three types of telemetry — logs, metrics, and traces.'
      title='Home'
    >

      {/* Header */}
      <Typography
        bgcolor='#0045BE'
        color='common.white'
        fontFamily='Lab Grotesque'
        fontSize={28}
        fontWeight={700}
        pt={3}
        px={2}
        pb={1.5}
        sx={{
          backgroundImage: 'linear-gradient(to right, rgb(0,0,153), rgb(0,70,190) 30%)',
        }}
        textAlign='center'
      >
        <Box
          component={SumoLogicDocsLogo}
          height={{
            md: 36,
            xs: 28,
          }}
          width='100%'
        />
      </Typography>

      {/* Hero */}
      <Stack
        sx={{
          bgcolor: 'white',
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        height={{
          md: 'auto',
          xs: '100%',
        }}
        py={4}
        textAlign='center'
      >
        <Container maxWidth='lg'>
          <Grid
            alignItems='center'
            container
            direction={{
              md: 'row-reverse',
              xs: 'column-reverse',
            }}
            justifyContent={{
              md: 'space-between',
              xs: 'flex-end',
            }}
            height='100%'
            pl={{
              md: 6,
            }}
          >
            <Grid item md={6}>
              <Stack
                alignItems={{
                  md: 'flex-start',
                  xs: 'center',
                }}
                justifyContent='center'
                spacing={2}
              >
                <Typography
                  color='white'
                  fontFamily='Lab Grotesque'
                  fontSize={32}
                  fontWeight={700}
                  variant='h2'
                >
                  New to Sumo?
                </Typography>
                <Typography
                  color='common.white'
                  fontFamily='Lab Grotesque'
                  pb={2}
                  textAlign='left'
                  variant='subtitle2'
                >
                  Get started quickly with our search, visualization, and analytics capabilities.
                </Typography>
                {[
                  {
                    children: '1. Set up account',
                    description: 'Set up account',
                    href: '/docs/get-started',
                  },
                  {
                    children: '2. Install data collector',
                    description: 'install data collector',
                    href: '/docs/send-data',
                  },
                  {
                    children: '3. Explore your insights',
                    description: 'Explore your insights',
                    href: '/docs/get-started/sumo-logic-ui',
                  },
                ].map(({ children, ...rest }) => (
                  <Button
                    sx={{
                      bgcolor: 'transparent',
                      border: '1px solid',
                      borderColor: 'common.white',
                      borderRadius: 2,
                      fontFamily: 'Lab Grotesque',
                      textTransform: 'none',
                      width: {
                        md: 'auto',
                        xs: '100%',
                      },
                      '&:hover': {
                        color: 'common.white',
                      },
                    }}
                    variant='contained'
                    {...rest}
                  >
                    {children}
                  </Button>
                ))}
              </Stack>
            </Grid>
            <Grid
              component='img'
              item
              src={heroImage}
              sx={{
                pl: {
                  lg: 12,
                  md: 0,
                  xs: 0,
                },
                width: {
                  lg: 550,
                  md: 400,
                  xs: '85%',
                },
              }}
            />
          </Grid>
        </Container>
      </Stack>

      {/* Main */}
      <Container maxWidth='xl'>

        {/* Product Guides */}
        <Stack
          alignItems='center'
          pb={5}
          pt={10}
          px={2}
        >
          <Typography
            component='h2'
            fontFamily='Lab Grotesque'
            fontWeight={900}
            mb={{
              md: 'inherit',
              sm: 4,
              xs: 4,
            }}
            textAlign='center'
            variant='h4'
          >
            Explore our product guides
          </Typography>
          <Typography
            component='p'
            fontFamily='Lab Grotesque'
            mb={4}
            textAlign='center'
            variant='subtitle1'
          >
            Ensure app reliability and security with modern cloud-native monitoring and observability.
          </Typography>

          <TabContext value={tab}>
            <Tabs
              centered
              onChange={(_, newTab) => setTab(newTab)}
              sx={{
                '& .MuiTabs-flexContainer': {
                  flexWrap: {
                    sm: 'wrap',
                    xs: 'wrap',
                  },
                  justifyContent: {
                    sm: 'center',
                    xs: 'center',
                  }
                },
              }}
              TabIndicatorProps={{
                sx: {
                  display: {
                    sm: 'none',
                    xs: 'none',
                  },
                },
              }}
              value={tab}
              variant='scrollable'
            >
              {[
                {
                  label: 'Data Types',
                },
                {
                  label: 'Infrastructure Monitoring',
                },
                {
                  label: 'Multi-Cloud',
                },
                {
                  label: 'Security and Incidents',
                },
                {
                  label: 'Tools',
                },
                {
                  label: 'Other Solutions',
                },
              ].map(({ label, ...rest }, index) => (
                <Tab
                  key={label}
                  label={label}
                  sx={{
                    color: 'grey.700',
                    fontFamily: 'Lab Grotesque',
                    fontWeight: 'bold',
                  }}
                  value={String(index)}
                  {...rest}
                />
              ))}
            </Tabs>
            {features.map((feature, index) => tab === String(index) && (
              <Grid
                component={TabPanel}
                container
                direction='row'
                justifyContent='center'
                py={6}
                spacing={4}
                value={String(index)}
              >
                {feature.map((config) => (
                  <Grid item lg={4} md={6} xs={12}>
                    <Feature
                      key={config.link}
                      length={feature.length}
                      {...config}
                    />
                  </Grid>
                ))}
              </Grid>
            ))}
          </TabContext>
        </Stack>

      </Container>
    </Layout >
  );
};

export default Home;