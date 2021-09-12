import { useFetchUsers } from "./hooks/useFetchUsers";

export const App = () => {
  // カスタムフックの使用
  // 関数を実行し返却値を分割代入で受け取る
  const { userList, isLoading, isError, onClickFetchUser } = useFetchUsers();

  return (
    <div>
      <button onClick={onClickFetchUser}>ユーザー取得</button>
      {/* エラーの場合はエラーメッセージを表示 */}
      {isError && <p style={{ color: "red" }}>エラーが発生しました</p>}
      {/* ローディング中は表示を切り替える */}{" "}
      {isLoading ? (
        <p>データ取得中です</p>
      ) : (
        userList.map((user) => (
          <p key={user.id}>{`${user.id}:${user.name}(${user.age} 歳)`}</p>
        ))
      )}
    </div>
  );
};
