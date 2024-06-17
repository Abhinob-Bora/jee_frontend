import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { styled } from "@mui/system";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Carousel from "react-material-ui-carousel";
import { useNavigate } from "react-router-dom";
import CommunityImage from "../Images/community.jpg";
import PodcastImage from "../Images/PodcastImage.png";
import AiImage from "../Images/aichat.avif";
import discordBackground from "../Images/background.png";
import Footer from "../components/Footer";

// Mentor Images
import Mentor1Image from "../Images/mentors/modit.png";
import Mentor2Image from "../Images/mentors/bisen.png";
import Mentor3Image from "../Images/mentors/arush.png";

const Root = styled("div")({
  flexGrow: 1,
});

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  backgroundImage: `url(${discordBackground})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
    zIndex: 1,
  },
  "& > *": {
    position: "relative",
    zIndex: 2,
  },
  [theme.breakpoints.down("sm")]: {
    backgroundPosition: "top",
  },
  [theme.breakpoints.down("xs")]: {
    backgroundSize: "contain",
  },
}));

const MainContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
}));

const ScrollDownIcon = styled(ArrowDownwardIcon)(({ theme }) => ({
  marginTop: theme.spacing(4),
  cursor: "pointer",
  color: "#fff",
}));

const ScrollableContainer = styled("div")({
  maxHeight: "calc(100vh - 73px)",
  overflowY: "auto",
  paddingBottom: "120px",
});

const TestimonialSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0, 6),
  backgroundColor: "#f5f5f5",
  textAlign: "center",
  position: "relative",
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(2),
  margin: theme.spacing(2),
  minWidth: 300,
  height: "100%",
}));

const TestimonialCarousel = styled(Carousel)({
  width: "100%",
  "& .MuiPaper-root": {
    margin: "auto",
  },
  position: "relative",
});

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#1a73e8",
  color: "#fff",
  padding: theme.spacing(1, 4),
  fontSize: "1rem",
  fontWeight: "bold",
  borderRadius: "8px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  transition: "background-color 0.3s, box-shadow 0.3s",
  "&:hover": {
    backgroundColor: "#155bb5",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
  },
}));

const MentorSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: "#e0e0e0",
  textAlign: "center",
}));

const MentorCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: "auto",
}));

const mentors = [
  {
    name: "Modit Agarwal",
    branch: "Mechanical Engineering",
    college: "IIT Delhi",
    image: Mentor1Image,
  },
  {
    name: "Arush Bansal",
    branch: "Chemical Engineering",
    college: "IIT Delhi",
    image: Mentor3Image,
  },
  {
    name: "Aditya Bisen",
    branch: "Mechanical Engineering",
    college: "IIT Delhi",
    image: Mentor2Image,
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  const testimonials = [
    {
      name: "Rahul Sharma",
      city: "Kota",
      quote:
        "The immediate mentor connection for just 149 Rs and the free community group for daily mentorship have been game changers for me.",
      rating: 5,
    },
    {
      name: "Priya Singh",
      city: "Delhi",
      quote:
        "The daily mentorship and free selected podcasts from YouTube have provided invaluable support in my JEE preparation.",
      rating: 4,
    },
    {
      name: "Ankit Mehta",
      city: "Hyderabad",
      quote:
        "I highly recommend this program to anyone preparing for JEE. The AI mentor and the 149 Rs mentor connection are fantastic features.",
      rating: 5,
    },
    {
      name: "Sneha Patil",
      city: "Mumbai",
      quote:
        "The community group and free daily mentorship have transformed my preparation strategy. Can't wait for the AI mentor!",
      rating: 5,
    },
  ];

  return (
    <Root>
      <ScrollableContainer>
        <HeroSection>
          <Container maxWidth="sm">
            <Typography variant="h2" gutterBottom>
              Personalized Guidance
            </Typography>
            <Typography variant="h5" paragraph>
              Get immediate guidance from IITians from top IITs only. Book 1-1
              sessions via video/audio calls for the most convenient and
              personalized support.
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <StyledButton
                  variant="contained"
                  onClick={() => navigate("/mentor")}
                >
                  TRY At Just ₹149
                </StyledButton>
              </Grid>
            </Grid>
          </Container>
        </HeroSection>

        <Container id="otherProducts" component={MainContent} maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            style={{ color: "#fff", fontWeight: "bold", marginBottom: "30px" }}
          >
            Our Other Services
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                style={{
                  borderRadius: "10px",
                  height: "100%",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/community")}
              >
                <CardMedia
                  component="img"
                  alt="Join Community"
                  image={CommunityImage}
                  title="Join Community"
                />
                <CardContent>
                  <Typography variant="h5" component="h2">
                    Join Community
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Connect with peers and mentors in our exclusive community.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                style={{
                  borderRadius: "10px",
                  height: "100%",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/aichat")}
              >
                <CardMedia
                  component="img"
                  alt="Talk with AI"
                  image={AiImage}
                  title="Talk with AI"
                />
                <CardContent>
                  <Typography variant="h5" component="h2">
                    Talk with AI
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Interact with an AI trained on toppers' podcasts for advice.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                style={{
                  borderRadius: "10px",
                  height: "100%",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/YoutubePodcasts")}
              >
                <CardMedia
                  component="img"
                  alt="Watch Podcasts"
                  image={PodcastImage}
                  title="Watch Podcasts"
                />
                <CardContent>
                  <Typography variant="h5" component="h2">
                    Watch Podcasts
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Watch podcasts and learn from the experiences of top
                    achievers.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>

        <MentorSection>
          <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom>
              Our Mentors
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {mentors.map((mentor, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <MentorCard>
                    <CardMedia
                      component="img"
                      alt={mentor.name}
                      image={mentor.image}
                      title={mentor.name}
                      style={{ height: 240 }}
                    />
                    <CardContent>
                      <Typography variant="h5" component="h2">
                        {mentor.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {mentor.branch}, {mentor.college}
                      </Typography>
                    </CardContent>
                  </MentorCard>
                </Grid>
              ))}
            </Grid>
          </Container>
        </MentorSection>

        <TestimonialSection id="testimonials">
          <Container
            maxWidth="md"
            style={{ position: "relative", padding: "20px 0" }}
          >
            <Typography
              variant="h4"
              gutterBottom
              style={{ textAlign: "center" }}
            >
              Testimonials
            </Typography>
            <TestimonialCarousel
              autoPlay={false}
              navButtonsAlwaysVisible
              indicators={true}
              animation="slide"
              interval={3000}
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  style={{ padding: "20px", textAlign: "center" }}
                >
                  <Typography variant="h6" gutterBottom>
                    {testimonial.name} - {testimonial.city}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{
                      fontStyle: "italic",
                      maxWidth: "600px",
                      margin: "0 auto",
                    }}
                  >
                    "{testimonial.quote}"
                  </Typography>
                  <div style={{ marginTop: "10px" }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span
                        key={i}
                        style={{ color: "#FFD700", fontSize: "20px" }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </TestimonialCard>
              ))}
            </TestimonialCarousel>
          </Container>
        </TestimonialSection>

        <Footer />
      </ScrollableContainer>
    </Root>
  );
};

export default HomePage;
