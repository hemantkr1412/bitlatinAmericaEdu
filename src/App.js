// pages
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import View from "./components/view/View";
import NoWalletPage from "./components/connection/NoWalletPage";
import Connect from "./components/connection/Connect";
import Contact from "./components/contact/Contact";
import Admin from "./components/admin/admin";
import Approval from "./components/institution/instititeAdvanced/approval/approval";
import Privacypolicy from "./components/privacyPolicy/privacypolicy";
import Dashboard from "./components/dashboard/dashboard";
import InstitutesLandingPage from "./components/institution/instititeAdvanced/landingPage/landing";
import Body from "./components/BitWallet/Components/body/body";
import DNFTLandingPage from "./components/dNFT/landingPage/landing";
import { Whitepaper } from "./components/about/whitepaper";
import { Tokenomics } from "./components/about/Tokenomics";
import { Roadmap } from "./components/about/Roadmap";
import { Team } from "./components/about/Team";
import { Partners } from "./components/about/Partner";
import IndividualLandingPage from "./components/dNFT/landingPage/IndividualLandingPage";
import Blogpage from "./components/Blog/Blogpage";
import BlogpageAdmin from "./components/Adminblog/AdminBlog";
import Blog from "./components/Blog/Blog";
import EditBlog from "./components/Adminblog/EditBlog";
import Adminlogin from "./components/Adminblog/Adminlogin";
import TryForFree from "./components/tryforfree/tryforfree";
// import Aboutus from "./components/about/Aboutus";
import FormikRichText from "./components/Adminblog/FormikRichText";
// import BitWallet from "./components/BitWallet/Pages/BitWallet"
import Verify from "./components/verify/verify";
import VerifyWithDetails from "./components/verify/verifyWithDetails";
// context
import UserState from "./context/userContext/userState";
import Protected from "./ProtectedRouter";
import GoogleTagManager from './GoogleTagManager';
// router
import { Route, Routes } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import AdminUpload2 from "./components/Adminblog/AdminUpload2";
import { useEffect } from "react";
import { useState } from "react";
function App() {
  return (
    <>
      <GoogleTagManager />
      <HashRouter>
        <UserState>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/view" element={<View />} />
            <Route path="/institution" element={<InstitutesLandingPage />} />
            <Route path="/wallet" element={<NoWalletPage />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/:page" element={<Home />} />
            <Route path="/privacypolicy" element={<Privacypolicy />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bitwalletpage" element={<Body />} />
            <Route path="/approval/:orderId/:otp" element={<Approval />} />
            <Route path="/verify" element={<Verify />} />
            <Route
              path="/verify/:contractAddress/:tokenId"
              element={<VerifyWithDetails />}
            />
            <Route path="/dnft" element={<DNFTLandingPage />} />
            <Route path="/whitepapper" element={<Whitepaper />} />
            <Route path="/tokenomics" element={<Tokenomics />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/team" element={<Team />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/blogs" element={<Blogpage />} />
            <Route path="/blogs/:id" element={<Blog />} />
            <Route path="/blog/adminlogin" element={<Adminlogin />} />
            <Route
              path="/blog/adminUpload"
              element={
                <Protected>
                  <AdminUpload2 />
                </Protected>
              }
            />
            <Route path="/individualdnft" element={<IndividualLandingPage />} />
            <Route
              path="/blog/admin"
              element={
                <Protected>
                  <BlogpageAdmin />
                </Protected>
              }
            />
            <Route
              path="/editblog/:id"
              element={
                <Protected>
                  <EditBlog />
                </Protected>
              }
            />
            <Route path="/tryforfree" element={<TryForFree />} />
          </Routes>
          <Footer />
        </UserState>
      </HashRouter>
    </>
  );
}

export default App;
