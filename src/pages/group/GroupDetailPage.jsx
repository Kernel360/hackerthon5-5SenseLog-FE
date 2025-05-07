import { useParams } from "react-router-dom";
import { useState } from "react";

// 💡 임시 더미 데이터
const mockGroup = {
  id: 1,
  name: "위로 나누기 그룹",
  description: "서로 따뜻한 말 한마디를 공유해요.",
};

const mockDiaries = [
  {
    id: 1,
    author: "예주",
    content: "오늘 좀 지치긴 했지만 버틸만 했어.",
    tag: "감사",
    comfortMessage: "오늘도 고생했어요. 정말요. 💛",
    liked: false,
  },
  {
    id: 2,
    author: "우진",
    content: "모두가 날 싫어하는 것 같은 느낌이야...",
    tag: "우울",
    comfortMessage: "당신은 혼자가 아니에요.",
    liked: true,
  },
];

function GroupDetailPage() {
  const { id } = useParams();
  const [diaries, setDiaries] = useState(mockDiaries);

  const toggleLike = (diaryId) => {
    const updated = diaries.map((d) =>
      d.id === diaryId ? { ...d, liked: !d.liked } : d
    );
    setDiaries(updated);
  };

  const getTagColor = (tag) => {
    switch (tag) {
      case "기쁨":
        return "is-success";
      case "감사":
        return "is-warning";
      case "우울":
      case "불안":
        return "is-danger";
      default:
        return "is-info";
    }
  };

  // 🔧 버튼 클릭 핸들러 (임시)
  const handleLeaveGroup = () => {
    alert("그룹을 나갔습니다. (API 연동 필요)");
  };

  const handleInviteMember = () => {
    alert("초대 기능은 준비 중입니다. (모달 또는 링크)");
  };

  const handleViewMembers = () => {
    alert("그룹원 목록: 예주, 우진 등 (API 필요)");
  };

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: "800px" }}>
        <h1 className="title">{mockGroup.name}</h1>
        <p className="subtitle is-6 has-text-grey">{mockGroup.description}</p>

        {/* ✅ 그룹 기능 버튼들 */}
        <div className="buttons mt-3 is-right">
          <button
            className="button is-danger is-light"
            onClick={handleLeaveGroup}
          >
            그룹 나가기
          </button>
          <button
            className="button is-link is-light"
            onClick={handleInviteMember}
          >
            그룹원 초대
          </button>
          <button
            className="button is-info is-light"
            onClick={handleViewMembers}
          >
            그룹원 목록
          </button>
        </div>

        <hr />

        {/* 그룹 일기 목록 */}
        {diaries.map((diary) => (
          <div className="box mb-5" key={diary.id}>
            <p className="has-text-weight-semibold">{diary.author}의 일기</p>

            <blockquote className="is-italic mt-2 mb-2">
              "{diary.content}"
            </blockquote>

            <span className={`tag ${getTagColor(diary.tag)} is-light`}>
              {diary.tag}
            </span>

            <p className="has-text-grey mt-3 mb-2 is-size-7">
              AI 위로: "{diary.comfortMessage}"
            </p>

            <button
              className={`button is-small ${
                diary.liked ? "is-danger is-light" : "is-link is-outlined"
              }`}
              onClick={() => toggleLike(diary.id)}
            >
              {diary.liked ? "❤️ 좋아요 취소" : "🤍 좋아요"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GroupDetailPage;
