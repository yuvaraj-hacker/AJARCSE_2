import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../core/Main/Main";
import Homepage from "../components/Homepage";
import AimscopePage from "../components/AimscopePage";
import AboutusPage from "../components/AboutusPage";
import AuthorguidelinesPage from "../components/AuthorguidelinesPage";
// import CallforpaperPage from "../components/CallforpaperPage";
import ContactusPage from "../components/ContactusPage";
import CopyrightsPage from "../components/CopyrightsPage";
import EditorialboardPage from "../components/EditorialboardPage";
import IssuesPage from "../components/IssuesPage";
// import PayfeesPage from "../components/PayfeesPage";
import Abstracting from "../shared/journal-overview/Abstracting";
import ArticleProcess from "../shared/journal-overview/ArticleProcess";
// import JournalReport from "../shared/journal-overview/JournalReport";
import PeerReview from "../shared/journal-overview/PeerReview";
import PublicationEthic from "../shared/journal-overview/PublicationEthic";
// import AboutSpecial from "../shared/special-issues/AboutSpecial";
// import ProposeSpecial from "../shared/special-issues/ProposeSpecial";
// import PublishSpecial from "../shared/special-issues/PublishSpecial";
import ScrollToTop from "./ScrollToTop";

export default function Approuter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/peerreview" element={<PeerReview />} />
          <Route path="/publicationethic" element={<PublicationEthic />} />
          <Route path="/abstracting" element={<Abstracting />} />
          <Route path="/articleProcess" element={<ArticleProcess />} />
          <Route path="/contactus" element={<ContactusPage />} />
          <Route path="/aboutus" element={<AboutusPage />} />
          <Route path="/editorial-board" element={<EditorialboardPage />} />
          <Route path="/aim-nd-scope" element={<AimscopePage />} />
          <Route path="/issues" element={<IssuesPage />} />
          <Route path="/author-guidelines" element={<AuthorguidelinesPage />} />
          <Route path="/copyrights-form" element={<CopyrightsPage />} />
          {/* <Route path="/aim-nd-scope" element={<AimscopePage />} />
          <Route path="/aboutus" element={<AboutusPage />} />
          <Route path="/author-guidelines" element={<AuthorguidelinesPage />} />
          <Route path="/call-for-papers" element={<CallforpaperPage />} />
          <Route path="/contactus" element={<ContactusPage />} />
          <Route path="/copyrights-form" element={<CopyrightsPage />} />
          <Route path="/editorial-board" element={<EditorialboardPage />} />
          <Route path="/issues" element={<IssuesPage />} />
          <Route path="/pay-fees" element={<PayfeesPage />} />
          <Route path="/abstracting" element={<Abstracting />} />
          <Route path="/articleProcess" element={<ArticleProcess />} />
          <Route path="/journalreport" element={<JournalReport />} />
          <Route path="/peerreview" element={<PeerReview />} />
          <Route path="/publicationethic" element={<PublicationEthic />} />
          <Route path="/aboutspecial" element={<AboutSpecial />} />
          <Route path="/proposespecial" element={<ProposeSpecial />} />
          <Route path="/publishspecial" element={<PublishSpecial />} /> */}

        </Route>
      </Routes>

    </BrowserRouter>
  );
}
