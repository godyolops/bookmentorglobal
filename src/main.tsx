import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import BookCallPage from "./components/BookCallPage.tsx";
import Layout from "./components/Layout.tsx";
import "./index.css";
import { EmailMarketing } from "./pages/EmailMarketing.tsx";
import { SixtySecondVideo } from "./pages/SixtySecondVideo.tsx";
import { SocialMediaManagement } from "./pages/SocialMediaManagement.tsx";
import { WebsiteDevelopment } from "./pages/WebsiteDevelopment.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/book-a-call" element={<BookCallPage />} />
          <Route path="/sixty-second-video" element={<SixtySecondVideo />} />
          <Route path="/website-development" element={<WebsiteDevelopment />} />
          <Route path="/email-marketing" element={<EmailMarketing />} />
          <Route
            path="/social-media-management"
            element={<SocialMediaManagement />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
