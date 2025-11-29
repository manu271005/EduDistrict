import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SchoolSearchPage from './pages/SchoolSearchPage';
import ChatBot from './components/chat/ChatBot';

import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import HelpCenterPage from './pages/HelpCenterPage';
import FAQsPage from './pages/FAQsPage';
import FeedbackPage from './pages/FeedbackPage';
import ContactPage from './pages/ContactPage';
import SchoolDashboardPage from './pages/SchoolDashboardPage';
import SchoolLoginPage from './pages/SchoolLoginPage';
import RequestAccessPage from './pages/RequestAccessPage';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="flex flex-col min-h-screen bg-slate-50">
                    <Navbar />
                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<LandingPage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/team" element={<TeamPage />} />
                            <Route path="/login" element={<LoginPage />} />
                            <Route path="/school-login" element={<SchoolLoginPage />} />
                            <Route path="/request-access" element={<RequestAccessPage />} />
                            <Route path="/register" element={<RegisterPage />} />
                            <Route
                                path="/schools"
                                element={
                                    <ProtectedRoute>
                                        <SchoolSearchPage />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/school-dashboard"
                                element={
                                    <ProtectedRoute>
                                        <SchoolDashboardPage />
                                    </ProtectedRoute>
                                }
                            />
                            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
                            <Route path="/help-center" element={<HelpCenterPage />} />
                            <Route path="/faqs" element={<FAQsPage />} />
                            <Route path="/feedback" element={<FeedbackPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                        </Routes>
                    </main>
                    <Footer />
                    <ChatBot />
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
