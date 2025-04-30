import React from 'react';
import { 
  Container, Typography, Box, Button, Grid, Card, CardContent,
  Divider, Chip, Avatar, Link
} from '@mui/material';
import { GitHub, Description, Email, LocationOn, Code, Person } from '@mui/icons-material';

const skills = ['Web Development', 'MySQL', 'React', 'JavaScript', 'Python', 'Flask'];
const projects = [
  {
    title: 'Login/Signup System',
    description: 'Authentication system with secure user registration and login functionality.',
    tech: 'React, Node.js',
    link: 'https://drive.google.com/drive/folders/1qrAuYpl638byiNax0_nLGWGiVkZU71F_?usp=sharing'
  },
  {
    title: 'ATM Backend',
    description: 'Backend service handling ATM operations and transaction processing.',
    tech: 'Python, MySQL',
    link: 'https://drive.google.com/file/d/1nZ7f-pwpPVGI099jGXvR3_ZpE57wUziG/view?usp=sharing'
  }
];

export default function App() {
  return (
    <Box sx={{ 
      bgcolor: '#e0f7fa', 
      color: '#333', 
      minHeight: '100vh', 
      py: 5,
      backgroundImage: 'linear-gradient(to bottom, #e0f7fa, #b2ebf2)'
    }}>
      <Container maxWidth="md">
        {/* Header */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h3" fontWeight={700} gutterBottom>Sampath Karthik</Typography>
          <Typography variant="h6" gutterBottom color="text.secondary" sx={{ mb: 3 }}>
            Aspiring developer passionate about building efficient web and software solutions.
          </Typography>
          
          <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              href="https://github.com/phantostick"
              target="_blank"
              startIcon={<GitHub />}
              sx={{ borderRadius: 2, px: 3, py: 1 }}
            >GitHub</Button>
            <Button
              variant="outlined"
              color="secondary"
              href="https://docs.google.com/document/d/1nchFk5j1QyWneO4ERuYyqOv4oLEPikn5_m4Q3GDrKOE/edit?usp=sharing"
              target="_blank"
              startIcon={<Description />}
              sx={{ borderRadius: 2, px: 3, py: 1 }}
            >View Resume</Button>
          </Box>
        </Box>
        
        {/* About */}
        <Box sx={{ mb: 5 }}>
          <Typography variant="h5" fontWeight={600} sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ bgcolor: '#80deea', mr: 1, width: 32, height: 32, color: '#006064' }}>
              <Person fontSize="small" />
            </Avatar>
            About Me
          </Typography>
          <Divider sx={{ mb: 3, borderColor: 'rgba(0,0,0,0.1)' }} />
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            I'm a developer from Vishakhapatnam with an interest in web development. I am currently studying 
            in GVPCE(A). Currently exploring different technologies and looking
            for new opportunities
          </Typography>
        </Box>
        
        {/* Projects */}
        <Box sx={{ mb: 5 }}>
          <Typography variant="h5" fontWeight={600} sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ bgcolor: '#80deea', mr: 1, width: 32, height: 32, color: '#006064' }}>
              <Code fontSize="small" />
            </Avatar>
            Projects
          </Typography>
          <Divider sx={{ mb: 3, borderColor: 'rgba(0,0,0,0.1)' }} />
          <Grid container spacing={3}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card sx={{ 
                  bgcolor: '#ffffff', 
                  color: '#333',
                  height: '100%',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 6px 12px rgba(0,0,0,0.1)'
                  }
                }}>
                  <CardContent>
                    <Typography variant="h6" component="h3" fontWeight={500} sx={{ color: '#0097a7', mb: 1 }}>
                      <Link href={project.link} target="_blank" underline="hover" color="inherit">
                        {project.title}
                      </Link>
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {project.description}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(0,0,0,0.6)' }}>
                      Tech: {project.tech}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Button 
                        size="small" 
                        variant="outlined" 
                        href={project.link} 
                        target="_blank"
                        sx={{ borderRadius: 1.5, fontSize: '0.75rem', color: '#00838f', borderColor: '#00838f' }}
                      >
                        View Project
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        
        {/* Skills */}
        <Box sx={{ mb: 5 }}>
          <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>Skills</Typography>
          <Divider sx={{ mb: 3, borderColor: 'rgba(0,0,0,0.1)' }} />
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
            {skills.map((skill) => (
              <Chip 
                key={skill} 
                label={skill} 
                sx={{ 
                  bgcolor: '#4dd0e1',
                  color: '#006064',
                  '&:hover': { bgcolor: '#26c6da' },
                  px: 1
                }}
              />
            ))}
          </Box>
        </Box>
        
        {/* Contact */}
        <Box sx={{ mb: 5 }}>
          <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>Contact</Typography>
          <Divider sx={{ mb: 3, borderColor: 'rgba(0,0,0,0.1)' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Email sx={{ mr: 2, color: '#00838f' }} />
            <Link href="mailto:sampathagk3@gmail.com" sx={{ 
              color: '#00838f',
              '&:hover': { color: '#006064' }
            }}>sampathagk3@gmail.com</Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LocationOn sx={{ mr: 2, color: '#00838f' }} />
            <Typography sx={{ color: '#00838f' }}>Visakhapatnam, India</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}