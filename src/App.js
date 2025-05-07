import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "../src/pages/auth/LoginPage";
import DiaryPage from "../src/pages/diary/DiaryPage";
import MyPage from "../src/pages/mypage/MyPage";
import DiaryDetailPage from "./pages/diary/DiaryDetailPage";
import GroupPage from "./pages/group/GroupPage";
import GroupDetailPage from "./pages/group/GroupDetailPage";
import Header from "./components/Header";

// 로그인 페이지에서는 헤더 숨김
function LayoutWithConditionalHeader({ children }) {
  const location = useLocation();
  const hideHeader = location.pathname === "/";

  return (
    <>
      {!hideHeader && <Header />}
      {children}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LayoutWithConditionalHeader>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/diary" element={<DiaryPage />} />
          <Route path="/diary/:id" element={<DiaryDetailPage />} />
          <Route path="/groups" element={<GroupPage />} />
          <Route path="/groups/:id" element={<GroupDetailPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </LayoutWithConditionalHeader>
    </BrowserRouter>
  );
}

export default App;
