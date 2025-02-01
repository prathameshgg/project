import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Articles from './components/Articles';
import ArticlesPage from './pages/ArticlesPage';
import DirectoryPage from './pages/DirectoryPage';
import TherapistDetailsPage from './pages/TherapistDetailsPage';
import MeditationPage from './pages/MeditationPage';
import PracticeSessionPage from './pages/PracticeSessionPage';
import PricingPage from './pages/PricingPage';
import QuizPage from './pages/QuizPage';
import SignUpPage from './pages/SignUpPage';
import CommunityPage from './pages/CommunityPage';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './styles/global.css';
import MentalHealthTests from './components/quiz/MentalHealthTests';
import DepressionTest from './components/quiz/DepressionTest';
import AnxietyTest from './components/quiz/AnxietyTest';
import PTSDTest from './components/quiz/PTSDTest';
import ADHDTest from './components/quiz/ADHDTest';
import BipolarTest from './components/quiz/BipolarTest';
import EatingDisorderTest from './components/quiz/EatingDisorderTest';
import AddictionTest from './components/quiz/AddictionTest';
import ParentTest from './components/quiz/ParentTest';
import YouthMentalHealthTest from './components/quiz/YouthMentalHealthTest';
import ChatBot from './components/ChatBot';
import FeedbackPage from './pages/FeedbackPage';
import ThankYouPage from './pages/ThankYouPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Articles />
              <FAQ />
            </main>
          } />
          <Route path="/mental-health-tests" element={<MentalHealthTests />} />
          <Route path="/depression-test" element={<DepressionTest />} />
          <Route path="/anxiety-test" element={<AnxietyTest />} />
          <Route path="/ptsd-test" element={<PTSDTest />} />
          <Route path="/adhd-test" element={<ADHDTest />} />
          <Route path="/bipolar-test" element={<BipolarTest />} />
          <Route path="/eating-disorder-test" element={<EatingDisorderTest />} />
          <Route path="/addiction-test" element={<AddictionTest />} />
          <Route path="/parent-test" element={<ParentTest />} />
          <Route path="/youth-mental-health-test" element={<YouthMentalHealthTest />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/directory" element={<DirectoryPage />} />
          <Route path="/directory/:id" element={<TherapistDetailsPage />} />
          <Route path="/meditation" element={<MeditationPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
        <Routes>
          <Route path="*" element={location.pathname !== '/community' && <Footer />} />
        </Routes>
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;