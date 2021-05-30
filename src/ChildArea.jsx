import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("ChildAreaがレンダリングされた");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });
  console.log(data);
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});

// アロー関数は毎回新しい関数を生成していると認識されてしまうため、propsとして毎回異なるものが渡されていると認識される。ChildAreaコンポーネントが更新される。
// 関数内の処理が変わらないばあいは同じものを使い回すように指定する必要がある。useCallback

// useCallbackの第2引数が[]のときは最初のみ読み込まれてあとは使い回される
