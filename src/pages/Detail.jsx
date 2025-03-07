import { useNavigate, useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { fetchDetail } from "../customHook/todoHooks";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // TODO: 필수: useQuery 로 리팩터링 하세요.
  // TODO: 선택: useQuery 로 리팩터링 후, useTodoQuery 커스텀훅으로 정리해 보세요.

  const {
    data: todoDetail,
    isPengind,
    isError,
  } = useQuery({
    queryKey: ["todoDetail"],
    queryFn: () => fetchDetail(id),
  });

  if (isPengind) return <div style={{ fontSize: 36 }}>로딩중...</div>;
  if (isError) {
    return <div style={{ fontSize: 24 }}>에러가 발생했습니다</div>;
  }

  console.log(todoDetail);
  return (
    <div>
      <button onClick={() => navigate("/")}>홈으로 이동</button>
      <p>제목: {todoDetail.title}</p>
      <p>내용: {todoDetail.contents}</p>
      <p>작성일자: {new Date(todoDetail.createdAt).toDateString()}</p>
    </div>
  );
}
