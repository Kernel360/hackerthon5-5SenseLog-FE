import { Link } from "react-router-dom";

// 💡 테스트용 더미 그룹 데이터
const mockGroups = [
  {
    id: 1,
    name: "위로 나누기 그룹",
    description: "서로 따뜻한 말 한마디를 공유해요.",
    members: 5,
  },
  {
    id: 2,
    name: "하루 한 문장",
    description: "매일 한 문장으로 감정을 기록해요.",
    members: 8,
  },
];

function GroupPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: "800px" }}>
        <div className="level">
          <div className="level-left">
            <h1 className="title">내 그룹 목록</h1>
          </div>
          <div className="level-right">
            <button className="button is-link">+ 그룹 생성</button>
          </div>
        </div>

        <div className="columns is-multiline">
          {mockGroups.map((group) => (
            <div className="column is-half" key={group.id}>
              <Link to={`/groups/${group.id}`}>
                <div className="card hoverable">
                  <header className="card-header">
                    <p className="card-header-title">{group.name}</p>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      {group.description}
                      <br />
                      <span className="tag is-info mt-2">
                        참여자 수: {group.members}명
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GroupPage;
