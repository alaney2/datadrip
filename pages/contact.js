import FeedbackForm from "@/components/FeedbackForm";
import NavBar from "@/components/NavBar/NavBar";
import Head from "next/head";
import SkipLink from '@/components/SkipLink';
import BackToTop from '@/components/PageContent/BackToTop';
import Box from '@mui/material/Box';


export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <main>
        <SkipLink skipToId={"main-content"} />
        <Box sx={{ height: '100vh' }}>
          <NavBar />
          <Box sx={{ mt: 16 }} id="main-content">
            <FeedbackForm />
          </Box>
          <BackToTop />
        </Box>
      </main>
    </>
  );
}