type Props={
  handleLoadMore:()=>void
}

export default function LoadMoreBut({ handleLoadMore }:Props):React.ReactElement {
  return (
    <div className="raw-for-load-more-but">
      <button className="load-more-but" onClick={handleLoadMore}>
        Load more
      </button>
    </div>
  );
}
